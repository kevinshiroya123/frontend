import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [heroData, setHeroData] = useState({
    image: "",
    imageFilename: "",
    name: "",
    title: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
    welcomeTitle: "",
    welcomeText: "",
    aboutMe: "",
    portfolio: "",
    portfolioFilename: "",
  });

  // Fetch data on component load
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/hero`)
      .then((response) => {
        if (response.data) setHeroData(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/hero/update`, heroData)
      .then(() => {
        alert('Data updated successfully');
      })
      .catch((error) => console.error('Error updating data:', error));
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('socialLinks')) {
      const linkName = name.split('.')[1];
      setHeroData((prev) => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [linkName]: value },
      }));
    } else {
      setHeroData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle file uploads
  const handleFileUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/hero/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const filePath = response.data.filePath;

      if (field === 'image') {
        setHeroData((prev) => ({
          ...prev,
          image: filePath,
          imageFilename: file.name,
        }));
      } else if (field === 'portfolio') {
        setHeroData((prev) => ({
          ...prev,
          portfolio: filePath,
          portfolioFilename: file.name,
        }));
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="dashboard">
      <h2>Modify Home Section</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Profile Image:
          <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'image')} />
          {heroData.imageFilename && (
            <>
              <p>Uploaded Image: {heroData.imageFilename}</p>
              <img
                src={`${process.env.REACT_APP_API_URL}/uploads/${heroData.image}`}
                alt="Preview"
                className="image-preview"
              />
            </>
          )}
        </label>
        <label>
          Name:
          <input type="text" name="name" value={heroData.name} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={heroData.title} onChange={handleChange} />
        </label>
        <label>
          Welcome Title:
          <input type="text" name="welcomeTitle" value={heroData.welcomeTitle} onChange={handleChange} />
        </label>
        <label>
          Welcome Text:
          <input type="text" name="welcomeText" value={heroData.welcomeText} onChange={handleChange} />
        </label>
        <label>
          About Me:
          <textarea name="aboutMe" value={heroData.aboutMe} onChange={handleChange} />
        </label>
        <label>
          Portfolio (PDF):
          <input type="file" accept="application/pdf" onChange={(e) => handleFileUpload(e, 'portfolio')} />
          {heroData.portfolioFilename && (
            <>
              <p>Uploaded Portfolio: {heroData.portfolioFilename}</p>
              <a
                href={`${process.env.REACT_APP_API_URL}/uploads/${heroData.portfolio}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview Portfolio
              </a>
            </>
          )}
        </label>
        <h3>Social Links</h3>
        <label>
          Facebook:
          <input type="text" name="socialLinks.facebook" value={heroData.socialLinks.facebook} onChange={handleChange} />
        </label>
        <label>
          Twitter:
          <input type="text" name="socialLinks.twitter" value={heroData.socialLinks.twitter} onChange={handleChange} />
        </label>
        <label>
          LinkedIn:
          <input type="text" name="socialLinks.linkedin" value={heroData.socialLinks.linkedin} onChange={handleChange} />
        </label>
        <label>
          Instagram:
          <input type="text" name="socialLinks.instagram" value={heroData.socialLinks.instagram} onChange={handleChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/SetupOrganisation.css";

const SetupOrganisation = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access current location (route)
  const [companyName, setCompanyName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [webpages, setWebpages] = useState([]);
  const [trainingComplete, setTrainingComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    const savedURL = localStorage.getItem("websiteURL");
    if (savedURL) {
      setWebsiteURL(savedURL);
    }
  }, []);

  const handleFetchMetaDescription = async () => {
    if (!websiteURL) {
      setErrorMessage("Please enter a valid website URL first.");
      return;
    }

    setCompanyDescription("This is a sample meta description fetched from the website.");
    handleStartScraping(); // Automatically start scraping after fetching description
  };

  const handleStartScraping = () => {
    setWebpages([
      { url: `${websiteURL}/home`, status: "Scraped", chunks: ["Welcome text", "Product list"] },
      { url: `${websiteURL}/about`, status: "Pending", chunks: [] },
      { url: `${websiteURL}/contact`, status: "Scraped", chunks: ["Contact form", "Company Address"] },
    ]);

    // Simulate training completion
    setTimeout(() => {
      setTrainingComplete(true); // Enable the button after timeout
    }, 2000);
  };

  const handleProceedToIntegration = () => {
    if (!websiteURL.startsWith("http")) {
      setErrorMessage("Please enter a valid URL including https://");
      return;
    }

    localStorage.setItem("websiteURL", websiteURL);
    navigate("/chatbot-integration");
  };

  // Check if the current route is the dummy site
  const isDummySite = location.pathname === "/dummy-site"; // You can change this path to your dummy site route

  return (
    <div className="setup-container">
      {/* Conditionally render Navbar only for the dummy site */}
      {isDummySite && (
        <nav className="navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            {/* Other Navbar items */}
          </ul>
        </nav>
      )}

      <h2>Setup Organisation</h2>
      <form>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Website URL"
          value={websiteURL.startsWith("http://") ? websiteURL : "http://" + websiteURL}
          onChange={(e) => {
            // Ensure the website starts with "http://"
            const value = e.target.value;
            if (!value.startsWith("http://")) {
              setWebsiteURL(value);
            } else {
              setWebsiteURL(value);
            }
          }}
        />
        <button type="button" onClick={handleFetchMetaDescription}>
          Auto-Fetch Description
        </button>
        <textarea
          placeholder="Company Description"
          value={companyDescription}
          onChange={(e) => setCompanyDescription(e.target.value)}
        />
      </form>

      {webpages.length > 0 && (
        <>
          <h3>Detected Webpages</h3>
          <ul>
            {webpages.map((page, index) => (
              <li key={index}>
                <span onClick={() => setSelectedPage(page)} className="clickable">
                  {page.url}
                </span>{" "}
                - <b>{page.status}</b>
              </li>
            ))}
          </ul>
        </>
      )}

      {selectedPage && (
        <div className="scraped-content">
          <h3>Scraped Data from {selectedPage.url}</h3>
          {selectedPage.chunks.length > 0 ? (
            <ul>
              {selectedPage.chunks.map((chunk, idx) => (
                <li key={idx}>{chunk}</li>
              ))}
            </ul>
          ) : (
            <p>No data scraped yet.</p>
          )}
        </div>
      )}

      {errorMessage && <div className="error-ui">{errorMessage}</div>}

      {/* Button will be enabled only after training is complete */}
      <button onClick={handleProceedToIntegration} disabled={!trainingComplete}>
        {trainingComplete ? "Training Complete! Proceeding..." : "Proceed to Chatbot Integration"}
      </button>

      {/* Conditionally render the Chatbot Integration button only in the dummy site */}
      {isDummySite && trainingComplete && (
        <div className="chatbot-integration-button">
          <button onClick={handleProceedToIntegration}>Proceed to Chatbot Integration</button>
        </div>
      )}
    </div>
  );
};

export default SetupOrganisation;

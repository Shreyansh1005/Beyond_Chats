import React, { useEffect, useState } from "react";
import "../styles/CompanyWebsite.css"; // Import a CSS file for styling
import Confetti from "react-confetti"; // For confetti effect

const CompanyWebsite = () => {
  const [websiteURL, setWebsiteURL] = useState("");
  const [showConfetti, setShowConfetti] = useState(true); // Start confetti initially
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedURL = localStorage.getItem("websiteURL");
    if (storedURL) {
      setWebsiteURL(storedURL);
    }

    console.log("We are opening a dummy website for testing purposes.");

    // Inject chatbot script dynamically
    const script = document.createElement("script");
    script.src = "//code.tidio.co/ol0qkcqteoiuyoj2cxllst8kprulla0q.js";
    script.async = true;
    document.head.appendChild(script);

    // Stop confetti after 5 seconds
    const confettiTimeout = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    // Cleanup
    return () => {
      document.head.removeChild(script);
      clearTimeout(confettiTimeout); // Clear timeout when unmounting
    };
  }, []);

  return (
    <div className="company-website-container">
      {showConfetti && <Confetti />} {/* Show confetti only if true */}
      <h2>Company Website: {websiteURL}</h2>
      <p>The chatbot should now be active on this page.</p>

      <div className="dummy-website-message">
        <p>Note: This is a dummy website for testing purposes.</p>
      </div>

      {/* Chatbot Interface */}
      <div className={`chatbot-container ${isOpen ? "open" : "closed"}`}>
        {!isOpen && (
          <div className="chatbot-icon" onClick={() => setIsOpen(true)}>
            💬
          </div>
        )}

        {isOpen && (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <h3>Chatbot Assistant</h3>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                ✖
              </button>
            </div>
            <div className="chatbot-messages">
              <p>Chatbot will appear here.</p>
            </div>
            <div className="chatbot-input">
              <input type="text" placeholder="Type your message..." />
              <button>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyWebsite;

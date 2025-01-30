import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "../styles/ChatbotIntegration.css";

const ChatbotIntegration = () => {
  const [websiteURL, setWebsiteURL] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);
  const [integrationStatus, setIntegrationStatus] = useState(null); // null, "success", or "failure"
  const [showTopbar, setShowTopbar] = useState(false); // State for showing the topbar
  const [visitedDummySite, setVisitedDummySite] = useState(false); // State to track if user visited the dummy site
  const [showSuccessUI, setShowSuccessUI] = useState(false); // State to track if "Show Integration Success" button was clicked
  const navigate = useNavigate(); // Initialize useNavigate

  // Load previous state from localStorage
  useEffect(() => {
    const storedURL = localStorage.getItem("websiteURL");
    const storedStatus = localStorage.getItem("integrationStatus");
    const storedVisited = localStorage.getItem("visitedDummySite");

    if (storedURL) {
      setWebsiteURL(storedURL);
    }
    if (storedStatus) {
      setIntegrationStatus(storedStatus);
    }
    if (storedVisited === "true") {
      setVisitedDummySite(true);
    }
  }, []);

  // Simulate testing the integration
  const handleTestIntegration = () => {
    setShowTopbar(true);

    // Simulate a delay for testing
    setTimeout(() => {
      const isIntegrationSuccessful = Math.random() > 0.3; // Randomly simulate success or failure
      if (isIntegrationSuccessful) {
        setIntegrationStatus("success");
        localStorage.setItem("integrationStatus", "success"); // Store success status in localStorage
        if (!websiteURL.startsWith("http")) {
          alert("Please enter a valid website URL with https://");
          return;
        }
        // Redirect to the dummy company website
        localStorage.setItem("visitedDummySite", "true"); // Mark that the user visited the dummy site
        navigate("/company-website");
      } else {
        setIntegrationStatus("failure");
        localStorage.setItem("integrationStatus", "failure"); // Store failure status in localStorage
      }
    }, 2000); // Simulate a 2-second delay
  };

  // Show Success UI when the third button is clicked
  const handleShowSuccessUI = () => {
    setShowSuccessUI(true); // Set to true when the button is clicked
  };

  // Reset integration status
  const resetIntegrationStatus = () => {
    setIntegrationStatus(null);
    setShowTopbar(false); // Hide topbar on reset
    setVisitedDummySite(false); // Reset visited state
    setShowSuccessUI(false); // Reset the success UI visibility
    localStorage.removeItem("integrationStatus"); // Remove status from localStorage
    localStorage.removeItem("visitedDummySite"); // Remove visited state from localStorage
  };

  return (
    <div className="chatbot-integration-container">
      {/* Topbar for feedback */}
      {showTopbar && (
        <div className="topbar">
          <p style={{color:"black"}}>Chatbot not working as intended? <a href="#">Share feedback</a></p>
        </div>
      )}

      <h2>Chatbot Integration & Testing</h2>

      {/* Animated Input for website URL */}
      <motion.div
        className="input-group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          value={websiteURL}
          onChange={(e) => setWebsiteURL(e.target.value)}
          placeholder="Enter company website URL"
        />
      </motion.div>

      {/* Animated Buttons for testing and integration */}
      <motion.div
        className="button-group"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <button className="test-chatbot-btn" onClick={handleTestIntegration}>
          Test Integration
        </button>
        <button
          className="integrate-chatbot-btn"
          onClick={() => setShowInstructions(true)}
        >
          Integrate on Your Website
        </button>

        {/* Third Button - Visible only after visiting the dummy site */}
        {visitedDummySite && (
          <button
            className="show-success-ui-btn"
            onClick={handleShowSuccessUI}
          >
           Test Integration
          </button>
        )}
      </motion.div>

      {/* Integration Instructions with animation */}
      {showInstructions && (
        <motion.div
          className={`integration-instructions ${showInstructions ? 'show' : ''}`}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <h3>How to Integrate the Chatbot</h3>
          <p>
            Copy and paste the following script inside the{' '}
            <code>&lt;head&gt;</code> tag of your website:
          </p>
          <pre>{`<script src="https://code.tidio.co/ol0qkcqteoiuyoj2cxllst8kprulla0q.js" async></script>`}</pre>
          <button
            className="send-email-btn"
            onClick={() => alert('Integration instructions sent!')}
          >
            Send Instructions to Developer
          </button>
        </motion.div>
      )}

      {/* Success UI with animation, shown only after visiting dummy site and clicking the button */}
      {visitedDummySite && showSuccessUI && integrationStatus === "success" && (
        <motion.div
          className="success-ui"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>🎉 Integration Successful!</h3>
          <p>Your chatbot has been successfully integrated with your website.</p>
          <motion.div
            className="success-buttons"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <button
              className="explore-admin-btn"
              onClick={() => alert("Redirecting to Admin Panel...")}
            >
              Explore Admin Panel
            </button>
            <button
              className="start-chat-btn"
              onClick={() => alert("Starting chatbot conversation...")}
            >
              Start Talking to Your Chatbot
            </button>
          </motion.div>
          <motion.div
            className="social-sharing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p>Share the good news:</p>
            <button onClick={() => alert("Shared on Facebook!")}>Facebook</button>
            <button onClick={() => alert("Shared on Twitter!")}>Twitter</button>
            <button onClick={() => alert("Shared on LinkedIn!")}>LinkedIn</button>
          </motion.div>
          <motion.button
            className="reset-btn"
            onClick={resetIntegrationStatus}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Test Again
          </motion.button>
        </motion.div>
      )}

      {/* Failure UI with animation */}
      {integrationStatus === "failure" && (
        <motion.div
          className="failure-ui"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>❌ Integration Not Detected</h3>
          <p>We couldn't detect the chatbot integration on your website. Please ensure the script is correctly added to your website's <code>&lt;head&gt;</code> tag.</p>
          <motion.button
            className="reset-btn"
            onClick={resetIntegrationStatus}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Try Again
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ChatbotIntegration;

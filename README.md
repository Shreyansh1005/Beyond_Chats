# BeyondChats

BeyondChats is an AI-powered chatbot integration platform that allows users to integrate chatbots into their websites, test them, and manage chatbot interactions efficiently.

## 🚀 Features
- Register and set up your organization.
- Auto-fetch metadata from websites.
- Scrape and train chatbot with website data.
- Test chatbot integration.
- Deploy chatbot on a dummy website.
- Responsive UI with smooth animations.
- GitHub Pages & Vercel Deployment.

---

## 📂 Project Structure
```
Beyond_Chats/
│── public/          # Static assets
│── src/             # Source code
│   ├── components/  # React components
│   ├── pages/       # Application pages
│   ├── styles/      # CSS files
│   ├── hooks/       # Custom hooks
│   ├── App.js       # Main App component
│   ├── index.js     # Entry point
│── package.json     # Dependencies and scripts
│── README.md        # Documentation
│── .gitignore       # Git ignored files
```

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/shreyansh1005/Beyond_Chats.git
cd Beyond_Chats
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Run the Development Server**
```bash
npm start
```
- The app will be available at `http://localhost:3000/`

---

## 🌍 Deployment

### **GitHub Pages Deployment**

### **1️⃣ Install GitHub Pages Package**
```bash
npm install gh-pages --save-dev
```

### **2️⃣ Update `package.json`**
Add the following line in `package.json`:
```json
"homepage": "https://shreyansh1005.github.io/Beyond_Chats/"
```
Modify scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### **3️⃣ Deploy the Project**
```bash
npm run deploy
```

---

### **Vercel Deployment**

### **1️⃣ Install Vercel CLI**
```bash
npm install -g vercel
```

### **2️⃣ Login to Vercel**
```bash
vercel login
```

### **3️⃣ Deploy the Project**
```bash
vercel
```
Follow the CLI prompts to configure and deploy your project.
Your project will be live at: https://beyondchats-five.vercel.app

---

## 🔧 Troubleshooting

### **❌ Page Not Found Error**
- Ensure `homepage` is correctly set in `package.json`.
- Use `BrowserRouter` with `basename="/Beyond_Chats"` in `index.js`.

### **❌ Styles Not Loading Properly**
- Make sure CSS files are correctly linked in components.
- Clear cache and refresh the browser.

### **❌ Integration Instructions Overlapping UI**
- Ensure media queries properly adjust `.integration-instructions`.

---

## 💡 Usage Guide
### **1️⃣ Register & Setup**
- Navigate to `/register` to create an account.
- Enter company name, website URL, and fetch metadata.

### **2️⃣ Scrape & Train Chatbot**
- Detected webpages will be listed with scraped content.
- Click `Proceed to Integration` after training.

### **3️⃣ Test Chatbot**
- Click `Test Integration` to check chatbot functionality.
- Visit dummy website for live testing.

### **4️⃣ Deploy Chatbot**
- Copy integration script and add it inside `<head>` tag.
- Confirm successful integration.

### **5️⃣ Explore the Website**
- Visit https://beyondchats-five.vercel.app
- Start with the Register page.
- Follow the steps to integrate and test your chatbot.
- Use the dummy website to validate chatbot functionality.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## ✨ Contributors
- **Shreyansh Dubey** - Developer

📩 For any issues, feel free to open an [issue](https://github.com/shreyansh1005/Beyond_Chats/issues) on GitHub.


/*import React, { useState } from "react";
import "./App.css";


function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <div>Welcome to Lucky Software Solutions!</div>;
      case "about":
        return <div>About Us: We deliver quality software solutions.</div>;
      case "contact":
        return <div>Contact Us: Reach us at luckysoftwaresolutions.site</div>;
      case "privacy":
        return <div>Privacy Policy: We respect your privacy.</div>;
      default:
        return <div>Welcome to Lucky Software Solutions!</div>;
    }
  };

  return (
    <div className="app">
    
      <header className="header">
        <div className="logo-section">
          <img
            className="logo-img"
            src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1737991932/android-chrome-192x192_qucq2j.png"
            alt="Logo"
          />
          <span className="logo">luckysoftwaresolutions.site</span>
        </div>
        <nav className="nav">
          <button onClick={() => handleSectionChange("home")}>Home</button>
          <button onClick={() => handleSectionChange("about")}>About Us</button>
          <button onClick={() => handleSectionChange("contact")}>
            Contact Us
          </button>
          <button onClick={() => handleSectionChange("privacy")}>
            Privacy Policy
          </button>
        </nav>
        <div className="header-icons">
          <a href="tel:+1234567890">📞</a>
          <a href="mailto:info@luckysoftwaresolutions.site">✉️</a>
          <a href="sms:+1234567890">💬</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">📱</a>
          <a
            href="https://www.google.com/maps?q=Lucky+Software+Solutions"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍
          </a>
        </div>
      </header>

      
      <section className="scroll-section">
        <div className="scroll-content">
          <p>This text scrolls from left to right continuously.</p>
        </div>
      </section>

      
      <main className="content">
        {renderContent()}
        <div className="home-button">
          <button onClick={() => handleSectionChange("home")}>Home</button>
        </div>
      </main>
  
  

      
      <footer className="footer">
        <p>© 2025 All rights reserved.</p>
        <a href="#privacy">Privacy Policy</a>
        <a href="#disclaimer">Disclaimer</a>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="content-box">Welcome to <strong className="highlight">Lucky Software Solutions</strong>! Your trusted partner for software development.</motion.div>;
      case "services":
        return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="content-box">🚀 Our <strong className="highlight">Services</strong>: Web Development, Mobile Apps, Custom Software, and More.</motion.div>;
      case "about":
        return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="content-box">🔍 <strong>About Us</strong>: We deliver quality software solutions tailored to your needs.</motion.div>;
      case "contact":
        return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="content-box">📞 <strong>Contact Us</strong>: Reach us at <a href="mailto:info@luckysoftwaresolutions.site" className="highlight-link">info@luckysoftwaresolutions.site</a> or call <strong>+1234567890</strong>.</motion.div>;
      case "privacy":
        return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="content-box">🔐 <strong>Privacy Policy</strong>: We respect your privacy and data security.</motion.div>;
      default:
        return <div className="content-box">Welcome to Lucky Software Solutions!</div>;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <motion.div className="logo-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img
            className="logo-img"
            src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1737991932/android-chrome-192x192_qucq2j.png"
            alt="Logo"
          />
          <span className="logo">luckysoftwaresolutions.site</span>
        </motion.div>
        <nav className="nav">
          <button onClick={() => handleSectionChange("home")}>🏠 Home</button>
          <button onClick={() => handleSectionChange("services")}>💼 Services</button>
          <button onClick={() => handleSectionChange("about")}>ℹ️ About Us</button>
          <button onClick={() => handleSectionChange("contact")}>📧 Contact Us</button>
          <button onClick={() => handleSectionChange("privacy")}>🔐 Privacy Policy</button>
        </nav>
      </header>
      
      <section className="scroll-section">
        <marquee className="scroll-content">🔥 Your one-stop solution for all software needs! Contact us today! 🔥</marquee>
      </section>
      
      <main className="content">
        {renderContent()}
        <div className="home-button">
          <button onClick={() => handleSectionChange("home")}>🏠 Back to Home</button>
        </div>
      </main>
      
      <footer className="footer">
        <p>© 2025 <span className="highlight">Lucky Software Solutions</span>. All rights reserved.</p>
        <a href="#privacy" className="footer-link">Privacy Policy</a>
        <a href="#disclaimer" className="footer-link">Disclaimer</a>
      </footer>
    </div>
  );
}

export default App;*/



import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <header className="header">
        <motion.div className="logo-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img
            className="logo-img"
            src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1737991932/android-chrome-192x192_qucq2j.png"
            alt="Logo"
          />
          <span className="logo">luckysoftwaresolutions.site</span>
        </motion.div>
        <nav className="nav">
          <button onClick={() => handleSectionChange("home")}>🏠 Home</button>
          <button onClick={() => handleSectionChange("services")}>💼 Services</button>
          <button onClick={() => handleSectionChange("about")}>ℹ️ About Us</button>
          <button onClick={() => handleSectionChange("contact")}>📧 Contact Us</button>
          <button onClick={() => handleSectionChange("privacy")}>🔐 Privacy Policy</button>
        </nav>
      </header>
      
      <section className="scroll-section">
        <marquee className="scroll-content">🔥 Your one-stop solution for all software needs! Contact us today! 🔥</marquee>
      </section>
      
      <main className="content">
      
        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754912/images_yhy7m1.jpg" alt="Main Image" className="main-image" />
        <h1 className="main-title">Kirana and Grocery websites</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754912/maxresdefault_znx604.jpg" alt="Main Image" className="main-image" />
        <h1 className="main-title">Hotel website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754904/Fotolia_104752853_S_oem3bl.jpg" alt="Main Image" className="main-image" />
        <h1 className="main-title">News website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754904/flipmart_taxznj.webp" alt="Main Image" className="main-image" />
        <h1 className="main-title">ECommerce website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754902/download_uqc4h3.jpg" alt="Main Image" className="main-image" />
        <h1 className="main-title">Textails website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754904/images_1_dbkyjp.jpg" alt="Main Image" className="main-image" />
        <h1 className="main-title">Wholesale kirana website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754898/Be-school-2_ozeggv.png" alt="Main Image" className="main-image" />
        <h1 className="main-title">Education website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754902/bf1e68214791583.Y3JvcCwzMDY4LDI0MDAsNjgsMA_mrjep6.jpg" alt="Main Image" className="main-image" />
        <h1 className="main-title">Personal portfolio website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754896/33ae2f27174299.56360dacc60a9_dhdq9r.png" alt="Main Image" className="main-image" />
        <h1 className="main-title">Travel website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754896/a6b47e890a0a2b707c95fd4fcb092a29_zzpwgg.jpg" alt="Main Image" className="main-image" />
        <h1 className="main-title">Agro products website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754894/1629791604598_kz39kz.png" alt="Main Image" className="main-image" />
        <h1 className="main-title">Business website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754893/8a8386216335239.Y3JvcCwxMDQ0LDgxNywxNzgsMA_hutnzb.png" alt="Main Image" className="main-image" />
        <h1 className="main-title">Food website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754892/3_1_mwu4fk.webp" alt="Main Image" className="main-image" />
        <h1 className="main-title">Wedding website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754752/Online-Jewellery-Store-in-India-Wear-Your-Shine_eaoyep.jpg" alt="Main Image" className="main-image" />
        <h1 className="main-title">Juwellary website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754911/images_3_l0jnrq.jpg" alt="Main Image" className="main-image" />
        <h1 className="main-title">freelancing website</h1>

        <img src="https://res.cloudinary.com/dj0u6aez5/image/upload/v1740754911/images_2_ars1zn.jpg" alt="Main Image" className="main-image" />
        <h1 className="main-title">Other websites</h1>
      </main>
      
      <footer className="footer">
        <p>© 2025 <span className="highlight">Lucky Software Solutions</span>. All rights reserved.</p>
        <a href="#privacy" className="footer-link">Privacy Policy</a>
        <a href="#disclaimer" className="footer-link">Disclaimer</a>
      </footer>
    </div>
  );
}

export default App;

 
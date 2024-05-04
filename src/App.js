import React, { useEffect } from 'react';
import Introduction from './intro';
import './App.css';
import logoimg from './th (3).jpeg';
import ProjectSection from './projects';
import BlogSection from './blogs';
import NewsletterSection from './newsletter';
import Footer from './footer';
import './mobile.css';

function App() {
    useEffect(() => {
        
        if (window.innerWidth <= 768) {
            import('./mobile.css')
                .then((module) => {
                   
                })
                .catch((error) => {
                    console.error('Error loading mobile.css:', error);
                });
        }
    }, []); 

    return (
        <div className="App">
            <nav className="navbar">
                <div className="left-links">
                    <a href="#">Home 🏠</a>
                    <a href="/blogs">Blogs 📝</a>
                    <a href="https://github.com/onel1234">GitHub 💻</a>
                    <a href="/twitter">Twitter 🐦</a>
                </div>
                <div className="right-logo">
                    <img src={logoimg} alt="Business Logo" />
                </div>
            </nav>
            <Introduction />
            <ProjectSection />
            <BlogSection />
            <NewsletterSection />
            <Footer />
        </div>
    );
}

export default App;

import React from 'react';
import styles from './Navbar.module.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = (e) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // Already on home page, just scroll
      const about = document.getElementById('about');
      if (about) about.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page, then scroll after navigation completes
      navigate('/', { state: { scrollToAbout: true } });
    }
  };

  return (
    <div className={styles.navbar}>
      <ul>
        <li><a href="#about" onClick={handleAboutClick}>about</a></li>
        <li><NavLink to="/projects" activeClassName={styles.active}>projects</NavLink></li>
        <li><a href="#contact">contact</a></li>
        <li><a href="/MeganBender_TechResume_05.29.2025.pdf" download>resume</a></li>
      </ul>
    </div>
  );
};
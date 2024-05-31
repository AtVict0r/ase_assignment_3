import React from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = React.useState('Home');

  return (
    <nav style={{ backgroundColor: '#EEE', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        {['Home', 'Schedule Tests', 'Contact'].map((link) => (
          <li key={link} onClick={() => setActiveLink(link)} style={{ fontWeight: activeLink === link ? 'bold' : 'normal' }}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
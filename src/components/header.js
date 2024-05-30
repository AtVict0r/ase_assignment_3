import React from 'react';

const Header = ({ userAge }) => {
  const legalDrivingAge = 16; // Assuming the legal driving age is 16
  const yearsUntilLegal = legalDrivingAge - userAge;
  const currentTime = new Date();
  const greeting = currentTime.getHours() < 12 ? 'Good Morning' : currentTime.getHours() < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <header style={{ backgroundColor: 'green', color: 'yellow', textAlign: 'center', padding: '10px' }}>
      <h1>{greeting}, {userAge >= legalDrivingAge ? "let's get started!" : `come back in ${yearsUntilLegal} years.`}</h1>
    </header>
  );
};

export default Header;
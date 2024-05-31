import React from 'react';

const Header = ({ userName, userAge }) => {
  const legalDrivingAge = 16; // Assuming the legal driving age is 16
  const canDrive = userAge >= legalDrivingAge;
  const yearsUntilLegal = legalDrivingAge - userAge;
  const currentTime = new Date();
  const timeOfDay = currentTime.getHours() < 12 ? 'Good Morning' : currentTime.getHours() < 18 ? 'Good Afternoon' : 'Good Evening';
  const greeting = timeOfDay + ', ' + userName;
  console.log(userAge);

  return (
    <header style={{ backgroundColor: 'green', color: 'yellow', textAlign: 'center', padding: '10px' }}>
      <h1>{greeting} <br/> {canDrive ? "Let's get started!" : `Come back in ${yearsUntilLegal} years.`}</h1>
    </header>
  );
};

export default Header;
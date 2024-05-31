import React from 'react';
import staff1 from '../assets/images/staff1.png'; // Import image for staff member 1
import staff2 from '../assets/images/staff2.png'; // Import image for staff member 2 
import staff3 from '../assets/images/staff3.png'; // Import image for staff member 3
import staff4 from '../assets/images/staff4.png'; // Import image for staff member 4
import staff5 from '../assets/images/staff5.png'; // Import image for staff member 5


const contentBlocks = [
  {
    title: 'Welcome to the DMV!',
    description:
      "The Department of Motor Vehicles (DMV) provides essential services to our community, including driver's license issuance, vehicle registration, and more. We're committed to making your experience at the DMV as smooth and efficient as possible.",
    image: require('../assets/images/welcome.png'), // Import image for welcome block
  },
  {
    title: 'Renewing Your Driver\'s License',
    description:
      "Renewing your driver's license is a quick and easy process. You can typically renew online or in person at any DMV location. Be sure to check our website for current requirements and fees.",
    image: require('../assets/images/drivers-license.png'), // Import image for driver's license block
  },
  {
    title: 'Vehicle Registration',
    description:
      "Registering your vehicle is essential for legal operation on public roads. You can register your vehicle online or in person at the DMV. Don't forget to bring your proof of ownership, insurance, and any required fees.",
    image: require('../assets/images/car-registration.png'), // Import image for vehicle registration block
  },
];

const Main = () => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        {contentBlocks.map((block, index) => (
          <div key={index} style={{ flex: 1, margin: '0 10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <img src={block.image} alt={block.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{block.title}</h3>
            <p>{block.description}</p>
          </div>
        ))}
      </section>

      <h2 style={{ textDecoration: 'underline', textAlign: 'center' }}>Staff Schedule</h2>
      <table style={{ width: '100%', marginTop: '10px' }}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Day</th>
            <th>Time</th>
            <th>DMV Staff</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          <tr>
            <td>Nov</td>
            <td>17</td>
            <td>5:00PM</td>
            <td>Peter</td>
            <td><img src={staff1} alt="Peter" width="50" height="50" style={{ borderRadius: '50%' }} /></td>
          </tr>
          <tr>
            <td>Nov</td>
            <td>18</td>
            <td>9:00AM</td>
            <td>Lucas</td>
            <td><img src={staff2} alt="Lucas" width="50" height="50" style={{ borderRadius: '50%' }} /></td>
          </tr>
          <tr>
            <td>Nov</td>
            <td>19</td>
            <td>10:00AM</td>
            <td>Sarah</td>
            <td><img src={staff3} alt="Sarah" width="50" height="50" style={{ borderRadius: '50%' }} /></td>
          </tr>
          <tr>
            <td>Nov</td>
            <td>20</td>
            <td>1:00PM</td>
            <td>Omar</td>
            <td><img src={staff4} alt="Omar" width="50" height="50" style={{ borderRadius: '50%' }} /></td>
          </tr>
          <tr>
            <td>Nov</td>
            <td>21</td>
            <td>3:00PM</td>
            <td>Emily</td>
            <td><img src={staff5} alt="Emily" width="50" height="50" style={{ borderRadius: '50%' }} /></td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Main;
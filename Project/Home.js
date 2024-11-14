import React from 'react';
import { FaHome,FaPhone,FaMapMarkerAlt, FaInfoCircle,FaBaby, FaSyringe, FaStethoscope,FaSignOutAlt, FaUserMd, FaEnvelope, FaHospitalAlt, FaHeartbeat, FaUserNurse, FaAmbulance } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './style.css';

const HospitalManagementSystem = () => {
  const navigate = useNavigate(); // Create navigate function

  // Function to handle logout click
  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens, etc.)
    navigate('/'); // Navigate to the root route
  };
  return (
    <div className="app-container">
      <div className="top-nav">
        <h1>LIFE BRIDGE HEALTHCARE</h1>
        <ul className="nav-list">
          <li>
            <FaHome className="icon" />
            <span>Home</span>
          </li>
          <li>
            <FaInfoCircle className="icon" />
            <span>About Us</span>
          </li>
          <li>
            <FaStethoscope className="icon" />
            <span>Specialities</span>
          </li>
          <li>
            <FaUserMd className="icon" />
            <span>Doctors</span>
          </li>
          <li>
            <FaEnvelope className="icon" />
            <span>Contact</span>
          </li>
          <li onClick={handleLogout} style={{ cursor: 'pointer' }}> {/* Add onClick handler */}
            <FaSignOutAlt className="icon" /> {/* Logout Icon */}
            <span>Logout</span>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1> LIFE BRIDGE HEALTHCARE</h1>
          <p>Your health, our priority.</p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          At Leo Hospital, we are committed to providing our patients with the highest quality of care in a warm and welcoming environment. 
          Our mission is to improve health and well-being through exceptional healthcare services tailored to individual needs.
        </p>
        <p>
          With a team of dedicated professionals, we prioritize compassion and innovation in every aspect of our service. 
          We believe in giving back to the community and actively support local health initiatives.
        </p>
      </div>

      {/* Vision and Mission Section */}
      <div className="vision-mission">
        <h2>Our Vision</h2>
        <p>
          To be a leading healthcare provider recognized for excellence in patient care, innovative practices, and community service.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          To deliver comprehensive and compassionate healthcare services that enhance the quality of life for our patients and their families.
          We strive to create a culture of safety, respect, and collaboration, ensuring that every patient receives personalized care.
        </p>
      </div>

      {/* Our Specialities Section */}
      <div className="our-specialities">
        <h2>Our Specialities</h2>
        <div className="specialities-container">
          <div className="speciality-card">
            <FaHospitalAlt className="card-icon" />
            <h3>Orthopaedic</h3>
          </div>
          <div className="speciality-card">
            <FaHeartbeat className="card-icon" />
            <h3>Plastic Surgery</h3>
          </div>
          <div className="speciality-card">
            <FaSyringe className="card-icon" />
            <h3>Anaesthesia</h3>
          </div>
          <div className="speciality-card">
            <FaUserNurse className="card-icon" />
            <h3>Neuro Surgery</h3>
          </div>
          <div className="speciality-card">
            <FaBaby className="card-icon" />
            <h3>Radiology</h3>
          </div>
          <div className="speciality-card">
            <FaAmbulance className="card-icon" />
            <h3>Cancer & Oncology</h3>
          </div>
          <div className="speciality-card">
            <FaAmbulance className="card-icon" />
            <h3>Deabetic Foot & Chronic Wounds</h3>
          </div>
          <div className="speciality-card">
            <FaAmbulance className="card-icon" />
            <h3>Critical Care services</h3>
          </div>
          <div className="speciality-card">
            <FaAmbulance className="card-icon" />
            <h3>Histopathology</h3>
          </div>
          <div className="speciality-card">
            <FaAmbulance className="card-icon" />
            <h3>Diabetes & Endocrinology</h3>
          </div>
          <div className="speciality-card">
            <FaAmbulance className="card-icon" />
            <h3>obstetrics & Gynaecology</h3>
          </div>
          <div className="speciality-card">
            <FaAmbulance className="card-icon" />
            <h3>Physiotherapy</h3>
          </div>
        </div>
      </div>

        {/* Doctors Section */}
      <div className="doctors-section">
        <h2>Doctors</h2>
        <div className="doctors-container">
          <div className="doctor-card">
            <img src="https://img.freepik.com/premium-photo/young-male-indian-doctor-white-background_1239886-2044.jpg" alt="Doctor 1" className="doctor-image" />
            <h3>Dr. S. S. Kannan</h3>
            <p>Cardiologist</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDcrLiqVJeJa3ZA0y4fed702KvRI_xQ6BxAyfuxmijxng3yWxfDqQKPLROsJEk4xiPE4&usqp=CAU" alt="Doctor 2" className="doctor-image" />
            <h3>Dr. R. Venkatesh</h3>
            <p>Surgeon</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikyE-yMkca1lJ5wg_BIVY28RzhmoxKeMSOw&s" alt="Doctor 3" className="doctor-image" />
            <h3>Dr. M. S. Swaminathan</h3>
            <p>Pediatrician</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://img.freepik.com/premium-photo/smiley-female-doctor_1158146-18733.jpg" alt="Doctor 4" className="doctor-image" />
            <h3>Dr. S. S. Sharmila</h3>
            <p>General Practitioner</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAz91zy_Cr4C7Pj_YI1YZL3_RKkLzxiDwZ92hwOXS_nn9wvQ6Pox7Fqt3ooYDAO4lrqBQ&usqp=CAU" alt="Doctor 5" className="doctor-image" />
            <h3>Dr. V. S. Anjali</h3>
            <p>Neurologist</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRYWaFLG4_cD3DZVGE-Jd3Q-M4R5BoEu5jFSSsQDIdbl3o23meEzfhzMo6aXVCinSa3M&usqp=CAU" alt="Doctor 6" className="doctor-image" />
            <h3>Dr. A. Nirmala</h3>
            <p>Orthopedic Surgeon</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg" alt="Doctor 6" className="doctor-image" />
            <h3>Dr. K. Suresh</h3>
            <p>Orthopedic Surgeon</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://img.freepik.com/premium-photo/indian-doctor-portrait_714173-109.jpg" alt="Doctor 6" className="doctor-image" />
            <h3>Dr. A. Ramesh Babu</h3>
            <p>Orthopedic Surgeon</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://thumbs.dreamstime.com/b/south-indian-doctor-smiling-portrait-36256094.jpg" alt="Doctor 6" className="doctor-image" />
            <h3>Dr. T. M. Karthik</h3>
            <p>Orthopedic Surgeon</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://st2.depositphotos.com/4153545/8174/i/950/depositphotos_81742850-stock-photo-indian-woman-doctor.jpg" alt="Doctor 6" className="doctor-image" />
            <h3>Dr. R. Hemalatha </h3>
            <p>Orthopedic Surgeon</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="https://t4.ftcdn.net/jpg/06/47/16/29/360_F_647162966_SFu8GP6awkeW0OnFnAxPjiGXSoeme4ht.jpg" alt="Doctor 6" className="doctor-image" />
            <h3>Dr. M. Priya</h3>
            <p>Orthopedic Surgeon</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
          <div className="doctor-card">
            <img src="   https://media.istockphoto.com/id/497142181/photo/physician.jpg?s=612x612&w=0&k=20&c=PX_lRXXQo7lUpE1Slj2vHsiCnZZnVNF_OX99-ag6O_8=" alt="Doctor 6" className="doctor-image" />
            <h3>Dr. N. Radhika </h3>
            <p>Orthopedic Surgeon</p>
            <button className="book-appointment">Book Appointment</button>
          </div>
        
        </div>
      </div>

       {/* Contact Us Section */}
       <div className="contact-us">
        <h2>Contact Us</h2>
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" placeholder="Enter your address"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </div>
        <div className="contact-info">
          <div className="info-item">
            <FaPhone className="info-icon" />
            <p>123-456-7890</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <p>123 Main St, Anytown USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalManagementSystem;
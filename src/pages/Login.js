import React from 'react';
import bg001 from '../assets/Login Page Images/log.jpg';


const LoginPage = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f7f7f7',
      margin: 0,
      padding: 0,
      backgroundImage: `url(${bg001})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    formMain: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
      position: 'relative'
    },
    formHead: {
      textAlign: 'center',
      marginBottom: '20px'
    },
    formGroup: {
      marginBottom: '15px'
    },
    formControl: {
      width: '100%',
      padding: '10px',
      margin: '8px 0',
      display: 'inline-block',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box'
    },
    formButton: {
      width: '100%',
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '14px 20px',
      margin: '8px 0',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    formButtonHover: {
      backgroundColor: '#45a049'
    },
    subImage: {
      position: 'absolute',
      bottom: '-20px',
      right: '-20px',
      width: '100px'
    }
  };

  return (
    <div style={styles.body}>
      <section style={styles.container}>
        <div style={styles.formMain}>
          <div style={styles.formHead}>
            <h2>Welcome Back!</h2>
          </div>
          <div style={styles.formGroup}>
            <label>Userd ID:</label>
            <input type="emai" name="userId" style={styles.formControl} placeholder="Enter Userid" required />
          </div>
          <div style={styles.formGroup}>
            <label>Password:</label>
            <input type="password" name="password" style={styles.formControl} placeholder="Enter Password" required />
          </div>
          
          <div style={styles.formGroup}>
            <button style={styles.formButton}>Login</button>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default LoginPage;

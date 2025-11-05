import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 30px',
      backgroundColor: '#333',
      color: 'white'
    }}>
      {/* Left side - Brand */}
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
        Employee
      </div>

      {/* Right side - Buttons */}
      <div>
        <Link to={'/login'} style={{
          marginRight: '10px',
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Login
        </Link>
        <Link to={'/register'} style={{
          padding: '8px 16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Register
        </Link>
      </div>
    </div>
  );
}

export default Menu;

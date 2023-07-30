import React from 'react';
import styled from 'styled-components';

function FooterComponent(){
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {new Date().getFullYear()} Caja Chica by Ivan Zuñiga Quiroz. Todos los derechos reservados.</p>
    </footer>
  );
};

export default FooterComponent;

const styles = styled.footer`
  footer{
    backgroundColor: '#f0f0f0',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
  }
  text{
    fontSize: '14px',
    color: '#555',
  }`
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header style={styles.header}>
        <h1>Vardhaman Paper Products</h1>
        <p>Your Trusted Paper Partner in Aurangabad</p>
      </header>

      <nav style={styles.nav}>
        <a href="#about" style={styles.navLink}>About</a>
        <a href="#products" style={styles.navLink}>Products</a>
        <a href="#contact" style={styles.navLink}>Contact</a>
      </nav>

      <section id="about" style={styles.section}>
        <h2>About Us</h2>
        <p>
          Vardhaman Paper Products is a leading supplier of quality paper products based in Aurangabad.
          We are committed to delivering excellence in paper solutions for retail, industrial, and office use.
        </p>
      </section>

      <section id="products" style={styles.section}>
        <h2>Our Products</h2>
        <div style={styles.productList}>
          <Product title="Thermal Paper Rolls" desc="High-quality thermal paper rolls for billing and POS machines." />
          <Product title="Barcode Labels" desc="Durable barcode and product labels in various sizes and adhesives." />
          <Product title="Copier Paper" desc="A4 and A3 size copier paper for office and commercial use." />
          <Product title="Custom Labels" desc="Printed and blank labels customized for your business needs." />
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <h2>Contact Us</h2>
        <p><strong>Address:</strong> Aurangabad, Maharashtra, India</p>
        <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
        <p><strong>Email:</strong> info@vardhamanpaper.com</p>
      </section>

      <footer style={styles.footer}>
        &copy; 2025 Vardhaman Paper Products | All rights reserved
      </footer>
    </div>
  );
}

const Product = ({ title, desc }) => (
  <div style={styles.product}>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

const styles = {
  header: {
    backgroundColor: '#005f73',
    color: 'white',
    padding: '20px',
    textAlign: 'center'
  },
  nav: {
    backgroundColor: '#0a9396',
    textAlign: 'center',
    padding: '10px'
  },
  navLink: {
    color: 'white',
    margin: '0 15px',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  section: {
    padding: '30px',
    maxWidth: '1000px',
    margin: 'auto'
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
  },
  product: {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    flex: '1 1 250px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  },
  footer: {
    textAlign: 'center',
    backgroundColor: '#005f73',
    color: 'white',
    padding: '15px'
  }
};

export default App;

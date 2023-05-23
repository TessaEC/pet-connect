import React from 'react';
// import StripePayment from './StripePayment';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="app-footer">
    <Link
      href="https://buy.stripe.com/fZe1759PAeds0JWcMM"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-style"
    >
      Donate Here
    </Link>
  </footer>
  );
}

import React from 'react';

import '../css/component-level/Footer.css';

export default function Footer() {

        const info_links = ["Blog", "Events", "User Reviews"];

    const help_links = ["Services", "Supports", "Privacy Policy"];
    

    return (
      <div className="footer-cont">
        <div className="item">
          <h3>Our Goals</h3>
          <p>
            Secure vehicle information tracking through blockchain services.
          </p>
        </div>

        <div className="item">
          <h3>Information</h3>
          <ul>
            {info_links.map((label, index) => {
                return <li key={index}><a>{label}</a></li>;
            })}
          </ul>
        </div>

        <div className="item">
          <h3>Helpful Links</h3>
          <ul>
            {help_links.map((label, index) => {
              return <li key={index}><a>{label}</a></li>;
            })}
          </ul>
        </div>
      </div>
    );
}

'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileMenu() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: '',
  });

  // const handleClick = (key) => {
  //   if (isActive.key === key) {
  //     setIsActive({
  //       status: false,
  //     });
  //   } else {
  //     setIsActive({
  //       status: true,
  //       key,
  //     });
  //   }
  // };

  const handleMenuClose = () => {
    document.body.classList.remove('mobile-menu-visible');
  };
  return (
    <>
      <ul className="navigation clearfix">
        {/*Keep This Empty / Menu will come through Javascript*/}
        {/* <li className="current dropdown">
          <Link href="/">Home</Link>
          <ul style={{ display: `${isActive.key == 1 ? 'block' : 'none'}` }}>
            <li>
              <Link href="/">Home page 01</Link>
            </li>
            <li>
              <Link href="/index-2">Home page 02</Link>
            </li>
            <li>
              <Link href="/index-3">Home page 03</Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(1)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-team">Pages</Link>
          <ul style={{ display: `${isActive.key == 2 ? 'block' : 'none'}` }}>
            <li>
              <Link href="/page-about">About</Link>
            </li>
            <li>
              <Link href="/page-destination">Destination</Link>
            </li>
            <li>
              <Link href="/page-package">Packages</Link>
            </li>
            <li>
              <Link href="/page-testimonial">Testimonial</Link>
            </li>
            <li>
              <Link href="/page-pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/page-faq">Faq</Link>
            </li>
            <li>
              <Link href="/page-error">404</Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(2)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-team">Team</Link>
          <ul style={{ display: `${isActive.key == 3 ? 'block' : 'none'}` }}>
            <li>
              <Link href="/page-team">Team Grid</Link>
            </li>
            <li>
              <Link href="/page-team-details">Team Details</Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(3)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-yacht-sell">Yacht</Link>
          <ul style={{ display: `${isActive.key == 4 ? 'block' : 'none'}` }}>
            <li>
              <Link href="/page-yacht-sell">Yacht Sell</Link>
            </li>
            <li>
              <Link href="/page-yacht-details">Yacht Single</Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(4)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>
        <li className="dropdown">
          <Link href="/news-grid">News</Link>
          <ul style={{ display: `${isActive.key == 5 ? 'block' : 'none'}` }}>
            <li>
              <Link href="/news-grid">News Grid</Link>
            </li>
            <li>
              <Link href="/news-details">News Details</Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(5)}>
            <i className="fa fa-angle-down" />
          </div>
        </li> */}
        {/* <li>
          <Link href="/page-contact">Contact</Link>
        </li> */}
        <li onClick={handleMenuClose}>
          <Link href="/">Home</Link> {/* Home page */}
        </li>
        <li onClick={handleMenuClose}>
          <Link href="/about-us">About Us</Link> {/* About Us page */}
        </li>
        <li onClick={handleMenuClose}>
          <Link href="/foods">Foods</Link> {/* Foods page */}
        </li>
        <li onClick={handleMenuClose}>
          <Link href="/gallery">Gallery</Link> {/* Gallery page */}
        </li>
        <li onClick={handleMenuClose}>
          <Link href="/packages">Packages</Link> {/* Packages page */}
        </li>
        <li onClick={handleMenuClose}>
          <Link href="/contact-us">Contact</Link> {/* Contact page */}
        </li>

        <li onClick={handleMenuClose}>
          <Link href="/profile">My Profile</Link> {/* Contact page */}
        </li>
        <li onClick={handleMenuClose}>
          <Link href="/book-now">📅 Book Now</Link>
        </li>
      </ul>
    </>
  );
}

import Link from 'next/link';

export default function Menu() {
  return (
    <>
      <ul className="navigation">
        {/* <li className="current dropdown">
          <Link href="/">Home</Link>
          <ul>
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
        </li>
        <li className="dropdown">
          <Link href="/page-about">Pages</Link>
          <ul>
            <li>
              <Link href="/page-about">About</Link>
            </li>
            <li>
              <Link href="/page-destination">Destination</Link>
            </li>
            <li className="dropdown">
              <Link href="/page-team">Our Crew</Link>
              <ul>
                <li>
                  <Link href="/page-team">Crew List</Link>
                </li>
                <li>
                  <Link href="/page-team-details">Crew Details</Link>
                </li>
              </ul>
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
        </li>
        <li className="dropdown">
          <Link href="/page-yacht-sell">Yacht</Link>
          <ul>
            <li>
              <Link href="/page-yacht-sell">Yacht Sell</Link>
            </li>
            <li>
              <Link href="/page-yacht-details">Yacht Single</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/news-grid">News</Link>
          <ul>
            <li>
              <Link href="/news-grid">News Grid</Link>
            </li>
            <li>
              <Link href="/news-details">News Details</Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link href="/">Home</Link> {/* Home page */}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {/* About Us page */}
        </li>
        <li>
          <Link href="/foods">Foods</Link> {/* Foods page */}
        </li>
        <li>
          <Link href="/gallery">Gallery</Link> {/* Gallery page */}
        </li>
        <li>
          <Link href="/packages">Packages</Link> {/* Packages page */}
        </li>
        <li>
          <Link href="/contact-us">Contact</Link> {/* Contact page */}
        </li>
      </ul>
    </>
  );
}

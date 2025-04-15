import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Sample data - you can replace with your actual data or fetch from an API
const socialLinks = [
  { id: 1, name: 'Instagram', href: '#', icon: '/instagram.png' },
  { id: 2, name: 'Dribbble', href: '#', icon: '/dribbble.png' },
  { id: 3, name: 'Twitter', href: '#', icon: '/twitter.png' },
  { id: 4, name: 'Youtube', href: '#', icon: '/youtube.png' }
];

const companyLinks = [
  { id: 1, name: 'About us', href: '#' },
  { id: 2, name: 'Blog', href: '#' },
  { id: 3, name: 'Contact us', href: '#' },
  { id: 4, name: 'Pricing', href: '#' },
  { id: 5, name: 'Testimonials', href: '#' }
];

const supportLinks = [
  { id: 1, name: 'Help center', href: '#' },
  { id: 2, name: 'Terms of service', href: '#' },
  { id: 3, name: 'Legal', href: '#' },
  { id: 4, name: 'Privacy policy', href: '#' },
  { id: 5, name: 'Status', href: '#' }
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and copyright section - takes full width on mobile, 2 columns on larger screens */}
            <div className="sm:col-span-2">
              <div className="mb-6">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo_white.png"
                    alt="Nexcent Logo"
                    width={150}
                    height={40}
                  />
                </Link>
              </div>
              <div className="mb-6 text-gray-400 text-sm">
                <p>Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </div>
              <div className="flex space-x-4 mb-8 sm:mb-0">
                {socialLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700 transition-colors"
                    aria-label={link.name}
                  >
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={32}
                      height={32}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Stay up to date section - Positioned before Company on mobile and tablet */}
            <div className="order-2 sm:order-2 lg:order-4 sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-lg mb-4">Stay up to date</h3>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-600 text-white px-4 py-2 rounded-l outline-none flex-grow w-full"
                  aria-label="Email address"
                />
                <button
                  className="bg-gray-600 px-3 py-2 rounded-r hover:bg-gray-500 transition-colors"
                  aria-label="Submit email"
                >
                  <Image
                    src="/Vector.png"
                    alt="Nexcent Logo"
                    width={22}
                    height={22}
                  />
                </button>
              </div>
            </div>

            {/* Company links - moved after stay up to date on mobile and tablet */}
            <div className="order-3 sm:order-3 lg:order-2 sm:col-span-1">
              <h3 className="text-lg font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support links */}
            <div className="order-4 sm:order-4 lg:order-3 sm:col-span-1">
              <h3 className="text-lg font-medium mb-4">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
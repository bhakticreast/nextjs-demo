import Link from 'next/link';
import React from 'react';

export const Btn = ({ children, href = '/', appendClass = '' }) => {
  console.log('children:', children, 'href:', href); // Debugging
  return (
    <Link href={href} className={`bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium transition duration-300 ${appendClass}`}>
      {children}
    </Link>
  );
};

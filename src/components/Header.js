"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-gray-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center h-20">
                    {/* Logo with animation */}
                    <motion.div
                        className="flex-shrink-0 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="flex items-center">
                            <Image src="/Logo.png" width={200} height={200} alt="Hero" />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation with animations */}
                    <div className="hidden md:flex md:items-center md:space-x-10 text-[16px]">
                        {['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Link
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="text-gray-700 hover:text-green-500 relative"
                                >
                                    <span>{item}</span>
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500"
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Auth Buttons with animations */}
                    <div className="hidden md:flex md:items-center md:space-x-4 text-[14px]">
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link href="/login" className="text-green-500 hover:text-green-600">Login</Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/signup">
                                <motion.button
                                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
                                    animate={{
                                        boxShadow: ['0px 0px 0px rgba(34, 197, 94, 0)', '0px 0px 25px rgba(34, 197, 94, 0.5)', '0px 0px 0px rgba(34, 197, 94, 0)']
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                >
                                    Sign up
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button with animation */}
                    <motion.div
                        className="md:hidden"
                        whileTap={{ scale: 0.9 }}
                    >
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600"
                        >
                            {isMenuOpen ? (
                                <motion.svg
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </motion.svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </motion.div>
                </nav>

                {/* Mobile Menu with animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden py-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="flex flex-col space-y-3"
                                initial="closed"
                                animate="open"
                                variants={{
                                    open: { transition: { staggerChildren: 0.07 } },
                                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                                }}
                            >
                                {['Home', 'Service', 'Feature', 'Product', 'Testimonial', 'FAQ'].map((item) => (
                                    <motion.div
                                        key={item}
                                        variants={{
                                            open: { opacity: 1, y: 0 },
                                            closed: { opacity: 0, y: -10 }
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-700 hover:text-green-500">
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    className="pt-4 flex flex-col space-y-3"
                                    variants={{
                                        open: { opacity: 1, y: 0 },
                                        closed: { opacity: 0, y: -10 }
                                    }}
                                >
                                    <Link href="/login" className="text-green-500 hover:text-green-600">Login</Link>
                                    <Link href="/signup">
                                        <motion.button
                                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded w-full"
                                            animate={{
                                                boxShadow: ['0px 0px 0px rgba(34, 197, 94, 0)', '0px 0px 20px rgba(34, 197, 94, 0.5)', '0px 0px 0px rgba(34, 197, 94, 0)']
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                repeatType: "loop"
                                            }}
                                        >
                                            Sign up
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
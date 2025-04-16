"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import ArrowRight from './icons/ArrowRight';
import CardWithOverlay from './CardWithOverlay';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Btn } from './shared/Btn';
import Link from 'next/link';

export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slider content
    const slides = [
        {
            title: "Lessons and insights",
            titleGreen: "from 8 years",
            description: "Where to grow your business as a photographer: site or social media?",
            image: "/illustration.png"
        },
        {
            title: "Build your online",
            titleGreen: "presence today",
            description: "Create stunning websites that convert visitors into loyal customers.",
            image: "/illustration.png"
        },
        {
            title: "Expert guidance for",
            titleGreen: "your business",
            description: "Learn how to scale your business with proven marketing strategies.",
            image: "/illustration.png"
        }
    ];

    // Auto slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    // Manual slide change function
    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    const membershipTypes = [
        {
            id: 1,
            title: 'Membership Organisations',
            icon: '/Icon1.png',
            description: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            id: 2,
            title: 'National Associations',
            icon: '/Icon2.png',
            description: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            id: 3,
            title: 'Clubs And Groups',
            icon: '/Icon3.png',
            description: 'Our membership management software provides full automation of membership renewals and payments'
        }
    ];

    const stats = [
        { id: 1, icon: "/count1.png", count: "2,245,341", label: "Members" },
        { id: 2, icon: "/count2.png", count: "46,328", label: "Clubs" },
        { id: 3, icon: "/count3.png", count: "828,867", label: "Event Bookings" },
        { id: 4, icon: "/count4.png", count: "1,926,436", label: "Payments" },
    ];

    const clients = [
        { id: 1, image: "/client1.png" },
        { id: 2, image: "/client2.png" },
        { id: 3, image: "/client3.png" },
        { id: 4, image: "/client4.png" },
        { id: 5, image: "/client5.png" },
        { id: 6, image: "/client6.png" },
        { id: 7, image: "/client7.png" },
    ];

    const AnimatedCounter = ({ value }) => {
        const count = useMotionValue(0);
        const rounded = useTransform(count, latest => Math.round(latest));
        const [displayValue, setDisplayValue] = useState(0);

        useEffect(() => {
            const unsubscribe = rounded.on("change", latest => {
                setDisplayValue(latest);
            });

            const controls = animate(count, value, {
                duration: 2,
                ease: "easeOut"
            });

            return () => {
                controls.stop();
                unsubscribe();
            };
        }, []);

        return <span>{displayValue.toLocaleString()}</span>;
    };

    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="py-12 md:py-20 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Slider container */}
                    <div className="relative overflow-hidden">
                        {/* Slides */}
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div key={index} className="min-w-full">
                                    <div className="flex flex-col md:flex-row items-center">
                                        {/* Text Content */}
                                        <div className="w-full md:w-1/2 pr-0 md:pr-10 mb-10 md:mb-0">
                                            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                                                {slide.title}
                                                <span className="block text-green-500">{slide.titleGreen}</span>
                                            </h1>
                                            <p className="text-lg text-gray-600 mb-8">
                                                {slide.description}
                                            </p>
                                            <Btn href="/register">Sign up</Btn>
                                        </div>

                                        {/* Image */}
                                        <div className="w-full md:w-1/2">
                                            <div className="relative">
                                                <div className="w-full h-full">
                                                    <Image
                                                        src={slide.image}
                                                        alt={slide.title}
                                                        width={400}
                                                        height={400}
                                                    // className="w-full"
                                                    // priority={index === 0}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Pagination */}
                    <div className="flex justify-center space-x-3 mt-12">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 w-2 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-green-500' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.section>

            <section className="container bg-white mx-auto px-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Clients Section */}
                    <section className="py-16 text-center">
                        <h2 className="text-4xl font-semibold text-gray-700 mb-4">Our Clients</h2>
                        <p className="text-gray-600 mb-12">We have been working with some Fortune 500+ clients</p>

                        <div className="flex flex-wrap justify-center items-center md:gap-30 gap-12">
                            {clients.map((client) => (
                                <div className="relative" key={client.id}>
                                    <Image
                                        src={client.image}
                                        alt="Clients_Logos"
                                        width={48}
                                        height={48}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Community Management Section */}
                    <section className="py-16 bg-white">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-semibold text-gray-700 mb-4">
                                Manage your entire community<br />in a single system
                            </h2>
                            <p className="text-gray-600">Who is Nextcent suitable for?</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {membershipTypes.map((type) => (
                                <motion.div
                                    whileHover={{ scale: 0.9 }}
                                    whileTap={{ scale: 0.8 }}
                                    key={type.id}
                                    className="bg-white p-6 rounded-lg shadow-sm text-center"
                                >
                                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <Image src={type.icon} alt={type.title} width={50} height={50} />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-700 mb-4">{type.title}</h3>
                                    <p className="text-gray-600">{type.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </section>

            <section className="container mx-auto bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* First Section - Pixelgrade Experience */}
                    <section className="py-16 px-4 md:px-0 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2">
                            <Image
                                src="/rafiki.png"
                                alt="People working with digital interface"
                                width={500}
                                height={400}
                                className="object-contain"
                            />
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                The unseen of spending three years at Pixelgrade
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
                                accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum orci sed
                                porta. Nullam mattis tristique lacus. Nullam pulvinar sit amet risus pretium auctor. Etiam
                                quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                            </p>

                            <Btn>Learn More</Btn>
                        </div>
                    </section>
                </div>
            </section>
            <section className="container mx-auto bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="py-16 px-4 md:px-10">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-2/3 mb-8 md:mb-0">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                    Helping a local
                                    <span className="block text-green-500">business reinvent itself</span>
                                </h2>
                                <p className="text-gray-600">
                                    We reached here with our hard work and dedication
                                </p>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-2 gap-8">
                                {stats.map((stat) => (
                                    <div key={stat.id} className="flex items-center">
                                        <div className="mr-4 flex-shrink-0">
                                            <Image
                                                src={stat.icon}
                                                alt={stat.label}
                                                width={40}
                                                height={40}
                                                className="text-green-500"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-gray-800">
                                                <AnimatedCounter value={parseInt(stat.count.replace(/,/g, ''))} />
                                            </p>
                                            <p className="text-gray-600">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section className="container mx-auto bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <section className="py-16 px-4 md:px-0 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2">
                            <motion.img
                                initial={{ y: -10 }}
                                animate={{ y: 10 }}
                                width={500}
                                height={400}
                                transition={{
                                    type: "smooth",
                                    repeatType: "mirror",
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                src="/pana.png"
                                alt="Mobile phone with website footer design"
                            />
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                How to design your site footer like we did
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
                                molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
                                libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at
                                porta nisi facilisis vitae. Vestibulum molestie nisi in tortor scelerisque aliquet. Integer
                                in elit ligula. Curabitur faucibus efficitur quam massa. Praesent facilisis at libero et iaculis
                                ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                            </p>
                            <Btn>Learn More</Btn>

                        </div>
                    </section>
                </div>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto"
            >
                <div className="w-full mx-auto">
                    {/* Testimonial Section */}
                    <section className="bg-gray-50 py-16">
                        <div className="px-4">
                            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
                                {/* Tesla Logo / Testimonial Image */}
                                <div className="md:w-1/3 mb-8 md:mb-0">
                                    <div className="bg-gray-900 rounded-lg overflow-hidden max-w-xs mx-auto">
                                        <Image
                                            src="/boat.png"
                                            alt="Tesla Logo"
                                            width={300}
                                            height={300}
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                {/* Testimonial Content */}
                                
                                <div className="md:w-2/3 md:pl-12">
                                    <div className="max-w-2xl">
                                        <p className="text-gray-700 mb-6">
                                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                                            tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                                            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
                                            mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                                            eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                                            vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum
                                            id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                                        </p>
                                        <h3 className="text-green-500 font-medium text-lg">Tim Smith</h3>
                                        <p className="text-gray-500 text-sm">British Dragon Boat Racing Association</p>

                                        <div className="flex flex-wrap items-center mt-8 gap-6">
                                            <Image
                                                src="/boat_icons.png"
                                                alt="boat icons"
                                                width={430}
                                                height={32}
                                            />
                                            <Link
                                                href="/register"
                                                className="text-green-600 font-semibold hover:underline inline-flex items-center justify-center gap-1"
                                            >
                                                Meet all customers <ArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Blog Section */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4 mb-12">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                    Caring is the new marketing
                                </h2>
                                <p className="text-gray-600 max-w-3xl mx-auto">
                                    The Nexcent blog is the best place to read about the latest membership insights,
                                    trends and more. See who's joining the community, read about how our community
                                    are increasing their membership income and lot's more.
                                </p>
                            </div>

                            <CardWithOverlay />
                        </div>
                    </section>

                    <section className="container mx-auto text-center bg-white">
                        <div className="px-4 bg-gray-50 py-16">
                            <div className="mb-12 text-5xl text-gray-700">
                                We have our demo
                            </div>
                            <Btn href="/blog/safeguarding-processes" appendClass="inline-flex items-center">Get a Demo <ArrowRight /></Btn>
                        </div>
                    </section>
                </div>
            </motion.section>
        </>
    );
}
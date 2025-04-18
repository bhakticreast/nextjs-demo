'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowRight from './icons/ArrowRight';

export default function CardWithOverlay() {
    const blogPosts = [
        {
            id: 1,
            title: 'Creating Streamlined Safeguarding Processes with OneRen',
            image: '/post1.png',
            link: '/blog/safeguarding-processes',
        },
        {
            id: 2,
            title: 'What are your safeguarding responsibilities and how can you manage them?',
            image: '/post2.png',
            link: '/blog/safeguarding-responsibilities',
        },
        {
            id: 3,
            title: 'Revamping the Membership Model with Triathlon Australia',
            image: '/post3.png',
            link: '/blog/membership-model',
        },
    ];

    return (
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
                <div className="relative w-full max-w-sm mx-auto pb-20" key={post.id}>
                    {/* Image Container */}
                    <motion.div
                        animate={{
                            boxShadow: ['0px 0px 0px rgba(34, 197, 94, 0)', '0px 0px 25px rgba(34, 197, 94, 0.5)', '0px 0px 0px rgba(34, 197, 94, 0)']
                        }}
                        className="relative w-full h-64 rounded-xl overflow-hidden shadow-md"
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    >
                        <Image
                            src={post.image}
                            alt="Person using laptop"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Overlay Text Block */}
                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-[90%] bg-white p-6 rounded-xl shadow-lg text-center min-h-[150px] flex flex-col justify-between">
                        <h2 className="text-gray-800 text-base font-medium mb-3 leading-snug line-clamp-5">
                            {post.title}
                        </h2>
                        <Link
                            href={post.link}
                            className="text-green-600 font-semibold inline-flex items-center justify-center gap-1 hover:underline mt-auto"
                        >
                            Read more
                            <ArrowRight />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

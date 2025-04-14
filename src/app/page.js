"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Loading from "@/components/Loading";
import { useEffect, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(loading)
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return (
    <div className="min-h-screen">
      {loading && <Loading />}
      {!loading && <>
      <Header />
      <LandingPage />
      <Footer />
      </>}
    </div>
  );
}
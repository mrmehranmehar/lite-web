
"use client";

import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedCourses from '@/components/FeaturedCourses';
import TestiMonialCard from '@/components/TestiMonialCard';
import UpComingWebinars from '@/components/UpComingWebinars';
import WhyChooseUs from '@/components/WhyChooseUs';

const HomePage = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.07]'>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs/>
      <TestiMonialCard />
      <UpComingWebinars />
    </main>
  );
}

export default HomePage;
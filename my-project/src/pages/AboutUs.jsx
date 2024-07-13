import React from 'react';
import Header from '../components/navbar';
import Footer from '../components/footer';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-blue-300">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">About Oasis Hostel</h1>

          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Oasis Hostel</h2>
            <p className="text-lg text-gray-700">
              Nestled in a serene environment, Oasis Hostel offers a perfect blend of comfort, security, and convenience. Whether you are a student, a working professional, or a traveler, we provide an ideal place to stay, rest, and rejuvenate.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Our Facilities</h2>
            <p className="text-lg text-gray-700">
              Oasis Hostel features well-furnished rooms designed to ensure a cozy and relaxing atmosphere. Each room is equipped with modern amenities to meet your everyday needs. We prioritize your safety with round-the-clock security and surveillance, allowing you to enjoy your stay with peace of mind.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Our common rooms and recreational facilities are perfect for socializing, relaxing, and engaging in various activities. We also offer high-speed internet access throughout the premises, ensuring you stay connected with the world.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Our Services</h2>
            <p className="text-lg text-gray-700">
              Our dedicated staff is committed to providing exceptional service. From housekeeping to maintenance, we ensure that every aspect of your stay is taken care of. We also offer convenient laundry services to keep your clothes clean and fresh.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Meals are an important part of our offering. We provide delicious and nutritious meals that cater to diverse tastes and dietary requirements. Our kitchen staff ensures that you enjoy wholesome food that keeps you energized throughout the day.
            </p>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;

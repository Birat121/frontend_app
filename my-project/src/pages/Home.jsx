import React from 'react';
import Header from '../components/navbar';

const Home = () => {
  return (
    <>
      <Header />
      <div
        className="relative h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
        style={{ backgroundImage: `url('/hostel.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Background overlay for the whole screen */}
        <div className="relative p-8 mt-10 mx-auto bg-opacity-70 rounded-md">
          <h1 className="text-6xl font-extrabold mb-4 text-center text-red-900 font-serif">Welcome to Oasis Hostel</h1>
        </div>
      </div>
      <main className="bg-slate-500 py-16">
        <section className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-12 text-gray-800">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-8 bg-slate-100 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-6 text-gray-700">Comfortable Rooms</h3>
              <p className="text-gray-600">Our rooms are spacious, well-furnished, and designed to provide a cozy environment.</p>
            </div>
            <div className="p-8 bg-slate-100 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-6 text-gray-700">24/7 Security</h3>
              <p className="text-gray-600">We offer round-the-clock security to ensure the safety and security of all our residents.</p>
            </div>
            <div className="p-8 bg-slate-100 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-6 text-gray-700">High-Speed Internet</h3>
              <p className="text-gray-600">Stay connected with our high-speed internet available throughout the hostel.</p>
            </div>
            <div className="p-8 bg-slate-100 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-6 text-gray-700">Recreational Facilities</h3>
              <p className="text-gray-600">Enjoy our recreational facilities, including a common room, gym, and outdoor spaces.</p>
            </div>
            <div className="p-8 bg-slate-100 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-6 text-gray-700">Delicious Meals</h3>
              <p className="text-gray-600">We provide healthy and delicious meals to keep you energized throughout the day.</p>
            </div>
            <div className="p-8 bg-slate-100 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-6 text-gray-700">Laundry Services</h3>
              <p className="text-gray-600">Our hostel offers convenient laundry services to keep your clothes clean and fresh.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

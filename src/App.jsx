import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import emailjs from '@emailjs/browser';
import ChatWidget from './components/ChatWidget';

import { useRef } from 'react';

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xxwqolk',
        'template_a73bdje',
        form.current,
        'aROnIWhlO50FKi-Y_'
      )
      .then(() => {
        alert('✅ Message sent! We’ll contact you ASAP.');
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert('❌ Failed to send message. Please try again later.');
      });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const repairs = [
    {
      title: 'Maintenance & Tune Ups',
      desc: 'We offer regular inspections and tune-ups to keep your garage door running smoothly and extend its lifespan.',
      img: '/images/repair-maintenance.jpg'
    },
    {
      title: 'Broken Springs',
      desc: 'We replace worn-out or broken torsion and extension springs to restore door functionality.',
      img: '/images/repair-springs.jpg'
    },
    {
      title: 'Garage Door Openers',
      desc: 'Whether it’s a motor issue or remote malfunction, we repair and install top opener brands.',
      img: '/images/repair-opener.jpg'
    },
    {
      title: 'Damaged Rollers',
      desc: 'Squeaky, misaligned, or damaged rollers? We’ll get your door rolling smoothly again.',
      img: '/images/repair-rollers.jpg'
    },
    {
      title: 'Cable Snap',
      desc: 'Snapped cables are dangerous. We’ll replace and adjust cables safely and quickly.',
      img: '/images/repair-cable.jpg'
    },
    {
      title: 'Door Not Closing',
      desc: 'We diagnose and fix sensor, alignment, or track issues causing doors to not close properly.',
      img: '/images/repair-door-close.jpg'
    },
    {
      title: 'Remotes & Keypads',
      desc: 'Lost access? We program or replace remotes, keypads, and wall-mounted openers.',
      img: '/images/repair-remote.jpg'
    },
    {
      title: 'Damaged Garage Panel',
      desc: 'We repair or replace dented, cracked, or bent panels to restore your door’s appearance.',
      img: '/images/repair-panel.jpg'
    },
    {
      title: 'Bottom Seal Rubber',
      desc: 'We replace worn or cracked bottom seals to keep out pests, weather, and debris.',
      img: '/images/repair-seal.jpg'
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />

      {/* Repairs Section */}
      <section id="repairs" className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Repairs We Offer</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-12 text-lg">
          Our experienced technicians repair all major garage door parts quickly and professionally.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {repairs.map((repair, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <img src={repair.img} alt={repair.title} className="rounded-md mb-4 h-48 w-full object-cover" />
              <h3 className="text-xl font-semibold mb-2">{repair.title}</h3>
              <p className="text-gray-600">{repair.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          At Rapid Garage Doors, we specialize in fast, affordable, and professional garage door installation and repair.
        </p>
      </section>

      {/* Contact Section with EmailJS Form */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-yellow-50 to-white text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Contact Us</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-12 text-lg">
          Let us know what issue you're having with your garage door. We offer emergency service 24/7 and will get back to you as soon as possible.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto space-y-6 bg-white p-10 rounded-2xl shadow-2xl border border-gray-200"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-left">Name</label>
            <input
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-left">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-left">Phone</label>
            <input
              name="phone"
              type="tel"
              required
              placeholder="(123) 456-7890"
              className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-left">What problem are you experiencing?</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="My garage door won't close..."
              className="w-full border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition duration-300 hover:shadow-lg"
          >
            Submit Request
          </button>
        </form>

        <div className="mt-12 text-center text-gray-700">
          <p className="mb-1 text-lg">📧 <strong>Email:</strong> rapidgaragedoors@gmail.com</p>
          <p className="text-lg">📍 <strong>Broward:</strong> <a href="tel:9548822728" className="hover:text-yellow-500">954-882-2728</a></p>
          <p className="text-lg">📍 <strong>West Palm Beach:</strong> <a href="tel:5616993222" className="hover:text-yellow-500">561-699-3222</a></p>
        </div>
      </section>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
      >
        ↑ Back to Top
      </button>
      
      <ChatWidget />
      <Footer />
    </>
  );
}

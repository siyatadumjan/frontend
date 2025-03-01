import React from "react";
import {
  FaRocket,
  FaBolt,
  FaComments,
  FaGlobe,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

import linkup_logo from "../assets/linkup_logo.png";
import image from "../assets/image.png";

const LandingPage = () => {
  return (
    <div className="font-sans antialiased text-gray-900 w-full h-full overflow-auto">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-pink-500 to-purple-600 w-full">
        <div className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
          <nav className="flex justify-between items-center mb-10 md:mb-16">
            <div className="flex items-center">
              <img src={linkup_logo} alt="logo" className="h-10" />
              <span className="ml-2 md:ml-3 text-xl md:text-2xl font-bold text-white">
                LinkUp
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6 md:space-x-10 text-white">
              <a href="#features" className="hover:text-pink-200 transition">
                Features
              </a>
              <a href="#app" className="hover:text-pink-200 transition">
                App
              </a>
              <a href="#download" className="hover:text-pink-200 transition">
                Download
              </a>
            </div>
            <button
              onClick={() => (window.location.href = "/signup")}
              className="bg-white text-pink-600 font-bold rounded-full px-4 md:px-8 py-1.5 md:py-2 hover:bg-pink-100 transition text-sm md:text-base"
            >
              Sign Up
            </button>
            <button
              onClick={() => (window.location.href = "/login")}
              className="bg-transparent border-2 border-white text-white font-bold rounded-full px-4 md:px-8 py-1.5 md:py-2 hover:bg-white hover:bg-opacity-10 transition text-sm md:text-base"
            >
              Login
            </button>
          </nav>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
                Connect with friends on LinkUp
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-6 md:mb-8">
                The most beautiful and intuitive chat experience, designed for
                meaningful conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => (window.location.href = "/signup")}
                  className="bg-white text-pink-600 font-bold rounded-full px-6 md:px-8 py-2 md:py-3 hover:bg-pink-100 transition flex items-center justify-center text-sm md:text-base"
                >
                  <FaRocket className="mr-2" />
                  Get Started
                </button>
                <button className="bg-transparent border-2 border-white text-white font-bold rounded-full px-6 md:px-8 py-2 md:py-3 hover:bg-white hover:bg-opacity-10 transition flex items-center justify-center text-sm md:text-base">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src={image}
                alt="LinkUp App"
                className="w-full max-w-xs md:max-w-md rounded-xl shadow-2xl transform rotate-2"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L48 8.875C96 17.75 192 35.5 288 40.375C384 45.25 480 37.25 576 48.875C672 60.5 768 91.75 864 93.75C960 95.75 1056 68.5 1152 57.75C1248 47 1344 52.75 1392 55.625L1440 58.5V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </header>
      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Why choose LinkUp?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              LinkUp combines beautiful design with powerful features to create
              the ultimate chat experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition">
              <div className="bg-pink-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-pink-600 mb-4 md:mb-6">
                <FaBolt className="text-xl md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Messages delivered instantly, no matter where your friends are
                in the world.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition">
              <div className="bg-pink-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-pink-600 mb-4 md:mb-6">
                <FaComments className="text-xl md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                Rich Messaging
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Share photos, videos, voice messages, and more with our powerful
                media tools.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition">
              <div className="bg-pink-100 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-pink-600 mb-4 md:mb-6">
                <FaGlobe className="text-xl md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                Cross-Platform
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Available on iOS, Android, and the web. Your conversations
                follow you everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* App Preview Section */}
      <section id="app" className="py-12 md:py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Experience chat like never before
              </h2>
              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                Our beautiful interface makes chatting a joy. With intuitive
                gestures, smart notifications, and personalized themes, LinkUp
                takes messaging to the next level.
              </p>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center">
                  <div className="bg-green-500 rounded-full p-1 mr-3">
                    <svg
                      className="h-3 w-3 md:h-4 md:w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">
                    End-to-end encryption for all messages
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-500 rounded-full p-1 mr-3">
                    <svg
                      className="h-3 w-3 md:h-4 md:w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">
                    Customize with beautiful themes
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-500 rounded-full p-1 mr-3">
                    <svg
                      className="h-3 w-3 md:h-4 md:w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base">
                    Group chats with up to 500 members
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={image}
                alt="LinkUp Interface"
                className="w-full max-w-xs md:max-w-md rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Download Section */}
      <section id="download" className="py-12 md:py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
            Download LinkUp today and start connecting with friends and family
            in a whole new way.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <a
              href="#"
              className="bg-black text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-center hover:bg-gray-800 transition text-sm md:text-base"
            >
              <FaApple className="text-xl md:text-2xl mr-2 md:mr-3" />
              <div className="text-left">
                <div className="text-xs">Also avialiable in </div>
                <div className="text-base md:text-xl">Ios</div>
              </div>
            </a>

            <a
              href="#"
              className="bg-black text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-center hover:bg-gray-800 transition text-sm md:text-base"
            >
              <FaAndroid className="text-xl md:text-2xl mr-2 md:mr-3" />
              <div className="text-left">
                <div className="text-xs">Also avialiable in </div>
                <div className="text-base md:text-xl">Android</div>
              </div>
            </a>
          </div>

          <div className="mt-10 md:mt-16 flex justify-center">
            <img
              src={image}
              alt="LinkUp on multiple devices"
              className="max-w-full md:max-w-4xl rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <svg
                className="h-8 w-8 md:h-10 md:w-10 text-pink-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path
                  fill="white"
                  d="M7 13a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM7 19h10a1 1 0 001-1v-2a3 3 0 00-3-3H9a3 3 0 00-3 3v2a1 1 0 001 1z"
                />
              </svg>
              <span className="ml-2 md:ml-3 text-xl md:text-2xl font-bold">
                LinkUp
              </span>
            </div>

            <div className="flex space-x-4 md:space-x-6">
              <a href="#" className="hover:text-pink-500 transition">
                <svg
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <svg
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <svg
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>

          <hr className="border-gray-800 my-6 md:my-8" />

          <div className="text-center text-gray-500 text-xs md:text-sm">
            © 2025 LinkUp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};



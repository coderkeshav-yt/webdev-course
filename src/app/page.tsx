"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Courses', href: '/learn' },
    { name: 'Playground', href: '/playground' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'Community', href: '/community' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Enhanced Header with Responsive Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">W</span>
                </div>
                <span className={`text-2xl font-bold tracking-tight ${
                  isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                }`}>
                  WebDev Hub
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-1"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/learn"
                className={`ml-4 px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105 ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Get Started
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden p-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                className={`w-6 h-6 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 rounded-lg text-base font-medium ${
                        isScrolled
                          ? 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800'
                          : 'text-white hover:bg-white/10'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/learn"
                    className="block w-full px-4 py-3 mt-4 text-center rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Add padding to account for fixed header */}
      <div className="h-16 md:h-20" />

      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600 via-blue-700 to-indigo-900 dark:from-gray-800 dark:via-gray-900 dark:to-black min-h-screen">
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
        
        {/* Enhanced Hero Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40"
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 text-white rounded-full backdrop-blur-sm border border-white/20">
                🚀 The Ultimate Web Development Learning Platform
              </span>
              <h2 className="text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Master Modern
                <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent"> Web Development</span>
              </h2>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Interactive tutorials, live coding environments, and hands-on projects to help you become a professional web developer.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center gap-6"
            >
              <Link 
                href="/learn" 
                className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-white/20"
              >
                Start Learning
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link 
                href="/playground" 
                className="group px-8 py-4 bg-blue-700/80 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-blue-400/30 backdrop-blur-sm"
              >
                Try Playground
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Stats Section */}
          <motion.div 
            variants={containerVariants}
            className="mt-24 grid grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "10K+", label: "Active Learners" },
              { number: "200+", label: "Video Tutorials" },
              { number: "50+", label: "Practice Projects" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent" />
      </div>

      {/* Features Section with Cards */}
      <div className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Succeed
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive learning paths designed for your success
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="group relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6">
                <span className="inline-block p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Interactive Learning</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Practice as you learn with our interactive code editor and real-time feedback system.
              </p>
            </div>

            <div className="group relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6">
                <span className="inline-block p-3 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project-Based</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Build real-world projects that you can add to your portfolio and showcase to employers.
              </p>
            </div>

            <div className="group relative bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6">
                <span className="inline-block p-3 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Modern Curriculum</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Stay up-to-date with the latest web technologies and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Tracks Section */}
      <div className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Learning Tracks
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose your path and start learning today
            </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Track Cards */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Tutorials</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Step-by-step guides covering HTML, CSS, JavaScript, React, and more.</p>
              <Link href="/learn" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                Start Learning →
              </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Interactive Coding</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Practice coding in your browser with our live code editor.</p>
            <Link href="/playground" className="text-blue-600 dark:text-blue-400 hover:underline">Open Editor →</Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Projects</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Build real-world applications with guided projects.</p>
            <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">View Projects →</Link>
          </div>
        </div>
            </div>
          </div>

      {/* CTA Section with Enhanced Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-900 dark:from-gray-800 dark:to-black py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers learning with WebDev Learning Hub
          </p>
          <Link 
            href="/learn"
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Started for Free
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
        </div>

      {/* Modern Footer */}
      <footer className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">WebDev Learning Hub</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Open source learning platform for web developers.
              </p>
            </div>
            {/* Add more footer sections as needed */}
              </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
            <p>© 2024 WebDev Learning Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

"use client";

import Link from 'next/link';

export default function LearningHub() {
  const sections = [
    {
      title: "Frontend Development",
      description: "Master the fundamentals of web development",
      courses: [
        {
          title: "HTML & CSS",
          description: "Build and style modern websites",
          image: "🎨",
          href: "/learn/css",
          duration: "6 weeks",
          level: "Beginner"
        },
        {
          title: "JavaScript",
          description: "Add interactivity to your websites",
          image: "⚡",
          href: "/learn/javascript",
          duration: "8 weeks",
          level: "Intermediate"
        },
        {
          title: "React",
          description: "Build modern web applications",
          image: "⚛️",
          href: "/learn/react",
          duration: "10 weeks",
          level: "Advanced"
        }
      ]
    },
    {
      title: "Backend Development",
      description: "Learn server-side programming",
      courses: [
        {
          title: "Node.js",
          description: "Server-side JavaScript",
          image: "🚀",
          href: "/learn/nodejs",
          duration: "8 weeks",
          level: "Intermediate"
        },
        {
          title: "Databases",
          description: "SQL and NoSQL databases",
          image: "🗄️",
          href: "/learn/databases",
          duration: "6 weeks",
          level: "Intermediate"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            WebDev Learning Hub
          </Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Start your journey to becoming a web developer
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.title} className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {section.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.courses.map((course) => (
                  <Link
                    key={course.title}
                    href={course.href}
                    className="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="text-4xl mb-4">{course.image}</div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">
                          Duration: {course.duration}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {course.level}
                        </span>
                      </div>
                    </div>
                    <div className="px-8 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
                      <span className="text-blue-500 dark:text-blue-400 font-medium flex items-center">
                        Start Course
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Start Guide */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">New to Web Development?</h2>
            <p className="mb-6">
              Start with our beginner-friendly HTML & CSS course to build a strong foundation.
            </p>
            <Link 
              href="/learn/css"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 
"use client";

import Link from 'next/link';

export default function Tutorials() {
  const tutorials = [
    {
      category: "HTML",
      items: [
        { title: "HTML Basics", duration: "2 hours", level: "Beginner", href: "/learn/html/basics" },
        { title: "HTML Forms", duration: "1.5 hours", level: "Intermediate", href: "/learn/html/forms" },
        { title: "Semantic HTML", duration: "1 hour", level: "Intermediate", href: "/learn/html/semantic" }
      ]
    },
    {
      category: "CSS",
      items: [
        { title: "CSS Fundamentals", duration: "2.5 hours", level: "Beginner", href: "/learn/css" },
        { title: "Flexbox & Grid", duration: "2 hours", level: "Intermediate", href: "/learn/css/layout" },
        { title: "Animations", duration: "1.5 hours", level: "Advanced", href: "/learn/css/animations" }
      ]
    },
    {
      category: "JavaScript",
      items: [
        { title: "JS Basics", duration: "3 hours", level: "Beginner", href: "/learn/javascript/basics" },
        { title: "DOM Manipulation", duration: "2 hours", level: "Intermediate", href: "/learn/javascript/dom" },
        { title: "Async JavaScript", duration: "2.5 hours", level: "Advanced", href: "/learn/javascript/async" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/learn" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Learning Hub
          </Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Web Development Tutorials
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Step-by-step guides to master web development
          </p>
        </div>

        <div className="space-y-12">
          {tutorials.map((section) => (
            <div key={section.category} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((tutorial) => (
                  <Link
                    key={tutorial.title}
                    href={tutorial.href}
                    className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {tutorial.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {tutorial.level}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tutorial.duration}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Not sure where to start?</h2>
          <p className="mb-6">Follow our recommended learning path to become a full-stack developer.</p>
          <Link 
            href="/learn/path"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            View Learning Path
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  );
} 
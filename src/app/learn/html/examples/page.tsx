"use client";
import Link from "next/link";
import { useState } from 'react';

// Define the example interface
interface HTMLExample {
  id: string;
  title: string;
  category: string;
  difficulty: number;
  code: string;
  description: string;
  tags: string[];
}

export default function HTMLExamples() {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Example data
  const examples: HTMLExample[] = [
    {
      id: '1',
      title: 'Basic Page Structure',
      category: 'basic',
      difficulty: 1,
      description: 'A basic HTML5 document structure with header, main content, and footer.',
      tags: ['structure', 'semantic', 'basic'],
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h2>About Us</h2>
    <p>This is a sample website.</p>
  </main>
  <footer>
    <p>© 2024 My Website</p>
  </footer>
</body>
</html>`
    },
    {
      id: '2',
      title: 'Contact Form',
      category: 'interactive',
      difficulty: 2,
      description: 'A responsive contact form with various input types and validation.',
      tags: ['form', 'input', 'validation'],
      code: `<form class="contact-form">
  <div class="form-group">
    <label for="name">Full Name:</label>
    <input type="text" 
           id="name" 
           name="name" 
           required 
           minlength="2"
           placeholder="John Doe">
  </div>

  <div class="form-group">
    <label for="email">Email Address:</label>
    <input type="email" 
           id="email" 
           name="email" 
           required
           placeholder="john@example.com">
  </div>

  <div class="form-group">
    <label for="subject">Subject:</label>
    <select id="subject" name="subject" required>
      <option value="">Choose a subject</option>
      <option value="general">General Inquiry</option>
      <option value="support">Technical Support</option>
      <option value="feedback">Feedback</option>
    </select>
  </div>

  <div class="form-group">
    <label for="message">Message:</label>
    <textarea id="message" 
              name="message" 
              rows="5" 
              required
              placeholder="Your message here..."></textarea>
  </div>

  <button type="submit">Send Message</button>
</form>`
    },
    {
      id: '3',
      title: 'Responsive Image Gallery',
      category: 'advanced',
      difficulty: 3,
      description: 'A responsive image gallery with figure captions and semantic markup.',
      tags: ['images', 'responsive', 'gallery'],
      code: `<section class="gallery">
  <h2>Photo Gallery</h2>
  
  <div class="gallery-grid">
    <figure>
      <img src="image1.jpg" 
           alt="Mountain landscape"
           loading="lazy"
           width="400"
           height="300">
      <figcaption>Beautiful mountain view</figcaption>
    </figure>

    <figure>
      <img src="image2.jpg" 
           alt="Ocean sunset"
           loading="lazy"
           width="400"
           height="300">
      <figcaption>Sunset at the beach</figcaption>
    </figure>

    <figure>
      <picture>
        <source media="(min-width: 800px)" srcset="large.jpg">
        <source media="(min-width: 400px)" srcset="medium.jpg">
        <img src="small.jpg" alt="Responsive image">
      </picture>
      <figcaption>Responsive image example</figcaption>
    </figure>
  </div>
</section>`
    },
    {
      id: '4',
      title: 'Interactive Quiz',
      category: 'interactive',
      difficulty: 3,
      description: 'An interactive quiz using HTML form elements and fieldsets.',
      tags: ['form', 'interactive', 'quiz'],
      code: `<form class="quiz-form">
  <fieldset>
    <legend>HTML Quiz</legend>
    
    <div class="question">
      <p>1. What does HTML stand for?</p>
      <div class="options">
        <input type="radio" id="q1a" name="q1" value="a">
        <label for="q1a">Hyper Text Markup Language</label>
        
        <input type="radio" id="q1b" name="q1" value="b">
        <label for="q1b">High Tech Modern Language</label>
        
        <input type="radio" id="q1c" name="q1" value="c">
        <label for="q1c">Hyper Transfer Markup Language</label>
      </div>
    </div>

    <div class="question">
      <p>2. Which tag is used for creating a hyperlink?</p>
      <div class="options">
        <input type="radio" id="q2a" name="q2" value="a">
        <label for="q2a">&lt;link&gt;</label>
        
        <input type="radio" id="q2b" name="q2" value="b">
        <label for="q2b">&lt;a&gt;</label>
        
        <input type="radio" id="q2c" name="q2" value="c">
        <label for="q2c">&lt;href&gt;</label>
      </div>
    </div>
  </fieldset>

  <button type="submit">Submit Quiz</button>
</form>`
    },
    {
      id: '5',
      title: 'Data Table',
      category: 'table',
      difficulty: 2,
      description: 'A structured data table with proper semantic markup.',
      tags: ['table', 'data', 'semantic'],
      code: `<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
      <th>Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>150</td>
      <td>$3,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>200</td>
      <td>$4,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <td>350</td>
      <td>$7,000</td>
    </tr>
  </tfoot>
</table>`
    }
  ];

  // Filter buttons data
  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'basic', label: 'Basic' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'interactive', label: 'Interactive' }
  ];

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Handle filter click
  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  // Handle copy code
  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  // Handle try it live
  const handleTryLive = (code: string) => {
    const encodedCode = encodeURIComponent(code);
    window.open(`https://codepen.io/pen?html=${encodedCode}`, '_blank');
  };

  // Filter examples
  const filteredExamples = examples.filter(example => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      example.title.toLowerCase().includes(searchLower) ||
      example.description.toLowerCase().includes(searchLower) ||
      example.tags.some(tag => tag.toLowerCase().includes(searchLower));
    
    const matchesFilter = activeFilter === 'all' || example.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  // Add this function to safely render HTML content
  const renderPreview = (example: HTMLExample) => {
    if (example.category === 'table') {
      return (
        <div className="overflow-x-auto">
          <table className="min-w-full border dark:border-gray-700">
            <caption className="p-2 text-left text-gray-700 dark:text-gray-300">
              Monthly Sales Report
            </caption>
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border px-4 py-2">Month</th>
                <th className="border px-4 py-2">Sales</th>
                <th className="border px-4 py-2">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">January</td>
                <td className="border px-4 py-2">150</td>
                <td className="border px-4 py-2">$3,000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">February</td>
                <td className="border px-4 py-2">200</td>
                <td className="border px-4 py-2">$4,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="border px-4 py-2">Total</th>
                <td className="border px-4 py-2">350</td>
                <td className="border px-4 py-2">$7,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      );
    }

    // For non-table content, wrap in a div
    return (
      <div className="preview-content">
        <div dangerouslySetInnerHTML={{ __html: example.code }} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              WebDev Learning Hub
            </Link>
            <Link href="/learn/html" className="text-white hover:text-blue-100">
              ← Back to HTML
            </Link>
          </nav>
          
          <div className="mt-16 mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              HTML Examples
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Interactive examples demonstrating HTML elements, attributes, and best practices
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="search"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search examples..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                         dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filterButtons.map(button => (
                <button
                  key={button.id}
                  onClick={() => handleFilterClick(button.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 
                    ${activeFilter === button.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredExamples.map((example) => (
            <div
              key={example.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                {/* Example Card Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {example.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {example.description}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {example.category}
                  </span>
                </div>

                {/* Code Section */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">Code:</h4>
                      <button 
                        onClick={() => handleCopyCode(example.code)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700"
                      >
                        {copiedCode === example.code ? '✓ Copied!' : 'Copy Code'}
                      </button>
                    </div>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-4 rounded-xl overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>

                  {/* Preview Section */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">Preview:</h4>
                      <button 
                        onClick={() => handleTryLive(example.code)}
                        className="text-green-600 dark:text-green-400 hover:text-green-700"
                      >
                        Try It Live ↗
                      </button>
                    </div>
                    <div className="border dark:border-gray-700 rounded-xl p-4 bg-white dark:bg-gray-800">
                      {renderPreview(example)}
                    </div>
                  </div>
                </div>

                {/* Tags and Difficulty */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {example.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 dark:text-gray-400">Difficulty:</span>
                    <div className="flex">
                      {[...Array(3)].map((_, i) => (
                        <span 
                          key={i}
                          className={i < example.difficulty ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
          <p>WebDev Learning Hub - Open Source Learning Platform</p>
        </div>
      </footer>
    </div>
  );
} 
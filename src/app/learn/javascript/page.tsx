import Link from "next/link";

export default function JavaScriptLearning() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">WebDev Learning Hub</Link>
          <Link href="/learn" className="text-blue-600 dark:text-blue-400 hover:underline">← Back to Courses</Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">JavaScript Fundamentals</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Introduction to JavaScript</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                JavaScript is a versatile programming language that enables interactive and dynamic web content. Learn modern JavaScript features and best practices.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                <pre className="font-mono text-sm">
                  <code>{`// Modern JavaScript Example
const greeting = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(\`Hello, \${name}!\`);
    }, 1000);
  });
};

async function welcome() {
  const message = await greeting('Developer');
  console.log(message);
}`}</code>
                </pre>
              </div>
            </section>

            {/* Variables and Data Types */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Variables and Data Types</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Variable Declaration</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">let</code> - Block-scoped variable</li>
                    <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">const</code> - Constant value</li>
                    <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">var</code> - Function-scoped variable (legacy)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data Types</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Primitive: String, Number, Boolean, null, undefined, Symbol</li>
                    <li>Reference: Object, Array, Function</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Modern Features */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Modern JavaScript Features</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore ES6+ features that make JavaScript more powerful and expressive.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mb-4">
                <pre className="font-mono text-sm">
                  <code>{`// Destructuring
const { name, age } = person;

// Spread operator
const newArray = [...oldArray];

// Template literals
const message = \`Hello \${name}!\`;

// Arrow functions
const add = (a, b) => a + b;

// Optional chaining
const value = object?.property?.field;`}</code>
                </pre>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Arrow Functions and Lexical Scope</li>
                  <li>Destructuring and Spread Syntax</li>
                  <li>Promises and Async/Await</li>
                  <li>Modules and Import/Export</li>
                  <li>Classes and Object-Oriented Features</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Learning Path</h2>
              <nav className="space-y-2">
                <Link href="#introduction" className="block text-blue-600 dark:text-blue-400 hover:underline">1. Introduction to JavaScript</Link>
                <Link href="#variables" className="block text-blue-600 dark:text-blue-400 hover:underline">2. Variables & Data Types</Link>
                <Link href="#functions" className="block text-blue-600 dark:text-blue-400 hover:underline">3. Functions & Scope</Link>
                <Link href="#objects" className="block text-blue-600 dark:text-blue-400 hover:underline">4. Objects & Arrays</Link>
                <Link href="#async" className="block text-blue-600 dark:text-blue-400 hover:underline">5. Async Programming</Link>
                <Link href="#dom" className="block text-blue-600 dark:text-blue-400 hover:underline">6. DOM Manipulation</Link>
                <Link href="#modules" className="block text-blue-600 dark:text-blue-400 hover:underline">7. Modules & Bundling</Link>
                <Link href="#testing" className="block text-blue-600 dark:text-blue-400 hover:underline">8. Testing & Debugging</Link>
              </nav>

              <div className="mt-8">
                <h3 className="font-semibold mb-2">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      MDN Web Docs - JavaScript
                    </a>
                  </li>
                  <li>
                    <a href="https://javascript.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      JavaScript.info
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-300">
          <p>WebDev Learning Hub - Open Source Learning Platform</p>
        </div>
      </footer>
    </div>
  );
}
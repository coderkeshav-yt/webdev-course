"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import { Component, ErrorInfo, ReactNode } from 'react';
import CodeModalWrapper from './components/CodeModalWrapper';
import ViewCodeButton from './components/ViewCodeButton';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
          <div className="text-center p-6">
            <h2 className="text-xl font-semibold text-red-600 mb-4">Something went wrong</h2>
            <pre className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {this.state.error?.message}
            </pre>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component
function LoadingState() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default function CSSLearning() {
  const [isClient, setIsClient] = useState(false);
  const [activeCode, setActiveCode] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
    <ErrorBoundary>
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              WebDev Learning Hub
            </Link>
            <Link href="/learn" className="text-blue-600 dark:text-blue-400 hover:underline">
              ← Back to Courses
            </Link>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* 1. Introduction Section */}
              <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg" id="introduction">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Introduction to CSS
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    CSS (Cascading Style Sheets) is the language used to style and layout web pages. It works alongside HTML to define how elements should look, behave, and be positioned on the page.
                  </p>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
                    <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Key Concepts:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li>Cascading: Styles can be inherited and overridden</li>
                      <li>Specificity: Determines which styles take precedence</li>
                      <li>Box Model: How elements are sized and spaced</li>
                      <li>Layout Systems: Flexbox and Grid for positioning</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-200">Basic Syntax:</h3>
                    <code className="text-sm text-blue-600 dark:text-blue-400">
                      {`selector {
  property: value;    /* Single property */
  property: value1 value2;    /* Multiple values */
}`}
                    </code>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      <p>Where:</p>
                      <ul className="list-disc list-inside mt-1">
                        <li>selector: Targets HTML elements</li>
                        <li>property: What aspect to style</li>
                        <li>value: How to style it</li>
                      </ul>
                    </div>
                  </div>
              </div>
            </section>

              {/* 2. Selectors Section */}
              <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg" id="selectors">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  CSS Selectors
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    CSS Selectors are patterns that target HTML elements for styling. Understanding selectors is crucial for writing efficient and maintainable CSS.
                  </p>

                  {/* Basic Selectors */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Basic Selectors</h3>
              <div className="space-y-4">
                <div>
                        <code className="text-blue-600 dark:text-blue-400">{`element { }`}</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Type selector - Targets all elements of specified type
                        </p>
                        <div className="mt-1 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                          <p className="text-sm text-gray-500">Example:</p>
                          <code className="block mt-1 text-sm text-blue-600 dark:text-blue-400">{`p { color: blue; }  /* Styles all <p> elements */`}</code>
                        </div>
                      </div>

                      <div>
                        <code className="text-blue-600 dark:text-blue-400">{`.class-name { }`}</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Class selector - Most versatile, can be reused across multiple elements
                        </p>
                        <div className="mt-1 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                          <p className="text-sm text-gray-500">Example:</p>
                          <code className="block mt-1 text-sm text-blue-600 dark:text-blue-400">{`.btn { background: blue; }  /* Styles elements with class="btn" */`}</code>
                        </div>
                      </div>

                      <div>
                        <code className="text-blue-600 dark:text-blue-400">{`#id-name { }`}</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          ID selector - Highest specificity, should be used sparingly
                        </p>
                        <div className="mt-1 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                          <p className="text-sm text-gray-500">Example:</p>
                          <code className="block mt-1 text-sm text-blue-600 dark:text-blue-400">{`#header { position: fixed; }  /* Styles element with id="header" */`}</code>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Selectors */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Advanced Selectors</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Attribute Selectors</h4>
                        <div className="space-y-2">
                          <code className="block text-blue-600 dark:text-blue-400">{`[attr] { }              /* Elements with attr attribute */
[attr="value"] { }        /* Exact match */
[attr^="value"] { }       /* Starts with value */
[attr$="value"] { }       /* Ends with value */
[attr*="value"] { }       /* Contains value */`}</code>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Pseudo-classes</h4>
                        <div className="space-y-2">
                          <code className="block text-blue-600 dark:text-blue-400">{`:hover { }              /* Mouse over element */
:focus { }              /* Element has focus */
:first-child { }        /* First child element */
:nth-child(2n) { }      /* Even numbered elements */
:not(.class) { }        /* Negation pseudo-class */`}</code>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Combinators */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Combinators</h3>
                    <div className="space-y-4">
                      <div>
                        <code className="text-blue-600 dark:text-blue-400">{`parent > child { }`}</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Direct child - Selects elements that are direct children
                        </p>
                        <div className="mt-1 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                          <code className="block text-sm text-blue-600 dark:text-blue-400">{`nav > a { }  /* Selects <a> that are direct children of <nav> */`}</code>
                        </div>
                      </div>

                      <div>
                        <code className="text-blue-600 dark:text-blue-400">{`element1 + element2 { }`}</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Adjacent sibling - Selects element that comes immediately after
                        </p>
                        <div className="mt-1 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                          <code className="block text-sm text-blue-600 dark:text-blue-400">{`h2 + p { }  /* Selects <p> that comes right after <h2> */`}</code>
                        </div>
                      </div>

                      <div>
                        <code className="text-blue-600 dark:text-blue-400">{`element1 ~ element2 { }`}</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          General sibling - Selects all matching siblings that come after
                        </p>
                        <div className="mt-1 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
                          <code className="block text-sm text-blue-600 dark:text-blue-400">{`h2 ~ p { }  /* Selects all <p> that come after <h2> */`}</code>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Best Practices */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Best Practices</h3>
                <div className="space-y-4">
                  <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">DO's:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                          <li>Use classes for reusable styles</li>
                          <li>Keep selectors short and focused</li>
                          <li>Use semantic class names</li>
                          <li>Follow a naming convention (e.g., BEM)</li>
                          <li>Group related selectors</li>
                  </ul>
                </div>

                <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">DON'Ts:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                          <li>Avoid over-qualified selectors (e.g., div.class)</li>
                          <li>Don't use IDs for styling when possible</li>
                          <li>Avoid deeply nested selectors</li>
                          <li>Don't use !important as a quick fix</li>
                          <li>Avoid type selectors when classes can be used</li>
                  </ul>
                      </div>
                    </div>
                  </div>

                  {/* Performance Tips */}
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Performance Tips</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      <li>Right-to-left matching improves selector efficiency</li>
                      <li>Avoid universal selectors (*) when possible</li>
                      <li>Be specific but not too specific</li>
                      <li>Use class selectors for better performance</li>
                      <li>Consider the reusability of your selectors</li>
                    </ul>
                  </div>

                  {/* Interactive Examples */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Interactive Examples</h3>
                    
                    {/* Hover Effects Demo */}
                    <div className="space-y-4 mb-8">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">Hover and State Selectors</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded 
                                          hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 
                                          active:bg-blue-700 transition-all">
                          Hover, Focus, and Active States
                        </button>
                        <code className="text-sm bg-gray-800 text-gray-200 p-2 rounded">{`
.button:hover { background-color: #2563eb; }
.button:focus { ring: 2px #60a5fa; }
.button:active { background-color: #1d4ed8; }
                        `}</code>
                      </div>
                    </div>

                    {/* Complex Selectors Demo */}
                    <div className="space-y-4 mb-8">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">Complex Selector Patterns</h4>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="space-y-2">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/20">First Child</div>
                          <div className="p-2">Second Child</div>
                          <div className="p-2 bg-blue-100 dark:bg-blue-900/20">Third Child</div>
                          <div className="p-2">Fourth Child</div>
                        </div>
                        <code className="block mt-4 text-sm bg-gray-800 text-gray-200 p-2 rounded">{`
/* Alternate styling */
div:nth-child(odd) { background-color: #dbeafe; }

/* First and last */
div:first-child { border-top-left-radius: 0.5rem; }
div:last-child { border-bottom-right-radius: 0.5rem; }
                          `}</code>
                      </div>
                    </div>

                    {/* Attribute Selectors Demo */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">Attribute Selectors in Action</h4>
                      <div className="grid gap-4">
                        <input 
                          type="text" 
                          placeholder="Type here..."
                          className="p-2 border rounded focus:border-blue-500 focus:outline-none"
                          data-type="text-input"
                        />
                        <input 
                          type="email" 
                          placeholder="Enter email..."
                          className="p-2 border rounded focus:border-blue-500 focus:outline-none"
                          data-type="email-input"
                        />
                        <code className="text-sm bg-gray-800 text-gray-200 p-2 rounded">{`
[data-type="text-input"] { /* Styles for text input */ }
[data-type="email-input"] { /* Styles for email input */ }
input[type^="e"] { /* Styles for inputs starting with 'e' */ }
                        `}</code>
                      </div>
                    </div>
                  </div>

                  {/* More Interactive Examples */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Advanced Interactive Examples</h3>
                    
                    {/* Form Input States */}
                    <div className="space-y-4 mb-8">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">Form Input States</h4>
                      <div className="grid gap-4">
                        <input 
                          type="text" 
                          placeholder="Focus me..."
                          className="p-2 border rounded w-full
                                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                    valid:border-green-500 invalid:border-red-500
                                    disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                        <input 
                          type="email" 
                          placeholder="Enter valid email..."
                          className="p-2 border rounded w-full
                                    focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                                    valid:border-green-500 invalid:border-red-500"
                          required
                        />
                        <input 
                          type="text" 
                          placeholder="Disabled input..."
                          disabled
                          className="p-2 border rounded w-full"
                        />
                        <code className="text-sm bg-gray-800 text-gray-200 p-2 rounded">{`
input:focus { ring: 2px; border-color: blue; }
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:disabled { background: gray; cursor: not-allowed; }
                        `}</code>
                      </div>
                    </div>

                    {/* Complex List Patterns */}
                    <div className="space-y-4 mb-8">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">Complex List Patterns</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <div 
                              key={num}
                              className={`p-2 rounded ${
                                num % 2 === 0 
                                  ? 'bg-blue-100 dark:bg-blue-900/20' 
                                  : 'bg-gray-100 dark:bg-gray-800'
                              } ${
                                num === 1 && 'border-t-2 border-blue-500'
                              } ${
                                num === 5 && 'border-b-2 border-blue-500'
                              }`}
                            >
                              Item {num}
                            </div>
                          ))}
                        </div>
                        <code className="text-sm bg-gray-800 text-gray-200 p-2 rounded">{`
/* Complex nth-child patterns */
li:nth-child(even) { background: blue; }
li:first-child { border-top: 2px solid; }
li:last-child { border-bottom: 2px solid; }
li:nth-child(3n+1) { font-weight: bold; }
                        `}</code>
                      </div>
                    </div>

                    {/* Complex Selector Patterns */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">Advanced Selector Patterns</h4>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="space-y-4">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/20" data-type="special">1</div>
                            <div className="p-2 bg-gray-100 dark:bg-gray-800">2</div>
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/20" data-type="special">3</div>
                          </div>
                          <code className="block text-sm bg-gray-800 text-gray-200 p-2 rounded">{`
/* Complex attribute and state selectors */
[data-type="special"] { background: blue; }
div:not([data-type]) { background: gray; }
div:has(+ div[data-type]) { /* Sibling combinations */ }
                          `}</code>
                        </div>
                      </div>
                    </div>

                    {/* Hover and Focus Patterns */}
                    <div className="space-y-4 mt-8">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">Interactive State Patterns</h4>
                      <div className="grid gap-4">
                        <button className="group relative px-4 py-2 bg-blue-500 text-white rounded
                                          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                          Hover me
                          <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 
                                         opacity-0 group-hover:opacity-100 transition-opacity
                                         bg-gray-800 text-white px-2 py-1 rounded text-sm">
                            Tooltip appears on hover
                          </span>
                        </button>
                        <code className="text-sm bg-gray-800 text-gray-200 p-2 rounded">{`
.group:hover .tooltip { opacity: 1; }
.button:focus { ring: 2px; }
.button:active { transform: scale(0.98); }
                          `}</code>
                      </div>
                    </div>
                  </div>

                  {/* Troubleshooting Guide */}
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Common Issues & Solutions</h3>
                    <div className="space-y-4">
                  <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Selector Not Working?</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                          <li>Check selector specificity (ID vs class)</li>
                          <li>Verify HTML structure matches selector pattern</li>
                          <li>Inspect for typos in class names or attributes</li>
                          <li>Look for conflicting styles</li>
                          <li>Confirm CSS file is properly linked</li>
                    </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Common Mistakes</h4>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-red-500">
                            <p className="text-red-600 dark:text-red-400 font-medium">❌ Wrong</p>
                            <code className="block text-sm">{`.my-class.another-class {}`} // No space between classes</code>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-500">
                            <p className="text-green-600 dark:text-green-400 font-medium">✅ Correct</p>
                            <code className="block text-sm">{`.my-class .another-class {}`} // Space for descendant</code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Selector Guide */}
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Visual Selector Guide</h3>
                    <div className="space-y-6">
                      <div className="relative p-4 bg-white dark:bg-gray-800 rounded-lg">
                        <div className="border-2 border-blue-500 p-4 rounded">
                          <div className="border-2 border-green-500 p-4 rounded">
                            <p className="border-2 border-red-500 p-2 rounded">Nested Elements</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <code className="block text-sm bg-gray-800 text-gray-200 p-2 rounded">{`
/* Different ways to select the paragraph */
.outer .inner p { }           /* Descendant */
.outer > .inner > p { }       /* Direct child */
.outer:has(p) { }            /* Parent contains p */
                          `}</code>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Selector Visualization</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2 p-4 bg-white dark:bg-gray-800 rounded">
                            <div className="h-8 bg-blue-200 dark:bg-blue-800"></div>
                            <div className="h-8 bg-green-200 dark:bg-green-800"></div>
                            <div className="h-8 bg-yellow-200 dark:bg-yellow-800"></div>
                          </div>
                          <code className="text-sm bg-gray-800 text-gray-200 p-2 rounded">{`
div:first-of-type { background: blue; }
div:nth-of-type(2) { background: green; }
div:last-of-type { background: yellow; }
                          `}</code>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </section>

              {/* 3. Box Model Section */}
              <section id="box-model">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Box Model</h2>
                
                {/* Box Model Visualization */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-8">
                  {/* Content Box */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">content-box (default)</h3>
                    <div className="relative bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 rounded-lg border border-dashed border-gray-300">
                      {/* Margin Layer */}
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg relative">
                        <span className="absolute -top-2 left-2 text-xs bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded">
                          Margin
                        </span>
                        {/* Border Layer */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border-4 border-dashed border-blue-400 p-4 rounded-lg relative">
                          <span className="absolute top-8 left-2 text-xs bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                            Border
                          </span>
                          {/* Padding Layer */}
                          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg relative">
                            <span className="absolute top-20 left-2 text-xs bg-green-100 dark:bg-green-800 px-2 py-1 rounded">
                              Padding
                            </span>
                            {/* Content */}
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 text-center rounded-lg min-h-[80px] flex items-center justify-center">
                              <span className="text-sm sm:text-base">Content Area</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Code Example - Responsive Font Size */}
                      <code className="block mt-4 text-xs sm:text-sm bg-gray-800 text-gray-200 p-2 sm:p-3 rounded overflow-x-auto">{`
.content-box {
  box-sizing: content-box;
  width: 200px;      /* Content only */
  padding: 20px;     /* Adds to width */
  border: 4px;       /* Adds to width */
  /* Total: 200 + 40 + 8 = 248px */
}`}</code>
                    </div>
                  </div>

                  {/* Border Box */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">border-box (recommended)</h3>
                    <div className="relative bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 rounded-lg border border-dashed border-gray-300">
                      {/* Margin Layer */}
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg relative">
                        <span className="absolute -top-2 left-2 text-xs bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded">
                          Margin
                        </span>
                        {/* Combined Border & Padding */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 border-4 border-solid border-blue-400 p-4 rounded-lg relative">
                          <span className="absolute top-8 left-2 text-xs bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded whitespace-nowrap">
                            Border & Padding included
                          </span>
                          {/* Content */}
                          <div className="bg-red-50 dark:bg-red-900/20 p-4 text-center rounded-lg min-h-[80px] flex items-center justify-center">
                            <span className="text-sm sm:text-base">Total Width: 200px</span>
                          </div>
                        </div>
                      </div>
                      {/* Code Example - Responsive Font Size */}
                      <code className="block mt-4 text-xs sm:text-sm bg-gray-800 text-gray-200 p-2 sm:p-3 rounded overflow-x-auto">{`
.border-box {
  box-sizing: border-box;
  width: 200px;      /* Total width */
  padding: 20px;     /* Inside width */
  border: 4px;       /* Inside width */
  /* Always 200px total */
}`}</code>
                    </div>
                  </div>
                </div>

                {/* Key Differences - Responsive Text and Spacing */}
                <div className="mt-6 sm:mt-8 bg-blue-50 dark:bg-blue-900/20 p-4 sm:p-6 rounded-lg">
                  <h4 className="font-medium mb-2 sm:mb-4 text-gray-700 dark:text-gray-300">Key Differences:</h4>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <li>content-box: padding and border increase total size</li>
                    <li>border-box: padding and border included in width</li>
                    <li>border-box is more predictable for layouts</li>
                    <li>Modern CSS typically uses border-box</li>
                  </ul>
                </div>

                {/* Interactive Examples - Better Mobile Layout */}
                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Interactive Examples</h4>
                  
                  {/* Responsive Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Example Boxes */}
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-full h-20 bg-blue-100 dark:bg-blue-900/20 rounded-lg border-2 border-blue-400"></div>
                      <p className="mt-2 text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400">
                        content-box example
                      </p>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-full h-20 bg-green-100 dark:bg-green-900/20 rounded-lg border-2 border-green-400"></div>
                      <p className="mt-2 text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400">
                        border-box example
                      </p>
                    </div>

                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                      <div className="w-full h-20 bg-purple-100 dark:bg-purple-900/20 rounded-lg border-2 border-purple-400"></div>
                      <p className="mt-2 text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400">
                        mixed example
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. Layout Section */}
              <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg" id="layout">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">CSS Layout</h2>
                
                {/* Display Properties */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Display Properties</h3>
                    <div className="space-y-4">
                      <div>
                        <code className="text-blue-600 dark:text-blue-400">display: block;</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Takes up full width, creates line breaks
                        </p>
                        <div className="mt-2 p-4 bg-blue-100 dark:bg-blue-900/20 rounded">
                          <div className="bg-blue-200 dark:bg-blue-800 p-2 mb-2">Block element 1</div>
                          <div className="bg-blue-200 dark:bg-blue-800 p-2">Block element 2</div>
                        </div>
                      </div>

                      <div>
                        <code className="text-blue-600 dark:text-blue-400">display: inline;</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Flows with text, no line breaks
                        </p>
                        <div className="mt-2 p-4 bg-green-100 dark:bg-green-900/20 rounded">
                          <span className="bg-green-200 dark:bg-green-800 p-2">Inline 1</span>
                          <span className="bg-green-200 dark:bg-green-800 p-2">Inline 2</span>
                        </div>
                      </div>

                      <div>
                        <code className="text-blue-600 dark:text-blue-400">display: inline-block;</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Flows inline but respects width/height
                        </p>
                        <div className="mt-2 p-4 bg-purple-100 dark:bg-purple-900/20 rounded">
                          <div className="inline-block bg-purple-200 dark:bg-purple-800 p-2 w-24 h-24 mr-2">
                            Inline-block 1
                          </div>
                          <div className="inline-block bg-purple-200 dark:bg-purple-800 p-2 w-24 h-24">
                            Inline-block 2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flexbox Layout */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Flexbox Layout</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Basic Flex Container</h4>
                        <code className="block mb-2 text-blue-600 dark:text-blue-400">{`
  display: flex;
  justify-content: space-between;
align-items: center;`}</code>
                        <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900/20 rounded">
                          <div className="flex justify-between items-center space-x-4">
                            <div className="bg-blue-200 dark:bg-blue-800 p-4 rounded">Item 1</div>
                            <div className="bg-blue-200 dark:bg-blue-800 p-4 rounded">Item 2</div>
                            <div className="bg-blue-200 dark:bg-blue-800 p-4 rounded">Item 3</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Flex Direction & Wrap</h4>
                        <code className="block mb-2 text-blue-600 dark:text-blue-400">{`
display: flex;
flex-direction: column;
flex-wrap: wrap;`}</code>
                        <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 rounded">
                          <div className="flex flex-col space-y-2">
                            <div className="bg-green-200 dark:bg-green-800 p-4 rounded">Column Item 1</div>
                            <div className="bg-green-200 dark:bg-green-800 p-4 rounded">Column Item 2</div>
                            <div className="bg-green-200 dark:bg-green-800 p-4 rounded">Column Item 3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Grid Layout */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Grid Layout</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Basic Grid</h4>
                        <code className="block mb-2 text-blue-600 dark:text-blue-400">{`
  display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;`}</code>
                        <div className="mt-4 p-4 bg-purple-100 dark:bg-purple-900/20 rounded">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-purple-200 dark:bg-purple-800 p-4 rounded">Grid Item 1</div>
                            <div className="bg-purple-200 dark:bg-purple-800 p-4 rounded">Grid Item 2</div>
                            <div className="bg-purple-200 dark:bg-purple-800 p-4 rounded">Grid Item 3</div>
                            <div className="bg-purple-200 dark:bg-purple-800 p-4 rounded">Grid Item 4</div>
                            <div className="bg-purple-200 dark:bg-purple-800 p-4 rounded">Grid Item 5</div>
                            <div className="bg-purple-200 dark:bg-purple-800 p-4 rounded">Grid Item 6</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Grid Areas</h4>
                        <code className="block mb-2 text-blue-600 dark:text-blue-400">{`
display: grid;
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";`}</code>
                        <div className="mt-4 p-4 bg-indigo-100 dark:bg-indigo-900/20 rounded">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2 bg-indigo-200 dark:bg-indigo-800 p-4 rounded">Header Area</div>
                            <div className="bg-indigo-200 dark:bg-indigo-800 p-4 rounded">Sidebar Area</div>
                            <div className="bg-indigo-200 dark:bg-indigo-800 p-4 rounded">Main Content Area</div>
                            <div className="md:col-span-2 bg-indigo-200 dark:bg-indigo-800 p-4 rounded">Footer Area</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Positioning */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Positioning</h3>
                    <div className="space-y-4">
                      <div>
                        <code className="text-blue-600 dark:text-blue-400">position: relative;</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Positioned relative to its normal position
                        </p>
                        <div className="mt-2 p-8 bg-yellow-100 dark:bg-yellow-900/20 rounded">
                          <div className="relative left-4 top-2 inline-block bg-yellow-200 dark:bg-yellow-800 p-4 rounded">
                            Relative positioned element
                          </div>
                        </div>
                      </div>

                      <div>
                        <code className="text-blue-600 dark:text-blue-400">position: absolute;</code>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          Positioned relative to nearest positioned ancestor
                        </p>
                        <div className="mt-2 p-8 bg-red-100 dark:bg-red-900/20 rounded relative">
                          <div className="absolute top-2 right-2 bg-red-200 dark:bg-red-800 p-4 rounded">
                            Absolute positioned element
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Best Practices */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Layout Best Practices</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Use Flexbox for one-dimensional layouts (rows or columns)</li>
                      <li>• Use Grid for two-dimensional layouts (rows and columns)</li>
                      <li>• Avoid using float for layouts</li>
                      <li>• Use relative units for responsive designs</li>
                      <li>• Consider mobile-first approach</li>
                      <li>• Use appropriate semantic HTML elements</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5. Typography Section */}
              <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg" id="typography">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Typography</h2>
                
                {/* Font Properties */}
                <div className="space-y-8">
                  {/* Font Family */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Font Family</h3>
                    <div className="space-y-4">
                      <code className="block text-blue-600 dark:text-blue-400">{`
font-family: 'Open Sans', Arial, sans-serif;`}</code>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <p className="font-sans mb-2">Sans-serif Font</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Clean, modern look, great for digital displays
                          </p>
                        </div>
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                          <p className="font-serif mb-2">Serif Font</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Traditional look, good for long-form reading
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Font Size and Units */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Font Size & Units</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Absolute Units</h4>
                          <code className="block mb-3 text-blue-600 dark:text-blue-400">{`
font-size: 16px;
font-size: 12pt;`}</code>
                          <div className="space-y-2">
                            <p className="text-base">Base size (16px)</p>
                            <p className="text-sm">Smaller text (14px)</p>
                            <p className="text-lg">Larger text (18px)</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Relative Units</h4>
                          <code className="block mb-3 text-blue-600 dark:text-blue-400">{`
font-size: 1rem;
font-size: 1.5em;`}</code>
                          <div className="space-y-2">
                            <p className="text-[1rem]">1rem - Relative to root</p>
                            <p className="text-[1.5em]">1.5em - Relative to parent</p>
                            <p className="text-[2rem]">2rem - Double root size</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Properties */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Text Properties</h3>
                    <div className="space-y-6">
                      {/* Font Weight */}
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Font Weight</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">font-weight: bold | normal | 100-900;</code>
                        <div className="space-y-2">
                          <p className="font-light">Light (300)</p>
                          <p className="font-normal">Normal (400)</p>
                          <p className="font-medium">Medium (500)</p>
                          <p className="font-semibold">Semibold (600)</p>
                          <p className="font-bold">Bold (700)</p>
                        </div>
                      </div>

                      {/* Text Alignment */}
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Text Alignment</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">text-align: left | center | right | justify;</code>
                        <div className="space-y-2">
                          <p className="text-left bg-blue-50 dark:bg-blue-900/20 p-2 rounded">Left aligned text</p>
                          <p className="text-center bg-blue-50 dark:bg-blue-900/20 p-2 rounded">Center aligned text</p>
                          <p className="text-right bg-blue-50 dark:bg-blue-900/20 p-2 rounded">Right aligned text</p>
                          <p className="text-justify bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                            Justified text with equal spacing between words to create aligned edges on both sides.
                            This is commonly used in print design but should be used carefully on the web.
                          </p>
                        </div>
                      </div>

                      {/* Line Height */}
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Line Height</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">line-height: 1.5 | 2 | normal;</code>
                        <div className="space-y-4">
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                            <p className="leading-normal">
                              Normal line height (1.5)<br/>
                              This is how text looks with normal spacing between lines.
                              It's generally good for readability.
                            </p>
                          </div>
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                            <p className="leading-loose">
                              Loose line height (2)<br/>
                              This text has more spacing between lines.
                              It can be good for improved readability on longer text.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Text Decoration & Transform */}
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Text Decoration & Transform</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <code className="block mb-3 text-blue-600 dark:text-blue-400">text-decoration: underline | line-through;</code>
                            <div className="space-y-2">
                              <p className="underline">Underlined text</p>
                              <p className="line-through">Strikethrough text</p>
                              <p className="underline decoration-wavy">Wavy underline</p>
                            </div>
                          </div>
                          <div>
                            <code className="block mb-3 text-blue-600 dark:text-blue-400">text-transform: uppercase | lowercase;</code>
                            <div className="space-y-2">
                              <p className="uppercase">Uppercase text</p>
                              <p className="lowercase">LOWERCASE TEXT</p>
                              <p className="capitalize">capitalized text</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography Best Practices */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Typography Best Practices</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Use a font-size of at least 16px for body text</li>
                      <li>• Maintain proper contrast ratios for accessibility</li>
                      <li>• Use relative units (rem/em) for responsive typography</li>
                      <li>• Limit line length to 65-75 characters for readability</li>
                      <li>• Choose fonts that complement each other</li>
                      <li>• Consider loading performance when using web fonts</li>
                      <li>• Ensure consistent hierarchy with font sizes</li>
                      <li>• Test typography across different devices</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Colors & Backgrounds Section */}
              <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg" id="colors">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Colors & Backgrounds</h2>
                
                {/* Color Values */}
                <div className="space-y-8">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Color Formats */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Color Formats</h4>
                        <div className="space-y-4">
                          <div>
                            <code className="block text-blue-600 dark:text-blue-400">color: #FF5733;</code>
                            <div className="mt-2 h-12 bg-[#FF5733] rounded-md"></div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Hexadecimal</p>
                          </div>
                          <div>
                            <code className="block text-blue-600 dark:text-blue-400">color: rgb(255, 87, 51);</code>
                            <div className="mt-2 h-12 bg-[rgb(255,87,51)] rounded-md"></div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">RGB</p>
                          </div>
                          <div>
                            <code className="block text-blue-600 dark:text-blue-400">color: rgba(255, 87, 51, 0.5);</code>
                            <div className="mt-2 h-12 bg-[rgba(255,87,51,0.5)] rounded-md"></div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">RGBA with opacity</p>
                          </div>
                        </div>
                      </div>

                      {/* Modern Color Syntax */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Modern Color Features</h4>
                        <div className="space-y-4">
                          <div>
                            <code className="block text-blue-600 dark:text-blue-400">color: hsl(9, 100%, 60%);</code>
                            <div className="mt-2 h-12 bg-[hsl(9,100%,60%)] rounded-md"></div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">HSL (Hue, Saturation, Lightness)</p>
                          </div>
                          <div>
                            <code className="block text-blue-600 dark:text-blue-400">color: currentColor;</code>
                            <div className="mt-2 h-12 border-2 border-current rounded-md"></div>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Current Color Keyword</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Backgrounds */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Backgrounds</h3>
                    <div className="space-y-6">
                      {/* Background Color */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Background Color</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">background-color: #e2e8f0;</code>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="h-20 bg-blue-500 rounded-md"></div>
                          <div className="h-20 bg-green-500 rounded-md"></div>
                          <div className="h-20 bg-red-500 rounded-md"></div>
                          <div className="h-20 bg-purple-500 rounded-md"></div>
                        </div>
                      </div>

                      {/* Background Image */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Background Image</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">{`
background-image: url('image.jpg');
background-size: cover;
background-position: center;`}</code>
                        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md"></div>
                      </div>

                      {/* Background Patterns */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Background Patterns</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">background: repeating-linear-gradient(...);</code>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="h-32 bg-stripes-gray rounded-md"></div>
                          <div className="h-32 bg-dots-gray rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gradients */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Gradients</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Linear Gradients</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">
                          background: linear-gradient(to right, #4f46e5, #7c3aed);
                        </code>
                        <div className="h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md"></div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Radial Gradients</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">
                          background: radial-gradient(circle, #4f46e5, #7c3aed);
                        </code>
                        <div className="h-20 bg-gradient-radial from-indigo-600 to-purple-600 rounded-md"></div>
                      </div>
                    </div>
                  </div>

                  {/* Color Accessibility */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Color Accessibility</h3>
                    <div className="space-y-6">
                      {/* Contrast Examples */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Contrast Ratios</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-white rounded-lg">
                            <div className="p-4 bg-gray-900 text-white rounded">
                              <p className="font-medium">High Contrast (Passing)</p>
                              <span className="text-sm">Ratio: 21:1</span>
                            </div>
                          </div>
                          <div className="p-4 bg-gray-200 rounded-lg">
                            <div className="p-4 bg-gray-400 text-gray-500 rounded">
                              <p className="font-medium">Low Contrast (Failing)</p>
                              <span className="text-sm">Ratio: 1.5:1</span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          WCAG 2.1 requires a minimum contrast ratio of 4.5:1 for normal text
                        </p>
                      </div>

                      {/* Color Blindness Considerations */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Color Blindness Safe Palettes</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="space-y-2">
                            <div className="h-12 bg-blue-700 rounded-md"></div>
                            <p className="text-sm text-center">Blue (#1D4ED8)</p>
                          </div>
                          <div className="space-y-2">
                            <div className="h-12 bg-yellow-500 rounded-md"></div>
                            <p className="text-sm text-center">Yellow (#EAB308)</p>
                          </div>
                          <div className="space-y-2">
                            <div className="h-12 bg-purple-700 rounded-md"></div>
                            <p className="text-sm text-center">Purple (#7E22CE)</p>
                          </div>
                          <div className="space-y-2">
                            <div className="h-12 bg-orange-600 rounded-md"></div>
                            <p className="text-sm text-center">Orange (#EA580C)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Gradients */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Advanced Gradients</h3>
                    <div className="space-y-6">
                      {/* Multiple Color Stops */}
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Multiple Color Stops</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">
                          background: linear-gradient(45deg, #f59e0b, #ef4444, #8b5cf6);
                        </code>
                        <div className="h-20 bg-gradient-to-r from-amber-500 via-red-500 to-purple-500 rounded-md"></div>
                      </div>

                      {/* Repeating Gradients */}
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Repeating Gradients</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">
                          background: repeating-linear-gradient(45deg, #93c5fd 0px, #93c5fd 10px, #60a5fa 10px, #60a5fa 20px);
                        </code>
                        <div className="h-20 bg-stripes-blue rounded-md"></div>
                      </div>

                      {/* Conic Gradient */}
                      <div>
                        <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Conic Gradient</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">
                          background: conic-gradient(from 45deg, #3b82f6, #8b5cf6, #3b82f6);
                        </code>
                        <div className="h-32 w-32 mx-auto rounded-full bg-gradient-conic from-blue-500 via-purple-500 to-blue-500"></div>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Background Properties */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Advanced Background Properties</h3>
                    <div className="space-y-6">
                      {/* Background Size */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Background Size</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <code className="block mb-2 text-blue-600 dark:text-blue-400">background-size: cover;</code>
                            <div className="h-32 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-blue-500 to-purple-500 rounded-md"></div>
                          </div>
                          <div>
                            <code className="block mb-2 text-blue-600 dark:text-blue-400">background-size: contain;</code>
                            <div className="h-32 bg-contain bg-center bg-no-repeat bg-gradient-to-br from-green-500 to-teal-500 rounded-md"></div>
                          </div>
                          <div>
                            <code className="block mb-2 text-blue-600 dark:text-blue-400">background-size: 50% auto;</code>
                            <div className="h-32 bg-[length:50%_auto] bg-center bg-no-repeat bg-gradient-to-br from-red-500 to-pink-500 rounded-md"></div>
                          </div>
                        </div>
                      </div>

                      {/* Background Position */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Background Position</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <code className="block mb-2 text-xs text-blue-600 dark:text-blue-400">top left</code>
                            <div className="h-24 bg-gradient-to-br from-purple-500 to-transparent bg-left-top bg-no-repeat rounded-md"></div>
                          </div>
                          <div>
                            <code className="block mb-2 text-xs text-blue-600 dark:text-blue-400">center</code>
                            <div className="h-24 bg-gradient-to-br from-purple-500 to-transparent bg-center bg-no-repeat rounded-md"></div>
                          </div>
                          <div>
                            <code className="block mb-2 text-xs text-blue-600 dark:text-blue-400">25% 75%</code>
                            <div className="h-24 bg-gradient-to-br from-purple-500 to-transparent bg-[25%_75%] bg-no-repeat rounded-md"></div>
                          </div>
                          <div>
                            <code className="block mb-2 text-xs text-blue-600 dark:text-blue-400">bottom right</code>
                            <div className="h-24 bg-gradient-to-br from-purple-500 to-transparent bg-right-bottom bg-no-repeat rounded-md"></div>
                          </div>
                        </div>
                      </div>

                      {/* Multiple Backgrounds */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Multiple Backgrounds</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">
                          background: linear-gradient(...), radial-gradient(...);
                        </code>
                        <div className="h-40 rounded-md" style={{
                          background: `
                            linear-gradient(rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5)),
                            radial-gradient(circle at top left, #3b82f6, transparent),
                            radial-gradient(circle at bottom right, #8b5cf6, transparent)
                          `
                        }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Transitions & Animations Section */}
              <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg" id="transitions">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Transitions & Animations</h2>
                  <button
                    onClick={() => setActiveCode('transitions-animations')}
                    className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View Code
                  </button>
                </div>
                
                {/* CSS Transitions */}
                <div className="space-y-8">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">CSS Transitions</h3>
                      <ViewCodeButton onClick={() => setActiveCode('css-transitions')} />
                    </div>
                    <div className="space-y-6">
                      {/* Basic Transition */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Basic Transition</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">
                          transition: all 0.3s ease-in-out;
                        </code>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                            <div className="h-20 w-20 bg-blue-500 hover:bg-blue-600 hover:rotate-45 transition-all duration-300 ease-in-out rounded-lg">
                            </div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Hover to see transition</p>
                          </div>
                          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                            <div className="h-20 w-20 bg-purple-500 hover:w-full transition-all duration-300 ease-in-out rounded-lg">
                            </div>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Width transition</p>
                          </div>
                        </div>
                      </div>

                      {/* Transition Properties */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Transition Properties</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <code className="block mb-3 text-blue-600 dark:text-blue-400">
                              transition-property: transform;<br/>
                              transition-duration: 0.5s;<br/>
                              transition-timing-function: ease-out;
                            </code>
                            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                              <div className="h-20 w-20 bg-green-500 hover:scale-125 transition-transform duration-500 ease-out rounded-lg">
                              </div>
                              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Scale transform</p>
                            </div>
                          </div>
                          <div>
                            <code className="block mb-3 text-blue-600 dark:text-blue-400">
                              transition-property: background-color;<br/>
                              transition-duration: 0.3s;<br/>
                              transition-delay: 0.1s;
                            </code>
                            <div className="h-20 bg-red-500 hover:bg-red-600 transition-colors duration-300 delay-100 rounded-lg">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CSS Animations */}
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">CSS Animations</h3>
                      <button
                        onClick={() => setActiveCode('css-animations')}
                        className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        View Code
                      </button>
                    </div>
                    <div className="space-y-6">
                      {/* Keyframe Animation */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Keyframe Animations</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">{`
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.bounce {
  animation: bounce 1s infinite;
}`}</code>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                            <div className="h-16 w-16 bg-blue-500 rounded-full animate-bounce mx-auto">
              </div>
                            <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">Bounce</p>
                          </div>
                          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                            <div className="h-16 w-16 bg-green-500 rounded-full animate-spin mx-auto">
                            </div>
                            <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">Spin</p>
                          </div>
                          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                            <div className="h-16 w-16 bg-purple-500 rounded-full animate-pulse mx-auto">
                            </div>
                            <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">Pulse</p>
                          </div>
                        </div>
                      </div>

                      {/* Animation Properties */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Animation Properties</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <code className="block mb-3 text-blue-600 dark:text-blue-400">
                              animation: slide 2s ease-in-out infinite;
                            </code>
                            <div className="relative h-20 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
                              <div className="absolute h-full w-20 bg-gradient-to-r from-blue-500 to-purple-500 animate-[slide_2s_ease-in-out_infinite]">
                              </div>
                            </div>
                          </div>
                          <div>
                            <code className="block mb-3 text-blue-600 dark:text-blue-400">
                              animation: fade 1.5s ease-in-out infinite alternate;
                            </code>
                            <div className="h-20 bg-indigo-500 animate-[fade_1.5s_ease-in-out_infinite_alternate] rounded-lg">
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Complex Animations */}
                      <div>
                        <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Complex Animations</h4>
                        <code className="block mb-3 text-blue-600 dark:text-blue-400">{`
@keyframes loading {
  0% { width: 0%; }
  100% { width: 100%; }
}`}</code>
                        <div className="space-y-4">
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[loading_2s_ease-in-out_infinite] rounded-full">
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="h-3 w-3 bg-blue-500 rounded-full animate-bounce"></div>
                          <div className="h-3 w-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                          <div className="h-3 w-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Tips */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Performance Tips</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Use transform and opacity for smoother animations</li>
                    <li>• Avoid animating layout properties (width, height, position)</li>
                    <li>• Use will-change for better performance on complex animations</li>
                    <li>• Consider reduced motion preferences</li>
                    <li>• Test animations on different devices and browsers</li>
                </ul>
                </div>
              </div>

              {/* Animation Timing Functions */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Timing Functions</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic Timing Functions */}
                    <div>
                      <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Basic Timing</h4>
                      <div className="space-y-4">
                        <div>
                          <code className="block mb-2 text-blue-600 dark:text-blue-400">ease-in</code>
                          <div className="h-16 bg-blue-500 hover:translate-x-full transition-transform duration-1000 ease-in rounded"></div>
                        </div>
                        <div>
                          <code className="block mb-2 text-blue-600 dark:text-blue-400">ease-out</code>
                          <div className="h-16 bg-green-500 hover:translate-x-full transition-transform duration-1000 ease-out rounded"></div>
                        </div>
                        <div>
                          <code className="block mb-2 text-blue-600 dark:text-blue-400">ease-in-out</code>
                          <div className="h-16 bg-purple-500 hover:translate-x-full transition-transform duration-1000 ease-in-out rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Cubic Bezier Examples */}
                    <div>
                      <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Custom Cubic Bezier</h4>
                      <div className="space-y-4">
                        <div>
                          <code className="block mb-2 text-blue-600 dark:text-blue-400">cubic-bezier(0.68, -0.55, 0.265, 1.55)</code>
                          <div className="h-16 bg-pink-500 hover:translate-x-full transition-transform duration-1000 rounded"
                               style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}></div>
                        </div>
                        <div>
                          <code className="block mb-2 text-blue-600 dark:text-blue-400">cubic-bezier(0.47, 0, 0.745, 0.715)</code>
                          <div className="h-16 bg-yellow-500 hover:translate-x-full transition-transform duration-1000 rounded"
                               style={{ transitionTimingFunction: 'cubic-bezier(0.47, 0, 0.745, 0.715)' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Transitions */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Interactive Transitions</h3>
                  <button
                    onClick={() => setActiveCode('interactive-transitions')}
                    className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    View Code
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card Hover Effect */}
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500"></div>
                      <div className="p-4">
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                          Hover Card
                        </h4>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          Multiple transition effects combined
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex h-full items-center justify-center text-white">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button Hover Effect */}
                  <div className="flex items-center justify-center">
                    <button className="relative px-6 py-3 text-white font-medium bg-blue-500 rounded-lg overflow-hidden group">
                      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                        Hover Me →
                      </span>
                      <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </button>
                  </div>

                  {/* Image Hover Effect */}
                  <div className="relative overflow-hidden rounded-lg group">
                    <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500 transform transition-transform duration-500 group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          Image Caption
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complex Animation Examples */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Complex Animations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Loading Animation */}
                  <div>
                    <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Loading Animation</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-[bounce_0.6s_infinite_alternate]"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-[bounce_0.6s_0.3s_infinite_alternate]"></div>
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-[bounce_0.6s_0.6s_infinite_alternate]"></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Loading...</span>
                    </div>
                  </div>

                  {/* Notification Bell */}
                  <div>
                    <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Notification Bell</h4>
                    <div className="relative inline-block group">
                      <svg className="w-8 h-8 text-gray-600 dark:text-gray-300 transform group-hover:rotate-12 transition-transform" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg>
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-pulse"></span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="md:col-span-2">
                    <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">Progress Bar</h4>
                    <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[progress_2s_ease-in-out_infinite]"
                           style={{
                             animation: 'progress 2s ease-in-out infinite',
                             backgroundSize: '200% 100%'
                           }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Hover Effects */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Advanced Hover Effects</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* 3D Card Flip */}
                  <div className="group [perspective:1000px]">
                    <div className="relative h-64 w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0 bg-blue-500 rounded-lg p-6 text-white">
                        <h4 className="text-lg font-semibold">3D Card Front</h4>
                        <p className="mt-2 text-sm">Hover to flip</p>
                      </div>
                      <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-purple-500 rounded-lg p-6 text-white">
                        <h4 className="text-lg font-semibold">3D Card Back</h4>
                        <p className="mt-2 text-sm">Card flipped!</p>
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="relative overflow-hidden rounded-lg group">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-6 text-white">
                      <h4 className="text-lg font-semibold">Shine Effect</h4>
                      <p className="mt-2 text-sm">Hover me</p>
                    </div>
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                  </div>

                  {/* Border Animation */}
                  <div className="relative p-1 overflow-hidden rounded-lg group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[border-rotate_2s_linear_infinite]"></div>
                    <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Animated Border</h4>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Continuous animation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Animations */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Scroll Animations</h3>
                <div className="space-y-6">
                  {/* Fade In on Scroll */}
                  <div className="opacity-0 translate-y-10 transition-all duration-700 ease-out animate-fade-in-up">
                    <div className="p-6 bg-blue-500 text-white rounded-lg">
                      <h4 className="text-lg font-semibold">Fade In Up</h4>
                      <p className="mt-2 text-sm">This element fades in and slides up on scroll</p>
                    </div>
                  </div>

                  {/* Stagger Items */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((item, index) => (
                      <div key={item} 
                           className="opacity-0 translate-y-10 animate-fade-in-up"
                           style={{ animationDelay: `${index * 200}ms` }}>
                        <div className="p-4 bg-purple-500 text-white rounded-lg">
                          <h4 className="font-semibold">Item {item}</h4>
                          <p className="text-sm">Staggered animation</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advanced Loading Animations */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Loading Animations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Spinner */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>

                  {/* Skeleton Loading */}
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-5/6"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-4/6"></div>
                  </div>

                  {/* Circular Progress */}
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-300 dark:text-gray-600 stroke-current"
                        strokeWidth="10"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-blue-500 stroke-current animate-[circle-progress_2s_ease-in-out_infinite]"
                        strokeWidth="10"
                        strokeLinecap="round"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Transform Animations */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Transform Animations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Scale & Rotate */}
                  <div className="group">
                    <div className="h-32 w-32 bg-blue-500 rounded-lg mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"></div>
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">Scale & Rotate</p>
                  </div>

                  {/* Skew Transform */}
                  <div className="group">
                    <div className="h-32 w-32 bg-purple-500 rounded-lg mx-auto transition-all duration-300 group-hover:skew-x-12 group-hover:skew-y-12"></div>
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">Skew Transform</p>
                  </div>

                  {/* Perspective Transform */}
                  <div className="group [perspective:1000px]">
                    <div className="h-32 w-32 bg-green-500 rounded-lg mx-auto transition-all duration-300 group-hover:[transform:rotateX(45deg)]"></div>
                    <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">Perspective Transform</p>
                  </div>
                </div>
              </div>

              {/* Main Navigation Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {/* Tutorials Card */}
                <Link href="/learn/tutorials" className="block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Tutorials</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Step-by-step guides covering HTML, CSS, JavaScript, React, and more.
                  </p>
                  <span className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                    Start Learning →
                  </span>
                </Link>

                {/* Interactive Coding Card */}
                <Link href="/learn/editor" className="block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Interactive Coding</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Practice coding in your browser with our live code editor.
                  </p>
                  <span className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                    Open Editor →
                  </span>
                </Link>

                {/* Projects Card */}
                <Link href="/learn/projects" className="block bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Projects</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Build real-world applications with guided projects.
                  </p>
                  <span className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                    View Projects →
                  </span>
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar Navigation - Moved to right */}
          <div className="hidden lg:block">
            <div className="sticky top-4">
              <nav className="space-y-1">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white px-3">
                  On this page
                </h2>
                
                <a href="#introduction" 
                  className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 
                           rounded-md transition-colors">
                  Introduction to CSS
                </a>
                
                <a href="#selectors" 
                  className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 
                           rounded-md transition-colors">
                  CSS Selectors
                </a>
                
                <a href="#box-model" 
                  className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 
                           rounded-md transition-colors">
                  Box Model
                </a>
                
                <a href="#layout" 
                  className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 
                           rounded-md transition-colors">
                  Layout
                </a>
                
                <a href="#typography" 
                  className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 
                           rounded-md transition-colors">
                  Typography
                </a>
                
                <a href="#colors" 
                  className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 
                           rounded-md transition-colors">
                  Colors & Backgrounds
                </a>
                
                <a href="#transitions" 
                  className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 
                           rounded-md transition-colors">
                  Transitions & Animations
                </a>
                
                <a href="#responsive" 
                  className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 
                           hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 
                           rounded-md transition-colors">
                  Responsive Design
                </a>
              </nav>
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
    </ErrorBoundary>

      <CodeModalWrapper />
    </div>
  );
}
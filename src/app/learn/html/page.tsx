"use client";
import Link from "next/link";

export default function HTMLLearning() {
  return (
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
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">HTML5 Fundamentals</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Introduction to HTML</h2>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                HTML (HyperText Markup Language) is the standard markup language for creating web pages.
              </p>
            </section>

            {/* Document Structure Tags */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Document Structure Tags</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;!DOCTYPE html&gt;</code>
                  <span className="ml-2">- Declares document type and HTML version</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;html&gt;</code>
                  <span className="ml-2">- Root element of an HTML page</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;head&gt;</code>
                  <span className="ml-2">- Contains metadata/information for the document</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;body&gt;</code>
                  <span className="ml-2">- Defines the document's body</span>
                </li>
                </ul>
            </section>

            {/* Text Formatting Tags */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Text Formatting Tags</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;h1&gt; to &lt;h6&gt;</code>
                  <span className="ml-2">- Headings</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <h3 className="text-xl">This is a heading</h3>
              </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;p&gt;</code>
                  <span className="ml-2">- Paragraph</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <p>This is a paragraph of text.</p>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;strong&gt;</code>
                  <span className="ml-2">- Strong importance</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: This text is <strong>very important</strong>
                  </div>
                </li>
              </ul>
            </section>

            {/* Forms and Input Elements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Forms and Input Elements</h2>
              
              {/* Basic Form Structure */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Basic Form Structure</h3>
                <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-4 rounded">
{`<form action="/submit" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>
  
  <button type="submit">Submit</button>
</form>`}
                </pre>
              </div>

              <ul className="space-y-6 text-gray-700 dark:text-gray-200">
                {/* Text Input Types */}
                <li>
                  <h4 className="font-semibold mb-2">Text Input Types</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block">Text Input</label>
                      <input 
                        type="text" 
                        placeholder="Enter text"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block">Password</label>
                      <input 
                        type="password" 
                        placeholder="Enter password"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block">Email</label>
                      <input 
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block">Search</label>
                      <input 
                        type="search" 
                        placeholder="Search..."
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                </li>

                {/* Number and Range Inputs */}
                <li>
                  <h4 className="font-semibold mb-2">Number and Range Inputs</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block">Number</label>
                      <input 
                        type="number" 
                        min="0" 
                        max="100" 
                        step="1"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block">Range</label>
                      <input 
                        type="range" 
                        min="0" 
                        max="100"
                        className="w-full"
                      />
                    </div>
                  </div>
                </li>

                {/* Date and Time Inputs */}
                <li>
                  <h4 className="font-semibold mb-2">Date and Time Inputs</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block">Date</label>
                      <input 
                        type="date"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block">Time</label>
                      <input 
                        type="time"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block">Date and Time</label>
                      <input 
                        type="datetime-local"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block">Month</label>
                      <input 
                        type="month"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                </li>

                {/* Selection Inputs */}
                <li>
                  <h4 className="font-semibold mb-2">Selection Inputs</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block">Checkbox</label>
                      <div className="space-y-1">
                        <div>
                          <input type="checkbox" id="option1" name="option1" />
                          <label htmlFor="option1" className="ml-2">Option 1</label>
                        </div>
                        <div>
                          <input type="checkbox" id="option2" name="option2" />
                          <label htmlFor="option2" className="ml-2">Option 2</label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block">Radio Buttons</label>
                      <div className="space-y-1">
                        <div>
                          <input type="radio" id="radio1" name="radioGroup" />
                          <label htmlFor="radio1" className="ml-2">Choice 1</label>
                        </div>
                        <div>
                          <input type="radio" id="radio2" name="radioGroup" />
                          <label htmlFor="radio2" className="ml-2">Choice 2</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* File and Color Inputs */}
                <li>
                  <h4 className="font-semibold mb-2">File and Color Inputs</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block">File Upload</label>
                      <input 
                        type="file"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block">Color Picker</label>
                      <input 
                        type="color"
                        className="w-full h-10"
                      />
                    </div>
                  </div>
                </li>

                {/* Select and Textarea */}
                <li>
                  <h4 className="font-semibold mb-2">Select and Textarea</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block">Select Dropdown</label>
                      <select className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600">
                        <option>Select an option</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block">Textarea</label>
                      <textarea 
                        rows={3}
                        placeholder="Enter multiple lines of text"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      ></textarea>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Form Attributes */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Important Form Attributes</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">required</code> - Makes a field mandatory</li>
                  <li><code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">placeholder</code> - Shows hint text</li>
                  <li><code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">pattern</code> - Regex pattern for validation</li>
                  <li><code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">min/max</code> - Minimum/maximum values</li>
                  <li><code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">autocomplete</code> - Browser autocomplete</li>
                </ul>
              </div>

              {/* Best Practices */}
              <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-700 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Best Practices</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Always use labels with form controls</li>
                  <li>Include proper validation attributes</li>
                  <li>Group related fields with fieldset</li>
                  <li>Use appropriate input types</li>
                  <li>Add clear error messages</li>
                  <li>Make forms accessible with ARIA attributes</li>
                </ul>
              </div>
            </section>

            {/* Media Elements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Media Elements</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;img&gt;</code>
                  <span className="ml-2">- Image</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <img src="/example.jpg" alt="Example" className="w-32 h-32 object-cover rounded" />
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;video&gt;</code>
                  <span className="ml-2">- Video content</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;audio&gt;</code>
                  <span className="ml-2">- Audio content</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;canvas&gt;</code>
                  <span className="ml-2">- Graphics and animations</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;svg&gt;</code>
                  <span className="ml-2">- Scalable Vector Graphics</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;figure&gt;</code>
                  <span className="ml-2">- Self-contained content</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;figcaption&gt;</code>
                  <span className="ml-2">- Figure caption</span>
                </li>
              </ul>
            </section>

            {/* Table Elements - Elaborated */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Table Elements</h2>
              
              {/* Basic Table Structure */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Basic Table Structure</h3>
                <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-4 rounded">
{`<table>
  <caption>Monthly Savings</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Income</th>
      <th>Expenses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$1000</td>
      <td>$500</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$1000</td>
      <td>$500</td>
    </tr>
  </tfoot>
</table>`}
                </pre>
              </div>

              {/* Live Example */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Live Example</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border dark:border-gray-700">
                    <caption className="text-gray-700 dark:text-gray-300 p-2">Monthly Savings</caption>
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border px-4 py-2 text-left">Month</th>
                        <th className="border px-4 py-2 text-left">Income</th>
                        <th className="border px-4 py-2 text-left">Expenses</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">January</td>
                        <td className="border px-4 py-2">$1000</td>
                        <td className="border px-4 py-2">$500</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <td className="border px-4 py-2">February</td>
                        <td className="border px-4 py-2">$1200</td>
                        <td className="border px-4 py-2">$600</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="bg-gray-100 dark:bg-gray-700 font-bold">
                        <td className="border px-4 py-2">Total</td>
                        <td className="border px-4 py-2">$2200</td>
                        <td className="border px-4 py-2">$1100</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Table Elements Explanation */}
              <ul className="space-y-6 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;table&gt;</code>
                  <span className="ml-2">- Container for tabular data</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    <p>Main container for creating tables. Can include attributes like:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>border - Specifies border width</li>
                      <li>cellspacing - Space between cells</li>
                      <li>cellpadding - Space within cells</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;caption&gt;</code>
                  <span className="ml-2">- Table title/caption</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    <p>Provides a title for the table. Should be the first child of table element.</p>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<table>
  <caption>Employee Details</caption>
  <!-- table content -->
</table>`}
                    </pre>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;colgroup&gt; and &lt;col&gt;</code>
                  <span className="ml-2">- Column grouping and properties</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    <p>Used to define properties for table columns:</p>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<table>
  <colgroup>
    <col style="background-color: #f0f0f0">
    <col span="2" style="background-color: #e0e0e0">
  </colgroup>
  <!-- table content -->
</table>`}
                    </pre>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;thead&gt;</code>
                  <span className="ml-2">- Table header container</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    <p>Groups header content. Useful for:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Styling header separately</li>
                      <li>Printing tables with repeating headers</li>
                      <li>Scrollable tables with fixed headers</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;tbody&gt;</code>
                  <span className="ml-2">- Table body container</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    <p>Groups the main content of the table. Benefits include:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Better organization of table structure</li>
                      <li>Separate styling for body content</li>
                      <li>Independent scrolling from header/footer</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;tr&gt;</code>
                  <span className="ml-2">- Table row</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    <p>Defines a row in the table. Can contain:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>th elements for headers</li>
                      <li>td elements for data</li>
                      <li>Attributes for styling and behavior</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;th&gt;</code>
                  <span className="ml-2">- Table header cell</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    <p>Special cells for headers. Attributes include:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>scope - Specifies if it's a header for row/column</li>
                      <li>colspan - Spans multiple columns</li>
                      <li>rowspan - Spans multiple rows</li>
                    </ul>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<th scope="col" colspan="2">Product Details</th>`}
                    </pre>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;td&gt;</code>
                  <span className="ml-2">- Table data cell</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    <p>Regular cells for data. Can use:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>colspan - Merge columns</li>
                      <li>rowspan - Merge rows</li>
                      <li>headers - Associates with header cells</li>
                    </ul>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<td colspan="2" headers="header1">Merged cell content</td>`}
                    </pre>
                  </div>
                </li>
              </ul>

              {/* Advanced Table Features */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Advanced Features</h3>
                
                {/* Column/Row Spanning Example */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Column and Row Spanning</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border dark:border-gray-700">
                      <tr>
                        <th className="border px-4 py-2" colSpan={2}>Name</th>
                        <th className="border px-4 py-2">Age</th>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">John</td>
                        <td className="border px-4 py-2">Doe</td>
                        <td className="border px-4 py-2" rowSpan={2}>25</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">Jane</td>
                        <td className="border px-4 py-2">Doe</td>
                      </tr>
                    </table>
                  </div>
                </div>

                {/* Responsive Table Example */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Responsive Table</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border dark:border-gray-700">
                      <thead>
                        <tr>
                          <th className="border px-4 py-2">Header 1</th>
                          <th className="border px-4 py-2">Header 2</th>
                          <th className="border px-4 py-2">Header 3</th>
                          <th className="border px-4 py-2">Header 4</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">Data 1</td>
                          <td className="border px-4 py-2">Data 2</td>
                          <td className="border px-4 py-2">Data 3</td>
                          <td className="border px-4 py-2">Data 4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-700 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Best Practices</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use appropriate table structure (thead, tbody, tfoot)</li>
                  <li>Include proper header cells with scope attribute</li>
                  <li>Add captions for better accessibility</li>
                  <li>Make tables responsive for mobile devices</li>
                  <li>Use semantic markup for better SEO</li>
                  <li>Consider using CSS for styling instead of HTML attributes</li>
                </ul>
              </div>
            </section>

            {/* List Elements - Elaborated */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">List Elements</h2>

              {/* Unordered Lists */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Unordered Lists</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;ul&gt;</code>
                    <span className="ml-2">Example:</span>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>First item</li>
                      <li>Second item</li>
                      <li>Third item
                        <ul className="list-circle ml-5 mt-1">
                          <li>Nested item 1</li>
                          <li>Nested item 2</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item
    <ul>
      <li>Nested item 1</li>
      <li>Nested item 2</li>
    </ul>
  </li>
</ul>`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Ordered Lists */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ordered Lists</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;ol&gt;</code>
                    <span className="ml-2">Example:</span>
                    <ol className="list-decimal ml-5 mt-2 space-y-1">
                      <li>First step</li>
                      <li>Second step</li>
                      <li>Third step
                        <ol className="list-alpha ml-5 mt-1">
                          <li>Sub-step A</li>
                          <li>Sub-step B</li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step
    <ol type="a">
      <li>Sub-step A</li>
      <li>Sub-step B</li>
    </ol>
  </li>
</ol>`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Description Lists */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Description Lists</h3>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;dl&gt;</code>
                    <span className="ml-2">Example:</span>
                    <dl className="mt-2 space-y-2">
                      <dt className="font-semibold">HTML</dt>
                      <dd className="ml-4">HyperText Markup Language</dd>
                      
                      <dt className="font-semibold">CSS</dt>
                      <dd className="ml-4">Cascading Style Sheets</dd>
                    </dl>
                  </div>
                  <div>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* List Attributes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">List Attributes</h3>
              <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Ordered List Types</h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      <ol type="1" className="ml-5">
                        <li>Decimal numbers (default)</li>
                        <li>Example item</li>
                      </ol>
                      <ol type="A" className="ml-5">
                        <li>Capital letters</li>
                        <li>Example item</li>
                      </ol>
                      <ol type="a" className="ml-5">
                        <li>Lowercase letters</li>
                        <li>Example item</li>
                      </ol>
                      <ol type="I" className="ml-5">
                        <li>Capital Roman numerals</li>
                        <li>Example item</li>
                      </ol>
                    </div>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-4">
{`<ol type="1">...</ol>  <!-- 1, 2, 3 -->
<ol type="A">...</ol>  <!-- A, B, C -->
<ol type="a">...</ol>  <!-- a, b, c -->
<ol type="I">...</ol>  <!-- I, II, III -->
<ol type="i">...</ol>  <!-- i, ii, iii -->`}
                    </pre>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Start Attribute</h4>
                    <ol start={5} className="list-decimal ml-5">
                      <li>Starts at 5</li>
                      <li>Continues from there</li>
                    </ol>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<ol start={5}>
  <li>Starts at 5</li>
  <li>Continues from there</li>
</ol>`}
                    </pre>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Reversed Lists</h4>
                    <ol reversed className="list-decimal ml-5">
                      <li>Last item</li>
                      <li>Second-to-last item</li>
                      <li>First item</li>
                    </ol>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<ol reversed>
  <li>Last item</li>
  <li>Second-to-last item</li>
  <li>First item</li>
</ol>`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Custom List Styles */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Custom List Styles</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-2">CSS List Style Types</h4>
                    <ul className="space-y-2">
                      <li className="list-disc ml-5">Disc style</li>
                      <li className="list-circle ml-5">Circle style</li>
                      <li className="list-square ml-5">Square style</li>
                      <li className="list-none ml-5">No style</li>
                    </ul>
                  </div>
                  <div>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`.list-disc { list-style-type: disc; }
.list-circle { list-style-type: circle; }
.list-square { list-style-type: square; }
.list-none { list-style-type: none; }`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-700 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Best Practices</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use semantic list elements for better accessibility</li>
                  <li>Choose appropriate list types for your content</li>
                  <li>Maintain consistent styling across lists</li>
                  <li>Use nested lists appropriately for hierarchical content</li>
                  <li>Consider mobile responsiveness for list layouts</li>
                  <li>Include proper spacing between list items</li>
                </ul>
              </div>

              {/* Accessibility Notes */}
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-gray-700 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Considerations</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Screen readers announce list types and item counts</li>
                  <li>Maintain proper list structure for navigation</li>
                  <li>Use appropriate heading levels within lists</li>
                  <li>Ensure sufficient color contrast for list markers</li>
                  <li>Preserve semantic meaning when styling lists</li>
                </ul>
              </div>
            </section>

            {/* Semantic Elements - Elaborated */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Semantic Elements</h2>
              
              {/* Introduction */}
              <div className="mb-6">
                <p className="text-gray-700 dark:text-gray-200">
                  Semantic elements clearly describe their meaning to both the browser and the developer. They provide better structure and improve accessibility, SEO, and code readability.
                </p>
          </div>

              {/* Main Semantic Elements */}
              <div className="space-y-8">
                {/* Document Structure */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Document Structure Elements</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                    <li>
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;header&gt;</code>
                      <span className="ml-2">- Introductory content or navigation</span>
                      <div className="mt-2 pl-4 border-l-2 border-gray-300">
                        <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
              </nav>
</header>`}
                        </pre>
                      </div>
                    </li>

                    <li>
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;main&gt;</code>
                      <span className="ml-2">- Main content of the document</span>
                      <div className="mt-2 pl-4 border-l-2 border-gray-300">
                        <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<main>
  <h1>Main Content</h1>
  <article>
    <h2>Article Title</h2>
    <p>Article content...</p>
  </article>
</main>`}
                        </pre>
                      </div>
                  </li>

                    <li>
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;footer&gt;</code>
                      <span className="ml-2">- Footer content for document or section</span>
                      <div className="mt-2 pl-4 border-l-2 border-gray-300">
                        <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<footer>
  <p>&copy; 2024 My Website</p>
  <nav>
    <a href="/privacy">Privacy Policy</a>
    <a href="/terms">Terms of Service</a>
  </nav>
</footer>`}
                        </pre>
                      </div>
                  </li>
                </ul>
              </div>

                {/* Content Sections */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Content Section Elements</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                    <li>
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;article&gt;</code>
                      <span className="ml-2">- Self-contained, independently distributable content</span>
                      <div className="mt-2 pl-4 border-l-2 border-gray-300">
                        <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<article>
  <header>
    <h2>Blog Post Title</h2>
    <time dateTime="2024-03-20">March 20, 2024</time>
  </header>
  <p>Blog post content...</p>
  <footer>
    <p>Author: John Doe</p>
  </footer>
</article>`}
                        </pre>
            </div>
                    </li>

                    <li>
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;section&gt;</code>
                      <span className="ml-2">- Thematic grouping of content</span>
                      <div className="mt-2 pl-4 border-l-2 border-gray-300">
                        <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<section>
  <h2>Features</h2>
  <section>
    <h3>Feature 1</h3>
    <p>Feature description...</p>
  </section>
  <section>
    <h3>Feature 2</h3>
    <p>Feature description...</p>
  </section>
</section>`}
                        </pre>
          </div>
                    </li>

                    <li>
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;aside&gt;</code>
                      <span className="ml-2">- Content indirectly related to main content</span>
                      <div className="mt-2 pl-4 border-l-2 border-gray-300">
                        <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<aside>
  <h3>Related Articles</h3>
  <ul>
    <li><a href="#">Article 1</a></li>
    <li><a href="#">Article 2</a></li>
  </ul>
</aside>`}
                        </pre>
        </div>
                    </li>
                  </ul>
                </div>

                {/* Navigation Elements */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Navigation Elements</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                    <li>
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;nav&gt;</code>
                      <span className="ml-2">- Navigation links</span>
                      <div className="mt-2 pl-4 border-l-2 border-gray-300">
                        <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<nav aria-label="Main navigation">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`}
                        </pre>
        </div>
                    </li>
                  </ul>
    </div>

                {/* Text Content Elements */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Text Content Elements</h3>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                    <li>
                      <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;figure&gt; and &lt;figcaption&gt;</code>
                      <span className="ml-2">- Self-contained content with caption</span>
                      <div className="mt-2 pl-4 border-l-2 border-gray-300">
                        <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
{`<figure>
  <img src="image.jpg" alt="Description">
  <figcaption>Figure caption text</figcaption>
</figure>`}
                        </pre>
          </div>
                    </li>
                  </ul>
        </div>
    </div>

              {/* Best Practices */}
              <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-700 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
                  <li>Use semantic elements instead of generic div/span where appropriate</li>
                  <li>Maintain proper heading hierarchy (h1-h6)</li>
                  <li>Include only one main element per page</li>
                  <li>Use article for content that makes sense on its own</li>
                  <li>Use section for thematically-related content</li>
                  <li>Include headings for sections and articles</li>
                </ul>
              </div>

              {/* Accessibility Benefits */}
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-gray-700 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
                  <li>Screen readers can better understand page structure</li>
                  <li>Improved navigation for assistive technologies</li>
                  <li>Better understanding of content relationships</li>
                  <li>Enhanced keyboard navigation</li>
                  <li>Clearer content hierarchy</li>
                </ul>
              </div>

              {/* SEO Benefits */}
              <div className="mt-4 p-4 bg-green-50 dark:bg-gray-700 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">SEO Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
                  <li>Search engines better understand page content</li>
                  <li>Improved content relevance scoring</li>
                  <li>Better featured snippet opportunities</li>
                  <li>Enhanced content structure recognition</li>
                  <li>More accurate search indexing</li>
                </ul>
              </div>
            </section>

            {/* Interactive Elements - Elaborated */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Interactive Elements</h2>

              {/* Details and Summary */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Details and Summary</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;details&gt;</code>
                    <span className="ml-2">- Disclosure widget</span>
                    <div className="mt-2 pl-4 border-l-2 border-gray-300">
                      <p>Creates an interactive disclosure triangle:</p>
                      <details className="mt-2 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                        <summary className="cursor-pointer">Click to show/hide content</summary>
                        <p className="mt-2">This is the hidden content that can be shown or hidden.</p>
                      </details>
                      <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<details>
  <summary>Click to show/hide content</summary>
  <p>This is the hidden content that can be shown or hidden.</p>
</details>`}
                      </pre>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Dialog Element */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Dialog Element</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;dialog&gt;</code>
                    <span className="ml-2">- Modal or popup dialog box</span>
                    <div className="mt-2 pl-4 border-l-2 border-gray-300">
                      <p>Creates a modal dialog box:</p>
                      <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<dialog id="myDialog">
  <h2>Dialog Title</h2>
  <p>This is a dialog window</p>
  <button onclick="this.closest('dialog').close()">Close</button>
</dialog>

<button onclick="document.getElementById('myDialog').showModal()">
  Open Dialog
</button>`}
                      </pre>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Menu and MenuItem */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Menu Elements</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;menu&gt;</code>
                    <span className="ml-2">- Interactive menu list</span>
                    <div className="mt-2 pl-4 border-l-2 border-gray-300">
                      <p>Creates an interactive menu:</p>
                      <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<menu type="toolbar">
  <li><button onclick="copy()">Copy</button></li>
  <li><button onclick="cut()">Cut</button></li>
  <li><button onclick="paste()">Paste</button></li>
</menu>`}
                      </pre>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Button Types */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Button Types</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Regular Button
                    </button>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<button type="button">
  Regular Button
</button>`}
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" type="submit">
                      Submit Button
                    </button>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<button type="submit">
  Submit Button
</button>`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Interactive Form Elements */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Interactive Form Elements</h3>
              <div className="space-y-4">
                  <div>
                    <label className="block mb-2">Datalist Example</label>
                    <input 
                      list="browsers" 
                      placeholder="Choose a browser"
                      className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                    />
                    <datalist id="browsers">
                      <option value="Chrome" />
                      <option value="Firefox" />
                      <option value="Safari" />
                    </datalist>
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<input list="browsers" placeholder="Choose a browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
</datalist>`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="mt-8 p-4 bg-blue-50 dark:bg-gray-700 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Best Practices</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
                  <li>Always provide keyboard navigation support</li>
                  <li>Include proper ARIA attributes for accessibility</li>
                  <li>Ensure visible focus states for interactive elements</li>
                  <li>Provide feedback for user interactions</li>
                  <li>Consider touch-friendly sizing for mobile devices</li>
                  <li>Include proper error handling and validation</li>
                </ul>
              </div>

              {/* Accessibility Considerations */}
              <div className="mt-8 p-4 bg-yellow-50 dark:bg-gray-700 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Accessibility Considerations</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
                  <li>Use appropriate roles and ARIA labels</li>
                  <li>Ensure keyboard accessibility</li>
                  <li>Provide clear focus indicators</li>
                  <li>Include descriptive text for screen readers</li>
                  <li>Maintain proper contrast ratios</li>
                </ul>
              </div>
            </section>

            {/* Meta Tags */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Meta Tags</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;meta&gt;</code>
                  <span className="ml-2">- Metadata</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;link&gt;</code>
                  <span className="ml-2">- External resources</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;style&gt;</code>
                  <span className="ml-2">- Style information</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;script&gt;</code>
                  <span className="ml-2">- Client-side scripts</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;base&gt;</code>
                  <span className="ml-2">- Base URL</span>
                </li>
                </ul>
            </section>

            {/* Text Formatting - Additional Tags */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Additional Text Formatting</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;abbr&gt;</code>
                  <span className="ml-2">- Abbreviation</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <abbr title="World Wide Web">WWW</abbr>
              </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;cite&gt;</code>
                  <span className="ml-2">- Citation</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <cite>The Lord of the Rings</cite>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;del&gt;</code>
                  <span className="ml-2">- Deleted text</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <del>This text has been deleted</del>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;ins&gt;</code>
                  <span className="ml-2">- Inserted text</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <ins>This text has been added</ins>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;dfn&gt;</code>
                  <span className="ml-2">- Definition term</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <dfn title="HyperText Markup Language">HTML</dfn>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;kbd&gt;</code>
                  <span className="ml-2">- Keyboard input</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: Press <kbd>Ctrl</kbd> + <kbd>C</kbd>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;mark&gt;</code>
                  <span className="ml-2">- Highlighted text</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <mark>This text is highlighted</mark>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;q&gt;</code>
                  <span className="ml-2">- Short quotation</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <q>Time is money</q>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;s&gt;</code>
                  <span className="ml-2">- Strikethrough text</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <s>$99.99</s> $79.99
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;samp&gt;</code>
                  <span className="ml-2">- Sample output</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <samp>Error 404: Page not found</samp>
                  </div>
                </li>
              </ul>
            </section>

            {/* Embedded Content */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Embedded Content</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;iframe&gt;</code>
                  <span className="ml-2">- Inline frame for embedding other web pages</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<iframe 
  src="https://www.example.com" 
  width="100%" 
  height="300"
  title="Example iframe"
  allowfullscreen
></iframe>`}
                    </pre>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;embed&gt;</code>
                  <span className="ml-2">- Container for external application or interactive content</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<embed 
  type="application/pdf"
  src="document.pdf"
  width="100%"
  height="500px"
/>`}
                    </pre>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;object&gt;</code>
                  <span className="ml-2">- Container for external resource (images, PDFs, plugins)</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<object 
  data="file.pdf" 
  type="application/pdf"
  width="100%"
  height="500px"
>
  <param name="zoom" value="75%">
  PDF cannot be displayed.
</object>`}
                    </pre>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;source&gt;</code>
                  <span className="ml-2">- Multiple media resources for video/audio elements</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>`}
                    </pre>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;track&gt;</code>
                  <span className="ml-2">- Text tracks for media elements (subtitles, captions)</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<video controls>
  <source src="video.mp4" type="video/mp4">
  <track 
    src="subtitles_en.vtt" 
    kind="subtitles" 
    srclang="en" 
    label="English"
  >
  <track 
    src="captions_es.vtt" 
    kind="captions" 
    srclang="es" 
    label="Spanish"
  >
</video>`}
                    </pre>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;picture&gt;</code>
                  <span className="ml-2">- Container for multiple image sources</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<picture>
  <source 
    media="(min-width: 800px)" 
    srcset="large.jpg"
  >
  <source 
    media="(min-width: 400px)" 
    srcset="medium.jpg"
  >
  <img 
    src="small.jpg" 
    alt="Responsive image"
  >
</picture>`}
                    </pre>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;map&gt; and &lt;area&gt;</code>
                  <span className="ml-2">- Image map with clickable areas</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<img src="image.jpg" alt="Navigation Map" usemap="#workmap">
<map name="workmap">
  <area 
    shape="rect" 
    coords="34,44,270,350" 
    alt="Computer" 
    href="computer.htm"
  >
  <area 
    shape="circle" 
    coords="290,172,50" 
    alt="Phone" 
    href="phone.htm"
  >
</map>`}
                    </pre>
                  </div>
                </li>

                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;canvas&gt;</code>
                  <span className="ml-2">- Container for graphics and animations</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<canvas id="myCanvas" width="200" height="100">
  Your browser does not support the canvas element.
</canvas>

<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
</script>`}
                    </pre>
                  </div>
                </li>
                </ul>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-700 rounded">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Best Practices:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-200">
                  <li>Always provide fallback content for embedded elements</li>
                  <li>Include proper titles and labels for accessibility</li>
                  <li>Consider loading performance when embedding external content</li>
                  <li>Use appropriate security attributes (sandbox, allow, etc.)</li>
                  <li>Ensure responsive design with proper sizing</li>
                </ul>
              </div>
            </section>

            {/* HTML5 Specific Tags */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">HTML5 Specific Tags</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;datalist&gt;</code>
                  <span className="ml-2">- Predefined options for inputs</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <input list="browsers" placeholder="Choose a browser" className="border rounded px-2 py-1 ml-2" />
                    <datalist id="browsers">
                      <option value="Chrome" />
                      <option value="Firefox" />
                      <option value="Safari" />
                    </datalist>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;output&gt;</code>
                  <span className="ml-2">- Calculation result</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <output>50</output>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;progress&gt;</code>
                  <span className="ml-2">- Progress indicator</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <progress value="70" max="100">70%</progress>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;meter&gt;</code>
                  <span className="ml-2">- Gauge</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <meter value="0.6" min="0" max="1">60%</meter>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;time&gt;</code>
                  <span className="ml-2">- Date/time</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <time dateTime="2024-02-14">Valentine's Day</time>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;ruby&gt;, &lt;rt&gt;, &lt;rp&gt;</code>
                  <span className="ml-2">- Ruby annotations</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: 
                    <ruby>
                      漢 <rt>かん</rt>
                      字 <rt>じ</rt>
                    </ruby>
                  </div>
                </li>
              </ul>
            </section>

            {/* Additional Form Elements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Additional Form Elements</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;input type="file"&gt;</code>
                  <span className="ml-2">- File upload</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <input type="file" className="border rounded px-2 py-1" />
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;input type="search"&gt;</code>
                  <span className="ml-2">- Search input</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <input type="search" placeholder="Search..." className="border rounded px-2 py-1" />
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;input type="tel"&gt;</code>
                  <span className="ml-2">- Telephone input</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <input type="tel" placeholder="123-456-7890" className="border rounded px-2 py-1" />
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;input type="url"&gt;</code>
                  <span className="ml-2">- URL input</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <input type="url" placeholder="https://example.com" className="border rounded px-2 py-1" />
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;input type="datetime-local"&gt;</code>
                  <span className="ml-2">- Date and time input</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <input type="datetime-local" className="border rounded px-2 py-1" />
                  </div>
                </li>
              </ul>
            </section>

            {/* Accessibility Tags */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Accessibility Tags</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">aria-*</code>
                  <span className="ml-2">- ARIA attributes</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <button aria-label="Close dialog">×</button>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">role</code>
                  <span className="ml-2">- Element role</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <div role="alert">Important message</div>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">tabindex</code>
                  <span className="ml-2">- Tab order</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <button tabIndex={0}>Focusable button</button>
                  </div>
                </li>
              </ul>
            </section>

            {/* Advanced HTML5 Elements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Advanced HTML5 Elements</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;template&gt;</code>
                  <span className="ml-2">- Template for reusable content</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<template id="myTemplate">
  <div>
    <h2>Template Content</h2>
    <slot name="content"></slot>
  </div>
</template>`}
                    </pre>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;slot&gt;</code>
                  <span className="ml-2">- Placeholder for template content</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;portal&gt;</code>
                  <span className="ml-2">- Portal for embedding external content (experimental)</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;shadow&gt;</code>
                  <span className="ml-2">- Shadow DOM container</span>
                </li>
              </ul>
            </section>

            {/* Data and Time Elements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Data and Time Elements</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;data&gt;</code>
                  <span className="ml-2">- Machine-readable data</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <data value="398">Mini Tacos</data>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;time datetime=""&gt;</code>
                  <span className="ml-2">- Date/time with machine-readable format</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: <time dateTime="2024-03-20T20:00:00">March 20th at 8 PM</time>
                  </div>
                </li>
              </ul>
            </section>

            {/* Browser Support Elements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Browser Support Elements</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;noscript&gt;</code>
                  <span className="ml-2">- Content for when JavaScript is disabled</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<noscript>
  Please enable JavaScript to view this site.
</noscript>`}
                    </pre>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;wbr&gt;</code>
                  <span className="ml-2">- Word break opportunity</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: https://very<wbr/>.long<wbr/>.url<wbr/>.com
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;bdi&gt;</code>
                  <span className="ml-2">- Bidirectional text isolation</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example: User <bdi>إيان</bdi> posted a comment
                  </div>
                </li>
              </ul>
            </section>

            {/* SVG Elements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">SVG Elements</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;svg&gt;</code>
                  <span className="ml-2">- SVG container</span>
                  <div className="mt-2 pl-4 border-l-2 border-gray-300">
                    Example:
                    <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" fill="red" />
</svg>`}
                    </pre>
                  </div>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;path&gt;</code>
                  <span className="ml-2">- SVG path element</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;rect&gt;</code>
                  <span className="ml-2">- SVG rectangle</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;circle&gt;</code>
                  <span className="ml-2">- SVG circle</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;line&gt;</code>
                  <span className="ml-2">- SVG line</span>
                </li>
              </ul>
            </section>

            {/* Math Elements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Math Elements</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;math&gt;</code>
                  <span className="ml-2">- Mathematical expressions</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;mfrac&gt;</code>
                  <span className="ml-2">- Fraction</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;msqrt&gt;</code>
                  <span className="ml-2">- Square root</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">&lt;mi&gt;</code>
                  <span className="ml-2">- Math identifier</span>
                </li>
              </ul>
            </section>

            {/* Microdata Elements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Microdata Elements</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">itemscope</code>
                  <span className="ml-2">- Defines scope of microdata</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">itemtype</code>
                  <span className="ml-2">- Defines type of item</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">itemprop</code>
                  <span className="ml-2">- Defines property of item</span>
                </li>
                <div className="mt-2 pl-4 border-l-2 border-gray-300">
                  Example:
                  <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<div itemscope itemtype="http://schema.org/Person">
  <span itemprop="name">John Doe</span>
  <span itemprop="jobTitle">Software Developer</span>
</div>`}
                  </pre>
                </div>
              </ul>
            </section>

            {/* Security Elements */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Security Elements</h2>
              <ul className="space-y-4 text-gray-700 dark:text-gray-200">
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">sandbox</code>
                  <span className="ml-2">- Security restrictions for iframes</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">integrity</code>
                  <span className="ml-2">- Subresource integrity check</span>
                </li>
                <li>
                  <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">referrerpolicy</code>
                  <span className="ml-2">- Referrer policy for requests</span>
                </li>
                <div className="mt-2 pl-4 border-l-2 border-gray-300">
                  Example:
                  <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded mt-2">
{`<iframe 
  src="page.html" 
  sandbox="allow-scripts"
  referrerpolicy="no-referrer">
</iframe>`}
                  </pre>
                </div>
              </ul>
            </section>
          </div>

          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg sticky top-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Learning Path</h2>
              
              {/* Add this prominent link before the regular navigation */}
              <div className="mb-6">
                <Link 
                  href="/learn/html/examples"  // This is the correct path
                  className="block w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                  transition-all duration-200 ease-in-out rounded-lg shadow-md hover:shadow-lg"
                >
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <span className="font-semibold text-lg">HTML Examples</span>
                      <p className="text-sm text-blue-100 mt-1">Interactive code examples</p>
                    </div>
                    <span className="text-2xl">→</span>
                  </div>
                </Link>
              </div>

              <nav className="space-y-2">
                <Link href="#introduction" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  1. Introduction to HTML
                </Link>
                <Link href="#structure" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  2. Document Structure
                </Link>
                <Link href="#text" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  3. Text Elements
                </Link>
                <Link href="#forms" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  4. Forms & Input
                </Link>
                <Link href="#media" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  5. Media Elements
                </Link>
                <Link href="#tables" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  6. Table Elements
                </Link>
                <Link href="#lists" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  7. List Elements
                </Link>
                <Link href="#semantics" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  8. Semantic Elements
                </Link>
                <Link href="#interactive" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  9. Interactive Elements
                </Link>
                <Link href="#meta" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  10. Meta Tags
                </Link>
                <Link href="#additional-text" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  11. Additional Text Formatting
                </Link>
                <Link href="#input-types" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  12. Form Input Types
                </Link>
                <Link href="#embedded" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  13. Embedded Content
                </Link>
                <Link href="#html5-specific" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  14. HTML5 Specific Tags
                </Link>
                <Link href="#additional-forms" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  15. Additional Form Elements
                </Link>
                <Link href="#accessibility" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  16. Accessibility Tags
                </Link>
                <Link href="#advanced-html5" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  17. Advanced HTML5 Elements
                </Link>
                <Link href="#data-time" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  18. Data and Time Elements
                </Link>
                <Link href="#browser-support" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  19. Browser Support Elements
                </Link>
                <Link href="#svg" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  20. SVG Elements
                </Link>
                <Link href="#math" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  21. Math Elements
                </Link>
                <Link href="#microdata" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  22. Microdata Elements
                </Link>
                <Link href="#security" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  23. Security Elements
                </Link>
              </nav>

              <div className="mt-8">
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a 
                      href="https://developer.mozilla.org/en-US/docs/Web/HTML" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      MDN Web Docs - HTML
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.w3.org/TR/html5/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      HTML5 Specification
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
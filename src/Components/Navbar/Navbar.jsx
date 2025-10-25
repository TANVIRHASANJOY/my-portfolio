import React, { useState } from 'react'

const sections = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('Home')

  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left - Name */}
        <div className="text-xl font-bold text-blue-600 cursor-default select-none">
          Tanvir Hasan Joy
        </div>

        {/* Center - Navigation Buttons */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              onClick={() => setActive(section)}
              className={`relative pb-1 font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition ${
                active === section ? 'text-blue-600' : ''
              }`}
            >
              {section}
              {active === section && (
                <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-blue-600 rounded" />
              )}
            </a>
          ))}
        </div>

        {/* Right - View CV Button */}
        <div className="flex gap-2">
          <a
            href="/assets/Tanvir Hasan Joy1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            View CV
          </a>
          <a
            href="/assets/Tanvir Hasan Joy(CV).pdf"
            download="Tanvir Hasan Joy(CV).pdf"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Download
          </a>
        </div>
      </nav>
    </div>
  )
}

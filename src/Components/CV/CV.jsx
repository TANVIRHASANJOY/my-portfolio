import React from 'react'

export default function CV() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded shadow-md my-10 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-1">Tanvir Hasan Joy</h1>
        <p className="text-blue-600 dark:text-blue-400 font-semibold">
          Frontend Developer & MERN Stack Learner
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          Email: tanvir.joy@example.com | Phone: +880123456789 | LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/tanvirjoy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/tanvirjoy
          </a>
        </p>
      </header>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 border-b border-blue-600 inline-block">
          Education
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>BSc in Computer Science & Engineering</strong>, Model Institute
            of Science and Technology (MIST) — Currently Pursuing
          </li>
          <li>
            <strong>HSC</strong>, XYZ College — 2019-2021 — GPA: 5.00
          </li>
          <li>
            <strong>SSC</strong>, ABC High School — 2018 — GPA: 4.83
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 border-b border-blue-600 inline-block">
          Skills
        </h2>
        <p>
          HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS, Git,
          GitHub, VS Code
        </p>
      </section>

      {/* Experience & Projects */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 border-b border-blue-600 inline-block">
          Experience & Projects
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Personal Portfolio Website</strong> — Built a responsive React
            portfolio showcasing projects, skills, and experience.
          </li>
          <li>
            <strong>Internship at XYZ Company</strong> — Worked on frontend features and
            bug fixes for an e-commerce platform.
          </li>
          <li>
            <strong>Resort Booking System</strong> — Developed a Node.js and
            MongoDB-based online booking system.
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 border-b border-blue-600 inline-block">
          Contact
        </h2>
        <p>Email: tanvir.joy@example.com</p>
        <p>Phone: +880123456789</p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/tanvirjoy"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/tanvirjoy
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/tanvirjoy"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/tanvirjoy
          </a>
        </p>
      </section>
    </section>
  )
}

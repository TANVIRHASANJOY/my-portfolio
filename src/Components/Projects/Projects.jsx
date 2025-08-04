import React from 'react'

const projects = [
  {
    title: 'Vocabulary Learning App',
    description:
      'A React app to learn English words through lessons and quizzes.',
    tech: 'React, Tailwind CSS, API Fetching',
  },
  {
    title: 'Resort Reservation System',
    description:
      'Online booking system for resorts, vehicles, and halls with dynamic pricing.',
    tech: 'Node.js, MongoDB, Tailwind CSS',
  },
  {
    title: 'Facebook Clone',
    description:
      'A React-based social app with posting, commenting, liking, and dark mode.',
    tech: 'React, Tailwind CSS',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-[50vh]">
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-600 inline-block pb-2">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map(({ title, description, tech }) => (
          <div
            key={title}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow cursor-default"
          >
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p>{description}</p>
            <p className="italic mt-1 text-sm text-gray-600 dark:text-gray-400">
              Tech: {tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

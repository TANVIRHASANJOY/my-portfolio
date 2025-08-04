import React from 'react'
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa'
import { SiTailwindcss, SiMongodb } from 'react-icons/si'

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-600" />, label: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-600" />, label: 'CSS3' },
    { icon: <FaJsSquare className="text-yellow-400" />, label: 'JavaScript' },
    { icon: <FaReact className="text-sky-500" />, label: 'React' },
    { icon: <SiTailwindcss className="text-teal-400" />, label: 'Tailwind CSS' },
    { icon: <FaGitAlt className="text-red-600" />, label: 'Git' },
    { icon: <FaNodeJs className="text-green-600" />, label: 'Node.js' },
    { icon: <SiMongodb className="text-green-700" />, label: 'MongoDB' },
    { icon: <FaDatabase className="text-gray-600" />, label: 'Databases' },
  ]

  return (
    <section id="skills" className="min-h-[50vh]">
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-600 inline-block pb-2">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map(({ icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center space-y-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:scale-105 transition-transform cursor-default"
          >
            <div className="text-6xl">{icon}</div>
            <span className="text-lg font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

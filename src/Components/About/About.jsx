import React from 'react'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[50vh] p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <h2 className="text-4xl font-bold mb-4 border-b-4 border-blue-600 inline-block pb-2">
        About Me
      </h2>
     <div>
          <p className="text-lg leading-relaxed mb-4">
            👋 Hi, I’m <span className="font-semibold">Tanvir Hasan Joy</span>, a passionate Frontend Developer & MERN Stack Learner from Bangladesh. I love crafting clean, responsive, and interactive websites that deliver real user value.
          </p>

          <ul className="space-y-2 text-sm md:text-base">
           <li>🎓 BSc in CSE at MIST (Model Institute of Science and Technology)</li>
            <li>💻 Skills: HTML, CSS, JavaScript, React, Node.js, MongoDB, Tailwind</li>
            <li>🛠️ Tools: Git, GitHub, VS Code, Figma</li>
            <li>🌱 Currently learning: Full Stack Development & UI/UX</li>
            <li>🎯 Goal: Become a world-class web developer & build meaningful projects</li>
          </ul>
        </div>
    </section>
  )
}

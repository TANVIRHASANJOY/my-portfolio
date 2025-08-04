import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-[70vh] flex flex-col items-center justify-center"
    >
      <h1 className="text-6xl font-extrabold mb-3 border-b-4 border-blue-600 pb-2">
        Tanvir Hasan Joy
      </h1>
      <p className="text-2xl mb-6 text-center max-w-xl">
        I am a{' '}
        <span className="text-blue-600 font-semibold">
          <Typewriter
            words={[
              'Frontend Developer',
              'MERN Stack Learner',
              'Web Enthusiast',
            ]}
            loop={0} // infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </p>
      <a
        href="#projects"
        className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        View Projects
      </a>
    </section>
  )
}

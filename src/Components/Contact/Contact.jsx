import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="min-h-[40vh]">
      <h2 className="text-4xl font-bold mb-6 border-b-4 border-blue-600 inline-block pb-2">
        Contact
      </h2>
      <p className="mb-4">
        Feel free to reach out to me via email or social media. I’d love to connect!
      </p>
      <ul className="space-y-2 text-lg">
        <li>
          Email:{' '}
          <a
            href="mailto:tanvirhasanjoy18@gmail.com"
            className="text-blue-600 hover:underline"
          >
            tanvirhasanjoy18@gmail.com
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a
            href="https://github.com/TANVIRHASANJOY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
         https://github.com/TANVIRHASANJOY
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href="www.linkedin.com/in/tanvir-hasan-joy-a10255239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
           www.linkedin.com/in/tanvir-hasan-joy-a10255239
          </a>
        </li>
        <li>
          Phone-Number:{' '}
          <a
            href="01314915433"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
           01314915433
          </a>
        </li>
      </ul>
    </section>
  )
}

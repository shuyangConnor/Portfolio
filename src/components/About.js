import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Connor, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              🚀 Mission: To craft elegant lines of code that make life a little
              simpler, one project at a time. <br></br>
              <br></br>🌍 Home Base: Currently, I'm stationed in Los Angeles,
              but just like a digital nomad, I'm always ready to pack my code
              and relocate to wherever the next adventure beckons. My true
              habitat? It's not a place but a world of 0s and 1s. <br></br>
              <br></br>🎓 Graduated Geek: I recently donned the cap and gown,
              earning my Bachelor's degree in Computer Science at Boston
              University. But trust me, my learning journey is far from over. In
              fact, I'm just getting started! <br></br>
              <br></br>
              🔍 Exploration Enthusiast: I'm not just a code monkey; I'm an
              explorer of the digital wilderness. I thrive on diving into
              uncharted territories, debugging the mysteries of the universe,
              and emerging victorious (or at least wiser).<br></br>
              <br></br>🎮 Off-Duty: When I'm not chasing semicolons, you'll find
              me conquering virtual worlds in video games, experimenting in the
              kitchen, or outdoors, exploring nature. <br></br>
              <br></br>📚 Never-Ending Learning: The tech world evolves faster
              than a Tesla on Ludicrous mode. I'm on a constant quest to keep up
              with the latest trends and cutting-edge tech. I'm addicted to
              learning and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

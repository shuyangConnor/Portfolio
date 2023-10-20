import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import realEstate from '../assets/projects/realestate.jpg'
import Netflex from '../assets/projects/Netflex_React.png'
import MIT from '../assets/projects/Mit_6.824.png'
import Natours from '../assets/projects/Natours.png'
import SavorSeeker from '../assets/projects/SavorSeeker.png'
import Tor from '../assets/projects/Tor.png'
import Photoshare from '../assets/projects/Photoshare.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${Natours})`,
              backgroundSize: '100% 100%',
            }}
            className="shadow-lg bg-cover shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Full Stack Web Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://natoursapp-d506ab07f8c1.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/shuyangConnor/Learn-NodeJS/tree/main/natours">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Netflex})`,
              backgroundSize: '100% 100%',
            }}
            className="shadow-lg bg-cover shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Netflex React Clone
              </span>
              <div className="pt-8 text-center">
                <a href="https://netflix-react-yt-cc95a.firebaseapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/shuyangConnor/netflix-react-js">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${SavorSeeker})`,
              backgroundSize: '100% 100%',
            }}
            className="shadow-lg bg-cover shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Recipe Search Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://shuyangconnor.github.io/BUCS411A5/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/shuyangConnor/BUCS411A5/tree/main/react-cs411">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${MIT})`,
              backgroundSize: '100% 100%',
            }}
            className="shadow-lg bg-cover shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MIT_6.824 Distributed System
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/shuyangConnor/MIT_6.824_Distributed_System">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{
              backgroundImage: `url(${Tor})`,
              backgroundSize: '100% 100%',
            }}
            className="shadow-lg bg-cover shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tor Circuit Implementation
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/shuyangConnor/Tor_Circuit">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${Photoshare})`,
              backgroundSize: '100% 100%',
            }}
            className="shadow-lg bg-cover shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Photo Sharing Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/shuyangConnor/Photoshare">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work

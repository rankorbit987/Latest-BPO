"use client"
import React from 'react'
import ContactUsButton from '../UI/Buttons/contactusBtn'

export default function Hero() {
  return (
    <section className="min-h-screen overflow-hidden flex items-center justify-center bg-white px-4 sm:px-6 lg:px-20 py-20 md:py-0">
      <div className="text-left w-full mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-black">
          <div className="block">Your</div>
          <div className="block relative">
            <div className="dropping-texts-wrapper">
              <div className="dropping-texts text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <div className="bg-green-400 px-2 rounded-lg">Caring</div>
                <div className="bg-blue-400 px-2 rounded-lg">Flexible</div>
                <div className="bg-purple-400 px-2 rounded-lg">Reliable</div>
                <div className="bg-yellow-400 px-2 rounded-lg">Efficient</div>
                <div className="bg-green-400 px-2 rounded-lg">Scalable</div>
                <div className="bg-blue-400 px-2 rounded-lg">Cost-Saving</div>
              </div>
            </div>
          </div>
          <div className="block w-full mt-6">BPO Services Squad</div>
        </h1>

        <div className="mt-8 sm:mt-10">
          <ContactUsButton />
        </div>
      </div>

      <style jsx>{`
        .dropping-texts-wrapper {
          display: inline-block;
          vertical-align: middle;
          height: 1em;
          line-height: 1;
        }

        .dropping-texts {
          display: inline-block;
          text-align: left;
          height: 1em;
          position: relative;
          vertical-align: top;
          width: auto;
          min-width: 160px;
        }

        @media (min-width: 640px) {
          .dropping-texts {
            min-width: 180px;
          }
        }

        @media (min-width: 768px) {
          .dropping-texts {
            min-width: 200px;
          }
        }

        .dropping-texts > div {
          font-size: inherit;
          opacity: 0;
          position: absolute;
          bottom: 0;
          left: 0;
          font-weight: 300;
          box-shadow: 0px 60px 25px -20px rgba(0,0,0,0.1);
          color: black;
          padding: 0 0.5rem;
          border-radius: 0.375rem;
          transform-origin: left center;
          white-space: nowrap;
        }

        .dropping-texts > div:nth-child(1) {
          animation: drop 12s linear infinite 0s;
        }
        .dropping-texts > div:nth-child(2) {
          animation: drop 12s linear infinite 2s;
        }
        .dropping-texts > div:nth-child(3) {
          animation: drop 12s linear infinite 4s;
        }
        .dropping-texts > div:nth-child(4) {
          animation: drop 12s linear infinite 6s;
        }
        .dropping-texts > div:nth-child(5) {
          animation: drop 12s linear infinite 8s;
        }
        .dropping-texts > div:nth-child(6) {
          animation: drop2 12s linear infinite 10s;
        }

        @keyframes drop {
          0% {
            opacity: 0;
            transform: translateY(30px) rotate(25deg);
          }
          8% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          25% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          26% {
            opacity: 0;
            transform: translateY(-20px) translateX(100px);
          }
          100% {
            opacity: 0;
            transform: translateY(30px) rotate(-15deg);
          }
        }

        @keyframes drop2 {
          0% {
            opacity: 0;
            transform: translateY(30px) rotate(25deg);
          }
          8% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          25% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          26% {
            opacity: 0;
            transform: translateY(1000px) translateX(-800px) scale(10);
          }
          100% {
            opacity: 0;
            transform: translateY(30px) rotate(-15deg);
          }
        }
      `}</style>
    </section>
  );
}
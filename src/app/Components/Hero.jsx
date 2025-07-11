"use client"
import React from 'react'
import ContactUsButton from '../UI/Buttons/contactusBtn'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-20 py-20 md:py-0">
      <div className="text-left w-full mt-10">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium leading-tight text-black">
          <div className="flex flex-col md:flex-row items-baseline">
            <span className="block">Your</span>
            <div className="block relative md:ml-4">
              <div className="dropping-texts-wrapper">
                <div className="dropping-texts">
                  <div className="bg-[#d65a5a] px-2 rounded-lg">Caring</div>
                  <div className="bg-[#4f64a1] px-2 rounded-lg">Flexible</div>
                  <div className="bg-[#e07a7a] px-2 rounded-lg">Reliable</div>
                  <div className="bg-[#6585bb] px-2 rounded-lg">Efficient</div>
                  <div className="bg-[#ec9a9a] px-2 rounded-lg">Scalable</div>
                  <div className="bg-[#8aa6d5] px-2 rounded-lg">Cost-Saving</div>
                </div>
              </div>
            </div>
          </div>
          <div className="block w-full">BPO Services Squad</div>
        </h1>

        <div className="mt-6">
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
          border-radius: 0.575rem;
          transform-origin: left center;
          white-space: nowrap;
        }

        .dropping-texts > div:nth-child(1) {
          animation: drop 9s linear infinite 0s;
        }
        .dropping-texts > div:nth-child(2) {
          animation: drop 9s linear infinite 1.5s;
        }
        .dropping-texts > div:nth-child(3) {
          animation: drop 9s linear infinite 3s;
        }
        .dropping-texts > div:nth-child(4) {
          animation: drop 9s linear infinite 4.5s;
        }
        .dropping-texts > div:nth-child(5) {
          animation: drop 9s linear infinite 6s;
        }
        .dropping-texts > div:nth-child(6) {
          animation: drop 9s linear infinite 7.5s;
        }

        @keyframes drop {
          0% {
            opacity: 0;
            transform: translateY(20px) rotate(10deg);
          }
          8% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          25% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          25.1% {
            opacity: 0;
            transform: translateY(0) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}
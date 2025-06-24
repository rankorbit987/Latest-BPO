"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BusinessTrust() {
  const [activeImage, setActiveImage] = useState(1);
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            if (index !== -1) {
              setActiveImage(index + 1);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="mx-auto px-4 sm:px-12 lg:px-20 py-12 md:py-20 bg-white text-black">
      {/* Heading */}
      <div className="mb-12 md:mb-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-6 md:mb-8 max-w-5xl leading-tight">
          Trusted By Businesses Who Need Real Support, Not Just Promises
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12" ref={containerRef}>
        <div className="hidden lg:block lg:w-1/2 h-[400px] md:h-[500px] lg:min-h-[70vh] sticky top-24 self-start">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className={`absolute inset-0 transition-opacity duration-500 ${activeImage === 1 ? "opacity-100" : "opacity-0"}`}>
              <div className="relative w-full h-full max-w-[90%] mx-auto">
                <Image src="/Images/BusinessTrustImages/frame1.svg" alt="Real Experience" layout="fill" objectFit="contain" />
              </div>
            </div>

            <div className={`absolute inset-0 transition-opacity duration-500 ${activeImage === 2 ? "opacity-100" : "opacity-0"}`}>
              <div className="relative w-full h-full max-w-[90%] mx-auto">
                <Image src="/Images/BusinessTrustImages/frame2.svg" alt="Tireless Commitment" layout="fill" objectFit="contain" />
              </div>
            </div>

            <div className={`absolute inset-0 transition-opacity duration-500 ${activeImage === 3 ? "opacity-100" : "opacity-0"}`}>
              <div className="relative w-full h-full max-w-[90%] mx-auto">
                <Image src="/Images/BusinessTrustImages/frame3.svg" alt="Innovative Solutions" layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-16">
          <section ref={sectionRefs[0]} className="scroll-mt-24">
            <div className="lg:hidden relative w-full h-[300px] mb-8">
              <Image src="/Images/BusinessTrustImages/frame1.svg" alt="Real Experience" layout="fill" objectFit="contain" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Real World Experience That Delivers</h2>
            <div className="h-px bg-gray-200 mb-6"></div>
            <p className="text-base md:text-lg text-gray-600">
              Our team brings deep industry knowledge from years of hands-on leadership roles.
              We understand your challenges because we have faced them ourselves.
              From planning to execution, the same people guide your project every step of the way.
              Our independence allows us to give advice that benefits only you, with no hidden agendas.
            </p>
          </section>

          <section ref={sectionRefs[1]} className="scroll-mt-24">
            <div className="lg:hidden relative w-full h-[300px] mb-8">
              <Image src="/Images/BusinessTrustImages/frame2.svg" alt="Tireless Commitment" layout="fill" objectFit="contain" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Tireless Commitment To Your Success</h2>
            <div className="h-px bg-gray-200 mb-6"></div>
            <p className="text-base md:text-lg text-gray-600">
              Tireless commitment defines how we work every day. We act like an extension of your team.
              Our support remains steady, reliable, and fully invested in your outcomes.
              Whether handling customer calls or streamlining operations, we stay focused on making your business stronger.
            </p>
          </section>

          <section ref={sectionRefs[2]} className="scroll-mt-24">
            <div className="lg:hidden relative w-full h-[300px] mb-8">
              <Image src="/Images/BusinessTrustImages/frame3.svg" alt="Innovative Solutions" layout="fill" objectFit="contain" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Innovative Solutions Powered By AI And People</h2>
            <div className="h-px bg-gray-200 mb-6"></div>
            <p className="text-base md:text-lg text-gray-600">
              We combine advanced AI with trained human expertise to deliver efficient solutions.
              Our automation handles tasks quickly, while our agents bring empathy where it matters most.
              As your needs grow, our scalable services keep pace, ensuring smooth operations every day.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

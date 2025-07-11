"use client";

export default function BlastedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Ultra light base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #c93c3c 0%, #9fa8da 100%)',
        }}
      ></div>

      {/* Very light pink energy core */}
      <div
        className="absolute top-1/3 left-1/4 w-[80%] h-[80%] rounded-full animate-energy-pulse z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255,180,180,0.5) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate(-50%, -50%)',
          opacity: 0.7,
        }}
      ></div>

      {/* Very light blue energy field */}
      <div
        className="absolute bottom-1/3 right-1/4 w-[90%] h-[90%] rounded-full animate-energy-flow z-10"
        style={{
          background: 'radial-gradient(circle, rgba(159,168,218,0.4) 0%, transparent 70%)',
          filter: 'blur(90px)',
          transform: 'translate(50%, 50%)',
          opacity: 0.7,
        }}
      ></div>

      {/* Large water bubbles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none z-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            width: `${Math.random() * 40 + 30}px`,
            height: `${Math.random() * 40 + 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 20 + 15}s infinite linear`,
            animationDelay: `${Math.random() * 5}s`,
            filter: 'blur(2px)',
          }}
        ></div>
      ))}

      {/* Minimal particle network */}
      <div
        className="absolute inset-0 opacity-5 z-30"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 1000\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.3\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.3\'/%3E%3C/svg%3E")',
          mixBlendMode: 'overlay',
        }}
      ></div>

      {/* Delicate energy flow */}
      <div
        className="absolute inset-0 pointer-events-none z-40"
        style={{
          background: 'linear-gradient(135deg, rgba(255,180,180,0.03) 0%, transparent 50%, rgba(159,168,218,0.03) 100%)',
          animation: 'energyFlow 30s infinite linear',
          opacity: 0.15,
        }}
      ></div>

      <style jsx>{`
        @keyframes energyFlow {
          0% { transform: translateX(-50%) translateY(-50%); }
          50% { transform: translateX(50%) translateY(50%); }
          100% { transform: translateX(-50%) translateY(-50%); }
        }
        @keyframes energy-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
        }
        @keyframes energy-flow {
          0% { transform: translate(50%, 50%) scale(1) rotate(0deg); }
          50% { transform: translate(50%, 50%) scale(1.03) rotate(3deg); }
          100% { transform: translate(50%, 50%) scale(1) rotate(0deg); }
        }
        @keyframes float {
          0% { 
            transform: translateY(100vh) translateX(${Math.random() * 40 - 20}px);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% { 
            transform: translateY(-20vh) translateX(${Math.random() * 40 - 20}px);
            opacity: 0;
          }
        }
        .animate-energy-pulse {
          animation: energy-pulse 10s infinite ease-in-out;
        }
        .animate-energy-flow {
          animation: energy-flow 12s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
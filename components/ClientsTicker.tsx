'use client';

const clients = [
  { name: 'Belfius', src: '/images/Belfius-logo.png' },
  { name: 'BNP Paribas', src: '/images/BNP-Paribas-Logo.png' },
  { name: "Inn'ovin", src: '/images/innovin-logo.png' },
  { name: 'Solvay', src: '/images/Solvay-logo.png' },
];

const tickerItems = [...clients, ...clients];

export function ClientsTicker() {
  return (
    <section className="border-y border-white/6 bg-[#243050] py-12">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-[#8a9ab8]">
        Ils nous font confiance
      </p>

      <div style={{ overflow: 'hidden' }}>
        <div
          className="ticker-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            animation: 'ticker 20s linear infinite',
          }}
        >
          {tickerItems.map(({ name, src }, i) => (
            <span key={i} className="ticker-item mx-8 flex shrink-0 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={name}
                width={120}
                height={40}
                style={{ objectFit: 'contain', opacity: 0.85 }}
              />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

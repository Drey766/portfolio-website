const stack = [
  { cat: 'Frontend', items: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS'] },
  { cat: 'Backend', items: ['Supabase', 'PostgreSQL', 'Node.js'] },
  { cat: 'Payments', items: ['M-Pesa Daraja API', 'STK Push'] },
  { cat: 'Comms', items: ['WhatsApp Business Cloud API'] },
  { cat: 'Deploy', items: ['Vercel', 'Firebase'] },
];

const socials = [
  { label: 'GitHub', handle: '@Drey766', url: 'https://github.com/Drey766' },
  { label: 'LinkedIn', handle: '@andrew-kimani', url: 'https://linkedin.com/in/andrew-kimani' },
  { label: 'Twitter/X', handle: '@xdrey766', url: 'https://twitter.com/xdrey766' },
  { label: 'Instagram', handle: '@andrey_kimarr', url: 'https://instagram.com/andrey_kimarr' },
];

export default function About() {
  return (
    <>
      <style>{`
        .about-section {
          max-width: 1140px;
          margin: 0 auto;
          padding: 100px 40px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .about-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6B6B6B;
          margin-bottom: 12px;
        }
        .about-h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #1A1A1A;
          margin-bottom: 32px;
        }
        .about-text {
          display: flex;
          flex-direction: column;
          gap: 18px;
          margin-bottom: 36px;
        }
        .about-text p {
          font-size: 15px;
          color: #555;
          line-height: 1.8;
        }
        .about-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .about-cta-primary {
          background: #F5A623;
          color: #1A1A1A;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 100px;
          text-decoration: none;
          transition: background 0.2s;
        }
        .about-cta-primary:hover { background: #D4891A; }
        .about-cta-secondary {
          border: 1.5px solid #E2DED7;
          color: #1A1A1A;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 100px;
          text-decoration: none;
          transition: border-color 0.2s;
        }
        .about-cta-secondary:hover { border-color: #1A1A1A; }

        /* Right column */
        .stack-title {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 24px;
        }
        .stack-rows {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }
        .stack-row {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .stack-cat {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9B9590;
          width: 80px;
          flex-shrink: 0;
          padding-top: 6px;
        }
        .stack-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .stack-pill {
          font-size: 13px;
          font-weight: 500;
          background: #fff;
          border: 1px solid #E2DED7;
          color: #1A1A1A;
          padding: 5px 14px;
          border-radius: 8px;
        }

        .social-divider {
          border: none;
          border-top: 1px solid #E2DED7;
          margin-bottom: 24px;
        }
        .social-title {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1A1A1A;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }
        .socials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .social-card {
          border: 1px solid #E2DED7;
          border-radius: 12px;
          padding: 14px 16px;
          text-decoration: none;
          transition: border-color 0.2s;
          display: block;
        }
        .social-card:hover { border-color: #F5A623; }
        .social-label { font-size: 11px; color: #9B9590; margin-bottom: 2px; }
        .social-handle {
          font-size: 13px;
          font-weight: 600;
          color: #1A1A1A;
          transition: color 0.2s;
        }
        .social-card:hover .social-handle { color: #F5A623; }

        .about-left, .about-right {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .about-left.visible, .about-right.visible { opacity: 1; transform: none; }
        .about-right { transition-delay: 0.15s; }

        @media (max-width: 800px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
          .about-section { padding: 60px 24px; }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-left" data-reveal>
            <p className="about-eyebrow">About me</p>
            <h2 className="about-h2">Nairobi-based.<br />Business-focused.</h2>
            <div className="about-text">
              <p>
                I'm a full-stack web developer based in Nairobi, Kenya. I build e-commerce websites
                specifically designed for the Kenyan market — M-Pesa checkout as standard, WhatsApp
                for customer communication, and prices in KES from day one.
              </p>
              <p>
                I don't use templates. Every site I build is custom, with a proper product
                management system so you're never dependent on me for day-to-day updates.
              </p>
              <p>
                I've built sites for hair salons, perfume shops, clothing stores, electronics
                retailers, furniture stores, and beauty brands. If you sell something, I can build
                you a site to sell it online.
              </p>
            </div>
            <div className="about-ctas">
              <a href="mailto:andrewkimani766@gmail.com" className="about-cta-primary">Email me</a>
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" className="about-cta-secondary">WhatsApp</a>
            </div>
          </div>

          <div className="about-right" data-reveal>
            <h3 className="stack-title">Tech stack</h3>
            <div className="stack-rows">
              {stack.map(s => (
                <div key={s.cat} className="stack-row">
                  <span className="stack-cat">{s.cat}</span>
                  <div className="stack-items">
                    {s.items.map(item => (
                      <span key={item} className="stack-pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <hr className="social-divider" />
            <p className="social-title">Find me</p>
            <div className="socials-grid">
              {socials.map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="social-card">
                  <div className="social-label">{s.label}</div>
                  <div className="social-handle">{s.handle}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

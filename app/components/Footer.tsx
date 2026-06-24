export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #0D0D0D;
          padding: 40px;
        }
        .footer-inner {
          max-width: 1140px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.03em;
        }
        .footer-logo span { color: #F5A623; }
        .footer-copy {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          margin-top: 2px;
        }
        .footer-links {
          display: flex;
          gap: 24px;
        }
        .footer-link {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #F5A623; }
        @media (max-width: 600px) {
          .footer { padding: 32px 24px; }
        }
      `}</style>
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <a href="#" className="footer-logo">AK<span>.</span></a>
            <p className="footer-copy">© 2024 Andrew Kimani · Nairobi, Kenya</p>
          </div>
          <div className="footer-links">
            {[
              { label: 'GitHub', url: 'https://github.com/Drey766' },
              { label: 'LinkedIn', url: 'https://linkedin.com/in/andrew-kimani' },
              { label: 'Instagram', url: 'https://instagram.com/andrey_kimarr' },
              { label: 'Email', url: 'mailto:andrewkimani766@gmail.com' },
            ].map(l => (
              <a key={l.label} href={l.url} className="footer-link" target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

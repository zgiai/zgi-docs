export default function ArchitectureLayers({ title, centerLayers, leftCards, rightCards }) {
  return (
    <section className="zgi-arch-wrap">
      <style>{`
        .zgi-arch-wrap {
          margin: 20px 0 28px;
          padding: 28px 20px 24px;
          border-radius: 20px;
          border: 1px solid #1d2945;
          background: radial-gradient(1200px 520px at 50% 40%, #0e1940 0%, #070d25 44%, #040814 100%);
        }
        .zgi-arch-title {
          margin: 0 0 20px;
          text-align: center;
          color: #d1d5db;
          font-weight: 700;
          letter-spacing: 0;
          font-size: 24px;
          line-height: 1.2;
        }
        .zgi-arch-grid {
          display: grid;
          grid-template-columns: 1fr 300px 1fr;
          gap: 14px;
          align-items: start;
        }
        .zgi-arch-col {
          display: grid;
          gap: 14px;
        }
        .zgi-arch-card {
          background: rgba(10, 16, 32, 0.9);
          border: 1px solid #263244;
          border-radius: 14px;
          padding: 18px 16px;
          min-height: 136px;
        }
        .zgi-arch-card h4 {
          margin: 0 0 10px;
          color: #f3f4f6;
          font-size: 17px;
          line-height: 1.25;
          letter-spacing: 0;
          font-weight: 700;
        }
        .zgi-arch-card p {
          margin: 0;
          color: #94a3b8;
          font-size: 15px;
          line-height: 1.6;
          letter-spacing: 0;
        }
        .zgi-arch-center {
          display: grid;
          gap: 12px;
          align-content: center;
          padding-top: 6px;
        }
        .zgi-arch-layer {
          border-radius: 16px;
          padding: 18px 10px 16px;
          text-align: center;
          color: #ffffff;
          background: linear-gradient(135deg, #0053FF, #4c45ff);
          box-shadow: 0 10px 26px rgba(0, 83, 255, 0.34);
        }
        .zgi-arch-layer .cn {
          font-size: 17px;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: 0;
        }
        .zgi-arch-layer .en {
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.2;
          letter-spacing: 0;
          opacity: 0.92;
          text-transform: uppercase;
        }
        @media (max-width: 1024px) {
          .zgi-arch-grid {
            grid-template-columns: 1fr;
          }
          .zgi-arch-center {
            order: -1;
          }
          .zgi-arch-card {
            min-height: unset;
          }
        }
      `}</style>

      <h3 className="zgi-arch-title">{title}</h3>

      <div className="zgi-arch-grid">
        <div className="zgi-arch-col">
          {leftCards.map((c, i) => (
            <article key={`l-${i}`} className="zgi-arch-card">
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>

        <div className="zgi-arch-center">
          {centerLayers.map((l, i) => (
            <div key={`m-${i}`} className="zgi-arch-layer">
              <div className="cn">{l.cn}</div>
              <div className="en">{l.en}</div>
            </div>
          ))}
        </div>

        <div className="zgi-arch-col">
          {rightCards.map((c, i) => (
            <article key={`r-${i}`} className="zgi-arch-card">
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

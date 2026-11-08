export const metadata = {
  alternates: { canonical: "https://andyjones.co" },
};

export default function Home() {
  return (
    <section className="quiet-home" aria-label="Andy Jones — contact">
      <div className="quiet-atmosphere" aria-hidden="true" />
      <div className="quiet-grain" aria-hidden="true" />
      <div className="quiet-identity">
        <div className="quiet-orbit" aria-hidden="true"><span /><span /><span /><span /></div>
        <h1>Andy Jones</h1>
        <a className="quiet-contact" href="mailto:contact@andyjones.co">
          <span className="quiet-selector" aria-hidden="true">›</span>
          contact <span className="quiet-at">[at]</span> andyjones.co
        </a>
      </div>
      <span className="quiet-coordinate" aria-hidden="true">01 / CONTACT</span>
    </section>
  );
}

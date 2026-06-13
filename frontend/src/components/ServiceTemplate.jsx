import { Link } from 'react-router-dom';

/**
 * ServiceTemplate — reusable layout component matching service-template.php exactly.
 *
 * Structure mirrors PHP:
 *   <section class="service-hero">   → h1 + p
 *   <section class="service-content"> → .service-grid (.service-text + .service-image)
 *   <section class="service-cta">    → CTA with Contact link
 *
 * Props:
 *   title  {string}
 *   desc   {string}
 *   about  {string}
 *   image  {string}  — absolute path served from /public e.g. "/assets/images/banking.png"
 *   points {string[]}
 */
export default function ServiceTemplate({ title, desc, about, image, points }) {
  return (
    <>
      {/* ===== SERVICE HERO (matches .service-hero in service-template.php) ===== */}
      <section className="service-hero">
        <div className="container">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </section>

      {/* ===== SERVICE CONTENT (matches .service-content .service-grid) ===== */}
      <section className="service-content">
        <div className="container service-grid">

          {/* LEFT — TEXT */}
          <div className="service-text">
            <h2>About {title}</h2>
            <p>{about}</p>

            {points && points.length > 0 && (
              <ul className="service-points">
                {points.map((point, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-circle-check"></i>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* RIGHT — IMAGE */}
          <div className="service-image">
            <img src={image} alt={title} />
          </div>

        </div>
      </section>


    </>
  );
}

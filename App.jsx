import photo from "./photo.jpg";
import cv1 from "./cv-1.jpg";
import cv2 from "./cv-2.jpg";
import infographic from "./infographic.jpg";
import cvPdf from "./cv.pdf?url";

const LINKEDIN = "https://www.linkedin.com/in/hossam-hassan-hefni";

export default function App() {
  return (
    <main>
      <section className="card top">
        <img className="avatar" src={photo} alt="Hossam Hassan Hefni" />
        <h1>Hossam Hassan Hefni Hassan</h1>
        <p className="role">Professional React Web Developer</p>
        <p className="meta">Nano Degree, Software Development</p>
        <div className="actions">
          <a className="btn primary" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="btn ghost" href={cvPdf} download="Hossam_Hassan_Hefny_CV.pdf">
            Download CV
          </a>
        </div>
      </section>

      <section className="card">
        <h2>CV</h2>
        <img className="doc" src={cv1} alt="CV, page 1" />
        <img className="doc" src={cv2} alt="CV, page 2" />
      </section>

      <section className="card">
        <h2>Infographic</h2>
        <img className="doc" src={infographic} alt="Sanda project infographic" />
      </section>
    </main>
  );
}

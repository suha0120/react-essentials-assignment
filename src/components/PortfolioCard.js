import { useState } from "react";
import SkillBadge from "./SkillBadge";

const images = [
  "https://i.pravatar.cc/200?img=1",
  "https://i.pravatar.cc/200?img=2",
  "https://i.pravatar.cc/200?img=3",
  "https://i.pravatar.cc/200?img=4",
];

function PortfolioCard() {
  const skills = [
    "Design Systems",
    "React",
    "TypeScript",
    "Figma",
    "Prototyping",
    "Accessibility",
  ];

  const [photo, setPhoto] = useState(0);
  const [likes, setLikes] = useState(128);

  const nextImage = () => {
    setPhoto((photo + 1) % images.length);
  };

  const prevImage = () => {
    setPhoto((photo - 1 + images.length) % images.length);
  };

  const contact = () => {
    alert("Thanks for visiting my portfolio!");
  };

  return (
    <div className="card">

      <div className="profile">
        <img src={images[photo]} alt="profile" />

        <div>
          <h1>TuteDude</h1>
          <h3>Product Designer & Frontend Engineer</h3>
        </div>
      </div>

      <p className="description">
        I design and build calm, focused product experiences
        for fast-moving teams. Currently exploring AI-assisted
        interfaces, design systems, and high-performance UI
        engineering.
      </p>

      <h4>Skills</h4>

      <div className="skills">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>

      <div className="bottom">

        <button className="themeBtn">
          🌙 Dark
        </button>

        <div className="nav">
          <button onClick={prevImage}>❮</button>

          <span>
            {photo + 1}/{images.length}
          </span>

          <button onClick={nextImage}>❯</button>
        </div>

        <div
          className="like"
          onClick={() => setLikes(likes + 1)}
        >
          🤍 {likes}
        </div>

        <button
          className="contact"
          onClick={contact}
        >
          ✉ Contact
        </button>

      </div>

    </div>
  );
}

export default PortfolioCard;
import React, { ReactNode, useEffect, useMemo, useState } from "react";

type SlideType = {
  title: string;
  subtitle: string;
  content: ReactNode | null;
  center?: boolean;
};

type SlideProps = SlideType & {
  index: number;
  total: number;
};

const containerStyle: React.CSSProperties = {
  minHeight: "100vh",
  width: "100vw",
  background: "linear-gradient(135deg, #0f576b, #0b3f4d)",
  color: "#e2e8f0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Inter, system-ui, sans-serif",
  padding: "16px",
  boxSizing: "border-box",
  overflow: "hidden",
};

const slideBox: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.92)",
  borderRadius: "28px",
  padding: "36px 44px",
  maxWidth: "1100px",
  width: "min(1100px, 94vw)",
  minHeight: "min(78vh, 760px)",
  maxHeight: "88vh",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  color: "#0f172a",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const embedCard: React.CSSProperties = {
  width: "100%",
  borderRadius: "20px",
  overflow: "hidden",
  border: "1px solid #e2e8f0",
  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.08)",
  background: "white",
};

const navButtonBase: React.CSSProperties = {
  width: "58px",
  height: "58px",
  borderRadius: "999px",
  border: "1px solid #67e8f9",
  background: "linear-gradient(180deg, #ecfeff, #a5f3fc)",
  color: "#0f576b",
  cursor: "pointer",
  fontSize: "28px",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 8px 22px rgba(0, 0, 0, 0.25)",
  transition:
    "transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, opacity 0.15s ease",
};

const navButtonHover: React.CSSProperties = {
  background: "linear-gradient(180deg, #ecfeff, #67e8f9)",
  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
  transform: "translateY(-1px)",
};

const linkStyle: React.CSSProperties = {
  color: "#67e8f9",
  textDecoration: "none",
  fontWeight: 600,
};

const slides: SlideType[] = [
  {
    title: "The AI-sthetics of Mathematics Education",
    subtitle: "Adapting to the Dramatic Changes in Student Engagement",
    center: true,
    content: (
      <div style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
        <p>Roderic Guigo Corominas, April 13th 2026</p>
      </div>
    ),
  },
  {
    title: "Overview",
    subtitle: "What will we focus on?",
    content: (
      <div>
        <ul>
          <li>College education ...</li>
          <li>in mathematics, statistics and data science ...</li>
          <li>for interdisciplinary audiences ...</li>
          <li>ranging from engineering, life sciences and social sciences.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "How Has Teaching Changed?",
    subtitle: "",
    center: true,
    content: (
      <div style={{ width: "100%" }}>
        <div style={embedCard}>
          <iframe
            src="https://embed.polleverywhere.com/ranking_polls/m8pWKQLcMDiAh2M313Hdz?controls=none&short_poll=true"
            title="Poll Everywhere"
            style={{
              width: "100%",
              height: "52vh",
              minHeight: "420px",
              maxHeight: "560px",
              border: "none",
              display: "block",
            }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "How Has Student Engagement Changed?",
    subtitle: "",
    center: true,
    content: (
      <div style={{ width: "100%" }}>
        <div style={embedCard}>
          <iframe
            src="https://embed.polleverywhere.com/ranking_polls/m8pWKQLcMDiAh2M313Hdz?controls=none&short_poll=true"
            title="Poll Everywhere"
            style={{
              width: "100%",
              height: "52vh",
              minHeight: "420px",
              maxHeight: "560px",
              border: "none",
              display: "block",
            }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Our Studies",
    subtitle: "Self-Reported Answers By Students",
    content: (
      <p>
        In person instruction will become a unique, controlled environment, in
        which students ought to be pushed into actively engaging with
        problem-solving, critical thinking, and without technology.
      </p>
    ),
  },
  {
    title: "What is Research Saying?",
    subtitle: "",
    center: true,
    content: (
      <div style={{ width: "100%" }}>
        <div style={embedCard}>
          <iframe
            src="/pdfs/ai_tutoring_harvard.pdf"
            title="PDF Viewer"
            style={{
              width: "100%",
              height: "52vh",
              minHeight: "420px",
              maxHeight: "560px",
              border: "none",
              display: "block",
            }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Main Idea",
    subtitle: "Your key concept or result",
    content: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          fontSize: "1.05rem",
        }}
      >
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Point One</h3>
          <p>
            Explain the main mathematical idea, phenomenon, or argument you want
            the audience to understand.
          </p>
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Point Two</h3>
          <p>
            Add a supporting example, visual intuition, or short explanation
            that prepares the audience for the demo.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Interactive Applet",
    subtitle: "Embed a live demo when the site allows it",
    content: (
      <div>
        <div
          style={{
            width: "100%",
            height: "430px",
            border: "1px solid #cbd5e1",
            marginBottom: "14px",
            borderRadius: "18px",
            overflow: "hidden",
            background: "white",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          <iframe
            title="Applet"
            src="https://rodericguigocorominas.github.io/interactive-classrooms/"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
        <a
          href="https://rodericguigocorominas.github.io/interactive-classrooms/"
          target="_blank"
          rel="noreferrer"
          style={linkStyle}
        >
          Open applet in new tab
        </a>
        <p style={{ marginTop: "12px", color: "#475569" }}>
          If the applet does not appear here, the site may block iframe
          embedding. In that case, use the link above during the presentation.
        </p>
      </div>
    ),
  },
  {
    title: "First Reflection",
    subtitle: "Scarcity Value of Active In-Person Learning",
    content: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          fontSize: "1.05rem",
        }}
      >
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>How to title this?</h3>
          <p>
            In person instruction will become a unique, controlled environment,
            in which students ought to be pushed into actively engaging with
            problem-solving, critical thinking, and without technology.
          </p>
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Excellence in Teaching</h3>
          <p>
            <i>
              "...educators need to be involved in developing and testing AI
              tools in math education to stay up to date with current AI trends
              to best prepare students for an AI future. Contrary to some
              popular opinions, this effort will require teachers with even
              deeper knowledge of math instruction and assessment— math teachers
              with more experience, not less."
            </i>
          </p>
          <p style={{ textAlign: "center" }}>
            (National Council of Teachers of Mathematics)
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Second Reflection",
    subtitle: "Aim for a Controlled Use of AI",
    center: true,
    content: null,
  },
  {
    title: "Third Reflection",
    subtitle: "About What We Will Teach",
    content: (
      <p>
        With practical skills less valuable, we ought to create a distinguishing
        factor by empowering students with knowledge. Before, knowing how to
        diagonalize a matrix is more useful than understanding the definition of
        vector space. NEED A GOOD EXAMPLE.
      </p>
    ),
  },
  {
    title: "Example Image Slide",
    subtitle: "",
    center: true,
    content: (
      <img
        src="/images/my-figure.png"
        alt="Figure"
        style={{
          width: "100%",
          maxHeight: "55vh",
          objectFit: "contain",
          display: "block",
        }}
      />
    ),
  },
];

function Slide({ title, subtitle, content, center }: SlideProps) {
  const hasContent = content !== null && content !== undefined;

  return (
    <div
      style={{
        ...slideBox,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            lineHeight: 1.08,
            margin: 0,
          }}
        >
          {title}
        </h1>

        {subtitle ? (
          <h2
            style={{
              color: "#0284c7",
              fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
              fontWeight: 600,
              marginTop: "10px",
              marginBottom: 0,
            }}
          >
            {subtitle}
          </h2>
        ) : null}
      </div>

      {hasContent ? (
        <div
          style={{
            marginTop: "28px",
            fontSize: "1.2rem",
            lineHeight: 1.6,
            flex: center ? "unset" : 1,
            minHeight: 0,
            overflowY: center ? "hidden" : "auto",
            paddingRight: center ? "0" : "8px",
          }}
        >
          {content}
        </div>
      ) : null}
    </div>
  );
}

export default function App() {
  const [current, setCurrent] = useState<number>(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  const slide = useMemo(() => slides[current], [current]);

  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));
  const prev = () => setCurrent((c) => Math.max(0, c - 1));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div style={containerStyle}>
      <Slide {...slide} index={current} total={slides.length} />

      <div style={{ marginTop: "18px", display: "flex", gap: "18px" }}>
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
          style={{
            ...navButtonBase,
            ...(hoverPrev && current !== 0 ? navButtonHover : {}),
            ...(current === 0
              ? { opacity: 0.45, cursor: "default", boxShadow: "none" }
              : {}),
          }}
          onMouseEnter={() => setHoverPrev(true)}
          onMouseLeave={() => setHoverPrev(false)}
        >
          ←
        </button>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          aria-label="Next slide"
          style={{
            ...navButtonBase,
            ...(hoverNext && current !== slides.length - 1
              ? navButtonHover
              : {}),
            ...(current === slides.length - 1
              ? { opacity: 0.45, cursor: "default", boxShadow: "none" }
              : {}),
          }}
          onMouseEnter={() => setHoverNext(true)}
          onMouseLeave={() => setHoverNext(false)}
        >
          →
        </button>
      </div>
    </div>
  );
}

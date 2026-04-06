import React, { ReactNode, useEffect, useMemo, useState } from "react";

type SlideType = {
  title: string;
  subtitle: string;
  content: ReactNode | null;
  center?: boolean;
  fullScreen?: boolean;
};

type SlideProps = SlideType & {
  index: number;
  total: number;
};

const containerStyle: React.CSSProperties = {
  minHeight: "98vh",
  width: "99vw",
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
  minHeight: "min(85vh, 760px)",
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
    subtitle: "What to Automate, and What to Preserve",
    center: true,
    content: (
      <div>
        <p>Roderic Guigó Corominas, April 13th 2026</p>
      </div>
    ),
  },
  {
    title: "About Me",
    subtitle: "My Academic Journey",
    center: true,
    content: (
      <div>
        <b>My Education</b>
         <ul>
          <li>Degrees in Mathematics & Physics,</li>
          <li>Postgraduate Degree in Data Science & Big Data,</li>
          <li>Doctorate in Mathematics, </li>
          <li>Research in Pure Mathematics and ML.</li>
        </ul>
        <b>My Current Focus </b>
        <ul>
          <li>College education ...</li>
          <li>including teaching, teacher instruction and coordination, and curriculum development ...</li>
          <li>in mathematics, statistics and data science ...</li>
          <li>for interdisciplinary audiences ...</li>
          <li>ranging from engineering, life sciences and social sciences.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Overview",
    subtitle: "What will we focus on?",
    center: true,
    content: (
      <div>
        <ul>
          <li><b>Student Perspective:</b> assessing the effects of AI 
          on learning and student engagement</li>
          <li><b>Instructor Perspective:</b> leveraging AI to complement and enhance 
          instruction and engagement, </li>
          <li><b>Curriculum Pespective:</b> rethinking the core skills that students must have to be 
          competent, active contributors to the workforce. </li>
        </ul>
      </div>
    ),
  },
  {
    title: "",
    subtitle: "",
    fullScreen: true,
    content: (
        <iframe
          src="https://embed.polleverywhere.com/ranking_polls/m8pWKQLcMDiAh2M313Hdz?controls=none&short_poll=true"
          title="Poll Everywhere"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
            borderRadius: "18px",
          }}
        />
    ),
  },
  {
    title: "",
    subtitle: "",
    fullScreen: true,
    content: (
        <iframe
          src="https://embed.polleverywhere.com/multiple_choice_polls/6LS8EheZWwTz7AAfNcurJ?controls=none&short_poll=true"
          title="Poll Everywhere"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
            borderRadius: "18px",
          }}
        />
    ),
  },
  {
    title: "AI Student Survey (Harvard Math)",
    subtitle: "Frequency of Usage",
    content: (
      <img
        src="/hu_usage_llms.png"
        alt="Figure"
        style={{ width: "100%", maxHeight: "55vh", objectFit: "contain" }}
      />
    ),
  },
  {
    title: "AI Student Survey (Harvard Math)",
    subtitle: "Math vs Writing",
    content: (
      <img
        src="/hu_mathvother_llms.png"
        alt="Figure"
        style={{ width: "100%", maxHeight: "55vh", objectFit: "contain" }}
      />
    ),
  },
  {
    title: "AI Student Survey (Harvard Math)",
    subtitle: "Purpose",
    content: (
      <img
        src="/hu_purpose_llms.png"
        alt="Figure"
        style={{ width: "100%", maxHeight: "55vh", objectFit: "contain" }}
      />
    ),
  },
  {
    title: "Good or bad?",
    subtitle: "Purpose",
    center: true,
    content: (
      <div>
        <p>
          Students have changed the way they learn. Institutions are slowly adapting to the new
          realities. 
        </p>
        <p>
          We need assessments to whether is positive or negative. 
        </p>
      </div>
    ),
  },
  {
    title: "Promising Results ",
    subtitle: "",
    center: true,
    content: (
      <div style={{ width: "100%" }}>
        <div style={embedCard}>
          <iframe
            src="/ai_tutor_harvard.pdf"
            title="PDF Viewer"
            style={{
              width: "100%",
              height: "70vh",
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
    title: "Promising Results",
    subtitle: "",
    center: true,
    content: (
      <div>
        <img
          src="/ai_safeguards.png"
          alt="Figure"
          style={{ width: "100%", maxHeight: "40vh", objectFit: "contain" }}
        />
      </div>
    ),
  },
  {
    title: "Promising Results",
    subtitle: "",
    center: true,
    content: (
      <div style={{ width: "100%" }}>
        <div style={embedCard}>
          <iframe
            src="/ai_instructor.pdf"
            title="PDF Viewer"
            style={{
              width: "100%",
              height: "70vh",
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
    title: "Potential Challenges",
    subtitle: "",
    center: true,
    content: (
      <div style={{ width: "100%" }}>
        <div style={embedCard}>
          <iframe
            src="/ai_cognitive_debt_mit.pdf"
            title="PDF Viewer"
            style={{
              width: "100%",
              height: "70vh",
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
    title: "Potential Challenges",
    subtitle: "",
    center: true,
    content: (
      <div style={{ width: "100%" }}>
        <div style={embedCard}>
          <iframe
            src="/ai_cognitive_debt_mit.pdf"
            title="PDF Viewer"
            style={{
              width: "100%",
              height: "70vh",
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
    title: "Industry Perspective",
    subtitle: "",
    center: true,
    content: (
      <div style={{ width: "100%" }}>
        <div style={embedCard}>
          <iframe
            src=""
            title="PDF Viewer"
            style={{
              width: "100%",
              height: "70vh",
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
    title: "When is AI Appropriate?",
    subtitle: "Expectations and Assumptions",
    center: true,
    content: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "24px",
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
          <h3 style={{ marginTop: 0 }}>Always</h3>
            <ul>
              <li> Clarify or explain a concept</li> 
              <li> Search for references</li> 
            </ul>
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Sometimes</h3>
            <ul>
              <li> Give trategy to solve a homework problem</li> 
              <li> Write an outline for your thesis</li> 
            </ul>
        
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Never</h3>
            <ul>
              <li> Solve a homework problem</li> 
              <li> Write a report</li> 
              <li> Scan a picture of an exam</li>
            </ul>
        
        </div>
      </div>
    ),
  },
  {
    title: "Learning Styles",
    subtitle: "Drawbacks and Benefits",
    content: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2px",
        }}
      >
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "20px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Passive Lecturing</h3>
          <ul>
            <li>Moves at a single pace</li>
            <li>No personalized feedback</li>
            <li>No consistent engagement</li>
          </ul>
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "20px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Active Learning</h3>
          <ul>
            <li>Class moves at different paces</li>
            <li>Students get personalized feedback</li>
            <li>Consistent engagement required</li>
          </ul>
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "20px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Unguided AI/Online Learning</h3>
          <ul>
            <li>Moves at student’s pace</li>
            <li>Personalized feedback</li>
            <li>Questionable relevance of feedback</li>
            <li>No pedagogical skills</li>
          </ul>
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "20px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Guided AI/Online Learning (Tutor)</h3>
          <ul>
            <li>Moves at student’s pace</li>
            <li>No personalized feedback</li>
            <li>No consistent engagement</li>
            <li>More pedagogical skills</li>
          </ul>
        </div>
      </div>
    ),
  },  
  {
    title: "Harvard Introductory Math",
    subtitle: "Our current uses of AI",
    center: true,
    content: null,
  },
  {
    title: "Deployment of AI Tutors",
    subtitle: "In Multivariable Calculus (Math 21a)",
    content: (
     <img
        src="/21a_tutor.png"
        alt="Figure"
        style={{ width: "100%", maxHeight: "70vh", objectFit: "contain" }}
      />
    ),
  },
  {
    title: "",
    subtitle: "",
    content: (
      <div>
        <div
          style={{
            width: "100%",
            height: "600px",
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
      </div>
    ),
  },
  {
    title: "",
    subtitle: "",
    content: (
      <div>
        <div
          style={{
            width: "100%",
            height: "600px",
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
            src="https://rodericguigocorominas.github.io/linalg-tf-practice"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "First Reflection",
    subtitle: "Aim for a Controlled Use of AI",
    center: true,
    content: (
<div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
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
          <h3 style={{ marginTop: 0 }}>For Students</h3>
      <p>
          Institutions ought to push for guardrails, tailored tools that
          provide:
        </p>
        <ul>
          <li>Cognitive Load Management</li>
          <li>Growth Mindset</li>
          <li>Tailor to Institution</li>
        </ul>
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>For Instructors</h3>
          <p>
          Development of teaching tools, lesson planning, 
          </p>
     
        </div>
      </div>
    ),
  },
  {
    title: "Second Reflection",
    subtitle: "About What We Will Teach",
    center: true,
    content: (
            <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
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
          <h3 style={{ marginTop: 0 }}>Industry Revolution</h3>
          <p>
            Synthesis, memorization, will become less valuable, problem framing, 
            results evaluation, critical thinking and reasoning. 
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
          <h3 style={{ marginTop: 0 }}>Conceptual vs Practical</h3>
          <p>
          With the once highly praised practical skills becoming less valuable, we ought to create a distinguishing
          factor by empowering students with knowledge. Before, knowing how to
          diagonalize a matrix is more useful than understanding the definition of
          vector space. NEED A GOOD EXAMPLE.
          </p>
     
        </div>
      </div>
    ),
  },
  {
    title: "Third Reflection",
    subtitle: "Scarcity Value of In-Person Learning",
    center: true,
    content: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
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
            problem-solving, critical thinking, and without technology. Active 
            engagement by students will be critical. 
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
              "Contrary to some popular opinions, this effort [adoption of AI
              tools for teaching and learning] will require teachers with even deeper knowledge of math
              instruction and assessment— math teachers with more experience,
              not less."
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
    title: "The Future of Mathematics Education",
    subtitle: "My - Tenets",
    center: true,
    content: (
      <div>
        <ul>
          <li><strong>In class:</strong> Students engage deeply with material and 
          build quantitative reasoning, problem-solving, and communication skills through active 
          learning.</li>
          <li><strong>Outside class:</strong> Students continue learning with personalized
           AI tools, using appropriate safeguards to reinforce and extend understanding.</li>
          <li><strong>After college:</strong> Students enter the workforce with strong 
          critical thinking and interpersonal skills, prepared to contribute effectively 
          in AI-enabled environments.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "What Successful Teaching Programs will Looks Like",
    subtitle: "Our Tenets",
    center: true,
    content: (
      <div>
        <ul>
          <li>Collaborative, allowing for instructors' voice instead of imposing.</li>
          <li>Active Learning</li>
          <li>Continued Engagement, </li>
          <li>Focus on Human component, experience etc. </li>
          <li></li>
        </ul>
      </div>
    ),
  },
  {
    title: "Why am I here?",
    subtitle: "The Value of Presence and Human Relationships",
    center: true,
    content: (
    <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
 <p><i>
        "Professors won’t be replaced, but they will focus more
         on developing students’ uniquely human traits"
      </i></p>
      <p>Do Better, ESADE</p>
        </div>


    ),
  },
  {
    title: "Human Characteristics",
    subtitle: "The Soft Skills",
    center: true,
    content: (
    <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
      <p></p>
        </div>


    ),
  },
  {
  title: "Aesthetics",
  subtitle: "Enhancing Experience and Learning Through Aesthetics",
  center: true,
  content: (
 <div
  style={{
    display: "flex",
    flexDirection: "column", // 👈 key change
    gap: "20px",
    alignItems: "center",
    width: "100%",
  }}
>
  {/* Images row */}
  <div
    style={{
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      width: "100%",
    }}
  >
    <img
      src="/aesthetics_real.tiff"
      alt="Real"
      style={{
        width: "48%",
        maxHeight: "45vh",
        objectFit: "contain",
        borderRadius: "16px",
      }}
    />
    <img
      src="/aesthetics_chatgpt.png"
      alt="GAI"
      style={{
        width: "48%",
        maxHeight: "45vh",
        objectFit: "contain",
        borderRadius: "16px",
      }}
    />
  </div>

  {/* Text below */}
  <p style={{ textAlign: "center", maxWidth: "800px" }}>
    We often value signs of human effort, judgment, and imperfection.
  </p>
</div>
  ),
},
  {
    title: "Narrative as a Tool: Multivariable Calculus Math 21a",
    subtitle: "Framework",
    center: true,
    content: (
      <div>
        <img
          src="/dietiker_narrative.png"
          alt="Figure"
          style={{ width: "100%", maxHeight: "40vh", objectFit: "contain" }}
        />
        <p>
          <i>""...interpreting the content found in mathematics curriculum in order to offer 
          teachers and other mathematics educators comprehensive conceptual tools 
          with which to make curricular decisions."</i>
        </p>
      </div>
    ),
  },
  {
    title: "Narrative as a Tool: Multivariable Calculus Math 21a",
    subtitle: "Questions",
    center: true,
    content: (
      <div>
        <ul>
          <li>Elements stabilized by coordination.</li>
          <li>Effect on student experience.</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    ),
  },
  {
    title: "Narrative as a Tool: Multivariable Calculus Math 21a",
    subtitle: "Study",
    center: true,
    content: (
      <div>
        <ul>
          <li>Elements stabilized by coordination.</li>
          <li>Effect on student experience.</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    ),
  },
  {
    title: "Narrative as a Tool: Multivariable Calculus Math 21a",
    subtitle: "Results of Ongoing Study",
    center: true,
    content: (
      <div>
        <ul>
          <li>Clear changes.</li>
          <li>.</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    ),
  },
];

function Slide({ title, subtitle, content, center, fullScreen }: SlideProps) {
  const hasContent = content !== null && content !== undefined;

  if (fullScreen) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "#000",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "stretch",
        }}
      >
        {hasContent ? content : null}
      </div>
    );
  }

  return (
    <div style={{ ...slideBox, justifyContent: center ? "center" : "flex-start", }} > <div> <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1.08, margin: 0, }} > {title} </h1> {subtitle ? ( <h2 style={{ color: "#0b7285", fontSize: "clamp(1.2rem, 2vw, 1.8rem)", fontWeight: 600, marginTop: "10px", marginBottom: 0, }} > {subtitle} </h2> ) : null} </div> {hasContent ? ( <div style={{ marginTop: "28px", fontSize: "1.4rem", lineHeight: 1.6, flex: center ? "unset" : 1, minHeight: 0, overflowY: center ? "hidden" : "auto", paddingRight: center ? "0" : "8px", }} > {content} </div> ) : null} </div>)
}

export default function App() {
  const [current, setCurrent] = useState<number>(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  const slide = useMemo(() => slides[current], [current]);

  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));
  const prev = () => setCurrent((c) => Math.max(0, c - 1));

  useEffect(() => {
    const nextKeys = new Set([
      "ArrowRight",
      "ArrowDown",
      "PageDown",
      " ",
      "Enter",
    ]);

    const prevKeys = new Set([
      "ArrowLeft",
      "ArrowUp",
      "PageUp",
    ]);

    const handleKey = (e: KeyboardEvent) => {
      if (nextKeys.has(e.key)) {
        e.preventDefault();
        setCurrent((c) => Math.min(slides.length - 1, c + 1));
      } else if (prevKeys.has(e.key)) {
        e.preventDefault();
        setCurrent((c) => Math.max(0, c - 1));
      }

      // 🔍 Optional: log unknown keys (useful for weird clickers)
      else {
        console.log("Unhandled key:", e.key);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const isFullScreen = !!slide.fullScreen;

  return (
    <div
      style={
        isFullScreen
          ? {
              width: "100vw",
              height: "100vh",
              background: "#000",
              overflow: "hidden",
              position: "relative",
            }
          : containerStyle
      }
    >
      <Slide {...slide} index={current} total={slides.length} />

      <div
        style={{
          position: "fixed",
          bottom: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "18px",
          zIndex: 1000,
        }}
      >
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
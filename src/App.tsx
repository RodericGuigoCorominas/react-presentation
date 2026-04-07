import React, { ReactNode, useEffect, useMemo, useState } from "react";

type SlideType = {
  title: string;
  subtitle: string;
  content: ReactNode | null;
  center?: boolean;
  fullScreen?: boolean;
  id?: string;
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
  width: "min(1100px, 96vw)",
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
          <li>Bachelor's Degrees in Mathematics & Physics (UB),</li>
          <li>Postgraduate Degree in Data Science & Big Data (UB),</li>
          <li>Doctorate Degree in Mathematics (BU), </li>
          <li>Research in Pure Mathematics, Applied ML, and Math Education.</li>
        </ul>
        <b>My Current Focus </b>
        <ul>
          <li>College education,</li>
          <li>including teaching, mentoring, coordination, and curriculum development</li>
          <li>in mathematics and data science </li>
          <li>for interdisciplinary audiences</li>
          <li>ranging from engineering, life sciences and social sciences.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Overview",
    subtitle: "What are the main questions?",
    center: true,
    content: (
      <div>
        <ul>
          <li><b>Student Perspective:</b> Evaluating the impact of AI on learning outcomes and student engagement.</li>
          <li><b>Instructor Perspective:</b> Leveraging AI to enhance instructional design and delivery.</li>
          <li><b>Curriculum Perspective:</b> Rethinking core competencies to ensure students are prepared to contribute effectively in an AI-driven workforce.</li>
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
    title: "AI Student Survey (Harvard Math)",
    subtitle: "Math vs Other",
    content: (
      <img
        src="/hu_mathvother_llms.png"
        alt="Figure"
        style={{ width: "100%", maxHeight: "55vh", objectFit: "contain" }}
      />
    ),
  },
  {
    title: "When is AI Appropriate?",
    subtitle: "Common Expectations and Assumptions",
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
              <li> Perform hard calculation</li>
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
              <li> Check whether an idea is sound</li>
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
    title: "Friend or Foe?",
    subtitle: "Likely Both",
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
          <h3 style={{ marginTop: 0 }}>What has changed?</h3>
            <ul>
              <li>How students engage with and approach learning.</li>
              <li>The quantitative skills required to remain competitive.</li>
              <li>Significant uncertainty about long-term impacts.</li>
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
          <h3 style={{ marginTop: 0 }}>What do we do?</h3>
            <ul>
              <li>Study long-term effects on cognition and learning.</li>
              <li>Invest in sustained, rigorous education research.</li>
              <li>Adopt and adapt responsibly.</li>
            </ul>
        </div>
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
        <p><i>"Overall, the findings underscore the value of designing AI-permitted 
          environments that cultivate reflective checking and collaborative reasoning, alongside guidance for responsible use."</i></p>
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
            src="/ai_dependency.pdf"
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
    subtitle: "The Change in the Professional Landscape",
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
          <h3 style={{ marginTop: 0 }}>Future of Jobs Report, WEF 2025</h3>
      <p>
          Institutions ought to push for guardrails, tailored tools that
          provide:
        </p>
        <ul>
          <li>skill transformation,</li>
          <li>Demand shifting toward: analytical thinking, creative thinking, flexibility</li>
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
          <h3 style={{ marginTop: 0 }}>AI Jobs Barometer, PwC 2025</h3>
          <p>
            AI is increasing worker value and productivity, while rapidly changing skill demand 
          </p>
     
        </div>
      </div>
    ),
  },
  {
    title: "Institutions",
    subtitle: "Likely Both",
    center: true,
    content: (
      <div>
        <ul>
          <li>What to Keep</li>
          <li>Adapt. </li>
          <li>Ditch. </li>
        </ul>
      </div>
    ),
  },  
  {
    title: "Harvard Introductory Math",
    subtitle: "What Has and Hasn't Changed",
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
    fullScreen: true,
    content: (
      <div>
        <iframe
            title="Applet"
            src="https://rodericguigocorominas.github.io/interactive-classrooms/"
            style={{ width: "500%", height: "100%", border: "none" }}
          />
      </div>
    ),
  },
  {
    title: "",
    subtitle: "",
    fullScreen: true,
    content: (
      <div>
          <iframe
            title="Applet"
            src="https://rodericguigocorominas.github.io/linalg-tf-practice"
            style={{ width: "500%", height: "100%", border: "none" }}
          />
      </div>
    ),
  },
  {
    title: "Harvard Introductory Math",
    subtitle: "What Hasn't Changed",
    center: true,
    content: (
      <div>
        <ul>
          <li>Decrease in Office Hours. </li>
          <li>Reweight Homework - Exams.</li>
          <li>.</li>
        </ul>
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
          Institutions ought to push for guardrails, and the design of tailored AI-powered tools with good pedagogical practices:
        </p>
        <ul>
          <li>Cognitive Load Management</li>
          <li>Growth Mindset</li>
          <li>Curated Content</li>
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
           AI-fluent, able to leverage it to develop teaching tools and platforms for student engagement, lesson planning, and course management.
          </p>
     
        </div>
      </div>
    ),
  },
  {
    title: "Second Reflection",
    subtitle: "Practical vs Conceptual",
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
          <h3 style={{ marginTop: 0 }}>Before AI Boom</h3>
          <p>
            Emphasis put into <i>problem solving</i>. High value of synthesis, 
            memorization and techincal skills.
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
          <h3 style={{ marginTop: 0 }}>After AI Boom</h3>
          <p>
            Emphasis in <i>problem framing</i>: decision making, 
            results evaluation, critical thinking and reasoning, communication. 
        
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
          <h3 style={{ marginTop: 0 }}>A Rare Gem</h3>
          <p>
            In person instruction will become a unique, controlled environment,
            in which students will actively engage with
            problem-solving, critical thinking, with limited technology. This will be critical to 
            develope cognitive skills. 
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
            National Council of Teachers of Mathematics
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "How Will Students Learn?",
    subtitle: "Difference in Styles",
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
            <li>Class pace is moderately adapted</li>
            <li>Students get more personalized feedback</li>
            <li>Consistent engagement</li>
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
          <h3 style={{ marginTop: 0 }}>Unguided AI</h3>
          <ul>
            <li>Moves at student’s pace</li>
            <li>Personalized but questionable feedback</li>
            <li>Not pedagogical</li>
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
          <h3 style={{ marginTop: 0 }}>Guided AI</h3>
          <ul>
            <li>Moves at student’s pace</li>
            <li>Personalized and reliable feedback</li>
            <li>More pedagogical</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "How Will Students Learn?",
    subtitle: "Difference in Styles",
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
            background: "#a1cdb3",
            borderRadius: "18px",
            padding: "20px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Active Learning</h3>
          <ul>
            <li>Class pace is moderately adapted</li>
            <li>Students get more personalized feedback</li>
            <li>Consistent engagement</li>
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
          <h3 style={{ marginTop: 0 }}>Unguided AI</h3>
          <ul>
            <li>Moves at student’s pace</li>
            <li>Personalized but questionable feedback</li>
            <li>Not pedagogical</li>
          </ul>
        </div>
        <div
          style={{
            background: "#a1cdb3",
            borderRadius: "18px",
            padding: "20px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Guided AI</h3>
          <ul>
            <li>Moves at student’s pace</li>
            <li>Personalized and reliable feedback</li>
            <li>More pedagogical</li>
          </ul>
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
    title: "The Human Component",
    subtitle: "What Must Remain",
    center: true,
    content: null,
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
      <p><i>Keeping education human in an AI-driven world</i>, Do Better, ESADE</p>
        </div>


    ),
  },
  {
    title: "The Value of Teaching",
    subtitle: "Creating the right environments",
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
      <p>
          <ul>
            <li>Engage</li>
            <li>Creative Aspects</li>
            <li></li>
            <li></li>
          </ul>

      </p>
        </div>


    ),
  },
  {
  title: "Narrative and Aesthetics",
  subtitle: "Enhancing Experience and Learning Through Aesthetics",
  center: true,
  content: (
 <div
  style={{
    display: "flex",
    flexDirection: "column",
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
    title: "Narrative and Aesthetics",
    subtitle: "Enhancing In-Person Teaching",
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
      <ul>
        <li>Math classes, textbooks have uninteresting story archs. Typically: Definition - Concept - Application. </li>
        <li>Don't create a need for discovery, </li>
        <li>Foster an environment that motivates geniune engagement, human component,</li>
        <li>The introduction of narratively sophisticated story archs can:
          <ul>
            <li></li>
            <li>Enhance the experience</li>
          </ul>

        </li>
      </ul>
        </div>
    ),
  },
  {
    title: "Narrative and Aesthetics",
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
    title: "Narrative in Multivariable Calculus",
    subtitle: "Common Expectations and Assumptions",
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
        Does emphasis on a narrative have a positive effect on any of the following?
        <ul>
          <li>instructor </li>
          <li>student experience</li>
          <li>student engagement</li>
          <li>student learning</li>
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
          <h3 style={{ marginTop: 0 }}>Our Study</h3>
               <ul>
          <li>Elements stabilized by coordination.</li>
          <li>Effect on student experience.</li>
          <li></li>
          <li></li>
          <li></li>
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
          <h3 style={{ marginTop: 0 }}>The Data</h3>
            <ul>
              <li>Exit Tickets</li>
              <li>.</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Narrative in Multivariable Calculus",
    subtitle: "Exit Tickets",
    center: true,
    content: (
      <div>
        <img
          src="/narrative_comparison.png"
          alt="Figure"
          style={{ width: "100%", maxHeight: "60vh", objectFit: "contain" }}
        />
        <p></p>
      </div>
    ),
  },
  {
    title: "Narrative in Multivariable Calculus",
    subtitle: "Exit Tickets Polls, which one do you think?",
    center: true,
    content: (
      <div>

      </div>
    ),
  },
  {
    title: "Narrative in Teaching",
    subtitle: "",
    center: true,
    content: (
      <div>
        <ul>
          <li></li>
          <li>Create tensions through jamming, foreshadowing, questioning. </li>
          <li>Make lessons distinguishable and relevant. </li>
        </ul>
      </div>
    ),
  },
  {
    id: "choose",
    title: "What should we explore?",
    subtitle: "Audience choice",
    center: true,
    content: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          width: "100%",
        }}
      >
        {[
          { label: "About Myself", id: "about-me" },
          { label: "Other Research", id: "research" },
          { label: "Math for Data Science", id: "math-data" },
          { label: "Other ", id: "misc" },
        ].map((item) => (
          <div
            key={item.id}
            style={{
              background: "#f8fafc",
              borderRadius: "20px",
              padding: "32px",
              border: "1px solid #e2e8f0",
              cursor: "pointer",
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: 600,
              transition: "all 0.2s ease",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "about-me",
    title: "About Myself",
    subtitle: "Results of Ongoing Study",
    center: true,
    content: (
      <div>
      </div>
    ),
  },
  {
    id: "research",
    title: "Research",
    subtitle: "Results of Ongoing Study",
    center: true,
    content: (
      <div>
      </div>
    ),
  },
  {
    id: "math-data",
    title: "Math for Data Science",
    subtitle: "Rethinking Calculus and Linear Algebra",
    center: true,
    content: (
      <div>
      </div>
    ),
  },
  {
    id: "misc",
    title: "Other",
    subtitle: "What should I add",
    center: true,
    content: (
      <div>
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

function ChooseSlide({ goToSlide }: { goToSlide: (id: string) => void }) {
  const items = [
    { label: "About Myself", id: "about-me" },
    { label: "Other Research", id: "research" },
    { label: "Math for Data Science", id: "math-data" },
    { label: "Other", id: "misc" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        width: "100%",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => goToSlide(item.id)}
          style={{
            background: "#f8fafc",
            borderRadius: "20px",
            padding: "32px",
            border: "1px solid #e2e8f0",
            cursor: "pointer",
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: 600,
            transition: "all 0.2s ease",
          }}
        >
          {item.label}
        </div>
      ))}
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

  const goToSlide = (id: string) => {
    const index = slides.findIndex((s) => s.id === id);
    if (index !== -1) {
      setCurrent(index);
    } else {
      console.warn(`Slide with id "${id}" not found`);
    }
  };

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


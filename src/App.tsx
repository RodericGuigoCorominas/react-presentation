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
  height: "100vh",
  width: "100vw",
  background: "linear-gradient(135deg, #0f576b, #0b3f4d)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  margin: 0,
  padding: 0,
  fontFamily: "Inter, system-ui, sans-serif",
};

const slideBox: React.CSSProperties = {
  background: "rgba(255,255,255,0.95)",
  borderRadius: "28px",
  padding: "56px 72px",
  width: "95vw",
  height: "92vh",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  color: "#0f172a",
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
        <img
          src="/attendance_qr.png"
          alt="QR code"
          style={{
            maxWidth: "500px",
            height: "auto",
            display: "block",
            margin: "0 auto"
          }}
/>
      </div>

      
    ),
  },
  {
    title: "About Me",
    subtitle: "My Academic Journey",
    center: true,
    content: (
      <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
        
        {/* Text */}
        <div style={{ flex: 1 }}>
          <b>My Education</b>
          <ul>
            <li>Bachelor's Degrees in Mathematics & Physics (UB)</li>
            <li>Postgraduate Degree in Data Science & Big Data (UB)</li>
            <li>Doctorate Degree in Mathematics (BU) </li>
            <li>Research in Mathematics, ML, and Math Education</li>
          </ul>

          <b>My Current Focus at Harvard University</b>
          <ul>
            <li>Teaching, mentoring, coordination, and curriculum development</li>
            <li>in mathematics and data science</li>
            <li>interdisciplinary: engineering, life and social sciences</li>
          </ul>
        </div>

        {/* Image */}
        <div>
          <img src="/class_pic.jpg" alt="Profile" style={{ maxWidth: "500px", height: "auto" }} />
        </div>

      </div>
    ),
  },
  {
    title: "Overview",
    subtitle: "What we will discuss today",
    center: true,
    content: (
      <div>
        <ul>
          <li><b>Literature on AI and Education:</b></li>
            <ul>
                <li><b>Student Perspective:</b> impact on learning and engagement</li>
                <li><b>Instructor Perspective:</b> leveraging AI for instructional design and delivery</li>
                <li><b>Curriculum Perspective:</b> core competencies and skills that prepare for an AI-driven workforce</li>
            </ul>
          <li><b>My Own Experience and Perspective:</b> what I have implemented and my reflections</li>
          <li><b>Current Research:</b> study we are carrying out in Harvard's Math 21a (Multivariable Calculus)
            
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "An Overview of the Current Reality",
    subtitle: "Identifying Challenges and Opportunities",
    center: true,
    content: null,
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
    title: "",
    subtitle: "",
    fullScreen: true,
    content: (
        <iframe
          src="https://embed.polleverywhere.com/multiple_choice_polls/77XIdiYBy1lwCp9Ty7IFb?controls=none&short_poll=true"
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
  /*{
    title: "AI Student Survey (Harvard Math)",
    subtitle: "Math vs Other",
    content: (
      <img
        src="/hu_mathvother_llms.png"
        alt="Figure"
        style={{ width: "100%", maxHeight: "55vh", objectFit: "contain" }}
      />
    ),
  },*/
  {
  title: "When is AI Appropriate?",
  subtitle: "Always Ok, Sometimes Ok, Never Ok",
  center: true,
  content: (
    <div style={{ textAlign: "center" }}>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {[
          "Clarify a concept",
          "Scan and solve an exam",
          "Solve a homework problem",
          "Search for references",
          "Check an idea",
          "Perform a hard calculation",
          "Outline strategy for homework",
          "Suggest thesis outline",
          "Write a report",
        ].map((word, i) => (
          <span
            key={i}
            style={{
              fontSize: `${28}px`,
              background: "#f1f5f9",
              padding: "8px 14px",
              borderRadius: "12px",
            }}
          >
            {word}
          </span>
        ))}
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
              <li> Suggest an outline for your thesis</li> 
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
          <p><i>"Overall, the findings underscore the value of designing AI-permitted 
          environments that cultivate reflective checking and collaborative reasoning, alongside guidance for responsible use."</i></p>
          Integrating Generative AI in University Mathematics: reflective and collaborative learnings as pedagogical safeguards (Y-W. Choi, 2026). 
   
          <p><i>"Our analysis shows Tutor CoPilot promotes effective pedagogy, increasing the use of probing questions and reducing generic praise."</i></p>
          Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise (R. Wang et Al, 2025), 

      </div>
    ),
  },
  // {
  //   title: "Promising Results",
  //   subtitle: "",
  //   center: true,
  //   content: (
  //     <div style={{ width: "100%" }}>
  //       <div style={embedCard}>
  //         <iframe
  //           src="/ai_instructor.pdf"
  //           title="PDF Viewer"
  //           style={{
  //             width: "100%",
  //             height: "70vh",
  //             minHeight: "420px",
  //             maxHeight: "560px",
  //             border: "none",
  //             display: "block",
  //           }}
  //         />
  //       </div>
  //     </div>
  //   ),
  // },
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
          The future of work is defined by skill transformation, not job disappearance.
        </p>
        <ul>
          <li>skill transformation,</li>
          <li>demand shifting toward: analytical thinking, creative thinking, problem-solcing, flexibility</li>
          <li>workers not reskilling fast enough</li>
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
            <ul>
              <li>jobs still growing even in automatable roles</li>
              <li>higher wages for AI-skilled workers</li>
              <li>across all industries</li>
            </ul>
          </p>
     
        </div>
      </div>
    ),
  },  
  {
    title: "Harvard Introductory Math",
    subtitle: "Some Things We Have Tried",
    center: true,
    content: null,
  },
  {
    title: "",
    subtitle: "",
    fullScreen: true,
    content: (
      <div>
        <iframe
            title="AI Tutor"
            src="https://teachgpt.us"
            style={{ width: "500%", height: "100%", border: "none" }}
          />
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
            src="/ai_tutor_21a.pdf"
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
    subtitle: "Other AI Challenges",
    center: true,
    content: (
      <div>
        <ul>
          <li>Decreased attendance in office hours</li>
          <li>Weak correlation between homework and exam performance</li>
          <li>Reweighted course syllabus components</li>
          <li>Implemented a standards based grading with a double threshhold</li>
          <li>Made attendance mandatory</li>
        </ul>
      </div>
    ),
  },
  {
    title: "My Reflections",
    subtitle: "Future Of Education",
    center: true,
    content: null,
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
          <h3 style={{ marginTop: 0 }}>Students</h3>
      <p>
          Use tailored AI-powered tools and agents with guardrails, and good pedagogical practices
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
          <h3 style={{ marginTop: 0 }}>Instructors</h3>
          <p>
           Are AI-fluent, leverage it to enhance student engagement, lesson planning, and course management.
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
            Emphasis in <i>problem solving</i>. Synthesis, 
            memorization and technical skills are highly valued. 
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
            Emphasis in <i>problem framing</i>: decision making, evaluation, critical thinking and reasoning, communication. 
        
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
            problem-solving, critical thinking, with limited technology.
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
    subtitle: "Future Learning Environments",
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
            <li>More personalized feedback</li>
            <li>More consistent engagement</li>
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
    subtitle: "Future Learning Environments",
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
            <li>More personalized feedback</li>
            <li>More consistent engagement</li>
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
    title: "How Will Students Learn?",
    subtitle: "Future Learning Environments",
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
          <h3 style={{ marginTop: 0 }}>In Class</h3>
          Actively engage and 
          develop <b>quantitative reasoning, problem-solving, and communication</b> skills through <b>active 
          learning</b>.
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Outside class</h3>
          Continue learning with personalized
          AI tools with appropriate safeguards to reinforce and extend understanding.
        
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>After college</h3>
          Join the workforce with strong 
          critical thinking and interpersonal skills to contribute effectively 
          in AI-enabled environments.
        </div>
      </div>
    ),
  }, 
  {
    title: "How Will Students Learn?",
    subtitle: "Future Learning Environments",
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
            background: "#a1cdb3",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>In Class</h3>
     Actively engage and 
          develop <b>quantitative reasoning, problem-solving, and communication</b> skills through <b>active 
          learning</b>.
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Outside class</h3>
          Continue learning with personalized
          AI tools with appropriate safeguards to reinforce and extend understanding.
        </div>
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "18px",
            padding: "24px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ marginTop: 0 }}>After college</h3>
            Join the workforce with strong 
          critical thinking and interpersonal skills to contribute effectively 
          in AI-enabled environments.
        </div>
      </div>
    ),
  },   
  {
    title: "The Human Component",
    subtitle: "What We Are Already Doing Right",
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
  title: "Harvard Introductory Math",
  subtitle: "How to Take Active Learning to the next Level",
  center: true,
  content: (
    <div
      style={{
        display: "flex",
        gap: "14px",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Left: your original box */}
      <div
        style={{
          flex: 1,
          background: "#f8fafc",
          borderRadius: "18px",
          padding: "24px",
          border: "1px solid #e2e8f0",
        }}
      >
        <ul>
          <li>75 minute small sections of 25 - 40 students</li>
          <li>Mix of active learning and mini-lectures</li>
          <li>Daily homework</li>
          <li>Four assessments throughout the semester</li>
          <li>Focus on narrative</li>
        </ul>
      </div>

      {/* Right: image */}
      <div
        style={{
          width: "550px",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid #e2e8f0",
        }}
      >
        <img
          src="active_learning.png"
          alt="Harvard classroom"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
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
        width: "55%",
        maxHeight: "52vh",
        objectFit: "contain",
        borderRadius: "16px",
      }}
    />
    <img
      src="/aesthetics_chatgpt.png"
      alt="GAI"
      style={{
        width: "55%",
        maxHeight: "52vh",
        objectFit: "contain",
        borderRadius: "16px",
      }}
    />
  </div>

  {/* Text below */}
  <p style={{ textAlign: "center", maxWidth: "800px" }}>
    The value of human authorship.
  </p>
</div>
  ),
},
  {
    title: "Narrative and Aesthetics",
    subtitle: "Common Issues with Quantitative Courses",
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
          <li>Classes, textbooks typically follow <i>uninteresting</i> story archs</li>
          <li>Topics are introuced linearly, not allow for connections</li>
          <li>Little emphasize the need for discovery</li>
          <li>Foster an environment that motivates geniune engagement, human component,</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Narrative and Aesthetics",
    subtitle: "Framework (L. Dietiker)",
    center: true,
    content: (
      <div>
        <img
          src="/dietiker_narrative.png"
          alt="Figure"
          style={{ width: "100%", maxHeight: "40vh", objectFit: "contain" }}
        />
        <p>
          <i>“There are no ‘facts’ per se; everything is relative and relational. The story matters, not just the ending.”</i>
        </p>
      </div>
    ),
  },
  {
  title: "Narrative and Aesthetics",
  subtitle: "Framework (L. Dietiker)",
  center: true,
  content: (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <img
        src="/lesson_1.png"
        alt="Figure 1"
        style={{ width: "55%", maxHeight: "60vh", objectFit: "contain" }}
      />
      <img
        src="/lesson_2.png"
        alt="Figure 2"
        style={{ width: "45%", maxHeight: "50vh", objectFit: "contain" }}
      />
    </div>
  ),
},
{
    title: "Narrative in Multivariable Calculus",
    subtitle: "Enhancing Experience and Learning Through Aesthetics",
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
          <h3 style={{ marginTop: 0 }}>The Questions</h3>
        The role of <i>narrative</i> in
        <ul>
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
              <li>Four instructors</li>
              <li>Same lessons in a coordinated course</li>
              <li>Different backgrounds and experience</li>
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
              <li>Meeting notes</li>
              <li>Class recordings</li>
              <li>Debrief interviews</li>
              <li>Exit tickets</li>
            </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Comparison",
    subtitle: "Green's Theorem",
    center: true,
    content: (
      <div style={{ width: "100%" }}>
        <div style={embedCard}>
          <iframe
            src="/greens_theorem.pdf"
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
    title: "Narrative in Multivariable Calculus",
    subtitle: "Preliminary Insights: Student Exit Tickets",
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
    title: "",
    subtitle: "",
    fullScreen: true,
    content: (
        <iframe
          src="https://embed.polleverywhere.com/multiple_choice_polls/1HbGDGpdsBfE6gncs40kv?controls=none&short_poll=true"
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
    title: "Narrative in Teaching",
    subtitle: "",
    center: true,
    content: (
      <div>
        <ul>
          <li>Create tensions through jamming, foreshadowing, suspense, equivocation. </li>
          <li>Distinguishing Ap</li>
          <li>Make lessons distinguishable and relevant. </li>
        </ul>
      </div>
    ),
  },
   {
    title: "Future",
    subtitle: "",
    center: true,
    content: (
      <div>
        <ul>
          <li>Results To Be Presented at MathFest (Boston August 2026)</li>
          <li>Distinguishing Ap</li>
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
  {
  title: "Teaching Data Science",
  subtitle: "Four images",
  center: true,
  content: (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {[
        { src: "lecture_uzhhorod.jpg", caption: "Uzhhorod, Ukraine" },
        { src: "/images/pic2.jpg", caption: "Example 2" },
        { src: "/images/pic3.jpg", caption: "Example 3" },
        { src: "/images/pic4.jpg", caption: "Example 4" },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            background: "#fff",
            borderRadius: "18px",
            overflow: "hidden",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <img
            src={item.src}
            alt={item.caption}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div style={{ padding: "12px 14px", fontSize: "1rem" }}>
            {item.caption}
          </div>
        </div>
      ))}
    </div>
  ),
}


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
    <div style={{ ...slideBox, justifyContent: center ? "center" : "flex-start", }} > 
    <div> <h1 style={{ fontSize: "clamp(2.6rem, 4.6vw, 3.5rem)", lineHeight: 1.08, margin: 0, }} > {title} </h1> 
    {subtitle ? ( <h2 style={{ color: "#0b7285", fontSize: "clamp(1.8rem, 2.6vw, 2rem)", fontWeight: 600, marginTop: "10px", marginBottom: 0, }} > {subtitle} </h2> ) : null} </div> 
    {hasContent ? ( <div style={{ marginTop: "28px", fontSize: "1.7rem", lineHeight: 1.6, flex: center ? "unset" : 1, minHeight: 0, overflowY: center ? "hidden" : "auto", paddingRight: center ? "0" : "8px", }} > 
      {content} </div> ) : null} </div>)
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


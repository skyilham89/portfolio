import styles from "./about.module.css";
import Image from "next/image";
import profileImg from "@/imports/profile.jpg";

export default function About() {
  const skills = [
    "UI/UX Design", "Design Systems", "Figma", "Adobe Creative Suite",
    "Prototyping", "User Research", "Usability Testing", "Responsive Design",
    "Interaction Design", "Information Architecture", "Mobile App Design",
    "HTML/CSS", "Front-End Collaboration"
  ];

  return (
    <div className={styles.aboutPage}>
      <div className={`container ${styles.grid}`}>
        <div className={`fade-in ${styles.imageCol}`}>
           <Image 
             src={profileImg}
             alt="Profile picture of Muhamad Ilham"
             width={600}
             height={800}
             className={styles.profileImage}
             priority
           />
        </div>
        <div className={`slide-up delay-1 ${styles.contentCol}`}>
          <h1>Hello, I'm Ilham.</h1>
          <p className={styles.intro}>
            A UI/UX Designer with over 10 years of experience shaping web and mobile products — from early wireframes through to polished, production-ready interfaces. I focus on turning complex requirements into clean, intuitive experiences, and I enjoy the space where design thinking meets real engineering constraints.
          </p>
          
          <div className={styles.section}>
            <h2>Experience</h2>
            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3>UI/UX Designer</h3>
                <span>Sep 2019 - Present</span>
              </div>
              <p className={styles.company}>Star Media Group Berhad</p>
              <ul>
                <li>Lead end-to-end UI/UX design for mobile and web products across Malaysia's largest integrated media group.</li>
                <li>Built and maintained design systems that improved consistency across the group's digital platforms.</li>
              </ul>
            </div>

            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3>UI/UX Designer</h3>
                <span>Jul 2015 - Sep 2019</span>
              </div>
              <p className={styles.company}>Touchpoint International Sdn Bhd</p>
              <ul>
                <li>Designed interfaces for community, IoT, and event ticketing platforms — from concept through to client handoff.</li>
                <li>Led prototyping and client presentations for product development across multiple concurrent projects.</li>
              </ul>
            </div>

            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3>Junior Front End Designer</h3>
                <span>Feb 2013 - Jun 2015</span>
              </div>
              <p className={styles.company}>Pocket Pixel Sdn Bhd</p>
              <ul>
                <li>Bridged design and development — creating web interfaces and implementing them with HTML/CSS.</li>
                <li>Produced brand assets and maintained client sites across WordPress, Joomla, and Liferay.</li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Core Competencies</h2>
            <div className={styles.skills}>
              {skills.map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2>Education</h2>
            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3>Diploma in Multimedia</h3>
                <span>2012</span>
              </div>
              <p className={styles.company}>Universiti Kuala Lumpur (MIIT)</p>
            </div>
            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h3>Multimedia Creative Certification</h3>
                <span>2009</span>
              </div>
              <p className={styles.company}>Selayang Community College</p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Let's Connect</h2>
            <p>I'm always open to discussing product design work or partnership opportunities.</p>
            <a href="mailto:m.ilhamtamam@gmail.com" className={styles.contactButton}>
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

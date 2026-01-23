// All About content directly in the page

function AboutPage() {
  return (
    <div>
      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate Frontend Developer with experience in creating 
          modern web applications. I love turning ideas into beautiful, 
          functional websites.
        </p>
        
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
        
        <div className="experience">
          <h3>Experience</h3>
          <p>
            Currently building my portfolio and learning modern web development 
            technologies. Always excited to take on new challenges!
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
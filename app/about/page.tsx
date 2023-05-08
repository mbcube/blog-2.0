export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm <b>Mouad</b>. I'm a Full Stack Developer and owner of{" "}
        <b>MBCube Consulting Inc </b>.
      </p>

      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <hr />
        <p>
          I'm a seasoned Full-Stack Consultant specializing in various
          technology stacks, with notable expertise in the following areas:
        </p>
        {/* make the following section a <ul> */}
        <ul>
          <li>
            <b>Cloud Platforms:</b> I have hands-on experience working with
            Cloud Azure, AWS, and Firebase, enabling me to leverage their
            capabilities for scalable and reliable solutions.
          </li>
          <li>
            <b>Microservices:</b> I possess extensive knowledge in developing
            microservices architectures using Dotnet and Node.js. This allows me
            to design robust and modular systems that are easily maintainable
            and scalable.
          </li>
          <li>
            <b>Databases:</b> I am proficient in working with both SQL and NoSQL
            databases, including CosmosDB, Firebase, and MongoDB. This expertise
            enables me to design efficient data storage and retrieval systems
            tailored to the specific requirements of each project.
          </li>
          <li>
            <b>Front-End Frameworks:</b> I have a strong command of various
            front-end technologies, including Angular, React/Next.js, and
            Flutter. This enables me to create engaging and responsive user
            interfaces that deliver exceptional user experiences.
          </li>
        </ul>
        <p>
          Outside of consulting, some of my other pursuits are music, coffee,
          body building, and of course, writing. My passion for writing comes
          from my love for spreading knowledge and it is what ultimately led me
          to start the blog.
        </p>
      </div>
    </section>
  );
}

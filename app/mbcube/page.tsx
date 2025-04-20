import { EnvelopeIcon, LinkedinIcon, PhoneIcon } from "components/icons";

export default function MbcubePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">MBCube Consulting Inc</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Established on September 2021 in Quebec, Canada and founded by yours
        truly.
      </p>

      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <hr />
        <h1 className="font-bold text-2xl font-serif">Contact</h1>
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            href="mailto:mouad@mbcubeconsulting.ca"
            className="flex items-center gap-2"
          >
            <EnvelopeIcon />
            {`mouad@mbcubeconsulting.ca`}
          </a>
          <a href="tel:+15142667149" className="flex items-center gap-2">
            <PhoneIcon />
            {`+1 (514) 266-7149`}
          </a>

          <a
            href="https://www.linkedin.com/company/mbcube-consulting-inc"
            className="flex items-center gap-2"
          >
            <LinkedinIcon />
            {`Follow us on LinkedIn`}
          </a>
        </div>
        <hr />

        <h1 className="font-bold text-2xl font-serif">About</h1>
        <p>
          MBCube Consulting is a Canadian consulting firm specializing in
          Full-Stack technology solutions. With myself as the Lead expert and
          couple of partners and interns, we offer comprehensive services in
          Cloud Platforms (Azure, AWS, Firebase), Microservices (Dotnet,
          Node.js), Databases (SQL, NoSQL), and Front-End Development (Angular,
          React/Next.js, Flutter).
          <br />
          <br />
          We pride ourselves on delivering scalable, robust, and innovative
          solutions tailored to our clients' specific requirements. With a
          proven track record of successful projects and satisfied clients,
          including long-term partnerships such as{" "}
          <a href="https://www.cae.com/">CAE</a>, and{" "}
          <a href="https://ia.ca/">IA</a>, MBCube Consulting is dedicated to
          empowering businesses with cutting-edge technology and driving their
          growth.
          <br />
          <br />
          We are currently partners with placement agencies such as{" "}
          <a target="_blank" href="https://www.gft.com/ca/en">
            {" "}
            GFT
          </a>
          ,{" "}
          <a target="_blank" href="https://www.vaco.com/">
            {" "}
            Vaco
          </a>{" "}
          and{" "}
          <a target="_blank" href="https://www.greptechnologies.ca/">
            Grep Technologies
          </a>{" "}
          and direct clients such as{" "}
          <a target="_blank" href="https://hreka-mvp-v2.vercel.app/">
            {" "}
            HREka
          </a>
          ,{" "}
          <a target="_blank" href="https://ccc-web3.com/">
            CCC-Web3
          </a>
          ,{" "}
          <a target="_blank" href="https://www.instagram.com/mtlive.ca">
            MTLive,
          </a>{" "}
          and more.
        </p>
      </div>
    </section>
  );
}

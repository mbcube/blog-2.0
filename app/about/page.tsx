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
          I’m Mouad Bouras, a developer who builds modern websites and digital
          tools with a focus on clarity, flexibility, and long-term ownership.
          My work combines strong implementation with a practical stack, shaped
          around what clients actually need rather than what locks them in .
          <br />
          <br />
          <strong>What makes this different?</strong> <br />
          Most small businesses get pushed into closed platforms, recurring
          fees, and handoff models that keep them dependent. I build with open,
          practical tools so you own the site, the code, and the infrastructure.
          <br />
          <br />
          <strong>Who it’s for</strong> <br />
          Best for agencies, studios, and growing service businesses that need a
          custom website now and want room to evolve into more advanced product
          or workflow tools later.
          <br />
          <br />
          <strong> What you get?</strong>
          <br />
          - A custom-built website, not a boxed template <br />
          - A stack your business can keep and control <br />
          - Low recurring costs using practical modern tooling <br />
          - A path to expand into custom features or web apps later <br />
          <br />
          <strong>Who else worked with us?</strong> <br />
          <a target="_blank" href="https://malinki.ca">
            Agency & Studio Malinki,
          </a>
          <br />
          <a target="_blank" href="https://wolfgangmtl.com">
            Agency Wolfgang Films,
          </a>
          <br />
          <a target="_blank" href="https://cachetdeco.ca/">
            Contractor Cachetdeco,
          </a>
          <br />
          <a target="_blank" href="https://ccc-web3.com/">
            Marketing Agency CCC-Web3
          </a>
          <br />
        </p>
      </div>
    </section>
  );
}

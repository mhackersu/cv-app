function Resume() {
  return (
    <div className="font-sans text-black">
      <div className="mx-auto mt-10 max-w-4xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <div>
            <h1 className="text-4xl font-bold">Mike Hacker</h1>
            <p className="text-lg">Platform Engineer CV</p>
            <p className="text-sm text-gray-600">
              hacker@bfsio.net | 830-313-9450
            </p>
          </div>
        </div>
        <section className="mb-8">
          {/* <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">Summary</h2> */}
          {/* <div className="text-sm text-gray-600">
            <p>
              Strategic and <b>results-driven</b> Sr. Platform Engineer with 7+
              years of experience architecting, delivering, and
              <b> scaling infrastructure</b> as software for high-availability,
              high-velocity organizations across web hosting, finance, and
              government sectors. Adept at designing <b>multi-tenant </b>
              Kubernetes platforms, implementing modern CI/CD pipelines, and
              delivering ephemeral, production-like lowers that empower
              developers to ship with speed, confidence, and resilience.
            </p>
            <br></br>
            <p>
              <b>Proven leadership</b> in modernizing critical systems through
              automation-first initiatives, <b>reducing operational toil</b>,
              and <b>aligning platform capabilities</b> with business goals.
              Deep expertise in cloud-native ecosystems (AWS, GCP, Azure),
              container orchestration, service meshes, and secure certificate
              management at scale. Skilled at balancing the competing demands of
              development velocity, platform stability, and SLA/SLO compliance —
              maintaining 99.999% uptime for production systems while enabling
              rapid innovation through streamlined developer workflows.
              Extensive experience driving platform initiatives across different
              organizational cultures, from the high-speed pragmatism of web
              hosting to the compliance-driven rigor of finance and the
              procedural complexity of government.
            </p>
            <br></br>
            <p>
              Understands how to build cross-functional alignment, and advocate
              for platform investment by demonstrating clear ROI through
              operational metrics and developer satisfaction. Committed to
              treating platform engineering as <b>pure software engineering </b>
              — prioritizing testing, modular design, observability, and
              continuous improvement. Believes that a
              <b> world-class platform </b>
              is not just infrastructure, but a product that enables teams to
              move faster, safer, and smarter. Passionate about building
              <b> resilient, developer-centric platforms</b> that turn
              infrastructure from a bottleneck into a competitive advantage.
            </p>
          </div> */}
          <br></br>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">Skills</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>
              <b className="text-black">Languages:</b> Go, Ruby, Py
            </li>
            <li>
              <b className="text-black">Data Layer:</b> PostgreSQL, MySQL
            </li>
            <li>
              <b className="text-black">Cloud Services:</b> GCP, AWS, AZ
            </li>
          </ul>
        </section>
        <section>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Professional Experience
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">Sr. Platform Engineer</p>
            <a>
              <a className="text-sm font-bold">WP Engine</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2022-2024 | Austin, TX (Remote)
              </a>
            </a>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Creating architectural modifications within multi-tenant
                application for domain-based IP routing for{' '}
                <i> (e.g. wpengine.com, wpeng.in)</i> which services{' '}
                <i>(n=1x10^6)</i> internal, customer k8s nodes on GKE.
              </li>
              <li>
                Contribuiting to Cloudflare Orange Cloud Enterprise SaaS
                migration from Python automation for Let&apos;s Encrypt and
                Google Cloud SSL renewal subroutines on customer domains.
              </li>
              <li>
                Lead engineer for domain routing system rewrite effort in
                Go/GRPC. Migrating secrets from Hashicorp Valut into Google
                Secrets. Coordinating with SecOps; Writing tests for secret
                migration changes with test output shipped to CI logs.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Staff DevOps Engineer</p>
            <a>
              <a className="text-sm font-bold">Fairway Mortgage</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2019-2022 | Madison, WI (Remote)
              </a>
            </a>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Lead engineer for mission-critical JRE/Linux/CI modernization
                effort on ACH/Swift transactional system servicing 7B ARR.
              </li>
              <li>
                Organizational IDP Champion; Lead team to ship DevOps workflows
                complete IaS golden templates to 20+ teams development across
                organization.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Sr. DevOps Engineer</p>
            <a>
              <a className="text-sm font-bold">Tyler Technologies</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2018 | Yarmouth, ME (Remote)
              </a>
            </a>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Lead TF Enterprise SME on AWS GovCloud.</li>
              <li>
                Rolled out new TF modules in automated customer domain
                onboarding processes.
              </li>
              <li>Enhanced IAM management via TF configurations.</li>
              <br></br>
            </ul>
          </div>
        </section>
        {/* <section className="mb-8">
          <a
            href="https://www.bfsio.net/projects"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
              Projects
            </h2>
          </a>
          <ul className="list-disc space-y-2 pl-5 text-sm">
            <li>
              <strong>minovina.com</strong>
              <p className="text-gray-700">
                MiNovina, an Online Prayer Chain, is a full-stack application
                that runs on ReactJS & EdgeDB.
              </p>
            </li>
            <li>
              <strong>dbmstudio.online</strong>
              <p className="text-gray-700">
                DBM Studio, an Online Booking & Reservation System, is a
                full-stack application written in ReactJS & Supabase.
              </p>
            </li>
            <li>
              <strong>startsign.online</strong>
              <p className="text-gray-700">
                Start Sign Online, an On-Chain Bookeeping & Accounting platform,
                is a full-stack application written in Ruby & PostgreSQL.
              </p>
            </li>
          </ul>
        </section> */}
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Freelance Experience
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">DevOps Engineer</p>
            <a>
              <a className="text-sm font-bold">Pizza Hut Digital Ventures</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2017 | London, UK (Remote)
              </a>
            </a>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Full-Stack Web Developer</p>
            <a>
              <a className="text-sm font-bold">TxDOT</a>
              <a> </a>
              <a className="text-sm text-gray-600">2016 | Austin, TX</a>
            </a>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Web Development Immersive</p>
            <a>
              <a className="text-sm font-bold">General Assembly</a>
              <a> </a>
              <a className="text-sm text-gray-600">2015 | Austin, TX</a>
            </a>
          </div>
        </section>
        <section>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Education
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">B.A.A.S. Economics</p>
            <a>
              <a className="text-sm font-bold">University of North Texas</a>
              <a> </a>
              <a className="text-sm text-gray-600">2010-2014 | Denton, TX</a>
            </a>
          </div>
          <div>
            <p className="text-lg font-bold">A.S. Finance</p>
            <a>
              <a className="text-sm font-bold">Collin College</a>
              <a> </a>
              <a className="text-sm text-gray-600">1998-2000 | Plano, TX</a>
            </a>
          </div>
        </section>
        <br></br>
        <section>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Previous Experience
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">IT Director, Clinical Systems</p>
            <a>
              <a className="text-sm font-bold">Texas Health Resources</a>
              <a> </a>
              <a className="text-sm text-gray-600">2004-2010 | Plano, TX</a>
            </a>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Support, Tier III</p>
            <a>
              <a className="text-sm font-bold">Waymark Internet Services</a>
              <a> </a>
              <a className="text-sm text-gray-600">1999-2003 | Irving, TX</a>
            </a>
          </div>
          <p className="text-lg font-bold">IT, Network Support Assistant</p>
          <div className="mb-6">
            <a>
              <a className="text-sm font-bold">Wayland Baptist University</a>
              <a> </a>
              <a className="text-sm text-gray-600">1996-1998 | Plainview, TX</a>
            </a>
          </div>
        </section>
        {/* <section>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Certifications
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>Terraform Certified Professional</li>
            <li>GCP Certified Professional DevOps Engineer</li>
            <li>AWS Certified Security Engineer</li>
          </ul>
        </section> */}
      </div>
      {/* <div className="no-print mt-8 flex justify-center">
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Print / Save as PDF
        </button>
      </div> */}
    </div>
  )
}

export default Resume

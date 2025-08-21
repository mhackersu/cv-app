function Resume() {
  return (
    <div className="font-sans text-black">
      <div className="mx-auto mt-10 max-w-4xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <div>
            <h1 className="text-4xl font-bold">Mike Hacker</h1>
            <p className="text-lg">Full-Stack Engineer</p>
            <p className="text-sm text-gray-600">
              hacker@bfsio.net | 830-313-9450
            </p>
          </div>
        </div>
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">Summary</h2>
          <div>
            Applying architectural and design systems that translate key
            performance indicators into secure and resilient business processes
            that scale; Fostering a culture of constructive debate and
            continuous learning.
          </div>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Professional Experience
          </h2>
          <div className="mb-6">
            <a className="text-lg font-bold">SWE IV</a>
            <a className="text-sm text-black"> [GKE, Go, Ruby, Py]</a>
            <p>
              <a className="text-sm font-bold">WP Engine</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2022-2024 | Austin, TX (Remote)
              </a>
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Architected improvements for a multi-tenant Ruby application
                serving 100M+ customer domains (e.g., wpengine.com, wpeng.in),
                supporting internal and customer workloads on GKE; Introduced
                architectural changes to streamline domain validation at scale.
              </li>
              <li>
                Led remediation of critical domain routing exploit in a
                Ruby-based platform 100M+ WordPress customer domains. Identified
                vulnerabilities, rewrote core regex logic for domain validation
                as per RFC 1035 spec, and implemented pre-release CI with
                test-driven validation across routing environment layers.
              </li>
              <li>
                Technical lead for nine-month security initiative, driving ADR
                reviews, cross-team design approvals, and stakeholder buy-in for
                release of the patch. Final remediation supported a $330M ARR
                platform and mitigated significant operational risk.
              </li>
              <li>
                Designed and implemented ETL processes in Python to replay lost
                customer site configuration events, restoring system state and
                ensuring cross-system synchronization following outages.
              </li>
              <li>
                Led rewrite effort for internal domain routing system to
                Go/gRPC; This effort directly led to developing a standard
                towards improving maintainability for future platform services.
              </li>
              <li>
                Implemented secure credential migration from HashiCorp Vault to
                Google Secrets, including full CI-integrated validations.
              </li>
              <li>
                Responded to customer escalations related to Chinese network
                access restrictions, coordinating real-time IP pool changes
                across global Kubernetes infrastructure (GKE).
              </li>
              <li>
                Contributing to Cloudflare Orange Cloud Enterprise SaaS via Go
                migration from Python automation for Let's Encrypt and Google
                Cloud SSL renewal subroutines on customer domains.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <a className="text-lg font-bold">Sr. Software Engineer</a>
            <a className="text-sm text-black"> [AZ, Java, C#]</a>
            <p>
              <a className="text-sm font-bold">Fairway Mortgage</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2021-2022 | Madison, WI (Remote)
              </a>
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                DevOps Engineer for mission-critical JRE/Linux modernization
                effort on ACH/Swift transactional system servicing 7B ARR.
              </li>
              <li>
                Worked as an embedded engineer on middleware team that serviced
                all dev teams for debugging in production. Implemented
                observability for AKS nodes.
              </li>
              <li>
                Organizational IDP Champion; Championed DevOps Initiatives with
                CI workflows and IaS templates for multiple dev teams.
              </li>
              <li>
                Created C#/.Net templates for ephemeral nodes. Worked with Ops
                to create adoption workflow for epherial environments. Set
                timeouts to wrangle cloud spend. This made it possible for the
                company to begin to lead with a culture of experimentation and
                learning.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <a className="text-lg font-bold">Sr. Software Engineer</a>
            <a className="text-sm text-black"> [AWS, NodeJS, PHP]</a>
            <p>
              <a className="text-sm font-bold">Pizza Hut Digital Ventures</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2019-2020 | London, UK (Remote)
              </a>
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Created & owned Latin America Geolocation API written in NodeJS
                with TS and the Knex library. Communicate with various
                governmental agencies in South America in Spanish. Gather
                various Geolocation data in various shapes, transform data in
                Python data frames, and import various application
                configurations as per feature requests.
              </li>
              <li>
                Assist with payment integration processor written in PHP with
                Vietnam team; Assist and mentor junior developers with loading
                configurations into PHP connecting to RDS production instances.
                Host weekly review meetings and coordinate communications such
                as planned maintenance windows. Following the sun.
              </li>
              <li>
                Engineered ETL processes in Python for order rewrite process
                bridge during migration to NEC point of sale API platform.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <a className="text-lg font-bold">Sr. Software Engineer</a>
            <a className="text-sm text-black"> [AWS, Py, C#]</a>
            <p>
              <a className="text-sm font-bold">Tyler Technologies</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2017-2018 | Yarmouth, ME (Remote)
              </a>
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Working feature requests that involved API changes in C# and
                front-end changes in ReactJS for an Intranet PaaS which served
                the internal customer support teams across various domestic
                locations.
              </li>
              <li>
                Creating Python automations with F5 SDK to import customer
                configurations mapped from previously established configuration
                management components in the pipeline such as Ansible, Puppet,
                and Terraform into batch changes for networking configurations
                from the customer configuration changes in the PaaS data stream.
              </li>
              <li>
                TF Enterprise SME on AWS GovCloud. Created and distributed
                Terraform modules to various Domestic support teams. This lead
                to optimization of the Ops requests through standardization of
                the module templates, which resulted in major renovations and
                optimizations to the customer domain onboarding processes.
              </li>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Freelance Experience
          </h2>
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
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Previous Employment
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">IT Manager</p>
            <a>
              <a className="text-sm font-bold">TDCC</a>
              <a> </a>
              <a className="text-sm text-gray-600">2002-2010 | Plano, TX</a>
            </a>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Support Desk Technician II</p>
            <a>
              <a className="text-sm font-bold">Waymark Internet Services</a>
              <a> </a>
              <a className="text-sm text-gray-600">1998-2002 | Irving, TX</a>
            </a>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Network Support Associate</p>
            <a>
              <a className="text-sm font-bold">Wayland Baptist University</a>
              <a> </a>
              <a className="text-sm text-gray-600">1996-1998 | Plainview, TX</a>
            </a>
          </div>
        </section>
        <section className="mb-8">
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
          <div className="mb-6">
            <p className="text-lg font-bold">A.A. Finance</p>
            <a>
              <a className="text-sm font-bold">Collin College</a>
              <a> </a>
              <a className="text-sm text-gray-600">1998-2000 | Plano, TX</a>
            </a>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">H.S. Diploma</p>
            <a>
              <a className="text-sm font-bold">Hale Center High School</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                1992-1996 | Hale Center, TX
              </a>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume

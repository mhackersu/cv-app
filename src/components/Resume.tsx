function Resume() {
  return (
    <div className="font-sans text-black">
      <div className="mx-auto mt-10 max-w-4xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <div>
            <h1 className="text-4xl font-bold">Mike Hacker</h1>
            <p className="text-lg">Sr. Software Engineer</p>
            <p className="text-sm text-gray-600">
              hacker@bfsio.net | 830-313-9450
            </p>
          </div>
        </div>
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">Skills</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>
              <b className="text-black">Languages:</b> Go, Ruby, Py
            </li>
            <li>
              <b className="text-black">Data:</b> PostgreSQL, MySQL
            </li>
            <li>
              <b className="text-black">Cloud:</b> IAM, GKE, CloudFlare
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Professional Experience
          </h2>
          <div className="mb-6">
            <a className="text-lg font-bold">Sr. Software Engineer</a>
            <a className="text-sm text-black"> [Ruby, Go]</a>
            <p>
              <a className="text-sm font-bold">WP Engine</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2022-2024 | Austin, TX (Remote)
              </a>
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Architected domain-based routing improvements for a multi-tenant
                Ruby application serving 1M+ customer domains (e.g.,
                wpengine.com, wpeng.in), supporting internal and customer
                workloads on GKE. Introduced architectural changes to streamline
                class loading and domain resolution at scale.
              </li>
              <li>
                Led remediation of critical domain routing exploit in a
                Ruby-based GKE platform powering over 200M WordPress customer
                domains. Identified vulnerability, rewrote core regex logic, and
                implemented test-driven validation across routing layers.
              </li>
              <li>
                Technical lead for nine-month security initiative, driving ADR
                reviews, cross-team design approvals, and stakeholder buy-in for
                release of the patch. Final remediation supported a $330M ARR
                platform and mitigated significant operational risk.
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
                Created compliance-aligned TLS automations in Go via Cloudflare
                SaaS migration, including Let's Encrypt and Google SSL
                workflows.
              </li>
              <li>
                Responded to customer escalations related to Chinese network
                access restrictions, coordinating real-time IP pool changes
                across global Kubernetes infrastructure (GKE).
              </li>
              <li>
                Provided real-time infrastructure support for regulated IP
                access zones including Chinese market compliance.
              </li>
              <li>
                Contribuiting to Cloudflare Orange Cloud Enterprise SaaS via Go
                migration from Python automation for Let's Encrypt and Google
                Cloud SSL renewal subroutines on customer domains.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <a className="text-lg font-bold">Sr. Software Engineer</a>
            <a className="text-sm text-black"> [C#, Java]</a>
            <p>
              <a className="text-sm font-bold">Fairway Mortgage</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2019-2022 | Madison, WI (Remote)
              </a>
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Lead engineer for mission-critical JRE/Linux/CI modernization
                effort on ACH/Swift transactional system servicing 7B ARR.
              </li>
              <li>
                Organizational IDP Champion; Lead teams to ship DevOps
                initiative via workflows with complete IaS golden templates to
                20+ teams development across organization.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <a className="text-lg font-bold">Sr. Software Engineer</a>
            <a className="text-sm text-black"> [Python]</a>
            <p>
              <a className="text-sm font-bold">Tyler Technologies</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2018 | Yarmouth, ME (Remote)
              </a>
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Creating Python automations with the F5 SDK to import customer
                configurations mapped from previously established configuration
                management components in the pipeline such as Ansible, Puppet,
                and Terraform into batch changes for networking configurations.
              </li>
              <li>
                TF Enterprise SME on AWS GovCloud. Created and distributed
                Terraform modules to various Domestic support teams. This lead
                to optimization of the Ops requests through standardization of
                the module templates, which resulted in major renovations and
                optimizations to the customer domain onboarding processes.
              </li>
              <li>
                Codified IAM configurations with TF. This simple step
                exponentially increased resiliency and protections against
                simple human error when creating the release pipeline for the
                new customer configurations going into production.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <a className="text-lg font-bold">Sr. Software Engineer</a>
            <a className="text-sm text-black"> [NodeJS]</a>
            <p>
              <a className="text-sm font-bold">Pizza Hut Digital Ventures</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2017 | London, UK (Remote)
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
                Assist with payment integration processor; Host weekly review
                meetings and coordinate communications such as planned
                maintenance windows.
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
      </div>
    </div>
  )
}

export default Resume

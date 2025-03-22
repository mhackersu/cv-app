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
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">Skills</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>
              Following Agile principles and contributing to the team effort.
            </li>
            <li>
              Debugging and optimizing existing services, writing new code, and
              new unit tests.
            </li>
            <li>
              Setting up containers, debugging existing containers, attending to
              on-call.
            </li>
            <br></br>
            <li>
              <b>Languages:</b> Py, Go, Ruby, JS
            </li>
            <li>
              <b>Databases:</b> PostgreSQL, NoSQL
            </li>
            <li>
              <b>Cloud Services:</b> AWS, GCP, AZ
            </li>
          </ul>
        </section>
        <section>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Professional Experience
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">Sr. Software Engineer</p>
            <a>
              <a className="text-sm font-bold">WP Engine</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2022-2024 | Austin, TX (Remote)
              </a>
            </a>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <br></br>
              <li>
                Streamlined classes in multi-tenant domain-routing architecture
                <i> (e.g. wpeng.in)</i> servicing <i>(n=1x10^6)</i> customer
                domains.
              </li>
              <li>
                Leveraged Cloudflare Orange Cloud Enterprise SaaS to automate
                Let&apos;s Encrypt and Google Cloud SSL renewals.
              </li>
              <li>
                Led team for system rewrite for domain routing in Go/GRPC with a
                Cloudflare SaaS Enterprise O2O Proxy.
              </li>
              <li>
                Enhanced customer onboarding experience by implementing more
                granular API endpoints for more dynamic UI status updates.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Sr. Platform Engineer</p>
            <a>
              <a className="text-sm font-bold">Fairway Mortgage</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2020-2022 | Carrollton, TX (Remote)
              </a>
            </a>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <br></br>
              <li>
                Led implementation team for CI modernization on mission-critical
                ACH transactional services processing $7B USD yearly.
              </li>
              <li>
                Created fully-developed adhoc lowers using AZ resources,
                complete with build, release, and integration test stages.
              </li>
              <li>
                Including unit tests, Created serverless CI services using
                AZFunctionApp.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Sr. DevOps Engineer</p>
            <a>
              <a className="text-sm font-bold">Tyler Technologies</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2018-2020 | Yarmouth, ME (Remote)
              </a>
            </a>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <br></br>
              <li>Lead TF Enterprise SME on AWS GovCloud.</li>
              <li>
                Created new TF modules that automated customer domain onboarding
                steps.
              </li>
              <li>
                Migrated IAM configurations into TF to create a more manageable
                identity and access management experience.
              </li>
              <br></br>
            </ul>
          </div>
        </section>
        <section className="mb-8">
          <a
            href="https://www.bfsio.net/projects"
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
              Projects
            </h2>
          </a>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>
              <strong>Bird Feeder</strong>
              <p>
                A CLI that passes inputs into a Go serverless function that
                fetches data from GCP data layer, performs financial
                calculations, and prints JSONL output to the shell.
              </p>
            </li>
            <li>
              <strong>Minikube Localstack</strong>
              <p>
                A resiliant Flywheel Kubernetes stack using Docker, Minikube,
                and Localstack to simulate AWS infrastructure. Includes local
                k8s cluster, producer & consumer services, liveness probes, and
                automate health checks that ensure service reliability.
              </p>
            </li>
            <li>
              <strong>Kubernetes Debugging Helper</strong>
              <p>
                A ReactJS application that aids developers with Kubernetes
                debugging procedures app that guides users through the various
                k8s debugging, providing step-by-step assistance to diagnose and
                resolve common error message that can be experienced when
                deploying applications that run on kubernetes infrastructure.
              </p>
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Freelance Experience
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">DevOps Engineer</p>
            <p className="text-sm font-bold">Pizza Hut Digital Ventures</p>
            <p className="text-sm text-gray-600">2017 | London, UK (Remote)</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Full-Stack Web Developer</p>
            <p className="text-sm font-bold">TxDOT</p>
            <p className="text-sm text-gray-600">2016 | Austin, TX</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Full-Stack Web Developer</p>
            <p className="text-sm font-bold">General Assembly</p>
            <p className="text-sm text-gray-600">2015 | Austin, TX</p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Education
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">B.A.A.S. Economics</p>
            <p className="text-sm font-bold">University of North Texas</p>
            <p className="text-sm text-gray-600">2010-2014 | Denton, TX</p>
          </div>
          <div>
            <p className="text-lg font-bold">A.S. Finance</p>
            <p className="text-sm font-bold">Collin College</p>
            <p className="text-sm text-gray-600">1998-2000 | Plano, TX</p>
          </div>
        </section>
        <br></br>
        <section>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Previous Experience
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">IT Director</p>
            <p className="text-sm font-bold">Texas Health Resources</p>
            <p className="text-sm">2004-2010 | Plano, TX</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Network Support Specialist</p>
            <p className="text-sm font-bold">Waymark Internet Services</p>
            <p className="text-sm text-gray-600">1999-2003 | Irving, TX</p>
          </div>
          <p className="text-lg font-bold">Network Support Assistant</p>
          <div className="mb-6">
            <p className="text-sm font-bold">Wayland Baptist University</p>
            <p className="text-sm text-gray-600">1996-1998 | Plainview, TX</p>
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

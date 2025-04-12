function Resume() {
  return (
    <div className="font-sans text-black">
      <div className="mx-auto mt-10 max-w-4xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <div>
            <h1 className="text-4xl font-bold">Mike Hacker</h1>
            <p className="text-lg">Platform Engineer</p>
            <p className="text-sm text-gray-600">
              hacker@bfsio.net | 830-313-9450
            </p>
          </div>
        </div>
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Professional Skills
          </h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
            <li>
              Attending and participating in weekly team engineering design
              meetings, and working as a team to ship sprint goals.
            </li>
            <li>
              Attending to rotating on-call and debugging and optimizing
              existing services when responding to incidents.
            </li>
            <li>Writing code and tests according to feature requests.</li>
            <li>
              Creating new containers and new CI; Debugging and optimizing
              existing containers and existing CI.
            </li>
            <br></br>
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
            <p className="text-lg font-bold">Sr. Platform Engineer (Edge)</p>
            <a>
              <a className="text-sm font-bold">WP Engine</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2022-2024 | Austin, TX (Remote)
              </a>
            </a>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Optimized classes within multi-tenant architecture for
                domain-routing on <i> (e.g. wpeng.in)</i> servicing{' '}
                <i>(n=1x10^6)</i> internal, customer domains.
              </li>
              <li>
                Leveraged Cloudflare Orange Cloud Enterprise SaaS to automate
                Let&apos;s Encrypt and Google Cloud SSL renewals on customer
                domains.
              </li>
              <li>Led internal domain routing system rewrite in Go/GRPC.</li>
              <li>
                Created automations in StackStorm to enhance system resiliancy.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">
              Sr. Platform Engineer (Middleware)
            </p>
            <a>
              <a className="text-sm font-bold">Fairway Mortgage</a>
              <a> </a>
              <a className="text-sm text-gray-600">
                2020-2022 | Carrollton, TX (Remote)
              </a>
            </a>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>
                Led CI modernization effort on mission-critical ACH
                transactional system servicing 7B ARR.
              </li>
              <li>
                Created platforms in AZ for development teams, complete with
                build, release, and integration test stages.
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

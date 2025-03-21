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
          <ul className="list-disc space-y-1 pl-5">
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
            <li>Languages: Py, Go, Ruby, JS</li>
            <li>Databases: PostgreSQL, NoSQL</li>
            <li>Cloud Services: AWS, GCP, AZ</li>
          </ul>
        </section>
        <br></br>
        <section>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Professional Experience
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">Sr. Software Engineer</p>
            <p className="text-sm font-bold">WP Engine</p>
            <p className="text-sm text-gray-600">
              2022-2024 | Austin, TX (Remote)
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <br></br>
              <strong>Cloudflare Enterprise SME - 2024</strong>
              <li>Domain Routing Automation in Go and Ruby</li>
              <li>
                Maintained and enhanced an automated SSL certificate
                provisioning system leveraging Cloudflare Orange Cloud
                Enterprise SaaS, integrating Let&apos;s Encrypt and Google Cloud
                SSL services.
                <li>
                  Transitioned from a legacy manual queuing process to a
                  streamlined solution for onboarding unique customer subdomains
                  under multi-tenant apex domains (e.g., wpengine.com,
                  wpeng.in).
                </li>
                <li>
                  Improved system reliability and scalability by refining UI
                  workflows and real-time status tracking, reducing customer
                  support interactions and driving customer satisfaction.
                </li>
              </li>
              <br></br>
              <strong>
                Lead SRE for Domain Validation Services - 2022-2023
              </strong>
              <li>
                Coordinated with Ukraine team as we transisitioned from a
                Ruby-based in-house DNS routing platform to a Go-based
                Cloudflare SaaS Enterprise Orange-to-Orange (O2O) proxy system.
                <li>
                  Enhanced customer onboarding configurations by implementing
                  real-time API endpoints for dynamic UI status updates.
                </li>
                <li>
                  Delivered improved reliability, scalability, and operational
                  efficiency, supporting millions of domains with seamless
                  integration into a multi-tenant architecture.
                </li>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Sr. Platform Engineer</p>
            <p className="text-sm font-bold">Fairway Mortgage</p>
            <p className="text-sm text-gray-600">
              2020-2022 | Carrollton, TX (Remote)
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <br></br>
              <strong>Lead CI Integration Engineer - 2022</strong>
              <li>
                Led the implementation of CI modernization as CI/CD
                Transformation Leader with integration of push-button release
                and approval gates in a transactional system that processed $7B
                ARR in ACH bank transfers. The modernization significantly
                reduced manual release time by 80% and fostered alignment
                between engineering teams and non-technical IT stakeholders with
                GitOps-style communication strategies.
              </li>
              <br></br>
              <strong>Lead Terraform Engineer 2020-2021</strong>
              <li>
                Designed and implemented comprehensive CI pipelines for all
                environments (dev, test, staging, and production) using
                Terraform, incorporating ephemeral lower environments to
                optimize infrastructure utilization and reduce cloud spend by
                enabling short-lived resources tailored to workload demands.
              </li>
              <li>
                Streamlined the UAT process, significantly reducing testing
                cycle times and improving defect detection through consistent,
                automated deployment pipelines.
              </li>
              <li>
                Enhanced production handoffs by automating environment
                provisioning, ensuring smoother, faster, and more reliable
                releases, which minimized downtime and accelerated feature
                delivery to customers.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Sr. DevOps Engineer</p>
            <p className="text-sm font-bold">Tyler Technologies</p>
            <p className="text-sm text-gray-600">
              2018-2020 | Yarmouth, ME (Remote)
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <br></br>
              <strong>AWS GovCloud Engineer - 2019-2020</strong>
              <li>
                Automated manual processes by integrating customer domain
                onboarding via Route53 API into CI via ADO.
              </li>
              <li>
                Migrated IAM configurations into IaC to upgrade to more safe and
                trackable identity and access management.
              </li>
              <br></br>
              <strong>Lead Terraform Enterprise Engineer - 2018</strong>
              <li>
                Deployed TF org-wide and collaborated with engineering teams to
                drive the IaC adoption.
              </li>
              <li>
                Served as Lead Terraform Enterprise Engineer for government
                clients, deploying Terraform organization-wide to standardize
                and automate infrastructure as code (IaC) practices across
                engineering teams, including networking teams on F5 infra.
              </li>
              <li>
                Partnered with engineering and DevOps teams to replace manual
                customer domain and environment provisioning workflows with
                reusable Terraform modules, enabling reliable and efficient
                automation processes.
              </li>
              <li>
                Improved operational efficiency and reliability by streamlining
                provisioning tasks, reducing errors, and enhancing the
                management of customer-specific domain configurations and
                environments.
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
                A microwebservice that instanciates a Go function via a roubust
                Dockerfile that fetches data from GCP data layer, performs
                standard deviation calculations, and outputs calculations as
                JSONL to the shell; Inputs are passed at instantiation for
                seamless service integration into a larger microservice cloud
                platform architecture.
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

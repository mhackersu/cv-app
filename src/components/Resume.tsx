function Resume() {
  return (
    <div className="font-sans text-black">
      <div className="mx-auto mt-10 max-w-4xl bg-white p-8 shadow-lg">
        <div className="mb-6 flex items-center justify-between border-b pb-4">
          <div>
            <h1 className="text-4xl font-bold">Mike Hacker</h1>
            <p className="text-lg text-gray-600">hacker@bfsio.net</p>
            <p className="text-sm text-gray-500">830-313-9450</p>
          </div>
        </div>
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">Skills</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Languages: Python, Go, Ruby, Javascript</li>
            <li>Databases: PostgreSQL, MySQL, MSSQL, NoSQL</li>
            <li>Testing: Unit Testing, Integration Testing</li>
            <li>Cloud Services: AWS, GCP, Azure</li>
            <li>Infra: GKE, EKS, TF, Linux, SuperMicro</li>
            <li>Networking: Cloudflare, F5, Mikrotik, L3, L7</li>
            <li>DevOps: SDLC, YML, JSON, JQ, SED, Bash, Vim</li>
            <li>Containers: Docker, Kubernetes, Helm, Werf</li>
          </ul>
        </section>
        <br></br>
        <section>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Work Experience
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">
              Lead DevOps Engineer | WP Engine
            </p>
            <p className="text-sm text-gray-600">
              Nov 2022 - Nov 2024 (Remote)
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
                Operationalized and supported the transition from a Ruby-based
                in-house DNS routing platform to a Go-based Cloudflare SaaS
                Enterprise Orange-to-Orange (O2O) proxy system.
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
            <p className="text-lg font-bold">
              Sr. DevOps Engineer | Fairway Mortgage
            </p>
            <p className="text-sm text-gray-600">
              Feb 2020 - Oct 2022 (Remote)
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
            <p className="text-lg font-bold">
              DevOps Engineer | Tyler Technologies
            </p>
            <p className="text-sm text-gray-600">
              Jun 2018 - Jan 2020 (Remote)
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
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Projects
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>
              <strong>Bird Feeder</strong>
              <p>
                A golden{' '}
                <strong>
                  <a
                    href="https://github.com/mhackersu/bird-feeder"
                    target="_blank"
                    rel="noreferrer"
                  >
                    service
                  </a>
                </strong>{' '}
                that instanciates a Go service via a roubust Dockerfile that
                fetches data from GCP data layer, performs standard deviation
                calculations, and outputs calculations as JSONL to the shell;
                Inputs are passed at instantiation for seamless service
                integration into a larger microservice cloud platform
                architecture.
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
            <p className="text-lg font-bold">
              2017 - Pizza Hut Digital Ventures
            </p>
            <p>DevOps Engineer, London, UK</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">
              2016 - Texas Dept. of Public Safety
            </p>
            <p>Front-End Web Developer, Austin, TX</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">2015 - General Assembly</p>
            <p>Full-Stack Web Developer, Austin, TX</p>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Previous Work Experience
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">Texas Health Resources</p>
            <p>IT Director | Plano, TX</p>
            <p>2001 - 2011</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Wayland Baptist University</p>
            <p>IT Assistant | Plainview, TX</p>
            <p>1996 - 1998</p>
          </div>
          <div className="mb-6">
            <p className="text-lg font-bold">Wolf Camera</p>
            <p>Photofinishing Specialist | Plano, TX</p>
            <p>1999 - 2000</p>
          </div>
        </section>
        <section>
          <h2 className="mb-4 border-b pb-2 text-2xl font-semibold">
            Education
          </h2>
          <div className="mb-6">
            <p className="text-lg font-bold">B.A.A.S. Economics</p>
            <p className="text-sm text-gray-600">
              University of North Texas, Aug 2011 - Aug 2014
            </p>
            <p className="text-sm text-gray-600">
              Coursework: Finance, Statistics, CS
            </p>
          </div>
          <div>
            <p className="text-lg font-bold">A.S. Finance</p>
            <p className="text-sm text-gray-600">
              Collin College, Aug 1998 - May 2000
            </p>
            <p className="text-sm text-gray-600">
              Coursework: Accounting, Economics
            </p>
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
      <div className="no-print mt-8 flex justify-center">
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Print / Save as PDF
        </button>
      </div>
    </div>
  )
}

export default Resume

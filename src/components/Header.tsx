function Resume() {
    return (
      <div>
        <header>
            <h1>Mike Hacker</h1>
            <h2>Software Engineer</h2>
            <p><a href="mailto:mike@bfsio.net">mike at bfsio dot net</a> | <a href="http://mvskokvlke.com" target="_blank">blog</a></p>
        </header>
        <section id="education">
          <h2>Education</h2>
          <article>
              <h3>University of North Texas (2014)</h3>
              <p>Bachelors of Applied Arts & Sciences, MIS</p>
          </article>
          <article>
              <h3>Collin County Community College (2000)</h3>
              <p>Associates of Arts, MIS</p>
          </article>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <article>
              <h3>Polygot</h3>
              <ul>
                  <li>python</li>
                  <li>golang</li>
                  <li>nodejs</li>
                  <li>ruby</li>
              </ul>
          </article>
          <article>
              <h3>DevOps</h3>
              <ul>
                  <li>docker, kates, helm, minikube</li>
                  <li>prometheus, grafana, elk</li>
                  <li>sdlc, groovy, yml, json, jq, sed, awk, bash, vim</li>
              </ul>
          </article>
          <article>
              <h3>Security</h3>
              <ul>
                  <li>credstash, sops,hashicorp vault, gcp secrets, k8s secrets</li>
                  <li>cryptography (encryption, certs, keys)</li>
                  <li>tls, ssl, https</li>
                  <li>sdlc, dast, sast, sca</li>
                  <li>iam, rbac, aad</li>
              </ul>
          </article>
        </section>
        <section>
          <h2>Career History</h2>
          <article>
              <h3>WP Engine</h3><p><strong>DevOps Engineer</strong> 2022-2024</p>
              <ul>
                  <p><strong>Cloudflare Enterprise SME - Domain Routing Automation in Go and Ruby</strong></p>
                  <p>Maintained and enhanced an automated SSL certificate provisioning system leveraging Cloudflare Orange Cloud Enterprise SaaS, integrating Let&apos;s Encrypt and Google Cloud SSL services. Transitioned from a legacy manual queuing process to a streamlined solution for onboarding unique customer subdomains under multi-tenant apex domains (e.g., wpengine.com, wpeng.in). Improved system reliability and scalability by refining UI workflows and real-time status tracking, reducing customer support interactions and driving customer satisfaction.</p>
                  <p><strong>SRE for domain validation services in customer onboarding workflows</strong></p>
                  <p>Operationalized and supported the transition from a Ruby-based in-house DNS routing platform to a Go-based Cloudflare SaaS Enterprise Orange-to-Orange (O2O) proxy system. Enhanced customer onboarding configurations by implementing real-time API endpoints for dynamic UI status updates. Delivered improved reliability, scalability, and operational efficiency, supporting millions of domains with seamless integration into a multi-tenant architecture.</p>
                  <p><strong>AWS</strong></p>
                  <p>Increased platform reliability by creating automation for Route53 domain certificate renewals with Python and LetEncrypt.</p>
                  <p><strong>GCP</strong></p>
                  <p>Created production code in Ruby and Go in GKE clusters to support interoperability with customer domain onboarding systems and O2O Cloudflare SaaS functionality.</p>
              </ul>
              <p></p>
          </article>
          <article>
              <h3>Fairway Mortgage</h3><p><strong>DevOps Engineer</strong> 2020-2022</p>
              <ul>
                  <p><strong>Lead CI integration engineer on Platform for $7B ARR ACH banking transactional system</strong></p>
                  <li>Led the implementation of CI modernization as CI/CD Transformation Leader with integration of push-button release and approval gates in a transactional system that processed $7B ARR in ACH bank transfers. The modernization significantly reduced manual release time by 80% and fostered alignment between engineering teams and non-technical IT stakeholders with GitOps-style communication strategies.</li>
                  <p><strong>Lead Terraform Engineer for POC Pivotal Labs Tiger Team engagement</strong></p>
                  <li>Designed and implemented comprehensive CI pipelines for all environments (dev, test, staging, and production) using Terraform, incorporating ephemeral lower environments to optimize infrastructure utilization and reduce cloud spend by enabling short-lived resources tailored to workload demands.</li>
                  <li>
                      Streamlined the UAT process, significantly reducing testing cycle times and improving defect detection through consistent, automated deployment pipelines.  
                  </li>
                  <li>
                      Enhanced production handoffs by automating environment provisioning, ensuring smoother, faster, and more reliable releases, which minimized downtime and accelerated feature delivery to customers.
                  </li>
                  <p><strong>AWS</strong></p>
                  <li>Built out CI in AWS CodePipeline for AWS Lambda serverless deployments.</li>
                  <li>Migrated IAM configurations into IaC to upgrade to more safe and trackable identity and access management.</li>
                  <p><strong>Azure</strong></p>
                  <li>Improved developer experience by creating CI templates with ephemeral IaC lowers that included RBAC, APIM, and KeyVault integration.</li>
                  <li>Empowered all developer teams by building out CI production templates for C#/.Net FunctionApps in both Bash and PowerShell.</li>
              </ul>
              <p></p>
          </article>
          <article>
              <h3>Tyler Technologies</h3><p><strong>DevOps Engineer</strong> 2018-2020</p>
              <ul>
                  <p><strong>Lead Terraform Enterprise engineer</strong></p>
                  <li>Deployed TF org-wide and collaborated with engineering teams to drive the IaC adoption.</li>
                  <li>
                      Served as Lead Terraform Enterprise Engineer for government clients, deploying Terraform organization-wide to standardize and automate infrastructure as code (IaC) practices across engineering teams, including networking teams on F5 infra.
                  </li>
                  <li>
                      Partnered with engineering and DevOps teams to replace manual customer domain and environment provisioning workflows with reusable Terraform modules, enabling reliable and efficient automation processes.
                  </li>
                  <li>
                      Improved operational efficiency and reliability by streamlining provisioning tasks, reducing errors, and enhancing the management of customer-specific domain configurations and environments.
                  </li>
                  <p><strong>AWS GovCloud</strong></p>
                  <li>
                      Automated manual processes by integrating customer domain onboarding via Route53 API into CI via ADO.</li>
                  <li>
                      Migrated IAM configurations into IaC to upgrade to more safe and trackable identity and access management.
                  </li>
              </ul>
          </article>
          <article>
              <h3>Freelance Contractor</h3><p><strong>Software Engineering</strong> 2012-2017</p>
          </article>
          <article>
              <h3>IT Director</h3><p><strong>Healthcare Industry</strong> 2002-2011</p>
          </article>
          <article>
              <h3>Sales</h3><p><strong>Photography Industry</strong> 1997-2001</p>
          </article>
        </section>
      </div>
    )
  }
  
export default Resume
export interface ExperienceEntry {
  title: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
}

export interface OpenSourceEntry {
  name: string;
  description: string;
  url?: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  gpa?: string;
  coursework?: string[];
}

export interface Resume {
  name: string;
  headline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  experience: ExperienceEntry[];
  skills: SkillCategory[];
  certifications: Certification[];
  openSource: OpenSourceEntry[];
  education: EducationEntry[];
}

export const resume: Resume = {
  name: "Yugam Sharma",
  headline: "Sr. Cloud Infrastructure / SRE Engineer",
  location: "Sunnyvale, CA",
  phone: "(650) 447-9739",
  email: "yugam.sharma@yahoo.com",
  linkedin: "https://linkedin.com/in/yugamsharma",
  github: "https://github.com/ysharma-dev",
  summary:
    "Senior Cloud Infrastructure / SRE Engineer with 8+ years building scalable, highly available platforms on AWS and Kubernetes. At Proofpoint, architected a company-wide GitOps platform (CDK8s + ArgoCD) for multi-tenant delivery across 50+ EKS clusters hosting ~1,000 microservices, and designed a serverless webhook solution (API Gateway, Lambda, WAF) used by all engineering teams. Deep expertise across AWS (EC2, VPC, IAM, S3, RDS, Lambda, EKS), EC2 fleet management, Kubernetes, Terraform, Ansible, HashiCorp Vault, CI/CD, secrets management, and observability (Prometheus, Grafana, Thanos). Mentors 4 engineers and contributes to technical direction and infrastructure standards.",
  experience: [
    {
      title: "Sr. Software Engineer — Infrastructure Engineering",
      company: "Proofpoint",
      start: "Jul 2024",
      end: "Present",
      bullets: [
        "Architected Cloud15 Paved Path v3: company-wide GitOps platform replacing Helm with CDK8s + ArgoCD via Harness CD — automated, git-driven delivery across 50+ EKS clusters hosting ~1,000 microservices.",
        "Designed serverless GitHub webhook integration: API Gateway + Lambda + WAF; IP-restricted, signature-validated, serving all engineering teams at ~$23/month per million requests.",
        "Led multi-region infrastructure expansion (India, Canada, Middle East, Australia) — designed reusable EKS provisioning patterns including EC2 instance selection, right-sizing, and auto-scaling configuration across all 50+ clusters.",
        "Implemented company-wide secrets management: ExternalSecrets Operator + AWS Secrets Manager as the production standard; architected HashiCorp Vault integration strategy for non-AWS platforms and ran proof-of-concept deployments.",
        "Core member, Observability Working Group: drove OpenTelemetry-based SLO/SLI frameworks, 5-level maturity standards, and Kubernetes labeling conventions adopted across all Catalyst services.",
        "Built Prometheus / Grafana / Thanos stack with Alertmanager + PagerDuty; designed SLO dashboards and alerting rules reducing MTTD for on-call incidents.",
        "Mentors engineers on infrastructure best practices, GitOps workflows, and AWS platform patterns; contributes to technical direction and standards for the infrastructure team.",
        "Authored reusable Terraform modules for AWS provisioning including a custom OPA policy module enforcing resource tagging across all accounts.",
      ],
    },
    {
      title: "Software Engineer III — Infrastructure Engineering",
      company: "Proofpoint",
      start: "Oct 2022",
      end: "Jul 2024",
      bullets: [
        "Proposed self-service EKS cluster provisioning design adopted org-wide — automation eliminated team bottlenecks that previously stretched Kubernetes upgrades to 4+ quarters.",
        "Administered 50+ Kubernetes clusters end-to-end: version upgrades, autoscaling, workload deployments, and multi-tenant namespace management.",
        "Managed AWS infrastructure (VPC, IAM, EC2, S3, EKS, RDS) across North America, India, Middle East, and APAC.",
        "Developed and maintained Ansible playbooks to automate configuration management for 50+ on-premises CI VMs, reducing manual provisioning time by ~70% and standardizing environment parity across dev, staging, and production; built CI/CD pipelines via Jenkins/CloudBees CI.",
        "Extended Crossplane adoption for hybrid AWS/Azure multi-cloud resource management and custom Kubernetes operators.",
      ],
    },
    {
      title: "Customer Reliability Engineer",
      company: "Sisense Inc.",
      start: "Mar 2022",
      end: "Oct 2022",
      bullets: [
        "Built Terraform-based infrastructure automation; introduced a Kubernetes initContainer for AWS FSx for Lustre performance tuning; led Application Reliability Reviews with R&D and client teams.",
      ],
    },
    {
      title: "Staff Product Support Engineer",
      company: "Pivotal / VMware Inc.",
      start: "Aug 2018",
      end: "Mar 2022",
      bullets: [
        "Resolved ~500 technical issues across Tanzu Platform (TKG, TMC, TKGI, TAS, UAA/SSO); built 40+ Concourse CI/CD pipelines for on-demand lab environments.",
        "Published 40+ public and 35 internal KB articles; delivered technical talks as SME on Kubernetes, BOSH, and Cloud Foundry across global teams.",
      ],
    },
  ],
  skills: [
    {
      category: "AWS",
      items: [
        "EC2",
        "VPC",
        "IAM",
        "S3",
        "RDS",
        "Lambda",
        "API Gateway",
        "WAF",
        "EKS",
        "Secrets Manager",
        "CloudWatch",
      ],
    },
    {
      category: "Kubernetes",
      items: [
        "Administration",
        "Upgrades",
        "Autoscaling",
        "Multi-tenancy",
        "Helm",
        "CDK8s",
        "ArgoCD",
        "ExternalSecrets Operator",
      ],
    },
    {
      category: "Infrastructure as Code",
      items: ["Terraform (HCA)", "CDK8s", "Ansible", "CloudFormation"],
    },
    {
      category: "CI/CD & GitOps",
      items: [
        "ArgoCD",
        "Harness CD",
        "Jenkins",
        "CloudBees CI",
        "Concourse",
        "GitHub Actions",
      ],
    },
    {
      category: "Secrets Management",
      items: [
        "AWS Secrets Manager",
        "ExternalSecrets Operator",
        "HashiCorp Vault",
      ],
    },
    {
      category: "Observability",
      items: [
        "Prometheus",
        "Grafana",
        "Thanos",
        "Alertmanager",
        "PagerDuty",
        "OpenTelemetry",
        "Coralogix",
        "Datadog",
      ],
    },
    {
      category: "Networking",
      items: [
        "TCP/IP",
        "DNS",
        "Load Balancing (ALB/NLB)",
        "VPC design",
        "Zero Trust (Crossplane / multi-cloud)",
      ],
    },
    {
      category: "Languages",
      items: ["Python", "Go", "Bash", "JavaScript / Node.js"],
    },
    {
      category: "AI Dev Tooling",
      items: ["Claude Code", "GitHub Copilot", "Windsurf"],
    },
    {
      category: "Other",
      items: [
        "Crossplane (AWS/Azure)",
        "Docker",
        "VMware vSphere",
        "MySQL",
        "MongoDB",
        "DynamoDB",
      ],
    },
  ],
  certifications: [
    { name: "Certified Kubernetes Security Specialist (CKS)" },
    { name: "Certified Kubernetes Administrator (CKA)" },
    { name: "Certified Kubernetes Application Developer (CKAD)" },
    { name: "Linux Foundation Certified System Administrator (LFCS)" },
    { name: "HashiCorp Certified: Terraform Associate (HCA)" },
    {
      name: "VMware Certified Advanced Professional (VCAP) — Multi-Cloud Management & Automation Master Specialist",
    },
  ],
  openSource: [
    {
      name: "Kubernetes",
      description:
        "Pull requests for official documentation improvements (kubernetes/website).",
      url: "https://github.com/kubernetes/website",
    },
    {
      name: "set-windows-system-audit-policy",
      description:
        "BOSH release to configure system audit policy on BOSH-deployed Windows Server nodes.",
      url: "https://github.com/ysharma-dev/set-windows-system-audit-policy",
    },
    {
      name: "trustgate-mcp-vetting",
      description:
        "Enterprise-grade MCP server security analysis tool; Google Kaggle Hackday project.",
      url: "https://github.com/ysharma-dev/trustgate-mcp-vetting",
    },
  ],
  education: [
    {
      degree: "M.S. Computer Science",
      school: "California State University, East Bay",
      location: "Hayward, CA",
      start: "Feb 2016",
      end: "Mar 2018",
      gpa: "3.6",
      coursework: [
        "Network Security",
        "Data Structures & Algorithms",
        "OS Design",
        "GUI Programming",
      ],
    },
    {
      degree: "B.Tech. Computer Science",
      school: "MMEC, MM University",
      location: "Ambala, India",
      start: "Dec 2011",
      end: "May 2015",
      gpa: "3.7",
    },
  ],
};

export const profile = {
  name: 'Soumya Negi',
  role: 'Senior QA Automation Engineer',
  email: 'soumyanegi21@gmail.com',
  github: 'https://github.com/soumyanegi21-collab',
  linkedin: 'https://www.linkedin.com/in/soumya-negi-694a16132',
  experience: '4+ years',
  summary:
    'I build reliable test systems that help teams ship with confidence. My work spans modern browser automation, API and data validation, and quality engineering for healthcare and fintech products.',
};

export const skillGroups = [
  { title: 'Automation', detail: 'Reliable end-to-end coverage', skills: ['Playwright', 'Selenium', 'Cypress'] },
  { title: 'Languages', detail: 'Code that scales with the suite', skills: ['TypeScript', 'JavaScript', 'Java', 'SQL'] },
  { title: 'API testing', detail: 'Contracts, workflows, edge cases', skills: ['Postman', 'REST Assured'] },
  { title: 'Cloud', detail: 'Testing in cloud environments', skills: ['AWS'] },
  { title: 'DevOps', detail: 'Quality built into delivery', skills: ['GitHub Actions', 'Docker', 'CI/CD'] },
  { title: 'Ways of working', detail: 'A clear path from issue to insight', skills: ['Jira', 'Confluence', 'Git'] },
];

export const experience = [
  {
    period: '01 / Strategy',
    title: 'Quality engineering',
    description: 'Shape practical test strategies that connect product risk, customer journeys, and release confidence.',
    tags: ['Risk-based testing', 'Test planning'],
  },
  {
    period: '02 / Automation',
    title: 'Automation at every layer',
    description: 'Build maintainable UI and API coverage with Playwright, Selenium, Cypress, and reusable patterns.',
    tags: ['Web', 'API', 'Data'],
  },
  {
    period: '03 / Delivery',
    title: 'Quality in the workflow',
    description: 'Bring fast feedback into CI/CD and collaborate across engineering, product, and delivery teams.',
    tags: ['CI/CD', 'Observability'],
  },
];

export const projects = [
  {
    number: '01',
    title: 'Enterprise Playwright Framework',
    category: 'AUTOMATION PLATFORM',
    description: 'A modular end-to-end testing foundation designed for readable tests, parallel execution, and dependable feedback.',
    features: ['POM architecture', 'Data-driven testing', 'API testing', 'Docker support', 'Allure reports', 'GitHub Actions'],
    technologies: ['Playwright', 'TypeScript', 'Docker'],
    repository: 'https://github.com/soumyanegi21-collab/playwright-typescript-e2e-framework',
    visual: 'framework',
  },
  {
    number: '02',
    title: 'Healthcare Testing Platform',
    category: 'HEALTHCARE',
    description: 'A layered validation approach for patient-facing workflows, service contracts, and data integrity.',
    features: ['Functional testing', 'Regression testing', 'API validation', 'SQL validation'],
    technologies: ['Cypress', 'Postman', 'SQL'],
    visual: 'healthcare',
  },
  {
    number: '03',
    title: 'Fintech Testing',
    category: 'FINANCIAL SERVICES',
    description: 'End-to-end coverage for payment journeys with careful attention to persistence and mobile behavior.',
    features: ['Payment testing', 'Database validation', 'Mobile testing'],
    technologies: ['Selenium', 'Java', 'AWS'],
    visual: 'fintech',
  },
];

export const certifications: { label: string; detail: string; status: string }[] = [];

export const githubStats = [
  { value: '--', label: 'Public repositories' },
  { value: '--', label: 'Stars earned' },
  { value: '--', label: 'Contributions' },
];

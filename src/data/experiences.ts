import { IExperienceItem } from '@/types';

const experiences: IExperienceItem[] = [
  {
    designation: 'Software Development Engineer',
    company: 'VIN GROUP',
    company_link: 'https://vingroup.net',
    startDate: 'Dec 2022',
    isCurrentJob: true,
    location: 'Ha Noi, Viet Nam',
    tech: 'React.js, .NET (C#), Java Spring Boot, Microservices (DDD), Selenium, Robot Framework, Microsoft Identity Platform (OIDC), AWS S3, Typescript, SCSS.',
    description: [
      'Designed, developed, and maintained enterprise-grade web applications using React.js, .NET (C#), and Java Spring Boot within a Microservices (DDD) architecture, ensuring scalability, performance, and clean separation of business logic.',
      'Integrated automated testing using Selenium and Robot Framework, improving QA efficiency and reducing regression bugs during deployments.',
      'Collaborated with cross-functional teams to integrate user tracking and survey systems, enabling data-driven product decisions based on real-time user insights and feedback loops.',
      'Independently optimized front-end core logic, achieving a 20% improvement in page speed and implementing clean code practices for easier future maintenance.',
      'Implemented OAuth2 authentication with Microsoft OIDC, significantly reducing login friction and improving user experience.',
      'Optimized large file download performance and improved image upload pipelines, resulting in a ~20% cost reduction on AWS S3.'
    ]
  },
  {
    designation: 'Full Stack Developer',
    company: 'VMO HOLDINGS',
    company_link: 'https://vmogroup.com',
    startDate: 'Aug 2021',
    endDate: 'Dec 2022',
    isCurrentJob: false,
    location: 'Ha Noi, Viet Nam',
    tech: 'React Native, Node.js, Express.js, NestJs, MongoDB, Redis, Web3.js (NFT Integration), Docker, Nginx, Microservices Architecture, JWT, Snyk, CI/CD, Git.',
    description: [
      'In Secacam application Optimized large image handling by implementing client-side compression, server-side thumbnail generation, and in-memory caching. Improved load times and reduced bandwidth usage across media-heavy views.',
      'Developed mobile applications using React Native with seamless UI/UX and integrated advanced features such as cryptocurrency wallets for NFT transactions.',
      'Architected and delivered a high-load microservices backend in Node.js, powering a real-time online meeting and streaming system for U.S. universities.',
      'Collaborated closely with product managers and designers to translate business goals into scalable, maintainable software solutions.',
      'Implemented automated vulnerability scanning in the CI/CD pipeline using Snyk, proactively detecting and resolving security risks in dependencies. Resulted in a 60% reduction in reported critical vulnerabilities.'
    ]
  },
  {
    designation: 'React JS developer, mobile developer',
    company: 'Adamo Software',
    company_link: 'https://adamosoft.com',
    startDate: 'Mar 2021',
    endDate: 'Aug 2021',
    isCurrentJob: false,
    location: 'Ha Noi, Viet Nam',
    tech: 'React Native, React.js, Redux(Thunk + Saga), Socket.IO, Agora SDK, Stripe API, Firebase, Git, Jira.',
    description: [
      'Spearheaded the end-to-end development of a feature-rich live streaming mobile application, delivered successfully within 5 months, aligned with tight product timelines.',
      `Integrated critical real-time features including:
        - Live video streaming with Agora SDK
        - In-app chat functionality using Socket.IO
        - Push notifications for user engagement via Firebase Cloud Messaging
        - Payment gateway support using Stripe API, enabling seamless user transactions.`,
      'Took full ownership of multiple core features, from requirement gathering to deployment, ensuring scalability, performance, and responsiveness on both iOS and Android platforms.',
      'Contributed to the company’s base app architecture, improving consistency across projects and enabling faster onboarding of new products.',
      'Collaborated closely with UI/UX designers and product managers to ensure the technical implementation matched business and customer requirements.',
      'Mentored a team of 3 junior developers, conducting regular code reviews and leading pair programming sessions, which significantly improved code quality, team velocity, and developer confidence.',
      'Ensured code maintainability and modular design using Redux (Thunk & Saga) for state management, allowing for robust handling of asynchronous flows and scalable feature expansion.'
    ]
  },
  {
    designation: 'Mobile developer',
    company: 'APECSOFT',
    company_link: 'https://apecsoft.asia',
    startDate: 'Apr 2020',
    endDate: 'Mar 2021',
    isCurrentJob: false,
    location: 'Ha Noi, Viet Nam',
    tech: 'React Native, React.js, Redux, Firebase, Google Analytics, pageSpeed, lighthouse, Bitbucket, Agile (Scrum).',
    description: [
      'Built cross-platform mobile applications using React Native, and responsive websites using React.js.',
      'Work in a startup building an ecosystem of learning, management and optimization applications throughout the product lifecycle',
      'Played a key role in rebuilding version 2 of an educational platform by analyzing user interaction data to improve UI/UX, contributing to a 2x customer growth.',
      'Worked collaboratively with marketing and product teams to drive engagement and retention through user-centered enhancements.',
      'Optimized front-end performance by lazy-loading modules, reducing bundle size, and implementing debounce/throttle in high-frequency operations (e.g., search/filter).',
      'Contributed to Agile sprint planning, daily standups, and retrospectives. Delivered features consistently on time in a fast-paced, client-facing environment.',
      'Used GitLab for source control and participated in CI/CD, peer code reviews, ensuring clean, well-documented, and testable code.',
      'Assisted in the creation of internal UI component libraries to standardize development across projects, increasing development speed and visual consistency'
    ]
  },
  {
    designation: 'Front-end web developer',
    company: 'VietIS',
    company_link: 'https://vietis.com.vn',
    startDate: 'Mar 2019',
    endDate: 'Apr 2020',
    isCurrentJob: false,
    location: 'Ha Noi, Viet Nam',
    tech: 'React.js, JavaScript (ES6), HTML5, CSS3, RESTful APIs, GitLab, Bootstrap, jQuery, Agile (Scrum).',
    description: [
      'Developed and maintained responsive and interactive user interfaces using React.js, delivering high-quality solutions aligned with client specifications.',
      'Translated UI/UX designs into pixel-perfect web interfaces while ensuring cross-browser compatibility and mobile responsiveness.',
      'Consumed and integrated RESTful APIs, collaborated with backend developers to define data contracts, and handled client-side error scenarios gracefully.',
      'Ensured frontend code quality, reusability, and performance for production-level enterprise applications.'
    ]
  }
];

export default experiences;

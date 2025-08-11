import { IProjectItem, ProjectType, RepoType } from '@/types';

const projects: IProjectItem[] = [
  {
    id: 'typescript-node-base-application',
    title: 'Typescript node base(express - postgresql)',
    description:
      'A TypeScript Node boilerplate is a pre-configured project template for quickly starting Node.js applications with TypeScript(ExpressJS + Gulp + Suppertest + Swagger + K8s + CICD)',
    icon: '/skills/express.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/ts-node-base',
    url: 'https://github.com/Dat0319/ts-node-base/releases',
    tags: [
      'NodeJs',
      'Express',
      'docker compose',
      'PostgresQL',
      'swagger',
      'auto generation'
    ]
  },
  {
    id: 'dotNet-expense-tracker-management-system',
    title: 'Expense tracker management Backend',
    description:
      'An expense tracker management system developed using .Net Core 7, redis, aws sqs and mysql using Hexagonal Architecture.',
    icon: '/skills/NETCore.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/ETS-BE',
    url: 'https://github.com/Dat0319/ETS-BE/release',
    tags: ['NetCore', 'Redis', 'Aws sqs, s3, ...', 'mysql']
  },
  {
    id: 'react-expense-tracker-management-system',
    title: 'Expense tracker management Frontend',
    description:
      'An expense tracker management system developed using Reactjs tailwind, zutand, eslint and prettier using component pattern',
    icon: '/skills/react.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/ETS-FE',
    url: 'https://github.com/Dat0319/ETS-FE/releases',
    tags: ['Flutter', 'Dart', 'GetX', 'Agora SDK']
  },
  {
    id: 'java-spring-boot-boilerplate',
    title: 'Java spring boot boilerplate',
    description:
      'A spring boot application developed using Java JPA, database migration, data validation, logging and transaction management.',
    icon: '/skills/spring.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/java-sping-template',
    url: 'https://github.com/Dat0319/java-sping-template/releases',
    tags: ['Spring boot', 'JPA', 'Rest Api']
  },
  {
    id: 'nestjs-template-api',
    title: 'Nestjs Product api',
    description:
      'A RESTful API developed using Nestjs, Docker, ORM,  and PostgresQL to integrate backend and frontend with ease.',
    icon: '/skills/nestjs.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/nestjs-template-api',
    tags: ['NestJS', 'PostgresQL', 'Sequelize ORM', 'Docker Compose', 'Swagger']
  },
  {
    id: 'social-media-api-nodejs',
    title: 'Social Media API',
    description:
      'A RESTful API developed using Node.js, Express.js, and MongoDB to integrate backend and frontend with ease.',
    icon: '/skills/express.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/expressjs-social-media-api',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'WebSocket']
  },
  {
    id: 'react-native-template',
    title: 'A React native CLI typescript custom',
    description:
      'React native template for custom react CLI, have some libraries: action sheet, calendars, collapsible, fast-images, flash message, ... to create a full base template for create a new project faster.',
    icon: '/skills/react_native.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/react-native-template-dattd',
    tags: ['React native', 'custom template', 'rn-cli']
  },
  {
    id: 'roadmap-clone',
    title: 'roadmap-for-skills',
    description:
      'A Suggestion system for any skills, any thing you want to learn, this application will suggest a roadmap for you as a AI assistant to learn any things.',
    icon: '/skills/react.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/roadmap-clone',
    tags: ['React js', 'tailwind', 'radix-ui', 'open AI']
  },
  {
    id: 'chat_app_dot_net_core',
    title: 'Chat app dot net core',
    description:
      'A dot net project for realtime chat with dotnet 8, k8s, mysql and redis, clean architecture. Front end using react + vite and tailwind',
    icon: '/skills/NETCore.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/chat_app_dot_net_core',
    tags: ['Dot net core', 'mysql', 'redis', 'react js', 'tailwind']
  },
  {
    id: 'robot-framework-test-express',
    title: 'Automation Integration test with robot framework',
    description:
      'This repository contains a mockup server using express and mysql to create restful api, then using robot framework to integration test api with business logic.',
    icon: '/skills/robotframework.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/robot-framework-test-express',
    tags: ['python', 'express']
  },
  {
    id: 'Jest_huskey_example',
    title: 'Automation Integration test with jest',
    description:
      'This repository contains a mock upp website using react js and jest to ui integration test api with business logic.',
    icon: '/skills/jest.svg',
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: 'https://github.com/Dat0319/Jest_huskey_example',
    tags: ['javascript', 'jest']
  }
];
export default projects;

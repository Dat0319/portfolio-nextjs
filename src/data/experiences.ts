import { IExperienceItem } from '@/types';

const experiences: IExperienceItem[] = [
  {
    designation: 'Software Development Engineer',
    company: 'VIN GROUP',
    startDate: 'Dec 2022',
    isCurrentJob: true,
    location: 'Ha Noi, Viet Nam',
    description: [
      'Developed websites with React JS and .NET, Selanium',
      'Collaborated with the team manager to integrate user tracking and survey features to get more information and feedback to improve user experiences.',
      'Single-handedly optimized front-end core app to make page speed up 20 percent, refactored code to make code clean for maintenance.',
      'Implement a fully Auth 2 feature with a Microsoft account with OIDC standard to make user login faster.',
      'Optimize the download large file for the client faster, minimize all upload image flow to save about 20% of fee for S3',
    ],
  },
  {
    designation: 'Full Stack Developer',
    company: 'VMO HOLDINGS',
    startDate: 'Aug 2021',
    endDate: 'Dec 2022',
    isCurrentJob: false,
    location: 'Ha Noi, Viet Nam',
    description: [
      'Develop mobile apps with react native',
      'Integrate cryptocurrency wallet function to buy and sell NFT products, with backend to create smart contracts. Create a system to buy and sell digital products for business owners.',
      'Create a high-load micro services system with Node.js, serving an online meeting streaming system for US market universities to meet high performance',
    ],
  },
  {
    designation: 'React JS developer, mobile developer',
    company: 'Adamo Software',
    startDate: 'Mar 2021',
    endDate: 'Aug 2021',
    isCurrentJob: false,
    location: 'Remote',
    description: [
      'Responsibility for developing mobile apps.',
      'Work independently, integrate push notification to send notifications to users quickly, Stripe payment wallet, Chat integration with Socket.io, and streaming with Agora, bring products to sell in production in a streaming app in 5 months on schedule, launching the project.',
    ],
  },
  {
    designation: 'Mobile developer',
    company: 'APECSOFT',
    startDate: 'Apr 2020',
    endDate: 'Mar 2021',
    isCurrentJob: false,
    location: 'Ha Noi, Viet Nam',
    description: [
      'Develop mobile apps with react native and websites with React JS',
      'Developing systems for startups with products in the education platform to help schools manage more effectively, increase experience, and reshape version 2 products from user action data with both marketing and development teams to help triple customer growth.',
    ],
  },
  {
    designation: 'Front-end web developer',
    company: 'VietIS',
    startDate: 'Mar 2019',
    endDate: 'Apr 2020',
    isCurrentJob: false,
    location: 'Ha Noi, Viet Nam',
    description: [
      'Create React js interfaces that meet customer and business requirements',
    ],
  },
];

export default experiences;

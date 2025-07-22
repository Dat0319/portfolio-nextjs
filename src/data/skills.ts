import { ISkillListItem, SkillLevel } from '@/types';

const skills: ISkillListItem[] = [
  {
    title: 'Programming Languages',
    items: [
      {
        title: 'JavaScript',
        level: SkillLevel.Expert,
        icon: '/skills/javascript.svg'
      },
      {
        title: 'TypeScript',
        level: SkillLevel.Intermediate,
        icon: '/skills/typescript.svg'
      },
      {
        title: '.NET',
        level: SkillLevel.Expert,
        icon: '/skills/NETCore.svg'
      }
    ]
  },
  {
    title: 'Frontend Development',
    items: [
      {
        title: 'Next.js',
        level: SkillLevel.Expert,
        icon: '/skills/nextjs.png'
      },
      {
        title: 'React.js',
        level: SkillLevel.Expert,
        icon: '/skills/react.svg'
      },
      {
        title: 'HTML',
        level: SkillLevel.Expert,
        icon: '/skills/html.svg'
      },
      {
        title: 'CSS',
        level: SkillLevel.Intermediate,
        icon: '/skills/css.svg'
      },
      {
        title: 'SASS',
        level: SkillLevel.Intermediate,
        icon: '/skills/sass.svg'
      },
      {
        title: 'Redux Toolkit',
        level: SkillLevel.Expert,
        icon: '/skills/redux.svg'
      },
      {
        title: 'Tailwind CSS',
        level: SkillLevel.Expert,
        icon: '/skills/tailwind.jpeg'
      },
      {
        title: 'Zutand',
        level: SkillLevel.Intermediate,
        icon: '/skills/zustand.jpeg'
      },
      {
        title: 'prettier',
        level: SkillLevel.Intermediate,
        icon: '/skills/prettier.png'
      },
      {
        title: 'eslint',
        level: SkillLevel.Intermediate,
        icon: '/skills/eslint.png'
      }
    ]
  },
  {
    title: 'Backend Development',
    items: [
      {
        title: '.Net Core',
        level: SkillLevel.Intermediate,
        icon: '/skills/NETCore.svg'
      },
      {
        title: 'Node.js',
        level: SkillLevel.Expert,
        icon: '/skills/nodejs.svg'
      },
      {
        title: 'Express.js',
        level: SkillLevel.Expert,
        icon: '/skills/express.svg'
      },
      {
        title: 'Socket.io',
        level: SkillLevel.Intermediate,
        icon: '/skills/socket-io.png'
      },
      {
        title: 'Nest.js',
        level: SkillLevel.Intermediate,
        icon: '/skills/nestjs.svg'
      }
    ]
  },
  {
    title: 'Mobile App Development',
    items: [
      {
        title: 'React Native',
        level: SkillLevel.Expert,
        icon: '/skills/react_native.png'
      }
      // {
      //   title: 'Flutter',
      //   level: SkillLevel.Expert,
      //   icon: '/skills/flutter.svg'
      // },
      // {
      //   title: 'GetX',
      //   level: SkillLevel.Expert,
      //   icon: '/skills/getx.png'
      // }
    ]
  },
  {
    title: 'Database Management',
    items: [
      {
        title: 'MongoDB',
        level: SkillLevel.Intermediate,
        icon: '/skills/mongodb.svg'
      },
      {
        title: 'PostgreSQL',
        level: SkillLevel.Intermediate,
        icon: '/skills/postgresql.svg'
      },
      {
        title: 'MySQL',
        level: SkillLevel.Intermediate,
        icon: '/skills/mysql.svg'
      },
      {
        title: 'Query Optimization',
        level: SkillLevel.Intermediate,
        icon: '/skills/query-optimization.svg'
      }
    ]
  },
  {
    title: 'DevOps/VCS',
    items: [
      {
        title: 'Docker',
        level: SkillLevel.Intermediate,
        icon: '/skills/docker.png'
      },
      {
        title: 'AWS',
        level: SkillLevel.Intermediate,
        icon: '/skills/aws.svg'
      },
      {
        title: 'Git',
        level: SkillLevel.Expert,
        icon: '/skills/git.svg'
      },
      {
        title: 'GitHub',
        level: SkillLevel.Expert,
        icon: '/skills/github.svg'
      },
      {
        title: 'Code Push',
        level: SkillLevel.Intermediate,
        icon: '/skills/code_push.svg'
      },
      {
        title: 'Fastlane',
        level: SkillLevel.Intermediate,
        icon: '/skills/fast_lane.png'
      },
      {
        title: 'Github Actions',
        level: SkillLevel.Intermediate,
        icon: '/skills/github_action.png'
      },
      {
        title: 'GitLab CI/CD',
        level: SkillLevel.Intermediate,
        icon: '/skills/gitlap_runner.png'
      }
    ]
  },
  {
    title: 'Testing',
    items: [
      {
        title: 'Selenium',
        level: SkillLevel.Expert,
        icon: '/skills/selenium.png'
      },
      {
        title: 'Jest, Playwright, Cypress, Mocha',
        level: SkillLevel.Expert,
        icon: '/skills/jest.svg'
      }
    ]
  },
  {
    title: 'Design Tools',
    items: [
      {
        title: 'Figma',
        level: SkillLevel.Expert,
        icon: '/skills/figma.png'
      },
      // {
      //   title: 'Adobe XD',
      //   level: SkillLevel.Intermediate,
      //   icon: '/skills/adobe_xd.png'
      // },
      {
        title: 'Photoshop',
        level: SkillLevel.Intermediate,
        icon: '/skills/photoshop.png'
      }
    ]
  },
  {
    title: 'Miscellaneous',
    items: [
      {
        title: 'Firebase',
        level: SkillLevel.Intermediate,
        icon: '/skills/firebase.svg'
      },
      {
        title: 'Ubuntu',
        level: SkillLevel.Intermediate,
        icon: '/skills/ubuntu.png'
      }
    ]
  },
  {
    title: 'Nontechnical Skills',
    items: [
      {
        title: 'Problem Solving',
        level: SkillLevel.Expert,
        icon: '/images/logical-thinking.png'
      },
      {
        title: 'Collaboration',
        level: SkillLevel.Expert,
        icon: '/images/collaboration.png'
      },
      {
        title: 'Analytical Skills',
        level: SkillLevel.Expert,
        icon: '/images/analytical-skills.png'
      }
    ]
  }
];

export default skills;

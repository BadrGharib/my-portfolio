import { CardExperianceInfo, CardInfo, ISkillCard } from './types'

export const experianceCards: CardExperianceInfo[] = [
  {
    companyTitle: 'G2K Group',
    companyLogo: '/imgs/g2k.jpg',
    roleTitle: 'Technical Lead Frontend Developer (React, Redux)',
    roleInfo: [
      'Designing and building the frontend Projects main architecture.',
      'Train frontend team to follow the best practice in writing code and apply required design pattern.',
      'Manage versioning control Git and apply the staging concept to keep track for production and dev.',
      '(React, Redux, JavaScript, ES6, CSS, SCSS, Material UI, Git, Docker,AWS,CI/CD,..)'
    ],
    color: '#ff311c',
    date: '6/2019 - Present',
    companyLink: 'https://g2k.ai/en/'
  },
  {
    companyTitle: 'QCENTRIS',
    companyLogo: '/imgs/qcentris.svg',
    roleTitle: 'Senior Consultant Engineer(.NET ,React, Redux)',
    roleInfo: [
      'Support the team in refactoring old projects and apply the best practice architecture in new projects',
      '(.NET ,React, Redux,...)'
    ],
    color: '#002b4b',
    date: '1/2019 - 6/2019',
    companyLink: 'https://www.qcentris.com/'
  },
  {
    companyTitle: 'G2K Group',
    companyLogo: '/imgs/g2k.jpg',
    roleTitle: 'Technical Lead Software Developer',
    roleInfo: [
      'Develop and support the team in some web applications',
      `implementing some prototypes applications in some new
            technology fields such as using AR (Hololens) in security field to detect
            criminals using face recognition`,
      '(C#, .Net core, MVC, Web API, Unity 3d,...)'
    ],
    color: '#ff311c',
    date: '2016 - 2018',
    companyLink: 'https://g2k.ai/en/'
  },
  {
    companyTitle: 'CAELUM',
    companyLogo: '/imgs/caelum.png',
    roleTitle: 'Software Engineer',
    roleInfo: [
      `Working as full stack developer in many desktop application related to
            identification systems like Border Control ,e-Passport and e-ID, Make
            integration with many of devices and SDKs `,
      `(C#, WPF, WCF, Entity Framework, LINQ, Windows Service, Web Service,
                ADO.NET and SQL Server)`
    ],
    color: '#787b7d',
    date: '2010 - 2015',
    companyLink: 'http://caelum-knowledge.com/'
  }
]

export const projects: CardInfo[] = [
  {
    title: 'Parsifal Platform',
    description: `It’s very big web-based project that used in many different fields
        (security, retails,) that can present in many different types of maps and
        deal with any data it is fed with like (Video and audio. The IoT. Sensors
        and systems) that give the client high level of situational awareness for
        everything happened around him (react, redux).
        `,
    imgs: [
      '/imgs/parsifal-all-2.png'
      // '/imgs/parsifal1.png',
      // '/imgs/parsifal2.png',
      // '/imgs/parsifal3.jpg',
      // '/imgs/parsifal4.png',
      // '/imgs/parsifal5.png',
      // '/imgs/parsifal6.png'
    ]
  },
  {
    title: 'Covid19 Project',
    description: `It’s a web-based project used to detect infected persons using thermal
        cameras, this project help in return football fans to stadium at corona
        time (react, redux).
        `,
    imgs: ['/imgs/covid19.png']
  },
  {
    title: 'LOHINGRIN',
    description: `It’s a web-based application that gives a cloud service for any organization to get up to the minute information on the events using machine learning and IOT (react, redux) . 
        `,
    imgs: ['/imgs/lohingen1.png', '/imgs/lohingen2.png']
  },
  {
    title: 'Face Recognition Project for Egyptian Grand Museum',
    description: `It’s a web-based project used to detect persons based on a predefined
        lists using their faces (react, redux)
        `,
    imgs: []
  },
  {
    title: 'Other Projects',
    description: `Border control, Video Surveillance, New Mexican passport, New
        Dominican passport`,
    imgs: []
  }
]

export const certifications: CardInfo[] = [
  {
    title: 'React Nanodegree',
    smallTitle: 'Udacity. 2019 - Present',
    logo: '/imgs/certificate.svg',
    link: 'https://confirm.udacity.com/3DJCM72S'
  },
  {
    title: 'AWS Cloud Developer Nanodegree',
    smallTitle: 'Udacity. 2021 - Present',
    logo: '/imgs/certificate.svg',
    link: 'https://confirm.udacity.com/PAVD9M6K'
  },
  {
    title: 'AWS Cloud Architect Nanodegree',
    smallTitle: 'Udacity. 2021 - Present',
    logo: '/imgs/certificate.svg',
    link: 'https://confirm.udacity.com/HNP7QTEL'
  }
]

export const skills: ISkillCard[] = [
  {
    title: 'React',
    icon: '/imgs/react.png',
    percent: 90,
    group:'1'
  },
  {
    title: 'Next',
    icon: '/imgs/next.png',
    percent: 80,
    group:'1'
  },
  {
    title: 'Redux',
    icon: '/imgs/redux.svg',
    percent: 90,
    group:'1'
  },
  /// //////////
  {
    title: 'JavaScript',
    icon: '/imgs/javascript.png',
    percent: 90,
    group:'2'
  },
  {
    title: 'ES6',
    icon: '/imgs/es6.png',
    percent: 90,
    group:'2'
  },
  {
    title: 'TypeScript',
    icon: '/imgs/ts.png',
    percent: 80,
    group:'2'
  },
  /// /////
  {
    title: 'HTML',
    icon: '/imgs/html.png',
    percent: 90,
    group:'3'
  },
  {
    title: 'CSS',
    icon: '/imgs/css.png',
    percent: 90,
    group:'3'
  },
  {
    title: 'Tailwind css',
    icon: '/imgs/tailwind.png',
    percent: 70,
    group:'3'
  },
  {
    title: 'SCSS',
    icon: '/imgs/scss.png',
    percent: 80,
    group:'3'
  },
  {
    title: 'Rest API',
    icon: '/imgs/api_rest.png',
    percent: 80,
    group:'4'
  },
  {
    title: 'GraphQL',
    icon: '/imgs/graphQl.png',
    percent: 60,
    group:'4'
  },
  {
    title: 'Jest',
    icon: '/imgs/jest.png',
    percent: 80,
    group:'5'
  },
  {
    title: 'Git',
    icon: '/imgs/git.png',
    percent: 90,
    group:'6'
  },
  {
    title: 'Docker',
    icon: '/imgs/docker.png',
    percent: 70,
    group:'6'
  },
  {
    title: 'CI/CD',
    icon: '/imgs/cicd.png',
    percent: 60,
    group:'6'
  },
  {
    title: 'Jenkins',
    icon: '/imgs/Jenkins.png',
    percent: 60,
    group:'6'
  },
  {
    title: 'AWS',
    icon: '/imgs/aws.png',
    percent: 80,
    group:'6'
  },
  {
    title: 'C#',
    icon: '/imgs/csharb.png',
    percent: 50,
    group:'7'
  },
  {
    title: 'UNity 3D (AR)',
    icon: '/imgs/unity3d.png',
    percent: 40,
    group:'7'
  }
]

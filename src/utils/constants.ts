export interface Experience {
    role: string
    company: string
    period: string
    location: string
    current?: boolean
    highlights: string[]
    tags: string[]
}

// Most recent first
export const experiences: Experience[] = [
    {
        role: 'Full-Stack Software Developer',
        company: 'FightRealm',
        period: 'Dec 2025 – Present',
        location: 'Sydney, Australia',
        current: true,
        highlights: [
            'Building features end to end across the FightRealm platform: the Next.js web app, the React Native (Expo) mobile app for iOS & Android, and the Django / Celery API running on AWS.',
            'Shipped community features such as groups, leaderboards, group chat, referral codes and subscription flows with Stripe and in-app purchases.',
            'Own QA automation with Playwright end-to-end suites and Jest unit tests, keeping releases stable across web and mobile.',
        ],
        tags: [
            'Next.js',
            'React Native',
            'Expo',
            'TypeScript',
            'Django',
            'AWS',
            'Playwright',
        ],
    },
    {
        role: 'Senior Software Developer',
        company: 'Publicis Global Delivery',
        period: 'Sep 2023 – Nov 2025',
        location: 'Remote',
        highlights: [
            'Led automation and process-optimization initiatives in the pharmaceutical sector, cutting time spent on key workflows by over 80%.',
            'Built automations integrated with Figma, Jira, Salesforce, Veeva CRM and internal systems.',
            'Full-stack development with Node.js and React.js, plus Astro.js and SCSS; created boilerplates that sped up delivery across teams.',
            'Collaborated within large, cross-functional international teams.',
        ],
        tags: ['Node.js', 'React', 'Astro', 'SCSS', 'Salesforce', 'Veeva'],
    },
    {
        role: 'Frontend Developer',
        company: 'Sam Green Corp & Eatsy Orders',
        period: 'Aug 2022 – Sep 2023',
        location: 'Remote',
        highlights: [
            'Led frontend development with React, TypeScript, Next.js and Material UI following atomic design.',
            'Led migrations from JavaScript to TypeScript and from WordPress sites to Next.js.',
            'Established coding standards and worked with GraphQL, Strapi and AWS.',
        ],
        tags: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Strapi', 'AWS'],
    },
    {
        role: 'Frontend Developer',
        company: 'MoyoAI',
        period: 'May 2020 – Sep 2022',
        location: 'Bogotá, Colombia',
        highlights: [
            'Developed several projects for a client operating under the KYC (Know Your Customer) model.',
            'Built a React.js app with a camera system that captures and clips specific screen areas for identity validation.',
            'Integrated Google Maps and Google Analytics; collaborated through Bitbucket.',
        ],
        tags: ['React', 'JavaScript', 'Google Maps', 'Bitbucket'],
    },
]

export const skills = [
    {
        group: 'Frontend',
        items: [
            'React',
            'Next.js',
            'Astro',
            'TypeScript',
            'React Native',
            'Tailwind',
            'MUI',
            'Zustand',
        ],
    },
    {
        group: 'Backend',
        items: ['Node.js', 'NestJS', 'Django', 'MongoDB', 'Firebase'],
    },
    {
        group: 'QA & Tooling',
        items: ['Playwright', 'Jest', 'Cypress', 'Git', 'AWS', 'Docker'],
    },
]
export const projects = [
    {
        name: 'Nearby Disney',
        description:
            'Built a fun app that shows your distance from Disney Parks worldwide using your location, Leaflet for maps, and MongoDB $geoNear for geospatial distance calculations. 🌍🗺️🛰️',
        img: '/images/disney-app.png',
        url: 'https://disney-client.vercel.app/',
        urlFolder: 'https://github.com/felipebel25/disney-client',
        tags: ['ReactJs', 'AstroJs', 'Typescript', 'MongoDB', 'ExpressJs'],
    },
    {
        name: 'PokeDex',
        description:
            'Pokedex App is an application that displays a large number of pokemon and information about them. An interesting application as Frontend Developer.',
        img: '/images/pokedex.webp',
        url: 'https://pokedex-nextjs-itk2.vercel.app/',
        urlFolder: 'https://github.com/felipebel25/pokedex_nextjs',
        tags: ['ReactJs', 'NextJs', 'Typescript', 'MongoDB', 'Material-UI'],
    },
    {
        name: 'HeyFunding',
        description:
            'HeyFunding is a project in a beta state and was born as a university project that uses the powers of NextJs and integrates the mercadoPago API.',
        img: '/images/hey_funding.webp',
        url: 'https://hey-funding.vercel.app/',
        urlFolder: 'https://github.com/felipebel25/HeyFunding',
        tags: ['ReactJs', 'NextJs', 'Typescript', 'Material-UI'],
    },
]

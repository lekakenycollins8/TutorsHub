import { FaCalculator, FaFlask, FaCode, FaBook, FaGlobe } from 'react-icons/fa';
export const gridItems = [
    {
        title: "Chemistry",
        description: "Explore the world of atoms, molecules, and chemical reactions",
        icon: FaFlask,
        topics: ['General Chemistry', 'Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Analytical Chemistry', 'Biochemistry', 'Environmental Chemistry', 'Medicinal Chemistry', 'Polymer Chemistry', 'Forensic Chemistry', 'Nuclear Chemistry', 'Quantum Chemistry'],
        levels: ['High School', 'College'],
        img: '/chemistry.svg',
        },
        {
            title: "Mathematics",
            description: "Dive into the world of numbers, equations, and mathematical theories",
            icon: FaCalculator,
            topics: ['Algebra', 'Geometry', 'Trigonometry', 'Calculus', 'Statistics', 'Probability', 'Number Theory', 'Discrete Mathematics', 'Linear Algebra', 'Differential Equations', 'Real Analysis', 'Complex Analysis'],
            levels: ['High School', 'College'],
            img: '/maths.svg',
        },
        {
            title: "Business",
            description: "Learn the fundamentals of business, management, and entrepreneurship",
            icon: FaGlobe,
            topics: ['Business Management', 'Marketing', 'Finance', 'Accounting', 'Entrepreneurship', 'Human Resources', 'Operations Management', 'Business Ethics', 'Strategic Management', 'International Business', 'Business Law', 'Economics'],
            levels: ['High School', 'College'],
            img: '/business.svg',
        },
        {
            title: "Accounting",
            description: "Understand the principles of accounting and financial reporting",
            icon: FaCode,
            topics: ['Financial Accounting', 'Managerial Accounting', 'Tax Accounting', 'Auditing', 'Accounting Information Systems', 'Financial Reporting', 'Cost Accounting', 'Forensic Accounting', 'Governmental Accounting', 'Nonprofit Accounting', 'International Accounting', 'Accounting Ethics'],
            levels: ['High School', 'College'],
            img: '/accounting.svg',
        }
    ]

    export const pricingPlans = [
        {
          name: 'Basic',
          price: 50,
          features: ['1-hour one-on-one session', 'Weekly homework review', 'Email support'],
        },
        {
          name: 'Standard',
          price: 100,
          features: ['2-hour one-on-one session', 'Bi-weekly progress report', 'Practice exams', '24/7 email support'],
        },
        {
          name: 'Premium',
          price: 200,
          features: ['4-hour one-on-one session', 'Weekly progress report', 'Customized study plan', 'Practice exams', '24/7 phone and email support'],
        },
      ]

export const person = {
    firstName: 'Charles',
    lastName:  'Ochieng',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Professional Tutor',
    avatar:    '/maths.svg',
    location:  'Nairobi/Kenya',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Swahili']  // optional: Leave the array empty if you don't want to display languages
}

export const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/once-ui-system/nextjs-starter',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/once-ui/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:example@gmail.com',
    },
]

export const about = {
    label: 'About',
    title: 'About Me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: "As a dedicated educator with over 8 years of experience, I specialize in creating personalized learning experiences that help students achieve their academic goals. My teaching philosophy combines traditional methods with modern technology to ensure maximum engagement and understanding."
    },
    work: {
        display: true,
        title: 'Teaching Experience',
        experiences: [
            {
                company: 'Elite Academic Tutoring',
                timeframe: '2020 - Present',
                role: 'Senior Mathematics & Science Tutor',
                achievements: [
                    "Successfully helped over 200 students improve their grades by an average of 2 letter grades",
                    "Developed customized study plans that led to 95% of students meeting or exceeding their target scores",
                    "Implemented innovative teaching methods using digital tools, resulting in 40% better student engagement",
                    "Specialized in SAT/ACT prep with students achieving an average score improvement of 200+ points"
                ],
                images: [
                    {
                        src: '/maths.svg',
                        alt: 'Interactive Math Session',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'City Learning Center',
                timeframe: '2016 - 2020',
                role: 'Lead Academic Tutor',
                achievements: [
                    "Mentored over 150 students in mathematics, physics, and chemistry",
                    "Created comprehensive study materials that were adopted center-wide",
                    "Maintained a 98% student satisfaction rate with documented improvement",
                    "Conducted group study sessions that improved collaborative learning outcomes"
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Educational Background',
        institutions: [
            {
                name: 'University of Education',
                description: "Master's in Education with focus on STEM Teaching Methods",
            },
            {
                name: 'State University',
                description: "Bachelor's in Mathematics with minor in Physics",
            },
            {
                name: 'Professional Certifications',
                description: "Certified Advanced Tutor (CAT), Licensed Mathematics Educator",
            }
        ]
    },
    technical: {
        display: true,
        title: 'Specializations',
        skills: [
            {
                title: 'Mathematics',
                description: "Expert in Algebra, Calculus, Geometry, and Advanced Mathematics with proven success in helping students master complex concepts.",
                images: [
                    {
                        src: '/maths.svg',
                        alt: 'Mathematics Teaching Materials',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Science Subjects',
                description: "Specialized in Physics and Chemistry tutoring with hands-on experimental approach to learning.",
                images: [
                    {
                        src: '/accounting.svg',
                        alt: 'Science Lab Session',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Test Preparation',
                description: "Comprehensive preparation for SAT, ACT, AP exams, and other standardized tests with proven success strategies.",
                images: [
                    {
                        src: '/business.svg',
                        alt: 'Test Preparation Session',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Online Teaching Tools',
                description: "Proficient in virtual learning platforms, digital whiteboarding, and interactive educational software for engaging remote sessions.",
                images: [
                    {
                        src: '/business.svg',
                        alt: 'Online Teaching Tools',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    }
};
interface BlogPost {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
    content: string;
  }
  
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Excel in Mathematics: A Comprehensive Guide',
    description: 'Master the fundamentals of mathematics with our proven study techniques and problem-solving strategies.',
    image: '/maths.svg',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Mathematics',
    slug: 'excel-in-mathematics',
    content: `
      Mathematics can be challenging, but with the right approach, anyone can master it. 
      In this comprehensive guide, we'll explore effective strategies for learning mathematics, 
      including practice techniques, understanding core concepts, and applying real-world examples to make the subject relatable. 
      Whether you're a student preparing for exams or a lifelong learner, this guide has you covered!
    `
  },
  {
    id: '2',
    title: 'Breaking Down Accounting Basics for Beginners',
    description: 'Demystify the world of accounting with this beginner-friendly introduction to financial principles.',
    image: '/accounting.svg',
    date: 'March 20, 2024',
    readTime: '6 min read',
    category: 'Accounting',
    slug: 'accounting-basics',
    content: `
      Accounting is the backbone of any business, but it can feel overwhelming when you're just starting out. 
      This post breaks down fundamental concepts like assets, liabilities, equity, and the accounting equation. 
      We also share tips for understanding financial statements and managing accounts effectively.
    `
  },
  {
    id: '3',
    title: 'How Chemistry Shapes the Modern World',
    description: 'Discover the fascinating ways chemistry impacts everything from healthcare to technology.',
    image: '/chemistry.svg',
    date: 'March 25, 2024',
    readTime: '7 min read',
    category: 'Chemistry',
    slug: 'chemistry-modern-world',
    content: `
      Chemistry is at the heart of innovation, shaping industries like medicine, energy, and technology. 
      This post delves into how chemical principles apply to everyday life and explores key breakthroughs 
      that have transformed the modern world. Whether you're curious about chemical reactions or the science behind 
      sustainability, this article will ignite your interest.
    `
  },
  {
    id: '4',
    title: 'Unlocking the Secrets to Acing Business Studies',
    description: 'Learn effective strategies for understanding business concepts and excelling in exams.',
    image: '/business.svg',
    date: 'March 30, 2024',
    readTime: '5 min read',
    category: 'Business',
    slug: 'business-studies-success',
    content: `
      Business studies provide valuable insights into management, marketing, and finance. 
      This blog outlines the best ways to study case studies, analyze trends, and prepare for exams. 
      We also discuss common challenges and how to overcome them, so you can build a strong foundation for success in business.
    `
  },
  {
    id: '5',
    title: 'Top Chemistry Study Hacks for Students',
    description: 'Maximize your study sessions with these proven techniques for mastering chemistry.',
    image: '/chemistry.svg',
    date: 'April 5, 2024',
    readTime: '6 min read',
    category: 'Chemistry',
    slug: 'chemistry-study-hacks',
    content: `
      Chemistry involves both theory and practical knowledge, making it a unique challenge for students. 
      This article offers actionable study hacks, including creating molecule models, memorizing periodic table trends, 
      and practicing with past exams. By following these tips, you'll make studying chemistry a more engaging and effective process.
    `
  },
  {
    id: '6',
    title: 'Why Financial Literacy is Crucial in Today’s World',
    description: 'Understand the importance of financial literacy and how it can impact your personal and professional life.',
    image: '/accounting.svg',
    date: 'April 10, 2024',
    readTime: '7 min read',
    category: 'Accounting',
    slug: 'financial-literacy-importance',
    content: `
      In an increasingly complex financial world, understanding basic accounting and financial principles is essential. 
      This blog highlights the importance of budgeting, managing debts, and making informed investment decisions. 
      We also explore how financial literacy can empower individuals to achieve their goals and secure their future.
    `
  }
];

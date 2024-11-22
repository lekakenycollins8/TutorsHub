import BlogList from '@/components/BlogList';
import { Container, Typography } from '@mui/material';
import { FaBlog } from 'react-icons/fa6';
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { FaHome, FaInfoCircle, FaDollarSign } from "react-icons/fa";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black-100 to-purple-500 py-16">
      <Container maxWidth="lg">
        <div className="text-center mb-16">
          <Typography 
            variant="h1" 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
          >
            Our Blog
          </Typography>
          <Typography 
            variant="subtitle1" 
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover insights, tutorials, and updates from our expert tutors
          </Typography>
        </div>
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          { name: "About", link: "/about", icon: <FaInfoCircle /> },
          { name: "Pricing", link: "/#pricing", icon: <FaDollarSign /> },
          { name: "Blog", link: '/blog', icon: <FaBlog />}
        ]} />
        <BlogList />
      </Container>
    </main>
  );
}
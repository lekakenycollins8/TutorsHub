// app/about/page.tsx
import About from '@/components/About';
import { FaHome, FaInfoCircle, FaDollarSign, FaEnvelope } from "react-icons/fa";
import { FaBlog } from 'react-icons/fa6';
import { FloatingNav } from "@/components/ui/FloatingNavBar";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          { name: "About", link: "/about", icon: <FaInfoCircle /> },
          { name: "Pricing", link: "/#pricing", icon: <FaDollarSign /> },
          { name: "Blog", link: '/blog', icon: <FaBlog />},
          { name: "Contact", link: '/contact', icon: <FaEnvelope />}
        ]} />
      <About />
    </main>
  );
}
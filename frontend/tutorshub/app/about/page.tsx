// app/about/page.tsx
import About from '@/components/About';
import { FaHome, FaInfoCircle, FaDollarSign } from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNavBar";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          { name: "About", link: "/about", icon: <FaInfoCircle /> },
          { name: "Pricing", link: "/#pricing", icon: <FaDollarSign /> },
        ]} />
      <About />
    </main>
  );
}
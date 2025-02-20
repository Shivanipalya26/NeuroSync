import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MobileMenu } from "./MobileMenu";
import { NavSection } from "./NavSection";
import * as B from "../../styles/buttons/index";
import { BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(false);
    }
  }, [isDesktop]);

  return (
    <div className="fixed top-10 inset-x-0 max-w-6xl mx-auto z-50">
      <nav className="relative rounded-full border border-white bg-black shadow-input flex justify-center space-x-4 px-4 py-3 md:px-8 md:py-3 ">
        <div className="flex flex-grow items-center">
          <Link to="/">
            <BrainCircuit />
          </Link>
        </div>
        <div className="hidden md:flex flex-grow justify-center">
          <NavSection />
        </div>

        <div className="hidden md:flex space-x-2">
          <B.Button variant="secondary" rounded="full">
            Log In
          </B.Button>
          <B.Button rounded="full">Book a Demo</B.Button>
        </div>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </div>
  );
};

export default NavBar;

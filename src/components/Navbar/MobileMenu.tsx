import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import * as B from "../../styles/buttons/index"
import {
  solutionsList,
  productsList,
  companyList,
} from "../../config/NavBar/index";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

interface MobileSubMenuProps {
  title: string;
  items: { title: string; path: string }[];
  closeMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black text-white">
        <nav className="flex flex-col gap-4">
          <Link to="/" className="text-lg font-semibold">
            Home
          </Link>
          <MobileSubMenu
            title="Solutions"
            items={solutionsList}
            closeMenu={() => setIsOpen(false)}
          />
          <MobileSubMenu
            title="Products"
            items={productsList}
            closeMenu={() => setIsOpen(false)}
          />
          <MobileSubMenu
            title="Company"
            items={companyList}
            closeMenu={() => setIsOpen(false)}
          />
          <Link
            to="/patients"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Patients
          </Link>
          <Link
            to="/pricing"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/events"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <B.Button
              variant="secondary"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </B.Button>
            <B.Button className="w-full" onClick={() => setIsOpen(false)}>
              Book a Demo
            </B.Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const MobileSubMenu: React.FC<MobileSubMenuProps> = ({
  title,
  items,
  closeMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg"
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <ul className="mt-2 ml-4 space-y-2">
          {items.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                className="text-sm hover:underline"
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

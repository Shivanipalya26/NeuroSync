import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import { solutionsList, productsList, companyList } from "../../config/NavBar/index";

export const NavSection: React.FC = () => {
  return (
    <Menubar className="border-none bg-black">
      <MenubarMenu>
        <MenubarTrigger>Solutions</MenubarTrigger>
        <MenubarContent className="bg-black text-white p-2">
          <MenubarItem className="bg-black text-white hover:bg-gray-700 focus:bg-black focus:text-white">
            <ul>
              {solutionsList.map((solutions) => (
                <li key={solutions.title}>
                  <Link to={solutions.path}>
                    <p className="pt-1">{solutions.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Products</MenubarTrigger>
        <MenubarContent className="bg-black text-white p-2">
          <MenubarItem className="bg-black text-white hover:bg-gray-700 focus:bg-black focus:text-white">
            <ul>
              {productsList.map((products) => (
                <li key={products.title}>
                  <Link to={products.path}>
                    <p className="pt-1">{products.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Company</MenubarTrigger>
        <MenubarContent className="bg-black text-white p-2">
          <MenubarItem className="bg-black text-white hover:bg-gray-700 focus:bg-black focus:text-white">
            <ul>
              {companyList.map((company) => (
                <li key={company.title}>
                  <Link to={company.path}>
                    <p className="pt-1">{company.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <Link
        to="/patients"
        className=" rounded-sm px-3 py-1 text-sm font-medium focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
      >
        Patients
      </Link>

      <Link
        to="/pricings"
        className=" rounded-sm px-3 py-1 text-sm font-medium focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
      >
        Pricings
      </Link>

      <Link
        to="/events"
        className=" rounded-sm px-3 py-1 text-sm font-medium focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
      >
        Events
      </Link>
    </Menubar>
  );
};

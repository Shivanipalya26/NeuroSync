import {
  ArrowIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/styles/icons";
import * as T from "../../styles/typography/index";
import * as B from "../../styles/buttons/index";
import FooterLinks from "@/config/Footer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-lg p-4 shadow-lg sm:flex-row sm:justify-between">
          <T.H2 className="text-xl text-white sm:text-xl">
            {" "}
            Remote Neurology Monitoring{" "}
            <span className="flex">Your Patients Deserve</span>
          </T.H2>

          <div className="flex flex-col">
            <B.Button
              rounded="full"
              className="flex items-center space-x-2 !p-4 !px-10"
            >
              <span>Book a Demo</span>
              <ArrowIcon />
            </B.Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 px-6">
          {FooterLinks.map((section, index) => (
            <div key={index} className="text-center sm:text-left">
              <p className="text-lg font-medium">{section.title}</p>

              <ul className="mt-8 space-y-4 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path} className="hover:text-blue-500">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <ul className="flex justify-center gap-6 sm:justify-end">
            <li>
              <Link
                to="/facebook"
                rel="noreferrer"
                // target="_blank"
                className="text-blue-500 transition hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <FacebookIcon />
              </Link>
            </li>

            <li>
              <Link
                to="/instagram"
                rel="noreferrer"
                // target="_blank"
                className="text-blue-500 transition hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </Link>
            </li>

            <li>
              <Link
                to="/twitter"
                rel="noreferrer"
                // target="_blank"
                className="text-blue-500 transition hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon />
              </Link>
            </li>

            <li>
              <Link
                to="/github"
                rel="noreferrer"
                // target="_blank"
                className="text-blue-500 transition hover:text-white"
              >
                <span className="sr-only">GitHub</span>
                <GithubIcon />
              </Link>
            </li>
          </ul>

          <T.P className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2025. All rights reserved.
          </T.P>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

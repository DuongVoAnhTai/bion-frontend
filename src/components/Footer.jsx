import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Facebook, Instagram, Youtube } from "lucide-react";

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-dark hover:text-green-logo transition-colors"
  >
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-white-background2">
      <div className=" mx-auto px-4 md:px-8 xl:px-[156px] pt-10 md:pt-16 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <Link
              to="/"
              className="flex items-center justify-center md:justify-start gap-2 mb-4"
            >
              <img src={logo} alt="BiON logo" className="h-12 w-auto" />
              <span className="font-poppins text-2xl font-bold text-green-logo">
                BiON
              </span>
            </Link>
            <p className="text-gray-dark text-sm">
              Discover and contribute to wildlife community in Vietnam.
            </p>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-lg text-black-text mb-4">
                Explore
              </h3>
              <ul className="space-y-2">
                <li>
                  <FooterLink to="https://wanee.asia/tailored-tours-vietnam-wildlife-experiences/">
                    Wildlife Journey
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/species">Search Species</FooterLink>
                </li>
                <li>
                  <FooterLink to="/hotspots">Hotspots</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-black-text mb-4">
                Contribute
              </h3>
              <ul className="space-y-2">
                <li>
                  <FooterLink to="/observation">Submit Observation</FooterLink>
                </li>
                <li>
                  <FooterLink to="/contribute">Identify Species</FooterLink>
                </li>
                <li>
                  <FooterLink to="/blog">Blog</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-black-text mb-4">
                Connect
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-dark">Support: +84 932 747 538</li>
                <li className="text-gray-dark">Book tours: +84 979 022 360</li>
                <li className="text-gray-dark">Email: info@wanee.vn</li>
              </ul>
              <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/WaneeVietnam"
                  className="text-gray-dark hover:text-green-logo"
                >
                  <Facebook className="text-black-text" />
                </a>
                <a
                  href="https://www.instagram.com/wanee_vietnam/"
                  className="text-gray-dark hover:text-green-logo"
                >
                  <Instagram className="text-black-text" />
                </a>
                <a
                  href="https://www.youtube.com/@wanee_vietnam1493"
                  className="text-gray-dark hover:text-green-logo"
                >
                  <Youtube className="text-black-text" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-light py-2 text-center">
        <p className="text-xs text-gray-dark">
          Copyright 2025 © WANEE BION power by Wild & Nature Explore Vietnam
        </p>
      </div>
    </footer>
  );
}

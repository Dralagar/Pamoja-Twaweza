import React from "react";

type NavItem = {
  title: string;
  link: string;
}

const navItems: NavItem[] = [
  {
    title: "Volunteer With Us",
    link: "/volunteer"
  },
  {
    title: "Partner With Us",
    link: "/partner"
  }
];

const NavLinks = () => {
  return (
    <nav>
      {navItems.map((item) => (
        <a 
          key={item.title} 
          href={item.link}
          className="hover:text-primary transition-colors"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;

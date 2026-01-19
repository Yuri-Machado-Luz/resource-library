// IMPORTS ================================================

import React from "react";

// TYPES ==================================================

interface MenuItem {
  title: string;
  link?: string;
  subitems?: MenuItem[];
}

interface NavBarProps {
  wrapClassName?: string;
  wrapProps?: React.HTMLAttributes<HTMLDivElement>;
  menuHeader?: React.ReactNode;
  menuItems?: MenuItem[];
  menuFooter?: React.ReactNode;
}

// COMPONENT ==============================================
export const NavBar: React.FC<NavBarProps> = ({
  wrapClassName,
  wrapProps,
  menuHeader,
  menuItems = DEFAULT_MENU_ITEMS,
  menuFooter,
}) => {
  return (
    <div
      className={wrapClassName}
      {...wrapProps}
    >
      {menuHeader && <div className="navbar-header">{menuHeader}</div>}

      <nav>
        <ul>{menuItems?.map((item, index) => renderMenuItem(item, index))}</ul>
      </nav>

      {menuFooter && <div className="navbar-footer">{menuFooter}</div>}
    </div>
  );
};

// CONSTANTS ==============================================

const DEFAULT_MENU_ITEMS: MenuItem[] = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  {
    title: "Services",
    subitems: [
      { title: "Web Development", link: "/services/web-development" },
      { title: "App Development", link: "/services/app-development" },
    ],
  },
  { title: "Contact", link: "/contact" },
];

const BATATA = 123;

// Async function example
async function fetchData(): Promise<void> {
  // Simulate fetching data
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

void fetchData();

void BATATA;

// HELPERS ================================================

const renderMenuItem = (item: MenuItem, index: number): React.ReactNode => {
  const hasSubitems = item.subitems && item.subitems.length > 0;

  return (
    <li key={`${item.title}-${index}`}>
      <a href={item.link}>{item.title}</a>
      {hasSubitems && (
        <ul>
          {item.subitems!.map((subitem, subIndex) =>
            renderMenuItem(subitem, subIndex),
          )}
        </ul>
      )}
    </li>
  );
};

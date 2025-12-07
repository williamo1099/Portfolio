export interface MenuItem {
  name: string;
  link: string;
}

export const menus: MenuItem[] = [
  { name: "Home", link: "/" },
  { name: "About Me", link: "/about-me" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
  { name: "Misc", link: "/misc" },
];

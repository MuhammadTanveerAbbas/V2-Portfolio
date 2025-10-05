type Route = {
  title: string;
  path: string;
  leavesWebsite: boolean;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
    leavesWebsite: false
  },
  {
    title: "Projects",
    path: "/projects",
    leavesWebsite: false
  },
  {
    title: "Contact",
    path: "/contact",
    leavesWebsite: false
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/muhammadtanveerabbas",
    icon: "github",
    leavesWebsite: true,
  },
];

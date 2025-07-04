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
    leavesWebsite: false,
  },
  {
    title: "Projects",
    path: "/projects",
    leavesWebsite: false,
  },

  {
    title: "Contact",
    path: "mailto:muhammadtanveerabbas.dev@gmail.com",
    leavesWebsite: true,
  },
];

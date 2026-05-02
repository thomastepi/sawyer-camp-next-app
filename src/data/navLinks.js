const navLinks = [
  { name: "Home", path: "/", flag: true },
  { name: "About Us", path: "/about-us" },
  { name: "Our Work", path: "/our-work" },
  { name: "Products", path: "/products" },
  { name: "Projects", path: "/projects" },
  { name: "AI Lab", path: "/ai-lab" },
  { name: "Blog", path: "/blog" },
  { name: "Volunteer", path: "/volunteer" },
  { name: "Become a Member", path: "/become-a-member", flag: true },
  { name: "Login/Register", path: "/signin", flag: true },
  { name: "Tools", path: "/farm-tools" },
  { name: "Contact Us", path: "/contact-us" },
];

export const navGroups = [
  {
    label: "About",
    links: [
      { name: "About Us", path: "/about-us" },
      { name: "Our Work", path: "/our-work" },
      { name: "Projects", path: "/projects" },
    ],
  },
  {
    label: "Resources",
    links: [
      { name: "Products", path: "/products" },
      { name: "Blog", path: "/blog" },
      { name: "AI Lab", path: "/ai-lab" },
      { name: "Tools", path: "/farm-tools" },
    ],
  },
  {
    label: "Get Involved",
    links: [
      { name: "Volunteer", path: "/volunteer" },
      { name: "Become a Member", path: "/become-a-member" },
      { name: "Contact Us", path: "/contact-us" },
    ],
  },
];

export default navLinks;

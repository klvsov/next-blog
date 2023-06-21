import Navbar from "./Navbar";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <header>
      <Navbar navLinks={navItems} />
    </header>
  );
};

export default Header;

import Link from "next/link";
const NavItem = ({ to, label }) => {
    return (
      <li>
        <Link href={to} passHref>
          {label}
        </Link>
      </li>
    );
  };

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" passHref legacyBehavior>
          <a className="text-white text-xl font-semibold">My Blog</a>
        </Link>
        <ul className="flex space-x-4 text-white">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/blog" label="Blog" />
          <NavItem to="/contact" label="Contact" />
        </ul>
      </div>
    </nav>
  );
};



export default Nav;
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="wrapper h-20 backdrop-blur">
      <nav className="flex justify-between items-center">
        <p>Lascarratas</p>
        <p>Theme</p>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;

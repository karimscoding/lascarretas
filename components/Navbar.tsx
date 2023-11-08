import { navlink } from "@/constants/navlink";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <header className="wrapper h-16 items-center bg-rose-500 backdrop-blur">
      <div className="flex justify-between items-center">
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/">
                <p className="text-4xl font-bold text-yellow-500">
                  Lascarratas
                </p>
              </Link>
            </li>

            <li className="hidden md:flex items-center gap-4">
              {navlink.map((item) => {
                return (
                  <Link href={item.url} key={item.id}>
                    {item.title}
                  </Link>
                );
              })}
            </li>
          </ul>
        </nav>

        <nav>
          <ul>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

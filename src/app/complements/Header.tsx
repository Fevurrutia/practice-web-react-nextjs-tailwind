import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 shadow-lg bg-slate-400">
      <nav className="container mx-auto flex justify-between items-center py-5">
        <div className="uppercase font-bold text-4xl tracking-widest text-white">
          logo
        </div>
        <div className="flex gap-10 font-semibold text-lg text-gray-700">
          <Link href="/">Home</Link>
          <Link href="#form">Form</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#api">API</Link>
          <Link href="#about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;

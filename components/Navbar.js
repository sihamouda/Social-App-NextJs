import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Blog For Blogers</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/signup">Signin</Link>
      <Link href="/signin">Signup</Link>
    </nav>
  );
};

export default Navbar;

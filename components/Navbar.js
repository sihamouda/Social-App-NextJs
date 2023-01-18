import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-5">
      <div>
        <h1 className="text-3xl text-neutral-900">Blog For Blogers</h1>
      </div>
      <div className="text-xl text-neutral-800">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
          <li>
            <Link href="/signin">Signin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">Home</Link>
      </h1>
      <nav>
        <Link href="/tic-tac-toe">Tic-Tac-Toe</Link>
        <Link href="/nasa">NASA</Link>
        <Link href="/design">Design</Link>
      </nav>
    </header>
  );
}


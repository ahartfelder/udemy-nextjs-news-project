import Link from "next/link";

import logo from "@/assets/logo.jpg";
import Image from "next/image";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/archive">Archive</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import React from "react";
import Link from "next/link";
const Menu = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <section className="md:flosat-left block">
          <Link href="#">
            <span className="cursor-pointer font-bold text-4xl">
              Chillin
            </span>
          </Link>
        </section>
        <section className="hidden md:float-left md-contents">
          <Link href="/">
            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              cat 1
            </span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Menu;

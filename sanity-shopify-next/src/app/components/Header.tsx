import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link href="/">SSN - Shopify Sanity Next</Link>
      </div>
      <div>
        <Link
          href="https://www.linkedin.com/in/stefanos-stamoulis/"
          target="_blank"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#fff] flex items-center rounded-full text-center"
        >
          Hire me here
        </Link>
      </div>
    </header>
  );
};

export default Header;

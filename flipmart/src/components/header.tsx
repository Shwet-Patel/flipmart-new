import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

function header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="flex items-center justify-between py-4 px-16">
        <Link
          href={"/"}
          className="text-2xl font-bold pr-4 hover:text-gray-800 duration-300"
        >
          Flipmart
        </Link>

        <div className="flex gap-x-4">
          <input
            className="min-w-[50vw] px-4 py-2 rounded-md border-2 text-black"
            placeholder="Search now...."
          />
          <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-white duration-300">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-4 ml-4">
          <Link
            href={"/cart"}
            className="bg-yellow-400 text-black hover:bg-white duration-300 rounded px-1 py-1  text-2xl"
          >
            <IoCartOutline />
          </Link>
          <button className="bg-yellow-400 text-black hover:bg-white px-3 py-1 rounded duration-300">
            Today's Offer
          </button>
        </div>
      </div>

      {/* <div className="bg-blue-800 flex items-center justify-center gap-x-4 space-x-4">
        <a href="" className="hover:text-yellow-400 duration-300">
          Home
        </a>
        <a href="" className="hover:text-yellow-400 duration-300">
          Clothing
        </a>
        <a href="" className="hover:text-yellow-400 duration-300">
          Electronics
        </a>
        <a href="" className="hover:text-yellow-400 duration-300">
          Health & Beauty
        </a>
        <a href="" className="hover:text-yellow-400 duration-300">
          Watches
        </a>
        <a href="" className="hover:text-yellow-400 duration-300">
          Jewellery
        </a>
      </div> */}
    </header>
  );
}

export default header;

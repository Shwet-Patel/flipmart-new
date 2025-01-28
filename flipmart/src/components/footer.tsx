import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";

import { footerdata } from "../utils/data.js";
import Link from "next/link.js";

function footer() {
  return (
    <div className=" bg-black py-2 text-white text-md">
      <div className="flex px-16 py-8">
        <div className="basis-3/4 flex justify-around">
          {footerdata.map((item, index) => {
            return (
              <div key={index}>
                <h2 className="font-bold text-gray-200 mb-2">{item.title}</h2>
                <ul>
                  {item.listitems.map((t, index) => {
                    return <li key={index}>{t}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="basis-1/4">
          <div>
            <h2 className="font-bold text-gray-200 mb-2">Office Address</h2>
            <h3>
              1201,B -Wing, Siddhi Vinayak Business Towers, Sarkhej -
              Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051
            </h3>
          </div>

          <div className="mt-4">
            <h2 className="font-bold text-gray-200 mb-2">Socials</h2>
            <div className="flex mt-2 gap-x-4">
              <Link href="https://www.facebook.com">
                <TiSocialFacebook className="text-3xl" />
              </Link>
              <Link href="https://www.twitter.com">
                <TiSocialTwitter className="text-3xl" />
              </Link>
              <Link href="https://www.instagram.com">
                <FaInstagram className="text-3xl" />
              </Link>
              <Link href="https://www.linkedin.com">
                <TiSocialLinkedin className="text-3xl" />
              </Link>
              <Link href="https://www.youtube.com">
                <TiSocialYoutube className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-4 justify-around border-t border-white">
        <div>become a seller</div>
        <div>Advertise</div>
        <div>Gift cards</div>
        <div>Help centers</div>
      </div>
      <div className="pt-4 border-t border-white text-center">
        {" "}
        &copy; 2020-2025 Flipmart
      </div>
    </div>
  );
}

export default footer;

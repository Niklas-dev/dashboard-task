import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col px-20 lg:px-36 pb-10 ">
      <div className="w-full h-[2px] bg-gray-300"></div>
      <div className="md:flex flex-row grid grid-cols-2 gap-6  justify-between mt-20">
        <div>
          <div className="bg-primaryRed h-12 w-12 rounded-md flex justify-center items-center text-3xl text-white font-bold">
            e.
          </div>
          <div className="flex flex-col mt-4 gap-2 text-lg font-normal ">
            <a href="" className="flex flex-row gap-3 items-center">
              <FaFacebook />
              Facebook
            </a>
            <a href="" className="flex flex-row gap-3 items-center">
              <FaTwitter />
              Twitter
            </a>
            <a href="" className="flex flex-row gap-3 items-center">
              <FaInstagram /> Instagram
            </a>
            <a href="" className="flex flex-row gap-3 items-center">
              <FaYoutube />
              Youtube
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-lg">
          <h4 className="text-lg font-bold">Home</h4>
          <div className="flex flex-col gap-3 text-lg font-normal ">
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Medical Assistant
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-lg">
          <h4 className="text-lg font-bold">Services</h4>
          <div className="flex flex-col gap-3 text-lg font-normal ">
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Photography
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Catering
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Henna
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Hairstyling
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-lg">
          <h4 className="text-lg font-bold">Dashboard</h4>
          <div className="flex flex-col gap-3 text-lg font-normal ">
            <a href="" className="flex flex-row gap-3 items-center text-base">
              Dashboard
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Service
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Analytics
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Wallet
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              My Profile
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              My Messages
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-lg">
          <h4 className="text-lg font-bold">Policy</h4>
          <div className="flex flex-col gap-3 text-lg font-normal ">
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Terms & Conditions
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Payment Policy
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              Booking Policy
            </a>
            <a
              href=""
              className="flex flex-row gap-3 items-center text-base hover:underline"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

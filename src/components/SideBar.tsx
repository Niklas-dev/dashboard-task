"use client";
import Avatar from "../assets/avatar.png";
import Link from "next/link";
import Hamburger from "hamburger-react";
import {
  FaChartLine,
  FaShoppingBag,
  FaChartPie,
  FaBox,
  FaMoneyBill,
  FaFacebookMessenger,
  FaDoorClosed,
} from "react-icons/fa";
import DropdownRouteSelect from "./DropdownRouteSelect";
import RouteSelect from "./RouteSelect";
import MyProfileButton from "./MyProfileButton";
import { useState } from "react";
export default function SideBar() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <div className="w-96 h-fit rounded-r-2xl drop-shadow-lg bg-gray-100 p-4 pb-6 flex flex-col items-center gap-6 absolute md:relative z-20 ">
          <div className="absolute top-2 left-2">
            <Hamburger toggled={show} onToggle={setShow} />
          </div>
          <Link
            href={"/"}
            className="bg-primaryRed px-5 py-2.5 w-fit rounded-xl text-white text-2xl font-medium mt-4"
          >
            evvent.no
          </Link>

          <DropdownRouteSelect
            Icon={FaChartPie}
            routes={["/dashboard/overview", "/dashboard/transactions"]}
            name="Dashboard"
          >
            <Link className="hover:underline" href={"/dashboard/overview"}>
              Overview
            </Link>
            <Link className="hover:underline" href={"/dashboard/transactions"}>
              Transaction List
            </Link>
          </DropdownRouteSelect>
          <DropdownRouteSelect
            Icon={FaBox}
            routes={["/dashboard/services/create", "/dashboard/services/list"]}
            name="Services"
          >
            <Link
              className="hover:underline"
              href={"/dashboard/services/create"}
            >
              Create
            </Link>
            <Link className="hover:underline" href={"/dashboard/services/list"}>
              List
            </Link>
          </DropdownRouteSelect>
          <RouteSelect Icon={FaChartLine} name="Analytics" route="analytics" />
          <RouteSelect Icon={FaMoneyBill} name="Earning" route="earnings" />
          <div className="w-full h-[2px] mt-10 px-3">
            <div className="w-full h-full bg-gray-300 "></div>
          </div>
          <div className=" flex flex-col items-center gap-3">
            <MyProfileButton image={Avatar} />
            <RouteSelect
              Icon={FaFacebookMessenger}
              name="My Messages"
              route="messages"
            />
            <RouteSelect Icon={FaShoppingBag} name="My Orders" route="orders" />
            <RouteSelect Icon={FaDoorClosed} name="Log out" route="logout" />
          </div>
        </div>
      ) : (
        <div className="bg-gray-100 p-2 h-fit rounded-br-2xl absolute z-20">
          <Hamburger toggled={show} onToggle={setShow} />
        </div>
      )}
    </>
  );
}

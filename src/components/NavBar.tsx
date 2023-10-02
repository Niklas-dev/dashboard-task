import NavElements from "./NavElements";
import UserInfoElements from "./UserInfoElements";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-end xl:justify-between py-6 pl-8 pr-14 md:pr-16 lg:pr-32 drop-shadow-sm relative z-10">
      <NavElements />
      <UserInfoElements />
    </nav>
  );
}

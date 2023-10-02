import NavElements from "./NavElements";
import UserInfoElements from "./UserInfoElements";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-end lg:justify-between py-4 px-6 border-b border-gray-200 drop-shadow-sm relative z-10">
      <NavElements />
      <UserInfoElements />
    </nav>
  );
}

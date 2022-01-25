import SideBarIcons from "./SideBarIcons";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcons icon={<FaFire size="28" />} />
      <SideBarIcons icon={<BsPlus size="32" />} />
      <SideBarIcons icon={<BsFillLightningFill size="20" />} />
      <SideBarIcons icon={<FaPoo size="20" />} />
    </div>
  );
}

export default SideBar;

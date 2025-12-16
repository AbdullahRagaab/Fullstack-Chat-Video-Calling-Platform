import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import {
  BellIcon,
  HomeIcon,
  VideoIcon,
  UserCircle2Icon,
  UsersIcon,
  XIcon,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Mobile only */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-64 bg-base-200 border-r border-base-300
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          flex flex-col
        `}
      >
        {/* HEADER */}
        <div className="p-5 border-b border-base-300 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <VideoIcon className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              PolyChat
            </span>
          </Link>

          {/* Close button (mobile) */}
          <button
            onClick={onClose}
            className="btn btn-ghost lg:hidden"
          >
            <XIcon className="size-6" />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex-1 p-4 space-y-1">
          <Link
            to="/"
            onClick={onClose}
            className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
              currentPath === "/" ? "btn-active" : ""
            }`}
          >
            <HomeIcon className="size-5 opacity-70" />
            <span>Home</span>
          </Link>

          <Link
            to="/profile"
            onClick={onClose}
            className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
              currentPath === "/profile" ? "btn-active" : ""
            }`}
          >
            <UserCircle2Icon className="size-5 opacity-70" />
            <span>Profile</span>
          </Link>

          <Link
            to="/friends"
            onClick={onClose}
            className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
              currentPath === "/friends" ? "btn-active" : ""
            }`}
          >
            <UsersIcon className="size-5 opacity-70" />
            <span>Friends</span>
          </Link>

          <Link
            to="/notifications"
            onClick={onClose}
            className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
              currentPath === "/notifications" ? "btn-active" : ""
            }`}
          >
            <BellIcon className="size-5 opacity-70" />
            <span>Notifications</span>
          </Link>
        </nav>

        {/* USER PROFILE */}
        <div className="p-4 border-t border-base-300">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={authUser?.profilePic} alt="User Avatar" />
              </div>
            </div>

            <div className="flex-1">
              <p className="font-semibold text-sm">
                {authUser?.fullName}
              </p>
              <p className="text-xs text-success flex items-center gap-1">
                <span className="size-2 rounded-full bg-success inline-block" />
                Online
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

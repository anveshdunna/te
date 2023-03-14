import Icon from "../assets/Icon";
import Logo from "../assets/Logo";
import { NavLink, Link } from "react-router-dom";

const globalNavLinks = [
  {
    id: 1,
    name: "Travel",
    icon: "travel",
    link: "travel",
  },
  {
    id: 2,
    name: "Expense",
    icon: "expense",
    link: "expense",
  },
];

const globalNavUtils = [
  {
    id: 1,
    name: "Help",
    icon: "help",
  },
  {
    id: 2,
    name: "Notifications",
    icon: "notification",
  },
];

function GlobalNavItem({ item }) {
  return (
    <NavLink
      to={item.link}
      className="flex flex-col items-center justify-center gap-1 rounded-xl py-2 px-0 text-gray-900-value no-underline hover:bg-orange-200-value"
    >
      <Icon name={item.icon} />
      <label className="cursor-pointer text-caption2">{item.name}</label>
    </NavLink>
  );
}

function GlobalNavUtil({ item }) {
  return (
    <div className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full py-2 px-0 text-gray-900-value hover:bg-orange-100-value">
      <Icon name={item.icon} />
    </div>
  );
}

function GlobalNav() {
  return (
    <nav className="fixed flex h-screen w-16 flex-col items-stretch justify-between border-[0] border-r border-solid border-gray-200-value bg-white py-4 px-1">
      <div className="flex flex-col items-stretch justify-center gap-2">
        <Link
          to="/"
          className="flex h-12 flex-col items-center justify-center rounded-xl hover:bg-orange-200-value"
        >
          <Logo />
        </Link>
        {globalNavLinks.map((item) => {
          return <GlobalNavItem item={item} />;
        })}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        {globalNavUtils.map((item) => {
          return <GlobalNavUtil item={item} />;
        })}
        <div className="h-10 w-10 rounded-full p-1">
          <img
            alt=""
            className="h-8 w-8 rounded-full object-cover outline outline-1 outline-offset-[-1px] outline-[#00000066]"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
          ></img>
        </div>
      </div>
    </nav>
  );
}

export default GlobalNav;

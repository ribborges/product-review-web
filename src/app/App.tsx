import { Outlet } from "react-router";
import { HouseFill } from "react-bootstrap-icons";

import { Header } from "@/components/Header";
import { Navbar, NavItem } from "@/components/Navbar";

export default function App() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Header />
      <div className="flex-1 flex md:flex-row flex-col-reverse overflow-hidden">
        <Navbar>
          <NavItem to="/">
            <HouseFill size={24} />
            <span>Início</span>
          </NavItem>
        </Navbar>
        <main className="flex-1 flex md:m-1 bg-zinc-100 dark:bg-zinc-950 md:rounded-xl overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import { createRootRoute, Outlet } from "@tanstack/react-router";
import Sidebar from "../components/Sidebar";

const RootLayout = () => (
  <>
    <Sidebar />

    <main className="ml-40 p-8">
      <Outlet />
    </main>
  </>
);

export const Route = createRootRoute({ component: RootLayout });

import { Outlet } from "react-router-dom";
import Navbar from "../components/partials/navbar";
import { Footer } from "../components/partials/footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

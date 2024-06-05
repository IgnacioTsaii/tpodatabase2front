import Link from "next/link";
import Navbar from "./navbar/navbar";
import Dashboard from "./dashboard/dashboard";

export default function Home() {
  return (
    <div className="text-center align-center">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}
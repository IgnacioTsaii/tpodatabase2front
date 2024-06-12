import Link from "next/link";
import Navbar from "@luca/components/navbar";
import Dashboard from "@luca/components/dashboard";

export default function Home() {
  return (
    <div className="text-center pt-32 align-center">
      <Dashboard/>
    </div>
  );
}
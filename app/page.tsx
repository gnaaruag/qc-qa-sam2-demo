// import Image from "next/image";
import UploadPage from "@/components/upload";
import { NavbarExp } from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavbarExp/>
      <UploadPage/>
    </main>
  );
}

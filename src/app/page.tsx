import Hero from "@/components/shared/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="max-w-wrapper h-screen">
        about us
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <summary className="text-center">
      <h1 className="text-center my-3"> Welcome Mohamed Elbordiny </h1>
      <p className="fw-bold">I am software Engineer </p>
      </summary>
      </main>

    </div>
  );
}

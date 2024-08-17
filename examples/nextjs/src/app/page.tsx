import { Baffle } from "react-baffle";

export default function Home() {
  return (
    <section className="p-10">
      <div className="flex items-center flex-col gap-10">
        <h1 className="text-6xl">React Baffle</h1>
        <Baffle>Your animated text</Baffle>
      </div>
    </section>
  );
}

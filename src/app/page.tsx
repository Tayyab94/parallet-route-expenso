import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-4">
      <h2 className="text-2xl my-2">This is Home Page</h2>
      <Link className="underline" href="/dashboard">Go To Dashboard</Link>
    </div>
  );
}

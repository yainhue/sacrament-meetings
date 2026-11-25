import Image from "next/image"
import Link from "next/link";


export default function Home() {
  return (

    <div className="flex flex-col justify-center">

    <Image src="/hero.webp" alt="Church of Jesus Chirst Sacrament Room" width={1024}height={768} className="h-50 object-cover m-auto"></Image>

    <div className="flex justify-around flex-row mt-15">
      <div>
      <h1>Sacrament Meeting Planner</h1>
      <p>Plan, organize, and view sacrament meeting details</p>
      </div>
      <Link className="primary-button " href={"/meetings/new"}>+ Add Meeting</Link>
    </div>

    <div className="h-100"></div>

    </div>
  );
}

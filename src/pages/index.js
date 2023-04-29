import Link from "next/link";


export default function Home() {
  return (
    <>
      <div>
        <h1>homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          blanditiis. Consectetur nemo voluptatum cum omnis expedita architecto
          earum sed sunt magni numquam laboriosam ipsam corrupti quis corporis,
          labore minima nisi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          blanditiis. Consectetur nemo voluptatum cum omnis expedita architecto
          earum sed sunt magni numquam laboriosam ipsam corrupti quis corporis,
          labore minima nisi?
        </p>
      </div>
      <Link href="/ninjas">See Ninja Listing</Link>
    </>
  );
}

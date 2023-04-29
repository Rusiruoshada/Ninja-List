import Link from "next/link";
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <div>
        <h1 className={styles.title}>homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          blanditiis. Consectetur nemo voluptatum cum omnis expedita architecto
          earum sed sunt magni numquam laboriosam ipsam corrupti quis corporis,
          labore minima nisi?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          blanditiis. Consectetur nemo voluptatum cum omnis expedita architecto
          earum sed sunt magni numquam laboriosam ipsam corrupti quis corporis,
          labore minima nisi?
        </p>
      </div>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </>
  );
}

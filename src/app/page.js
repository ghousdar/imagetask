import Image from "next/image";
import styles from "./page.module.css";
import mountains from "./images/mountain1.webp";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <h1> Image Optimization </h1>
        {/* <Image
      src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
      className="w-100 shadow-1-strong rounded mb-4 "
      alt="mountain"
      width={500}
      height={500}
    /> */}
        <Image
          src={mountains}
          className="w-100 shadow-1-strong rounded mb-4 "
          alt="mountain"
          width={500}
          height={500}
        />
        <br></br>

        <video controls={true} style={{ width: "400px", height:"400px" }}>
          <source src="/video.mp4" type="video/mp4"  />
          
        </video>
      </div>
    </main>
  );
}

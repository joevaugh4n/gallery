import styles from "./gallery.module.css";
import MonaLisa from "./assets/mona_lisa.jpg";
import Image from "next/image";

interface GalleryProps {
  title: string;
  artist: string;
  medium: string;
  date?: string;
  dark?: boolean;
}

export const Gallery = (props: GalleryProps) => {
  const addDate = ", " + props.date;
  return (
    <div className={props.dark ? styles.gallery_dark : styles.gallery}>
      <div>
        <Image src={MonaLisa} width={200} alt={"Mona Lisa"} />
      </div>
      <div className={styles.profile}>
        <div className={styles.artist}>{props.artist}</div>
        <div>
          <span className={styles.title}>{props.title}</span>
          {addDate}
        </div>
        <div>{props.medium}</div>
      </div>
      <div className={styles.cta}>
        <button className={styles.button}>Learn more</button>
        <button className={styles.button}>Fun fact</button>
      </div>
    </div>
  );
};

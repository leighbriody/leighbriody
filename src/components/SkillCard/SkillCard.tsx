import styles from "./SkillCard.module.css";
import Image from "next/image";

interface SkillCardProps {
  image:string;
}
export function SkillCard(prop:SkillCardProps) {
  return (
    <button className={styles.btn}>
      <Image
        src={prop.image}
        height={500}
        width={250}
        alt={prop.image.replace(/^\//, "").replace(/\.[a-z]+$/i, "")}
        className="h-auto max-w-full rounded-lg"
      ></Image>
    </button>
  );
}

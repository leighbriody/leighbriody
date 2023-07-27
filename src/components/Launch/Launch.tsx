import styles from "./Launch.module.css";

interface LaunchProps {
  name: string;
}

export function Launch(props: LaunchProps) {
  return (
    <button className={styles.btn} >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {props.name}
    </button>
  );
}

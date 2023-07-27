import styles from "./Launch.module.css";

interface LaunchProps {
  name: string;
  href: string;
}

export function Launch(props: LaunchProps) {
  function clicked() {
    window.open(props.href, "_blank");
  }

  return (
    <button className={styles.btn} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {props.name}
    </button>
  );
}

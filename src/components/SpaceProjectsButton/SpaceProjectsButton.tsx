import styles from "./SpaceButton.module.css";

export function SpaceProjectsButton() {
  return (
    <button className={styles.btn} type="button">
      <span className={styles.span}>SPACE</span>
      <div className={styles.container}>
        <div className={styles.stars}></div>
      </div>

      <div className={styles.glow}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </button>
  );
}

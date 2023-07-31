import styles from "./SpaceButton.module.css";

export function SpaceButton() {
  return (
    <button className={styles.btn} type="button">
      <div className="strong">MY PROJECTS</div>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </button>
  );
}

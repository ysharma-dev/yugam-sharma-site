import styles from "./MessiAnimation.module.css";

export function MessiAnimation() {
  return (
    <div
      className={styles.scene}
      role="img"
      aria-label="A small animated cartoon footballer in an Argentina number 10 shirt, juggling a ball — a tribute to Lionel Messi"
    >
      <div className={styles.shadow} />
      <div className={styles.character}>
        <div className={styles.head} />
        <div className={styles.hair} />
        <div className={`${styles.eye} ${styles.eyeLeft}`} />
        <div className={`${styles.eye} ${styles.eyeRight}`} />
        <div className={styles.beard} />
        <div className={`${styles.arm} ${styles.armLeft}`} />
        <div className={`${styles.arm} ${styles.armRight}`} />
        <div className={styles.torso}>
          <span className={styles.number} aria-hidden="true">
            10
          </span>
        </div>
        <div className={styles.shorts} />
        <div className={`${styles.leg} ${styles.legLeft}`}>
          <div className={styles.boot} />
        </div>
        <div className={`${styles.leg} ${styles.legRight}`}>
          <div className={styles.boot} />
        </div>
      </div>
      <div className={styles.ball} />
    </div>
  );
}

import styles from "./MessiAnimation.module.css";

export function MessiAnimation() {
  return (
    <div
      className={styles.scene}
      role="img"
      aria-label="A small animated cartoon of Lionel Messi in an Argentina number 10 shirt curling a left-footed free kick into the top corner of a goal"
    >
      <div className={styles.ground} />
      <div className={styles.playerShadow} />
      <div className={styles.player}>
        <div className={styles.hair} />
        <div className={styles.head} />
        <div className={`${styles.eyebrow} ${styles.eyebrowLeft}`} />
        <div className={`${styles.eyebrow} ${styles.eyebrowRight}`} />
        <div className={`${styles.eye} ${styles.eyeLeft}`} />
        <div className={`${styles.eye} ${styles.eyeRight}`} />
        <div className={styles.beard} />
        <div className={styles.mouth} />
        <div className={`${styles.arm} ${styles.armLeft}`} />
        <div className={`${styles.arm} ${styles.armRight}`} />
        <div className={styles.torso}>
          <span className={styles.number} aria-hidden="true">
            10
          </span>
        </div>
        <div className={styles.shorts} />
        <div className={`${styles.leg} ${styles.legStand}`}>
          <div className={styles.boot} />
        </div>
        <div className={`${styles.leg} ${styles.legKick}`}>
          <div className={styles.boot} />
        </div>
      </div>
      <div className={styles.goal}>
        <div className={styles.net} />
        <div className={styles.topBar} />
        <div className={styles.postFront} />
        <div className={styles.postBack} />
      </div>
      <div className={styles.ball} />
    </div>
  );
}

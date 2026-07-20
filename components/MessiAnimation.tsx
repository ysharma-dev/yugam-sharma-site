import styles from "./MessiAnimation.module.css";

export function MessiAnimation() {
  return (
    <div
      className={styles.scene}
      role="img"
      aria-label="An animated cartoon recreation of Lionel Messi's famous free kick, seen from behind the number 10: the ball curls over the jumping defensive wall, past the diving goalkeeper, into the top corner of the goal"
    >
      <div className={styles.crowd} />
      <div className={styles.board} />
      <div className={styles.pitch} />
      <div className={styles.goal}>
        <div className={styles.net} />
        <div className={styles.crossbar} />
        <div className={styles.postLeft} />
        <div className={styles.postRight} />
      </div>
      <div className={styles.keeper}>
        <div className={styles.keeperHead} />
        <div className={styles.keeperBody} />
        <div className={styles.keeperShorts} />
        <div className={styles.keeperLegs} />
      </div>
      <div className={styles.wall}>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={styles.defender}>
            <div className={styles.defenderHead} />
            <div className={styles.defenderBody} />
            <div className={styles.defenderShorts} />
            <div className={styles.defenderLegs} />
          </div>
        ))}
      </div>
      <div className={styles.striker}>
        <div className={styles.strikerShadow} />
        <div className={styles.strikerHair} />
        <div className={`${styles.strikerArm} ${styles.strikerArmLeft}`} />
        <div className={`${styles.strikerArm} ${styles.strikerArmRight}`} />
        <div className={styles.strikerTorso}>
          <span className={styles.strikerNumber} aria-hidden="true">
            10
          </span>
        </div>
        <div className={styles.strikerShorts} />
        <div className={`${styles.strikerLeg} ${styles.strikerLegKick}`} />
        <div className={`${styles.strikerLeg} ${styles.strikerLegStand}`} />
      </div>
      <div className={styles.ball} />
    </div>
  );
}

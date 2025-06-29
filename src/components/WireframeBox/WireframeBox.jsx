import styles from './WireframeBox.module.css';

export default function WireframeBox({ children }) {
  return (
    <div className={styles.containerWithWireframe}>
      <div className={styles.topLine} />
      <div className={styles.leftLine} />
      <div className={styles.rightLine} />
      <div className={styles.bottomLine} />
      {children}
    </div>
  );
}
/* eslint-disable react/prop-types */
import styles from "./footer.module.css";
export default function Footer({ completed, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed todos : {completed}</span>
      <span className={styles.item}>Completed todos : {totalTodos}</span>
    </div>
  );
}

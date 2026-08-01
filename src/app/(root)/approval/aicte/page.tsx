import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "AICTE Approval",
  description: "AICTE approval information page.",
};

export default function AicteApprovalPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>AICTE Approval</h1>
      <p className={styles.description}>
        Welcome to the AICTE approval portal. Here you can find all necessary information and documentation required for the approval process.
      </p>
      {/* Add more dynamic content as needed */}
    </section>
  );
}

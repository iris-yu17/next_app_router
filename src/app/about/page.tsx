"use client";

import styles from "./../page.module.css";

export default function About() {
  
  return (
    <main className={styles.main}>
      <div>about page</div>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        click
      </button>
    </main>
  );
}

"use client"
import { useState } from "react";
import styles from "./../page.module.css";

export default function NameCard(props) {
  const { initialData } = props;
  console.log(initialData)
  const [name, setName] = useState(initialData)

  const getData = async () => {
    console.log('123')
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    setName(data.results[0].name)
  }

  return (
    <div className={styles.nameCard}>
      <div className={styles['mb-4']}>Name: {`${name.first} ${name.last}`}</div>
      <button onClick={getData}>get data</button>
    </div>
  );
}

import styles from "./../page.module.css";
import NameCard from "./nameCard";

export default async function Profile() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
console.log('data', data)
  return (
    <main className={styles.main}>
      <div>Profile page</div>
      <NameCard initialData={data.results[0].name} />
    </main>
  );
}

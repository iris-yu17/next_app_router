import styles from "./../page.module.css";

export async function generateMetadata() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();

  const name = data.results[0].name.first
  return {
    title: `User page ${name}`,
    description: "Generated by create next app",
  }
}

export default async function User() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();

  const name = data.results[0].name.first
  return (
    <main className={styles.main}>
      <div>User page</div>
      <div>User Name: {name}</div>
    </main>
  );
}

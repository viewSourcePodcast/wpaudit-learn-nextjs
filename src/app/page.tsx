import Header from "@/components/header";
import AuditList from "@/components/audit-list";
import * as styles from "./style.css";

export default function Home({
	searchParams,
  }: {
	params: { slug: string };
	searchParams?: { [key: string]: string | string[] | undefined };
  }) {
	return (
		<>
			<Header />
			{searchParams?.signup === "true" && <p className={styles.snackbar}>Check your email for a confirmation link to finish signing up!</p>}
			<main id="main">
				<AuditList />
			</main>
		</>
	);
}

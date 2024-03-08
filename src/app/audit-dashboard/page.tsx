import isUserLoggedIn from "@/utils/isUserLoggedIn";
import { redirect } from "next/navigation";
import Header from "@/components/header";
import { createAudit } from "./actions";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import * as styles from "./style.css";
import Link from "next/link";

async function checklists(user) {
	// get the checklist from the supabase database for the user from the audit table
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const { data, error } = await supabase
		.from("audits")
		.select()
		.eq("user", user.id)
		.order("created_at", { ascending: false });

	const auditIds = data?.map((audit) => audit.id);
	return auditIds;
}

export default async function Audit() {
	const user = await isUserLoggedIn();
	if (!user) {
		redirect("/login");
	}
	const audits = await checklists(user);
	const ListAudits = () => {
		return (
			<div className={styles.listContainer}>
				{audits?.map((audit, index) => (
					// create an anchor link to audit with the param of the audit id
					<Link
						key={index}
						href={`/audit/${audit}`}
						className={styles.listItem}>
						<h2>Audit {audit}</h2>
					</Link>
				))}
			</div>
		);
	};
	return (
		<>
			<Header />
			<main id="main" className="main">
				<h1>Your Audits</h1>
				<br />
				<ListAudits />
				<br />
				<form>
					<button className={styles.button} formAction={createAudit}>
						Create Audit
					</button>
				</form>
			</main>
		</>
	);
}

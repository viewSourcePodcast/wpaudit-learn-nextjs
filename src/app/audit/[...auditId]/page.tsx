import isUserLoggedIn from "@/utils/isUserLoggedIn";
import { redirect } from "next/navigation";
import Header from "@/components/header";
import { createAudit } from "./actions";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import * as styles from "./style.css";
// import { useRouter } from "next/navigation";
import AuditList from "@/components/audit-list";

export const revalidate = 2

async function Checklist({ user, auditId }: { user: any, auditId: string  }) {
	// get the checklist from the supabase database for the user from the audit table
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const { data, error } = await supabase
		.from("audits")
		.select()
		.eq("user", user.id)
		.eq("id", parseInt(auditId))
		.order("created_at", { ascending: false });

	return (
		<AuditList
			auditList={data?.[0].checklist_data}
			auditId={auditId}
		/>
	);
}

export default async function Audit({ params } : { params: { auditId: string[] } }) {
	const {
		auditId: [audit],
	} = params;
	const user = await isUserLoggedIn();

	if (!user) {
		redirect("/login");
	}

	return (
		<>
			<Header />
			<main id="main" className="main">
				<h1>
					Audit {audit} {user.email}
				</h1>
				<br />
				<Checklist user={user} auditId={audit} />
			</main>
		</>
	);
}

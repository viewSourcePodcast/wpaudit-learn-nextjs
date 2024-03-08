"use server"
// action called createAudit that saves the audit.json to Supabase in the audit table under the checklist_data column and saves the user's id to the user column and returns the id of the newly created audit

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import audit from "@/audit-templates/audit.json";
import { redirect } from "next/navigation";

export async function createAudit(formData: FormData) {
	// get the user from the cookie
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const { data, error } = await supabase.auth.getUser();
	if (error || !data?.user) {
		return false;
	}
	const user = data.user;
	// save the audit to the database
	const { data: auditData, error: auditError } = await supabase
		.from("audits")
		.insert([
			{
				checklist_data: audit,
				user: user.id,
			},
		]);
	if (auditError || !auditData) {
		return false;
	}
	redirect("/audit");
};

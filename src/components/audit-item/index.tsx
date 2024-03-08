"use client";
import Link from "next/link";
import * as styles from "./style.css";
import isUserLoggedIn from "@/utils/isUserLoggedIn";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export default function AuditItem({
	title,
	description,
	resources,
	checked,
	auditId,
	itemId,
}: Readonly<{
	title: string;
	description: string;
	resources: Array<{ link: string; title: string }>;
	checked: boolean;
	auditId: number | null;
	itemId: number;
}>) {

	const [isChecked, setIsChecked] = useState(checked);
	const [isSaving, setIsSaving] = useState(false);
	const handleCheck = async (event) => {
		setIsSaving(true);
		setIsChecked(event.target.checked);
		if (!auditId) {
			return;
		}

		const supabase = createClient();
		const { data, error } = await supabase
			.from("audits")
			.select("checklist_data")
			.eq("id", auditId);

		if (error || !data) {
			return false;
		}
		const audit = data[0].checklist_data;

		// find the object in audit with the matching itemId and update the checked property
		const updatedAudit = audit.map((item) => {
			return {
				...item,
				checked: parseInt(item.id) === parseInt(itemId) ? !item.checked : item.checked,
			}
		});

		const { data: updateData, error: updateError } = await supabase
			.from("audits")
			.update({ checklist_data: updatedAudit })
			.eq("id", auditId);

		console.log(updateData);
		if (updateError) {
			console.log('something went wrong with the update');
			return false;
		}

		setIsSaving(false);
	};

	// convert title into kebab case for the data-title attribute
	const titleAttribute = title.toLowerCase().replace(/\s/g, "-");
	return (
		<article data-title={titleAttribute} className={styles.listItem}>
			{isSaving && <div className={styles.saving}>Saving...</div>}
			<input
				className={styles.checkBox}
				type="checkbox"
				id={titleAttribute}
				checked={isChecked}
				onChange={handleCheck}
			/>
			<label htmlFor={titleAttribute} className={styles.checkBoxLabel}>
				<h2 className={styles.listItemHeading}>{title}</h2>
			</label>

			<p>{description}</p>
			<ul className={styles.resourceList}>
				{resources.map((resource, index) => (
					<li key={index}>
						<Link href={resource.link} className={styles.resourceLink}>
							{resource.title}
						</Link>
					</li>
				))}
			</ul>
		</article>
	);
}

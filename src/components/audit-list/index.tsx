// @ts-nocheck
import AuditItem from "@/components/audit-item";
import audit from "@/audit-templates/audit.json";
import * as styles from "./style.css";

export default function AuditList({auditList = audit, auditId = null}: Readonly<{ auditList?: any; auditId?: string | null; }>) {
	// read the array from the json file, and map it to the AuditItem component

	return (
		<section className={styles.listContainer}>
			{null !== auditList && auditList.map((audit, index) => (
				<AuditItem
					key={index}
					title={audit.checklistTitle}
					description={audit.checklistDescription}
					resources={audit.resources}
					checked={audit.checked}
					auditId={auditId}
					itemId={audit.id}
				/>
			))}
		</section>
	);
}

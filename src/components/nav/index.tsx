// nav component with a login button
import Link from "next/link";
import ButtonLink from "../button-link";
import * as styles from "./style.css";
import isUserLoggedIn from "@/utils/isUserLoggedIn";

export default async function Nav() {
	const user = await isUserLoggedIn();
	const loginText = user ? "Log out" : "Login";
	const loginAction = user ? "/auth/logout" : "/login";
	return (
		<nav className={styles.navContainer}>
			{user && <Link className={styles.regularLink} href="/audit-dashboard">Your Audits</Link>}
			<ButtonLink href={loginAction} variant="primary">
				{loginText}
			</ButtonLink>

		</nav>
	);
}

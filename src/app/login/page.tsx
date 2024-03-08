import { login } from "./actions";
import Link from "next/link";
import Header from "@/components/header";
import * as styles from "./style.css";

export default function LoginPage() {
	return (
		<>
			<Header showDescription={false}/>
			<div className={styles.loginContainer}>
				<form className={styles.form}>
					<label className={styles.label} htmlFor="email">
						Email:
					</label>
					<input
						className={styles.input}
						id="email"
						name="email"
						type="email"
						required
					/>
					<label className={styles.label} htmlFor="password">
						Password:
					</label>
					<input
						className={styles.input}
						id="password"
						name="password"
						type="password"
						required
					/>
					<button className={styles.submit} formAction={login}>
						Log in
					</button>
				</form>
				<Link href="/register">Register</Link>
			</div>
		</>
	);
}

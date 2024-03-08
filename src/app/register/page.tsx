import { signup } from "./actions";
import Header from "@/components/header";
import * as styles from "./style.css";

export default function LoginPage() {
	return (
		<>
			<Header />
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
					<button className={styles.submit} formAction={signup}>Register</button>
				</form>
			</div>
		</>
	);
}

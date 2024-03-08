import * as styles from "./style.css";

export default function SkipLink({ text = "Skip to content (press enter)", id = "main" }) {
	return (
		<a href={`#${id}`} rel="noopener" className={styles.skipLink}>
			{text}
		</a>
	);
}

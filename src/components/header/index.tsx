import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/button-link";
import Nav from "@/components/nav";
import logo from "./logo-transparent.png";
import * as styles from "./style.css";
import headerBlob from "./header-blob2-01.svg";

/**
 * A Static Header for the site
 * @returns a header component
 */
export default function Header({ showDescription }: { showDescription?: boolean }) {
	return (
		<>
			<header className={ styles.header }>
			<Nav />
				<h1 className={styles.title}>
					<Link href="/">
						<Image src={logo} alt="WP Audit Site" className={styles.titleImg} />
					</Link>
				</h1>
				{ showDescription && (
					<>
				<h2>Quickly audit your WordPress website.</h2>
				<p>
					A helpful checklist to audit your website for formatting, WordPress
					specific optimization, accessibility, performance, and security.
				</p>
				<p>Best used before a launch or on a schedule.</p>
				<ButtonLink href="https://wphelpers.dev">
					Other Helpful WordPress Resources
						</ButtonLink>
						</>
				) }
			</header>
			<Image priority={true} src={headerBlob} alt="" className={styles.headerBlob} />
		</>
	);
}

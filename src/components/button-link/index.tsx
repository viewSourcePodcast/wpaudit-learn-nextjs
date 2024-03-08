import * as styles from "./style.css";
import clsx from "clsx";
import Link from "next/link";

/**
 * A link component styled as a button
 *
 * @param children Any react nodes nested inside the button
 * @param variant The variant of the button
 * @param className Any additional classes to be added to the button
 * @param href The href of the link
 * @param props Any additional props to be added to the button

 * @returns A link component styled as a button
 */
export default function ButtonLink({
	children,
	variant = "primary",
	className,
	href,
	...props
}: Readonly<{
	children: React.ReactNode;
	variant?: "primary" | "secondary";
	className?: string;
	href: string;
}>) {
	return (
		<Link
			className={clsx(className, {
				[styles.primary]: variant === "primary",
				[styles.secondary]: variant === "secondary",
			})}
			href={href}
			{...props}>
			{children}
		</Link>
	);
}

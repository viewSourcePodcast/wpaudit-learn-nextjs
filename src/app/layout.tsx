import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import SkipLink from "@/components/skip-link";
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s – WPAudit",
		default: "WPAudit",
	},
	description: "Example Next.js app for viewSource podcast by Aurooba",
	applicationName: "WPAudit",
	authors: [{ name: "Aurooba Ahmed" }],
	robots: "index, follow",
	metadataBase: new URL("http://localhost:3000"),
	openGraph: {
		type: "website",
		description: "Example Next.js app for viewSource podcast by Aurooba",
		siteName: "WPAudit",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={raleway.className}>
				<SkipLink />
				{children}
			</body>
		</html>
	);
}

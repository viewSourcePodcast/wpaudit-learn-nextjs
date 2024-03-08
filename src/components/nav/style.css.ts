import { style } from "@vanilla-extract/css";
import { vars } from "@/components/theme.css";

export const navContainer = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "1rem",
	gap: "1.5rem",
	"@media": {
		"screen and (min-width: 850px)": {
			justifyContent: "end",
		},
	},
});

export const regularLink = style({
	color: vars.color.light,
	textDecoration: "none",
	transition: "0.5s ease all",
	padding: "0.7rem",
	border: `1px solid ${vars.color.primary}`,
	":hover": {
		border: `1px solid ${vars.color.light}`,
	},
});
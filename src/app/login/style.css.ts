import { style } from "@vanilla-extract/css";
import { vars } from "@/components/theme.css";

export const loginContainer = style({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "1rem",
});

export const form = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "1rem",
	padding: "4rem",
	backgroundColor: vars.color.light,
	borderRadius: "5px",
	width: "100%",
	maxWidth: "400px",
	margin: "0 auto",
});
export const input = style({
	width: "100%",
	padding: "0.5rem",
	borderRadius: "5px",
	border: "1px solid #ddd",
	transition: "0.5s ease all",
	":focus": {
		borderColor: vars.color.primary,
	},
});
export const label = style({
	textAlign: "left",
	width: "100%",
});
export const submit = style({
	backgroundColor: vars.color.primary,
	color: vars.color.light,
	padding: "0.5rem",
	border: `1px solid ${vars.color.primary}`,
	cursor: "pointer",
	transition: "0.5s ease all",
	fontSize: "1rem",
	":hover": {
		backgroundColor: vars.color.light,
		color: vars.color.primary,
	},
});

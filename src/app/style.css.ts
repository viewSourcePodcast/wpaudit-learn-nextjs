import { style } from "@vanilla-extract/css";
import { vars } from "@/components/theme.css";

export const snackbar = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: vars.color.primary,
	color: vars.color.light,
	padding: "1rem",
	marginBottom: "3rem",
});

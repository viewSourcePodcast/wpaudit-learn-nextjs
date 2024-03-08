import { style } from "@vanilla-extract/css";
import { vars } from "@/components/theme.css";

export const listItem = style({
	backgroundColor: vars.color.light,
	padding: "1rem",
});

export const checkBox = style({
	position: "absolute",
	height: "1px",
	width: "1px",
	overflow: "hidden",
});

export const checkBoxLabel = style({
	position: "relative",
	margin: "1em 0",
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
	// @ts-ignore
	"&:before": {
		backgroundColor: vars.color.light,
		border: `3px solid ${vars.color.primary}`,
		borderRadius: "7px",
		content: '""',
		height: "30px",
		position: "absolute",
		top: "calc(50% - 20px)",
		transition: "0.5s ease background-color, border-color",
		width: "30px",
	},
	"&:hover": {
		cursor: "pointer",
	},
	selectors: {
		[`${checkBox}:checked + &:before`]: {
			background:
				"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24.22 18.75'%3E%3Cpolygon points='8.44 18.75 0 10.65 2.62 7.96 8.39 13.47 21.55 0 24.22 2.64 8.44 18.75' style='fill:%23fff'/%3E%3C/svg%3E\") no-repeat",
			backgroundSize: "80%",
			backgroundColor: vars.color.primary,
			backgroundPosition: "center",
		},
	},
});

export const listItemHeading = style({
	paddingLeft: "50px",
	fontWeight: "bold",
	fontSize: "1.5rem",
	margin: 0,
	display: "inline-block"
});

export const resourceList = style({
})

export const resourceLink = style({
	color: vars.color.primary,
	transition: "0.5s ease color",
	":hover": {
		color: vars.color.light,
	},
})
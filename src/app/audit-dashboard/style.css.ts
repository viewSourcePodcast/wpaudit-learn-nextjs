import { style } from '@vanilla-extract/css';
import { vars } from '@/components/theme.css';

export const container = style({
	maxWidth: '1200px',
})

export const button = style({
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

export const listContainer = style({
	display: "flex",
	flexWrap: "wrap",
	gap: "1rem",
});

export const listItem = style({
	borderRadius: "0.5rem",
});
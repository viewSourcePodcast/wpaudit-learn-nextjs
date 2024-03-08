import { style } from '@vanilla-extract/css';
import { vars } from '@/components/theme.css';

export const primary = style({
	backgroundColor: vars.color.light,
	color: vars.color.primary,
	display: 'inline-block',
	padding: '0.7rem',
	border: `1px solid ${vars.color.light}`,
	textDecoration: 'none',
	fontWeight: 'bold',
	transition: '0.5s ease all',
	':hover': {
		backgroundColor: 'transparent',
		color: vars.color.light,
	},
})

export const secondary = style({
	backgroundColor: 'transparent',
	color: vars.color.primary,
	display: 'inline-block',
	padding: '0.7rem',
	border: `1px solid ${vars.color.primary}`,
	textDecoration: 'none',
	fontWeight: 'bold',
	transition: '0.5s ease all',
	':hover': {
		backgroundColor: vars.color.primary,
		color: vars.color.light,
	},
})
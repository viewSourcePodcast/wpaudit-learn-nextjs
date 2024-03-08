import { style } from '@vanilla-extract/css';
import { vars } from '@/components/theme.css';

export const skipLink = style({
	color: vars.color.text,
	left: '-100%',
	padding: '0.5rem',
	top: '1rem',
	position: 'absolute',
	zIndex: -10,
	fontWeight: 'bold',
	display: 'block',
	':focus': {
		zIndex: 100,
		left: '1rem',
	},
})

import { style } from '@vanilla-extract/css';
import { vars } from '@/components/theme.css';

export const header = style({
	backgroundColor: vars.color.primary,
	color: vars.color.light,
	padding: '1rem 1rem 2rem 1rem',
	textAlign: 'center',
	position: 'relative',
	// @ts-ignore
	"& p:last-child": {
		marginBottom: '0',
	},
});

export const headerBlob = style({
	marginTop: '-1px',
	width: '100%',
	height: 'auto',
	marginBottom: '2rem',
})

export const title = style({
	marginTop: '1rem',
})

export const titleImg = style({
	maxWidth: '400px',
	width: '100%',
	height: 'auto',
})
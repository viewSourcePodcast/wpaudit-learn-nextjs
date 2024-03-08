import { style } from '@vanilla-extract/css';
import { vars } from '@/components/theme.css';

export const listContainer = style({
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
	gridGap: '50px',
	'@media': {
		'screen and (min-width: 850px)': {
			gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
		},
	  }
})
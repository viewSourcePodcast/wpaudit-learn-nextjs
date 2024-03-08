import { createGlobalTheme } from "@vanilla-extract/css";
import { globalStyle } from "@vanilla-extract/css";

// These are the global variables (design tokens) we can pull into our styles
// throughout the app, since they are applied to the :root element.
export const vars = createGlobalTheme(":root", {
	color: {
		primary: "#057B85",
		light: "#ffffff",
		text: "#000000",
		background: "#ECECEC",
	},
	font: {
		body: "Raleway, sans-serif",
	},
});

// There are a million ways to do global styles in vanilla-extract, but this is the simplest and feels the most like CSS to me. – Aurooba

// We're using the globalStyle function to create a global style
// for the different elements.
// For example, the first one is the same as writing body { ... } in a CSS file.

globalStyle("body", {
	fontFamily: vars.font.body,
	backgroundColor: vars.color.background,
	color: vars.color.text,
	margin: 0,
	font:`18px/1.5 "raleway","Helvetica Neue","Helvetica","Arial",sans-serif`
});

globalStyle("p + p", {
	marginTop: "1rem",
});

globalStyle("#main", {
	maxWidth: '1500px',
	margin: '0 auto',
})

globalStyle("p", {
	maxWidth: '600px',
	marginLeft: 'auto',
	marginRight: 'auto',
})

globalStyle("a", {
	color: vars.color.primary,
})

globalStyle("*", {
	boxSizing: "border-box",
})

globalStyle("input button", {
	font:`18px/1.5 "raleway","Helvetica Neue","Helvetica","Arial",sans-serif`
})
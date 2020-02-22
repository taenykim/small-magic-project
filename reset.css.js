import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "escore1"; 
	src: url(/SCDream1.otf) format("opentype");
}
@font-face {
	font-family: "escore2"; 
	src: url(/SCDream2.otf) format("opentype");
}
@font-face {
	font-family: "escore3"; 
	src: url(/SCDream3.otf) format("opentype");
}
@font-face {
	font-family: "escore4"; 
	src: url(/SCDream4.otf) format("opentype");
}
@font-face {
	font-family: "escore5"; 
	src: url(/SCDream5.otf) format("opentype");
}
@font-face {
	font-family: "escore6"; 
	src: url(/SCDream6.otf) format("opentype");
}
@font-face {
	font-family: "escore7"; 
	src: url(/SCDream7.otf) format("opentype");
}
@font-face {
	font-family: "escore8"; 
	src: url(/SCDream8.otf) format("opentype");
}
@font-face {
	font-family: "escore9"; 
	src: url(/SCDream9.otf) format("opentype");
}
  


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    color: inherit;
    font: inherit;

    line-height: normal;

    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

	-webkit-appearance: none;
	&:focus {
		outline: none;
	}
}
`

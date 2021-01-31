import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"width": "33.33%",
	"display": "flex"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "600 12px/1.5em --fontFamily-googlePoppins",
			"margin": "0px 0px 0px 0px",
			"display": "block",
			"color": "--primary",
			"children": "Founded In"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "normal 700 30px/1.2 --fontFamily-googlePoppins",
			"margin": "0px 0px 0px 0px",
			"display": "block",
			"color": "--primary",
			"padding": "2px 0px 5px 0px",
			"children": "2003"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 0px 0px",
			"display": "block",
			"color": "--primary",
			"padding": "5 0px 0px 0px",
			"children": "3M Exim Private Limited &#123;Promoted by Singla Apparels Pvt. Ltd.&#125; is a government recognized, ready-made garment company, founded in the year 2013, which deals in knitted and woven apparels for men, women and kids."
		}
	}
};

const AboutDescCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" background="--color-lightPrimary" padding="20px 20px 20px 20px" />
		{"        "}
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Text {...override("text2")} />
		{"    "}
		{children}
	</StackItem>;
};

Object.assign(AboutDescCard, { ...StackItem,
	defaultProps,
	overrides
});
export default AboutDescCard;
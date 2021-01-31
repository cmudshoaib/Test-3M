import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Text, Box } from "@quarkly/widgets";
import { MdCheckCircle } from "react-icons/md";
const defaultProps = {
	"quarkly-title": "Item",
	"display": "flex"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdCheckCircle,
			"color": "--primary",
			"size": "20px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"display": "inline-block",
			"margin": "0 0px 0 0px",
			"padding": "0px 0px 0px 4px",
			"font": "14px Poppins, sans-serif",
			"children": "Single needle power operated industrial lock stitch sewing machine complete set without trimmer - ( 300 Nos )"
		}
	}
};

const QualityItem = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon {...override("icon")} />
		<Text {...override("text")} />
		{children}
	</Box>;
};

Object.assign(QualityItem, { ...Box,
	defaultProps,
	overrides
});
export default QualityItem;
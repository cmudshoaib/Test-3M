import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Capability",
	"margin": "-150px 0px 0px 0px"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "100%",
			"display": "block",
			"max-height": "200px",
			"object-fit": "cover",
			"object-position": "top",
			"src": "https://uploads.quarkly.io/601439a871e66d001efaf959/images/1.jpg?v=2021-01-31T16:33:28.169Z"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"padding": "15px 15px 15px 15px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal 500 20px/1.2 --fontFamily-googlePoppins",
			"margin": "0px 0px 0px 0px",
			"display": "block",
			"color": "--primary",
			"children": "Garment Production"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "14px Poppins, sans-serif",
			"color": "--primary",
			"margin": "5px 0px 16px 0px",
			"children": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
		}
	}
};

const Capability = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Text {...override("text1")} />
		</Box>
		{children}
	</Box>;
};

Object.assign(Capability, { ...Box,
	defaultProps,
	overrides
});
export default Capability;
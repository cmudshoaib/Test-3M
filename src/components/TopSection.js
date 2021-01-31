import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"padding": "160px 0px 0px 0px",
	"lg-padding": "100px 0px 0px 0px",
	"md-padding": "60px 0px 0px 0px",
	"background": "--color-primary"
};
const overrides = {};

const TopSection = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(TopSection, { ...Box,
	defaultProps,
	overrides
});
export default TopSection;
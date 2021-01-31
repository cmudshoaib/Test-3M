import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Image } from "@quarkly/widgets";
const defaultProps = {
	"display": "flex"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "150px",
			"height": "150px",
			"src": "https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-14.png?v=2021-01-30T12:21:26.763Z",
			"lg-width": "120px",
			"lg-height": "120px"
		}
	}
};

const LogoBox = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" background="--color-white" padding="10px 10px 10px 10px" />
		<Image {...override("image")} />
		{"        "}{"    "}
		{children}
	</StackItem>;
};

Object.assign(LogoBox, { ...StackItem,
	defaultProps,
	overrides
});
export default LogoBox;
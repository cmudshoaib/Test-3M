import React from "react";
import { useOverrides, Override, StackItem, SocialMedia, Menu, Stack, Section } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-primary",
	"padding": "80px 0 30px 0",
	"quarkly-title": "Footer"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0 0px 0 0px",
			"font": "500 20px/1.5em --fontFamily-googlePoppins",
			"color": "--white",
			"letter-spacing": "0.5px",
			"children": "3M Exim Pvt. Ltd."
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0 0px 0 0px",
			"font": "normal 300 14px/1.5 --fontFamily-googlePoppins",
			"color": "--whiteLight",
			"letter-spacing": "0.5px",
			"max-width": "900px",
			"children": "Decades ago, a visionary entrepreneur Shri Jagdish Chand Singla Ji, started out on a journey to reach out to \nhe world, with India at heart in 1960 to build Singla Apparels Pvt. Ltd; which has its presence in the garment \nindustry for over 50 years. The company has been growing steadily in capacity, expertise and sales."
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {
			"padding": "40px 0px 0px 0px",
			"justify-content": "space-between"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"sm-padding": "0 16px 0 16px"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"color": "--white",
			"font": "14px Poppins, sans-serif",
			"letter-spacing": "0.5px",
			"children": "Copyright © 2021 3M Exim Pvt. Ltd"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"sm-padding": "0 16px 0 16px"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"instagram": "https://twitter.com/quarklyapp",
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"background": "rgba(0, 0, 0, 0)",
			"hover-background": "rgba(0, 0, 0, 0)"
		}
	},
	"socialMediaOverride1": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"color": "--white"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"md-width": "100%",
			"sm-padding": "16px 16px 16px 16px"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"md-justify-content": "center",
			"sm-justify-content": "flex-start"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"align-self": "center",
			"sm-flex-direction": "column"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration-line": "initial",
			"color": "--white",
			"font": "14px Poppins, sans-serif"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"display": "none"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item-index",
			"display": "none"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "item-about-us"
		}
	},
	"menuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "item-capabilities",
			"display": "none"
		}
	},
	"menuOverride5": {
		"kind": "Override",
		"props": {
			"slot": "item-our-brand",
			"display": "none"
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Text {...override("text2")} />
				{"        "}{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				<SocialMedia {...override("socialMedia")}>
					<Override {...override("socialMediaOverride")} />
					<Override {...override("socialMediaOverride1")} />
				</SocialMedia>
				{"            "}
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride1")} />
				<Menu {...override("menu")}>
					<Override {...override("menuOverride")} />
					<Override {...override("menuOverride1")} />
					<Override {...override("menuOverride2")} />
					<Override {...override("menuOverride3")} />
					<Override {...override("menuOverride4")} />
					<Override {...override("menuOverride5")} />
				</Menu>
				{"            "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;
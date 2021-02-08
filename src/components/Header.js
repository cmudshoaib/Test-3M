import React, { useState } from "react";
import { useOverrides, Override, Menu, Section } from "@quarkly/components";
import { Image, Icon, Box } from "@quarkly/widgets";
import { MdMenu, MdKeyboardBackspace } from "react-icons/md";
const defaultProps = {
	"background": "--color-primary",
	"padding": "20px 0 24px 0",
	"lg-background": "--color-white",
	"lg-padding": "0 0 0 0",
	"quarkly-title": "Header",
	"position": "fixed",
	"z-index": "999"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "auto",
			"height": "64px",
			"quarkly-title": "Logo Desktop",
			"src": "https://uploads.quarkly.io/601439a871e66d001efaf959/images/logo-white-nu.svg?v=2021-01-29T16:42:05.760Z",
			"lg-display": "none",
			"display": "block"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"width": "auto",
			"height": "64px",
			"quarkly-title": "Logo Mobile",
			"src": "https://uploads.quarkly.io/601439a871e66d001efaf959/images/logo-color-nu.svg?v=2021-01-31T08:12:23.919Z",
			"lg-display": "block",
			"display": "none",
			"lg-height": "48px"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"lg-display": "flex",
			"lg-align-items": "center",
			"lg-width": "48px",
			"lg-justify-content": "center",
			"quarkly-title": "Nav Button",
			"display": "none",
			"lg-position": "fixed",
			"lg-height": "48px",
			"lg-left": 0,
			"lg-cursor": "pointer"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdMenu
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"quarkly-title": "Navigation",
			"align-self": "center",
			"lg-position": "fixed",
			"lg-top": 0,
			"lg-left": "-230px",
			"lg-bottom": 0,
			"lg-box-shadow": "6px 0 6px 0 rgba(4, 8, 12, 0.16)",
			"lg-background": "--color-primary",
			"lg-transition": "all 0.3s --transitionTimingFunction-easeInOut 0s"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"lg-display": "flex",
			"lg-align-items": "center",
			"lg-width": "48px",
			"lg-justify-content": "center",
			"quarkly-title": "Back Button",
			"display": "none",
			"lg-position": "relative",
			"lg-height": "48px",
			"lg-left": 0,
			"lg-cursor": "pointer"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdKeyboardBackspace,
			"lg-color": "--white"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"align-items": "center",
			"depth": "2",
			"lg-flex-direction": "column",
			"lg-left": 0,
			"lg-bottom": 0,
			"lg-top": 0,
			"lg-align-items": "flex-start",
			"lg-width": "210px",
			"lg-z-index": "1000",
			"lg-background": "--color-primary"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"color": "#ffffff",
			"text-decoration-line": "initial",
			"font": "400 14px Poppins, sans-serif",
			"letter-spacing": "0.5px",
			"active-color": "--white",
			"active-font": "500 14px Poppins, sans-serif",
			"active-border-width": "0 0 2px 0",
			"active-border-style": "solid",
			"hover-border-width": "0 0 2px 0",
			"hover-border-style": "solid"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--white",
			"font": "600 14px Poppins, sans-serif",
			"border-width": "0 0 2px 0",
			"border-style": "solid"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "link-index",
			"children": "Home"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"display": "none"
		}
	},
	"menuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px 15px 6px 15px",
			"position": "relative"
		}
	},
	"menuOverride5": {
		"kind": "Override",
		"props": {
			"slot": "item-contact-us",
			"background": "--color-white",
			"margin": "0px 0px 0px 15px"
		}
	},
	"menuOverride6": {
		"kind": "Override",
		"props": {
			"slot": "link-contact-us",
			"color": "--primary"
		}
	},
	"menuOverride7": {
		"kind": "Override",
		"props": {
			"slot": "sub",
			"position": "absolute",
			"left": 0,
			"background": "--color-white",
			"box-shadow": "--shadow1",
			"top": "120%",
			"color": "--primary"
		}
	}
};

const Header = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const [isOpen, setOpen] = useState(false);

	const onToggleOpen = () => setOpen(!isOpen, [isOpen]);

	const stateOpen = isOpen ? ':open' : ':closed';
	return <Section {...rest}>
		<Override slot="SectionContent" flex-direction="row" justify-content="space-between" lg-justify-content="center" />
		<Image {...override("image")} />
		<Image {...override("image1")} />
		<Box onClick={onToggleOpen} {...override("box", `Box ${stateOpen}`)}>
			<Icon {...override("icon")} />
		</Box>
		<Box {...override("box1", `Navigation ${stateOpen}`)}>
			<Box onClick={onToggleOpen} {...override("box2", `Box ${stateOpen}`)}>
				<Icon {...override("icon1")} />
			</Box>
			<Menu {...override("menu", `Menu ${stateOpen}`)}>
				<Override {...override("menuOverride")} />
				<Override {...override("menuOverride1")} />
				<Override {...override("menuOverride2")} />
				<Override {...override("menuOverride3")} />
				<Override {...override("menuOverride4")} />
				<Override {...override("menuOverride5")} />
				<Override {...override("menuOverride6")} />
				<Override {...override("menuOverride7")} />
			</Menu>
		</Box>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;
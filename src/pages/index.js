import React from "react";
import theme from "theme";
import { Theme, Link, Image, List, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="#223B40" padding="20px 0 20px 0" quarkly-title="Menu">
			<Override
				slot="SectionContent"
				flex-direction="row"
				display="grid"
				grid-auto-flow="column"
				grid-template-columns="max-content max-content"
				justify-content="space-between"
			/>
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/Group%20410.svg?v=2021-01-29T16:42:05.760Z" />
			<Components.MainMenus display="grid" align-items="center">
				<List
					list-style-type="none"
					as="ul"
					margin="0 0px 0 0"
					padding="0px 0px 0px 0"
					display="grid"
					grid-auto-flow="column"
					grid-gap="40px"
				>
					<Link
						href="#"
						color="#ffffff"
						text-decoration-line="initial"
						quarkly-title="Home"
						font="400 14px/1em Poppins, sans-serif"
						letter-spacing="0.05em"
					>
						Home
					</Link>
					<Link
						href="#"
						color="#ffffff"
						text-decoration-line="initial"
						quarkly-title="About Us"
						font="400 14px/1em Poppins, sans-serif"
						letter-spacing="0.05em"
					>
						About Us
					</Link>
					<Link
						href="#"
						color="#ffffff"
						text-decoration-line="initial"
						quarkly-title="Capabilities"
						font="400 14px/1em Poppins, sans-serif"
						letter-spacing="0.05em"
					>
						Capabilities
					</Link>
					<Link
						href="#"
						color="#ffffff"
						text-decoration-line="initial"
						quarkly-title="Quality"
						font="400 14px/1em Poppins, sans-serif"
						letter-spacing="0.05em"
					>
						Quality
					</Link>
					<Link
						href="#"
						color="#ffffff"
						text-decoration-line="initial"
						quarkly-title="Our Brand"
						font="400 14px/1em Poppins, sans-serif"
						letter-spacing="0.05em"
					>
						Our Brand
					</Link>
					<Link
						href="#"
						color="#ffffff"
						text-decoration-line="initial"
						quarkly-title="Clients"
						font="400 14px/1em Poppins, sans-serif"
						letter-spacing="0.05em"
					>
						Clients
					</Link>
					<Link
						href="#"
						color="--primary"
						text-decoration-line="initial"
						quarkly-title="Contact Us"
						font="500 14px/1em Poppins, sans-serif"
						letter-spacing="0.05em"
						background="#ffffff"
						padding="10px 15px 10px 15px"
					>
						Contact Us
					</Link>
				</List>
			</Components.MainMenus>
		</Section>
		<Section background="--color-primary" padding="80px 0 100px 0">
			<Override slot="SectionContent" text-align="center" font="--headline2" />
			<Text font="700 42px/50.4px Poppins, sans-serif" color="--whiteLight">
				Best Quality Grade Garment{" "}
				<br />
				{"\n"}Manufacturer - Ready To Export
			</Text>
			<Box margin="30px 0px 0px 0px" quarkly-title="Slider">
				<Image width="100%" height="auto" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/banner-2.jpg?v=2021-01-29T17:20:30.999Z" />
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});
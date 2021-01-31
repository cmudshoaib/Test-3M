import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about-us"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header>
			<Override slot="Navigation :open" lg-left={0} />
		</Components.Header>
		<Components.TopSection />
		<Section background="--color-primary" padding="0 0 24px 0">
			<Box quarkly-title="Banner" position="relative">
				<Image
					src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/Production%20floor%204.jpg?v=2021-01-31T13:56:25.429Z"
					width="100%"
					max-height="400px"
					object-fit="cover"
					display="block"
				/>
				<Box
					quarkly-title="Quote"
					bottom="0px"
					height="auto"
					left="auto"
					right={0}
					top="254px"
					max-width="500px"
					background="--color-lightPrimary"
					padding="20px 20px 20px 10px"
					display="flex"
					position="absolute"
					sm-position="static"
				>
					<Text margin="0 0px 0 0px" color="--primary" font="700 60px/0.8em Poppins, sans-serif" display="block">
						"
					</Text>
					<Text
						margin="0 0px 0 0px"
						color="--primary"
						font="700 18px Poppins, sans-serif"
						display="inline-block"
						padding="0px 0px 0px 20px"
					>
						Enhancing the customer satisfaction by providing quality products by adopting best raw material, environmental practices and complying with best  service standards
					</Text>
				</Box>
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
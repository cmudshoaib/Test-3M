import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, GoogleMap, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact-us"} />
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
		<Components.TopSection
			padding="112px 0px 0px 0px"
			lg-padding="48px 0px 0px 0px"
			lg-height={0}
			lg-min-height={0}
			min-height={0}
		/>
		<Section
			background="--color-primary"
			padding="0 0 0 0"
			inner-max-width="100%"
			inner-width="100%"
			inner-min-width="100%"
		>
			<Box quarkly-title="Contact Page" display="flex" md-flex-direction="column" lg-flex-direction="column">
				<Box
					quarkly-title="Left"
					width="50%"
					display="flex"
					justify-content="center"
					align-items="center"
					lg-height="100%"
					md-width="100%"
					lg-width="100%"
				>
					<Box padding="20px 20px 20px 20px" max-width="600px">
						<Text quarkly-title="Heading" font="--headline2" color="--white">
							Capabilities
						</Text>
						<Text quarkly-title="Description" max-width="900px" color="--whiteLight">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. make a type specimen book.
						</Text>
						<Box display="grid" grid-gap="20px" grid-template-columns="1fr 1fr" margin="30px 0px 0px 0px">
							<Input type="text" placeholder="Name" required name="name" />
							<Input type="text" placeholder="Mobile No." required name="mobile" />
							<Input
								type="text"
								placeholder="Message"
								required
								name="message"
								as="textarea"
								height="180px"
								grid-column="1 / 3"
							/>
							<Button border-width="2px" border-style="solid" border-color="--color-white">
								Button
							</Button>
						</Box>
					</Box>
				</Box>
				<Box
					quarkly-title="Right"
					width="50%"
					height="calc(100vh - 112px)"
					md-width="100%"
					md-height="500px"
					lg-width="100%"
					lg-height="700px"
				>
					<GoogleMap height="100%" />
				</Box>
			</Box>
		</Section>
		<Box background="--color-lightPrimary" height="30px" />
		<Components.Footer />
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
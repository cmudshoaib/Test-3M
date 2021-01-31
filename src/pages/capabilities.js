import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"capabilities"} />
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
		<Section background="--color-primary" padding="0 0 160px 0" md-padding="0 0 120px 0">
			<Box quarkly-title="Intro" padding="0 0px 0px 0px">
				<Text quarkly-title="Heading" font="--headline2" color="--white">
					Capabilities
				</Text>
				<Text quarkly-title="Description" max-width="900px" color="--whiteLight">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</Text>
			</Box>
			<Box quarkly-title="Container" background="--color-lightPrimary" padding="0px 30px 80px 30px" margin="200px 0px 0px 0px">
				<Box
					background="--color-lightPrimary"
					quarkly-title="Capabilities"
					display="grid"
					grid-template-columns="1fr 1fr 1fr"
					padding="0 0px 80px 0px"
					md-grid-template-columns="1fr 1fr"
					sm-grid-template-columns="1fr"
					grid-gap="15px"
				>
					<Components.Capability />
					<Components.Capability sm-margin="0 0px 0px 0px">
						<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/2.jpg?v=2021-01-31T16:49:29.798Z" />
					</Components.Capability>
					<Components.Capability md-margin="0 0px 0px 0px">
						<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/3.jpg?v=2021-01-31T16:50:17.488Z" />
					</Components.Capability>
				</Box>
				<Box quarkly-title="Garment Production">
					<Text font="normal 600 28px/1.2 --fontFamily-googlePoppins" color="--primary" text-align="center">
						Garment Production
					</Text>
					<Box
						quarkly-title="Pagination"
						display="flex"
						justify-content="center"
						margin="0px 0px 10px 0px"
						sm-flex-wrap="wrap"
					>
						<Text
							color="--primary"
							font="500 14px Poppins, sans-serif"
							padding="0px 20px 0px 20px"
							sm-padding="0px 10px 0px 10px"
							sm-margin="5px 0px 5px 0px"
						>
							Fabric Checking
						</Text>
						<Text
							color="--primary"
							font="500 14px Poppins, sans-serif"
							padding="0px 20px 0px 20px"
							sm-padding="0px 10px 0px 10px"
							sm-margin="5px 0px 5px 0px"
						>
							Cutting
						</Text>
						<Text
							color="--primary"
							font="500 14px Poppins, sans-serif"
							padding="0px 20px 0px 20px"
							sm-padding="0px 10px 0px 10px"
							sm-margin="5px 0px 5px 0px"
						>
							Stitching
						</Text>
						<Text
							color="--primary"
							font="500 14px Poppins, sans-serif"
							padding="0px 20px 0px 20px"
							sm-padding="0px 10px 0px 10px"
							sm-margin="5px 0px 5px 0px"
						>
							Washing
						</Text>
						<Text
							color="--primary"
							font="500 14px Poppins, sans-serif"
							padding="0px 20px 0px 20px"
							sm-padding="0px 10px 0px 10px"
							sm-margin="5px 0px 5px 0px"
						>
							Finishing
						</Text>
					</Box>
					<Box quarkly-title="Slider">
						<Box
							quarkly-title="Slide"
							display="grid"
							grid-template-columns="1fr 1fr"
							sm-grid-template-columns="1fr"
							sm-display="flex"
							sm-flex-direction="column-reverse"
						>
							<Box
								quarkly-title="Text"
								display="flex"
								justify-content="center"
								align-items="center"
								padding="20px 20px 20px 20px"
								sm-padding="0 0 0 0"
							>
								<Text color="--primary">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								</Text>
							</Box>
							<Box quarkly-title="Image Content">
								<Image
									width="100%"
									height="100%"
									min-height="400px"
									src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/fbc.jpg?v=2021-01-31T17:11:25.053Z"
									object-position="left"
									sm-min-height="200px"
								/>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Digital Printing" margin="100px 0px 0px 0px">
				<Box
					quarkly-title="Slide"
					display="grid"
					grid-template-columns="1fr 1fr"
					sm-grid-template-columns="1fr"
					sm-display="flex"
					sm-flex-direction="column-reverse"
				>
					<Box
						quarkly-title="Text"
						display="flex"
						justify-content="center"
						align-items="flex-start"
						padding="20px 20px 20px 20px"
						sm-padding="0 0 0 0"
						flex-direction="column"
					>
						<Text font="normal 600 28px/1.2 --fontFamily-googlePoppins" color="--white" text-align="left">
							Digital Printing
						</Text>
						<Text color="--whiteLight" margin="-10px 0px 16px 0px">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</Text>
					</Box>
					<Box quarkly-title="Image Content" position="relative">
						<Box
							width="150px"
							height="100px"
							background="--color-lightPrimary"
							position="absolute"
							top="-20px"
							left="-20px"
							md-height="80px"
							md-width="120px"
							md-top="-15px"
							md-left="-15px"
						/>
						<Box
							width="150px"
							height="100px"
							background="--color-lightPrimary"
							position="absolute"
							top="auto"
							left="auto"
							bottom="-20px"
							right="-20px"
							md-right="-15px"
							md-bottom="-15px"
							md-height="80px"
							md-width="120px"
						/>
						<Image
							height="100%"
							width="100%"
							min-height="400px"
							src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/fbc.jpg?v=2021-01-31T17:11:25.053Z"
							object-fit="cover"
							object-position="left"
							sm-min-height="200px"
							position="relative"
						/>
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Schiffli Embroidery" margin="100px 0px 0px 0px">
				<Box
					quarkly-title="Slide"
					display="grid"
					grid-template-columns="1fr 1fr"
					sm-grid-template-columns="1fr"
					sm-display="flex"
					sm-flex-direction="column"
				>
					<Box quarkly-title="Image Content" position="relative">
						<Box
							width="150px"
							height="100px"
							background="--color-lightPrimary"
							position="absolute"
							top="-20px"
							left="-20px"
							md-left="-15px"
							md-top="-15px"
							md-width="120px"
							md-height="80px"
						/>
						<Box
							width="150px"
							height="100px"
							background="--color-lightPrimary"
							position="absolute"
							top="auto"
							left="auto"
							right="-20px"
							bottom="-20px"
							md-bottom="-15px"
							md-right="-15px"
							md-width="120px"
							md-height="80px"
						/>
						<Image
							height="100%"
							width="100%"
							min-height="400px"
							src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/fbc.jpg?v=2021-01-31T17:11:25.053Z"
							object-fit="cover"
							object-position="left"
							sm-min-height="200px"
							position="relative"
						/>
					</Box>
					<Box
						quarkly-title="Text"
						display="flex"
						justify-content="center"
						align-items="flex-start"
						padding="20px 20px 20px 20px"
						sm-padding="0 0 0 0"
						flex-direction="column"
					>
						<Text font="normal 600 28px/1.2 --fontFamily-googlePoppins" color="--white" text-align="left">
							Schiffli Embroidery
						</Text>
						<Text color="--whiteLight" margin="-10px 0px 16px 0px">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Box min-height="30px" />
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
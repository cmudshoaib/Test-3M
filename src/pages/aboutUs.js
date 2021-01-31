import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Stack, Section } from "@quarkly/components";
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
		<Section background="--color-primary" padding="0 0 160px 0" md-padding="0 0 120px 0">
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
			<Box quarkly-title="Intro" padding="60px 0px 0px 0px">
				<Text quarkly-title="Heading" font="--headline2" color="--white">
					About Us
				</Text>
				<Text quarkly-title="Description" max-width="900px" color="--whiteLight">
					Decades ago, a visionary entrepreneur Shri Jagdish Chand Singla Ji, started out on a journey to reach out to the world, with India at heart in 1960 to build Singla Apparels Pvt. Ltd; which has its presence in the garment industry for over 50 years. The company has been growing steadily in capacity, 
expertise and sales.
				</Text>
				<Stack padding="30px 0px 0px 0px">
					{"    "}{"    "}
					<Components.AboutDescCard md-width="50%" sm-width="100%" />
					<Components.AboutDescCard md-width="50%" sm-width="100%">
						<Override slot="text">
							We Manufacture
						</Override>
						<Override slot="text1">
							4 Brands
						</Override>
						<Override slot="text2">
							3M Exim specializes in Women’s Tops, Dresses, Skirts, Blouses, Shirts, Jackets, Nightwear; Men’s Polo T-shirts, Round/Neck Tees, Shirts,  Bottoms, Jackets and all Kids wears.{"\n"}
						</Override>
					</Components.AboutDescCard>
					<Components.AboutDescCard md-width="100%">
						<Override slot="text">
							Capacity
						</Override>
						<Override slot="text1" display="flex" align-items="center">
							90,000{" "}
							<Span
								font="700 16px/1em Poppins, sans-serif"
								data-q-widget-type="PRIMITIVE"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								<Span
									data-q-widget-type="PRIMITIVE"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{" "}/ Months
								</Span>
							</Span>
						</Override>
						<Override slot="text2">
							At 3M Exim, we are operating through 3 units and have a capacity of manufacturing 90,000 products per month.{"\n\n"}
						</Override>
					</Components.AboutDescCard>
				</Stack>
			</Box>
		</Section>
		<Section background="--color-lightPrimary" padding="120px 0 80px 0">
			<Text quarkly-title="Heading" font="--headline2" color="--primary" margin="16px 0px 0 0px">
				Infrastructure
			</Text>
			<Text quarkly-title="Description" max-width="700px" color="--primary">
				The garments are manufactured in high – tech production and finishing facility, working in environment – friendly conditions.{" "}
			</Text>
			<Box
				quarkly-title="Gallery"
				display="grid"
				grid-template-columns="repeat(12, 1fr)"
				grid-gap="10px"
				margin="14px 0px 0px 0px"
			>
				<Box
					quarkly-title="Single Box"
					grid-column="1 / 7"
					grid-row="1 / 2"
					min-height="300px"
					max-height="500px"
					position="relative"
				>
					<Box
						background="--color-primary"
						position="absolute"
						bottom={0}
						right={0}
						padding="10px 30px 10px 30px"
						max-width="70%"
						z-index="1"
					>
						<Text font="500 20px/1.5em --fontFamily-googlePoppins" color="--white" letter-spacing="0.5px">
							Capacity
						</Text>
						<Text margin="-10px 0px 16px 0px" color="--whiteLight" font="300 16px Poppins, sans-serif">
							90,000 Garments  Per Month
						</Text>
					</Box>
					<Box
						position="absolute"
						bottom={0}
						top={0}
						right={0}
						left={0}
						background="rgba(0, 0, 0, 0.1)"
					/>
					<Image
						width="100%"
						src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/capacity.jpg?v=2021-01-31T15:24:34.197Z"
						display="block"
						height="100%"
						object-fit="cover"
					/>
				</Box>
				<Box
					quarkly-title="Single Box"
					grid-column="7 / 13"
					grid-row="1 / 12"
					min-height="300px"
					max-height="500px"
					position="relative"
				>
					<Box
						background="--color-primary"
						position="absolute"
						bottom={0}
						right={0}
						padding="10px 30px 10px 30px"
						max-width="70%"
						z-index="1"
					>
						<Text font="500 20px/1.5em --fontFamily-googlePoppins" color="--white" letter-spacing="0.5px">
							Sewing machinery{" "}
						</Text>
						<Text margin="-10px 0px 16px 0px" color="--whiteLight" font="300 16px Poppins, sans-serif">
							300 plus lockstitch m/c set with trimmer and 100 plus special operation machines
						</Text>
					</Box>
					<Box
						position="absolute"
						bottom={0}
						right={0}
						top={0}
						left={0}
						background="rgba(0, 0, 0, 0.1)"
					/>
					<Image
						width="100%"
						src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/Production%20floor%204.jpg?v=2021-01-31T13:56:25.429Z"
						display="block"
						height="100%"
						object-fit="cover"
					/>
				</Box>
				<Box
					quarkly-title="Single Box"
					min-height="300px"
					max-height="500px"
					grid-column="1 / 7"
					grid-row="2 / 20"
					position="relative"
				>
					<Box
						background="--color-primary"
						position="absolute"
						bottom={0}
						right={0}
						padding="10px 30px 10px 30px"
						max-width="70%"
						z-index="1"
					>
						<Text font="500 20px/1.5em --fontFamily-googlePoppins" color="--white" letter-spacing="0.5px">
							Specialized Equipments
						</Text>
						<Text margin="-10px 0px 16px 0px" color="--whiteLight" font="300 16px Poppins, sans-serif">
							CAD System and plotter, computerized embroidery m/c, testing equipment, schiffli embroidery machine, washing and dying machine
						</Text>
					</Box>
					<Box
						position="absolute"
						bottom={0}
						top={0}
						right={0}
						left={0}
						background="rgba(0, 0, 0, 0.1)"
					/>
					<Image
						width="100%"
						src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/fusing%20machine%202.jpg?v=2021-01-31T15:25:17.398Z"
						display="block"
						height="100%"
						object-fit="cover"
					/>
				</Box>
				<Box
					quarkly-title="Single Box"
					min-height="300px"
					max-height="500px"
					grid-column="7 / 13"
					grid-row="12 / 20"
					position="relative"
				>
					<Box
						background="--color-primary"
						position="absolute"
						bottom={0}
						right={0}
						padding="10px 30px 10px 30px"
						max-width="70%"
						z-index="1"
					>
						<Text font="500 20px/1.5em --fontFamily-googlePoppins" color="--white" letter-spacing="0.5px">
							Floor Area
						</Text>
						<Text margin="-10px 0px 16px 0px" color="--whiteLight" font="300 16px Poppins, sans-serif">
							Approx.100,000 square feet in 3 units
						</Text>
					</Box>
					<Box
						position="absolute"
						bottom={0}
						top={0}
						right={0}
						left={0}
						background="rgba(0, 0, 0, 0.1)"
					/>
					<Image
						width="100%"
						src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/cutting%20section%202.jpg?v=2021-01-31T15:26:18.685Z"
						display="block"
						height="100%"
						object-fit="cover"
					/>
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
import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"our-brand"} />
		<Helmet>
			<title>
				3M Exim Pvt. Ltd. | Government Approved Garment Exporter
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header>
			<Override slot="Navigation :open" lg-left={0} />
		</Components.Header>
		<Components.TopSection padding="112px 0px 0px 0px" min-height={0} lg-padding="48px 0px 0px 0px" />
		<Section padding="0 0 0 0" inner-width="100%" inner-min-width="100%" inner-max-width="100%">
			<Box
				quarkly-title="Brand Group"
				display="grid"
				grid-template-columns="repeat(12, 1fr)"
				height="calc(100vh - 112px)"
				lg-height="auto"
				sm-display="grid"
			>
				<Box
					quarkly-title="Single Brand"
					grid-column="1 / 4"
					position="relative"
					lg-grid-column="1 / 7"
					sm-grid-column="1 / 7"
				>
					<Image
						width="100%"
						height="100%"
						src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
						display="block"
						object-fit="cover"
						md-min-height="500px"
					/>
					<Box
						position="absolute"
						bottom={0}
						right={0}
						left={0}
						padding="20px 20px 20px 20px"
						color="--primary"
						background="--color-lightPrimary"
						min-height="150px"
						display="flex"
						justify-content="center"
						flex-direction="column"
					>
						<Text margin="0 0px 0 0px" font="normal 500 24px/1.2 --fontFamily-googlePoppins" sm-font="normal 500 20px/1.2 --fontFamily-googlePoppins">
							Lascoot
						</Text>
						<Text margin="5px 0px 0 0px" font="300 14px Poppins, sans-serif" sm-font="300 12px Poppins, sans-serif">
							Synonymous with authentic style and fashion, La'Scoot is a reputed name in men's fashion.{"\n\n"}
						</Text>
						<Box>
							<Link
								href="https://www.lascoot.com/"
								color="--primary"
								text-decoration-line="initial"
								font="700 14px Poppins, sans-serif"
								margin="10px 0px 0px 0px"
								display="block"
								letter-spacing="0.5px"
								target="_blank"
							>
								VISIT THE WEBSITE
							</Link>
						</Box>
					</Box>
				</Box>
				<Box
					quarkly-title="Single Brand"
					grid-column="4 / 7"
					position="relative"
					lg-grid-column="7 / 13"
					sm-grid-column="7/ 13"
				>
					<Image
						width="100%"
						height="100%"
						src="https://images.unsplash.com/photo-1523194258983-4ef0203f0c47?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						display="block"
						object-fit="cover"
					/>
					<Box
						position="absolute"
						bottom={0}
						right={0}
						left={0}
						padding="20px 20px 20px 20px"
						color="--lightPrimary"
						background="--color-primary"
						display="flex"
						min-height="150px"
						justify-content="center"
						flex-direction="column"
					>
						<Text margin="0 0px 0 0px" font="normal 500 24px/1.2 --fontFamily-googlePoppins" color="--white" sm-font="normal 500 20px/1.2 --fontFamily-googlePoppins">
							Zadley
						</Text>
						<Text margin="5px 0px 0 0px" font="300 14px Poppins, sans-serif" color="--whiteLight" sm-font="300 12px Poppins, sans-serif">
							Synonymous with authentic style and fashion, La'Scoot is a reputed name in women's fashion.{"\n\n"}
						</Text>
						<Box>
							<Link
								href="#"
								color="--white"
								text-decoration-line="initial"
								font="700 14px Poppins, sans-serif"
								margin="10px 0px 0px 0px"
								display="block"
								letter-spacing="0.5px"
							>
								VISIT THE WEBSITE
							</Link>
						</Box>
					</Box>
				</Box>
				<Box
					quarkly-title="Single Brand"
					grid-column="7 / 10"
					position="relative"
					lg-grid-column="1 / 7"
					sm-grid-column="1 / 7"
				>
					<Image
						width="100%"
						height="100%"
						src="https://images.unsplash.com/photo-1597926576494-ccac65605ef3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						display="block"
						object-fit="cover"
						lg-min-height="500px"
					/>
					<Box
						position="absolute"
						bottom={0}
						right={0}
						left={0}
						padding="20px 20px 20px 20px"
						color="--primary"
						background="--color-lightPrimary"
						display="flex"
						min-height="150px"
						justify-content="center"
						flex-direction="column"
					>
						<Text margin="0 0px 0 0px" font="normal 500 24px/1.2 --fontFamily-googlePoppins" sm-font="normal 500 20px/1.2 --fontFamily-googlePoppins">
							Beatnik
						</Text>
						<Text margin="5px 0px 0 0px" font="300 14px Poppins, sans-serif" sm-font="300 12px Poppins, sans-serif">
							Synonymous with authentic style and fashion, La'Scoot is a reputed name in men's fashion.{"\n\n"}
						</Text>
						<Box>
							<Link
								href="#"
								color="--primary"
								text-decoration-line="initial"
								font="700 14px Poppins, sans-serif"
								margin="10px 0px 0px 0px"
								display="block"
								letter-spacing="0.5px"
							>
								VISIT THE WEBSITE
							</Link>
						</Box>
					</Box>
				</Box>
				<Box
					quarkly-title="Single Brand"
					grid-column="10 /13"
					position="relative"
					lg-grid-column="7 / 13"
					sm-grid-column="7/ 13"
					sm-width="100%"
				>
					<Image
						width="100%"
						height="100%"
						src="https://images.unsplash.com/photo-1550376026-33cbee34f79e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						display="block"
						object-fit="cover"
					/>
					<Box
						position="absolute"
						bottom={0}
						right={0}
						left={0}
						padding="20px 20px 20px 20px"
						color="--lightPrimary"
						background="--color-primary"
						min-height="150px"
						display="flex"
						flex-direction="column"
						justify-content="center"
					>
						<Text margin="0 0px 0 0px" font="normal 500 24px/1.2 --fontFamily-googlePoppins" color="--white" sm-font="normal 500 20px/1.2 --fontFamily-googlePoppins">
							EduAchiver
						</Text>
						<Text margin="5px 0px 0 0px" font="300 14px Poppins, sans-serif" color="--whiteLight" sm-font="300 12px Poppins, sans-serif">
							EduAchiever is an online learning platform for Class IX- XII.{"\n\n"}
						</Text>
						<Box>
							<Link
								href="#"
								color="--white"
								text-decoration-line="initial"
								font="700 14px Poppins, sans-serif"
								margin="10px 0px 0px 0px"
								display="block"
								letter-spacing="0.5px"
							>
								VISIT THE WEBSITE
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Box height="30px" background="--color-lightPrimary" />
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
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
					We operate textile mills for producing woven and knitted fabrics, sourcing the high-quality cotton which is then processed into textiles for garments and other products. A significant proportion of the cotton we source is certified as sustainable either by the Global Organic Textile Standard or Better Cotton Initiative{"\n\n"}
				</Text>
			</Box>
			<Box quarkly-title="Container" background="--color-lightPrimary" padding="40px 30px 80px 30px" margin="40px 0px 0px 0px">
				<Box
					background="--color-lightPrimary"
					quarkly-title="Capabilities"
					display="none"
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
						display="none"
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
									Garment production is an organized activity consisting of sequential processes such as laying, marking, cutting, stitching, checking, finishing, pressing and packaging. This is a process of converting raw materials into finished products. It will be difficult to maintain the industry if production is not up to the mark or if the preproduction phase of preparation of material is not properly carried out.
									<br />
									<br />
									Ready to wear apparel or garment manufacturing involves many processing steps, beginning with the idea or design concept to ending with a finished product. Apparel manufacturing process involves Product Design, Fabric Selection and Inspection, Patternmaking, Grading, Marking, Spreading, Cutting, Bundling, Sewing, Pressing or Folding, Finishing and Detailing, Dyeing and Washing, QC etc.{"\n\n"}
								</Text>
							</Box>
							<Box quarkly-title="Image Content">
								<Image
									width="100%"
									height="100%"
									min-height="400px"
									src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/gp.jpg?v=2021-02-07T15:59:17.141Z"
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
							Dyeing & Printing
						</Text>
						<Text color="--whiteLight" margin="-10px 0px 16px 0px">
							We engage in manufacturing of the Fabrics and Garments with state-of-the-art infrastructure. The Noida layout is a strong and sturdy framework of various units that work hand in hand to create fabric that dresses some of the well known names worldwide.{" "}
							<br />
							<br />
							The units process fabrics ranging from 100% cotton to 100% polyester. The in-house laboratory is well equipped with modern techniques to facilitate physical and chemical testing on fabrics. All machines are fully computerized and equipped with PLC control.{"\n\n"}
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
							src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/2%20(1).jpg?v=2021-02-07T16:05:17.362Z"
							object-fit="cover"
							object-position="left"
							sm-min-height="200px"
							position="relative"
						/>
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Schiffli Embroidery" margin="160px 0px 0px 0px">
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
							src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/embr.jpg?v=2021-02-07T16:07:16.198Z"
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
							A multiple head embroidery machine has multiple embroidery heads, around 6 to 8 which simultaneously work. They can however function independently, meaning they do not necessarily embroider the same dessin in the fabric but can be separately adapted. Yarn for multiple head embroidery needs to withstand high forces. Embroidery yarn is thus always a combination of minimum of 2+ yarns plied together at a high twist, whereas even the single yarns are highly twisted. Yarn for multiple head embroidery is wound on multiple head embroidery bobbins.{"\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Screen Painting" margin="160px 0px 0px 0px">
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
							Screen Painting
						</Text>
						<Text color="--whiteLight" margin="-10px 0px 16px 0px">
							Its oval design takes up less floor space than comparable carousel automatic screen printing presses, making more efficient use of the available production area. Available in three print format sizes and expandable from 10 to 52 stations with selectable printhead locations, the Stryker can be tailored to almost any production requirement, floor layout or shop size. A high-quality, smooth-operating servo-drive indexer provides fast, accurate single or double indexing, making Stryker ideal for cut-piece and all-over print garments. The 80x110 model can print up to 132 x 110 cm (52” x 43.5”) in alternating printheads!{"\n\n"}
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
							src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1280.jfif?v=2021-02-07T16:08:42.796Z"
							object-fit="cover"
							object-position="left"
							sm-min-height="200px"
							position="relative"
						/>
					</Box>
				</Box>
			</Box>
			<Box quarkly-title="Multi Head " margin="160px 0px 0px 0px">
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
							src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/602010efe1e9a.jpg?v=2021-02-07T16:11:10.501Z"
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
							Multi Head Computerized Embroidery
						</Text>
						<Text color="--whiteLight" margin="-10px 0px 16px 0px">
							The new K Automat features 10.4" Color Touch Screen, higher resolution and a 100 design, 70 million stitch memory. User-friendly icons and an intuitive main screen provide quicker access to functions and features. It is available on all new multi-head machines. LAN and COM connectors are standard for networking along with 2 USB ports for devices such as barcode scanner, keyboard, mouse, hub and card reader.{"\n\n"}
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
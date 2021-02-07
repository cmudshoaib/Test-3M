import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
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
		<Components.Header>
			<Override slot="Navigation :open" lg-left={0} />
			<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/logo-white.svg?v=2021-02-07T14:39:39.988Z" />
		</Components.Header>
		<Section
			padding="160px 0 80px 0"
			background="--color-primary"
			md-padding="60px 0 60px 0"
			quarkly-title="Banner"
			lg-padding="100px 0 80px 0"
		>
			<Text
				font="normal 600 42px/1.2 --fontFamily-googlePoppins"
				text-align="center"
				color="--whiteLight"
				md-font="normal 600 30px/1.2 --fontFamily-googlePoppins"
				sm-font="normal 600 24px/1.2 --fontFamily-googlePoppins"
				margin="16px 0px 0 0px"
			>
				Government Approved Garment Exporter
			</Text>
			<Text
				font="normal 600 22px/1.2 --fontFamily-googlePoppins"
				text-align="center"
				color="--whiteLight"
				md-font="normal 600 18px/1.2 --fontFamily-googlePoppins"
				sm-font="normal 600 16px/1.2 --fontFamily-googlePoppins"
			>
				We understand fashion industry
			</Text>
			<Image
				height="36px"
				align-self="center"
				src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/sedex.svg?v=2021-02-07T13:51:06.066Z"
				background="--color-white"
				padding="10px 20px 10px 20px"
				margin="0px 0px 0 0px"
			/>
			<Text
				font="normal 600 10px/1.4 --fontFamily-googlePoppins"
				text-align="center"
				color="--whiteLight"
				md-font="normal 600 10px/1.4 --fontFamily-googlePoppins"
				sm-font="normal 600 12px/1.2 --fontFamily-googlePoppins"
				margin="0 0px 30px 0px"
				letter-spacing="1.2vw"
				text-transform="uppercase"
				padding="0px 0 0px 10px"
				md-letter-spacing="1.9vw"
				sm-letter-spacing="3vw"
			>
				Approved
			</Text>
			<Box quarkly-title="Slider">
				<Box>
					<Image
						width="100%"
						height="auto"
						display="block"
						src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/banner-new.jpg?v=2021-02-07T14:50:18.707Z"
						max-height="600px"
						object-fit="cover"
					/>
				</Box>
				<Stack padding="40px 0px 0px 0px" md-padding="30px 0px 0px 0px">
					{"    "}
					<StackItem width="33.333%" display="flex" lg-width="50%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Box
							height="3px"
							width="100%"
							background="--color-white"
							min-height="1px"
							margin="0px 0px 12px 0px"
							md-margin="0px 0px 5px 0px"
						/>
						<Text
							font="normal 500 20px/1.5 --fontFamily-googlePoppins"
							margin="0px 0px 0 0px"
							display="inline-block"
							color="--white"
							padding="0px 0px 5px 0px"
							md-font="normal 500 18px/1.5 --fontFamily-googlePoppins"
						>
							Garment Production
						</Text>
						<Text
							font="normal 300 14px/1.5 --fontFamily-googlePoppins"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--whitelight1"
							letter-spacing="0.5px"
							md-font="normal 300 12px/1.5 --fontFamily-googlePoppins"
						>
							Garment production is an organized activity consisting of sequential processes such as laying, marking, cutting, stitching, checking, finishing, pressing...
						</Text>
						<Link
							href="/about-us"
							text-decoration-line="initial"
							background="rgba(255, 255, 255, 0)"
							color="--white"
							max-width="200px"
							text-align="center"
							align-self="flex-start"
							margin="10px 0px 0px 0px"
							border-style="solid"
							border-width="0 0 2px 0"
						>
							READ MORE
						</Link>
						{"    "}
					</StackItem>
					<StackItem width="33.333%" display="flex" lg-width="50%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Box
							height="3px"
							width="100%"
							min-height="1px"
							margin="0px 0px 12px 0px"
							md-margin="0px 0px 5px 0px"
						/>
						<Text
							font="normal 500 20px/1.5 --fontFamily-googlePoppins"
							margin="0px 0px 0 0px"
							display="inline-block"
							color="--white"
							padding="0px 0px 5px 0px"
							md-font="normal 500 18px/1.5 --fontFamily-googlePoppins"
						>
							Dyeing & Printing
						</Text>
						<Text
							font="normal 300 14px/1.5 --fontFamily-googlePoppins"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--whitelight1"
							letter-spacing="0.5px"
							md-font="normal 300 12px/1.5 --fontFamily-googlePoppins"
						>
							We engage in manufacturing of the Fabrics and Garments with state-of-the-art infrastructure. The Noida layout is a strong and sturdy framework of various units...
						</Text>
						<Link
							href="/about-us"
							text-decoration-line="initial"
							background="rgba(255, 255, 255, 0)"
							color="--white"
							max-width="200px"
							text-align="center"
							align-self="flex-start"
							margin="10px 0px 0px 0px"
							border-width="0 0 2px 0"
							border-style="solid"
						>
							READ MORE
						</Link>
						{"    "}
					</StackItem>
					<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Box
							height="3px"
							width="100%"
							min-height="1px"
							margin="0px 0px 12px 0px"
							md-margin="0px 0px 5px 0px"
						/>
						<Text
							font="normal 500 20px/1.5 --fontFamily-googlePoppins"
							margin="0px 0px 0 0px"
							display="inline-block"
							color="--white"
							padding="0px 0px 5px 0px"
							md-font="normal 500 18px/1.5 --fontFamily-googlePoppins"
						>
							Schiffli Embroidery
						</Text>
						<Text
							font="normal 300 14px/1.5 --fontFamily-googlePoppins"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--whitelight1"
							letter-spacing="0.5px"
							md-font="normal 300 12px/1.5 --fontFamily-googlePoppins"
						>
							A multiple head embroidery machine has multiple embroidery heads, around 6 to 8 which simultaneously work. They can however function independently, meaning they...
						</Text>
						<Link
							href="/about-us"
							text-decoration-line="initial"
							background="rgba(255, 255, 255, 0)"
							color="--white"
							max-width="200px"
							text-align="center"
							align-self="flex-start"
							margin="10px 0px 0px 0px"
							border-width="0 0 2px 0"
							border-style="solid"
						>
							READ MORE
						</Link>
						{"    "}
					</StackItem>
					<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Box
							height="3px"
							width="100%"
							min-height="1px"
							margin="0px 0px 12px 0px"
							md-margin="0px 0px 5px 0px"
						/>
						<Text
							font="normal 500 20px/1.5 --fontFamily-googlePoppins"
							margin="0px 0px 0 0px"
							display="inline-block"
							color="--white"
							padding="0px 0px 5px 0px"
							md-font="normal 500 18px/1.5 --fontFamily-googlePoppins"
						>
							Screen Printing
						</Text>
						<Text
							font="normal 300 14px/1.5 --fontFamily-googlePoppins"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--whitelight1"
							letter-spacing="0.5px"
							md-font="normal 300 12px/1.5 --fontFamily-googlePoppins"
						>
							Its oval design takes up less floor space than comparable carousel automatic screen printing presses, making more efficient use of the available production area. Available in three...
						</Text>
						<Link
							href="/about-us"
							text-decoration-line="initial"
							background="rgba(255, 255, 255, 0)"
							color="--white"
							max-width="200px"
							text-align="center"
							align-self="flex-start"
							margin="10px 0px 0px 0px"
							border-width="0 0 2px 0"
							border-style="solid"
						>
							READ MORE
						</Link>
						{"    "}
					</StackItem>
					<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Box
							height="3px"
							width="100%"
							min-height="1px"
							margin="0px 0px 12px 0px"
							md-margin="0px 0px 5px 0px"
						/>
						<Text
							font="normal 500 20px/1.5 --fontFamily-googlePoppins"
							margin="0px 0px 0 0px"
							display="inline-block"
							color="--white"
							padding="0px 0px 5px 0px"
							md-font="normal 500 18px/1.5 --fontFamily-googlePoppins"
						>
							Multi Head Computerized Emb.
						</Text>
						<Text
							font="normal 300 14px/1.5 --fontFamily-googlePoppins"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="--whitelight1"
							letter-spacing="0.5px"
							md-font="normal 300 12px/1.5 --fontFamily-googlePoppins"
						>
							The new K Automat features 10.4" Color Touch Screen, higher resolution and a 100 design, 70 million stitch memory. User-friendly icons and an intuitive main...
						</Text>
						<Link
							href="/about-us"
							text-decoration-line="initial"
							background="rgba(255, 255, 255, 0)"
							color="--white"
							max-width="200px"
							text-align="center"
							align-self="flex-start"
							margin="10px 0px 0px 0px"
							border-width="0 0 2px 0"
							border-style="solid"
						>
							READ MORE
						</Link>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Box>
		</Section>
		<Section background="--color-primary" padding="80px 0 80px 0" quarkly-title="About Us 2">
			<Override slot="SectionContent" sm-flex-direction="row" />
			<Stack sm-flex-direction="column">
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" position="relative" padding="0px 0px 0px 40px" flex-direction="column" />
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--white"
						position="absolute"
						bottom="114px"
						height="38px"
						left={0}
						right="auto"
						top="-20px"
						width="35.2812px"
					>
						"
					</Text>
					<Text font="normal 600 22px/1.5 --fontFamily-googlePoppins" margin="0px 0px 0px 0px" display="block" color="--white">
						Enhancing the customer satisfaction by providing 
quality products by adopting best raw material, 
environmental practices and complying with best 
service standards
					</Text>
					<Stack padding="25px 0px 0px 0px">
						{"    "}
						<StackItem width="50%" display="flex">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 300 12px/1.5 --fontFamily-googlePoppins"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="--whitelight1"
								letter-spacing="1px"
							>
								Founded In
							</Text>
							<Text
								font="normal 600 22px/1.5 --fontFamily-googlePoppins"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="--white"
								letter-spacing="1px"
							>
								2013
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 300 12px/1.5 --fontFamily-googlePoppins"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="--whitelight1"
								letter-spacing="1px"
							>
								Manufacturing Capacity
							</Text>
							<Text
								font="normal 600 22px/1.5 --fontFamily-googlePoppins"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="--white"
								letter-spacing="1px"
							>
								90,000
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 300 12px/1.5 --fontFamily-googlePoppins"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="--whitelight1"
								letter-spacing="1px"
							>
								Certification
							</Text>
							<Text
								font="normal 600 22px/1.5 --fontFamily-googlePoppins"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="--white"
								letter-spacing="1px"
							>
								SEDEX
							</Text>
							{"    "}
						</StackItem>
						<StackItem width="50%" display="flex">
							<Override slot="StackItemContent" flex-direction="column" />
							{"        "}
							<Text
								font="normal 300 12px/1.5 --fontFamily-googlePoppins"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="--whitelight1"
								letter-spacing="1px"
							>
								Our Brands
							</Text>
							<Text
								font="normal 600 22px/1.5 --fontFamily-googlePoppins"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="--white"
								letter-spacing="1px"
							>
								4
							</Text>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="16px 16px 16px 16px" />
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 0px 0px"
						display="block"
						color="--white"
						padding="0px 0px 10px 0px"
					>
						About Us
					</Text>
					<Text
						font="--para3"
						margin="0px 0px 0px 0px"
						display="block"
						color="--whitelight1"
						letter-spacing="0.5px"
					>
						Decades ago, a visionary entrepreneur Shri Jagdish 
Chand Singla Ji, started out on a journey to reach 
out to the world, with India at heart in 1960 to build 
Singla Apparels Pvt. Ltd; which has its presence in 
the garment industry for over 50 years. The 
company has been growing steadily in capacity, 
expertise and sales.
					</Text>
					<Link
						href="/about-us"
						text-decoration-line="initial"
						background="--color-white"
						color="--primary"
						display="block"
						max-width="200px"
						text-align="center"
						padding="8px 0px 8px 0px"
						margin="20px 0px 0px 0px"
					>
						Know More About Us
					</Link>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-lightPrimary" padding="120px 0 100px 0">
			<Box>
				<Text font="--headline2" margin="0 0px 0 0px" color="--primary" display="inline-block">
					Our
				</Text>
				<Box display="inline-block">
					<Text font="--headline2" margin="0 0px 0 0px" color="--primary" display="inline-block">
						{" "}Brands
					</Text>
					<Box background="--color-primary" min-height="1px" height="4px" />
				</Box>
			</Box>
			<Text color="--primary" font="--para3" display="none">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
			</Text>
			<Stack font="500 16px Poppins, sans-serif" padding="20px 0px 0px 0px">
				{"    "}
				<StackItem width="33.33%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-white"
						box-shadow="--shadow1"
						border-radius="6px"
					/>
					{"        "}
					<Box text-align="center" padding="15px 10px 5px 10px">
						<Image width="auto" height="50px" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/lascoot.png?v=2021-02-07T15:32:06.808Z" />
					</Box>
					<Box>
						<Image
							width="100%"
							height="auto"
							src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1%20(1).jpg?v=2021-01-30T07:13:39.853Z"
							display="block"
							max-height="300px"
							object-position="top"
							object-fit="cover"
						/>
					</Box>
					<Box padding="20px 15px 20px 15px" display="flex" justify-content="space-between">
						<Box>
							<Text font="normal 500 12px/1.5 --fontFamily-googlePoppins" margin="0px 0px 0px 0px" display="block" color="--primary">
								Clothings - Men
							</Text>
							<Text font="700 20px/1.5em --fontFamily-googlePoppins" margin="0px 0px 0px 0px" display="block" color="--primary">
								LASCOOT
							</Text>
						</Box>
						<Box>
							<Button background="--color-lightPrimary" color="--primary" font="normal 600 16px/1.5 Poppins, sans-serif">
								VISIT
							</Button>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-white"
						box-shadow="--shadow1"
						border-radius="6px"
					/>
					{"        "}
					<Box text-align="center" padding="15px 10px 5px 10px">
						<Image width="auto" height="50px" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/zadley.png?v=2021-02-07T15:28:31.278Z" />
					</Box>
					<Box>
						<Image
							width="100%"
							height="auto"
							src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/p1.png?v=2021-02-07T15:25:33.666Z"
							display="block"
							object-fit="cover"
							object-position="top"
							max-height="300px"
						/>
					</Box>
					<Box padding="20px 15px 20px 15px" display="flex" justify-content="space-between">
						<Box>
							<Text font="normal 500 12px/1.5 --fontFamily-googlePoppins" margin="0px 0px 0px 0px" display="block" color="--primary">
								Clothings - Women
							</Text>
							<Text font="700 20px/1.5em --fontFamily-googlePoppins" margin="0px 0px 0px 0px" display="block" color="--primary">
								Zadley
							</Text>
						</Box>
						<Box>
							<Button background="--color-lightPrimary" color="--primary" font="normal 600 16px/1.5 Poppins, sans-serif">
								VISIT
							</Button>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-white"
						box-shadow="--shadow1"
						border-radius="6px"
					/>
					{"        "}
					<Box text-align="center" padding="15px 10px 5px 10px">
						<Image width="auto" height="50px" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/3%20(1).jpg?v=2021-01-30T07:18:06.425Z" />
					</Box>
					<Box>
						<Image
							width="100%"
							height="auto"
							src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1%20(1).jpg?v=2021-01-30T07:13:39.853Z"
							display="block"
							max-height="300px"
							object-fit="cover"
							object-position="top"
						/>
					</Box>
					<Box padding="20px 15px 20px 15px" display="flex" justify-content="space-between">
						<Box>
							<Text font="normal 500 12px/1.5 --fontFamily-googlePoppins" margin="0px 0px 0px 0px" display="block" color="--primary">
								Clothings - Men, Women
							</Text>
							<Text font="700 20px/1.5em --fontFamily-googlePoppins" margin="0px 0px 0px 0px" display="block" color="--primary">
								LASCOOT
							</Text>
						</Box>
						<Box>
							<Button background="--color-lightPrimary" color="--primary" font="normal 600 16px/1.5 Poppins, sans-serif">
								VISIT
							</Button>
						</Box>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Link
				href="/clients"
				text-decoration-line="initial"
				color="--white"
				display="block"
				max-width="200px"
				text-align="center"
				padding="8px 15px 8px 15px"
				background="--color-primary"
				margin="40px 0px 0px 0px"
				align-self="center"
			>
				SHOW MORE BRANDS
			</Link>
		</Section>
		<Section background="--color-lightPrimary" padding="60px 0 160px 0">
			<Box text-align="center">
				<Text font="--headline2" margin="0 0px 0 0px" color="--primary" display="inline-block">
					Our
				</Text>
				<Box display="inline-block">
					<Text font="--headline2" margin="0 0px 0 0px" color="--primary" display="inline-block">
						{" "}Clients
					</Text>
					<Box background="--color-primary" min-height="1px" height="4px" />
				</Box>
			</Box>
			<Text
				color="--primary"
				font="--para3"
				text-align="center"
				max-width="960px"
				margin="16px auto 30px auto"
			>
				3M Exim has its global presence. The company also caters to the large reputed Indian Retail labels like Reliance Trends, Pantaloons, 
Wills Lifestyle, Vishal Megamart (TPG Group) and Future Retail Ltd(Big Bazar).
			</Text>
			<Stack justify-content="center">
				{"    "}
				<Components.LogoBox />
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-08.png?v=2021-01-30T12:20:40.481Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-06.png?v=2021-01-30T12:21:09.370Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/vanhe.jpg?v=2021-01-30T11:22:38.918Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-02.png?v=2021-01-30T12:19:10.937Z" />
				</Components.LogoBox>
				{"    "}
			</Stack>
			<Box display="flex" justify-content="center">
				<Link
					href="/clients"
					text-decoration-line="initial"
					color="--white"
					display="block"
					max-width="200px"
					text-align="center"
					padding="8px 15px 8px 15px"
					background="--color-primary"
					margin="40px 0px 0px 0px"
				>
					SEE MORE CLIENTS
				</Link>
			</Box>
		</Section>
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
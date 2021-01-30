import React from "react";
import theme from "theme";
import { Theme, Link, Image, List, Text, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section, StackItem, Stack, SocialMedia } from "@quarkly/components";
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
					lg-grid-gap="30px"
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
		<Section padding="80px 0 80px 0" background="--color-primary" md-padding="40px 0 80px 0" quarkly-title="About Us">
			<Text font="normal 600 42px/1.2 --fontFamily-googlePoppins" text-align="center" color="--whiteLight" md-font="normal 600 30px/1.2 --fontFamily-googlePoppins">
				Best Quality Grade Garment{" "}
				<br />
				Manufacturer - Ready To Export
			</Text>
			<Box>
				<Image width="100%" height="auto" display="block" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/banner-2.jpg?v=2021-01-29T17:20:30.999Z" />
			</Box>
			<Stack padding="40px 0px 0px 0px">
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
					/>
					<Text
						font="normal 500 20px/1.5 --fontFamily-googlePoppins"
						margin="0px 0px 0 0px"
						display="inline-block"
						color="--white"
						padding="0px 0px 5px 0px"
					>
						Garment Production
					</Text>
					<Text
						font="normal 300 14px/1.5 --fontFamily-googlePoppins"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--whitelight1"
						letter-spacing="0.5px"
					>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Box height="3px" width="100%" min-height="1px" margin="0px 0px 12px 0px" />
					<Text
						font="normal 500 20px/1.5 --fontFamily-googlePoppins"
						margin="0px 0px 0 0px"
						display="inline-block"
						color="--white"
						padding="0px 0px 5px 0px"
					>
						Digital Printing
					</Text>
					<Text
						font="normal 300 14px/1.5 --fontFamily-googlePoppins"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--whitelight1"
						letter-spacing="0.5px"
					>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Box height="3px" width="100%" min-height="1px" margin="0px 0px 12px 0px" />
					<Text
						font="normal 500 20px/1.5 --fontFamily-googlePoppins"
						margin="0px 0px 0 0px"
						display="inline-block"
						color="--white"
						padding="0px 0px 5px 0px"
					>
						Schiffli Embroidery
					</Text>
					<Text
						font="normal 300 14px/1.5 --fontFamily-googlePoppins"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--whitelight1"
						letter-spacing="0.5px"
					>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
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
								2003
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
								8000:2008
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
						href="#"
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
		<Section background="--color-lightPrimary" padding="120px 0 120px 0">
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
			<Text color="--primary" font="--para3">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
			</Text>
			<Stack font="500 16px Poppins, sans-serif" padding="20px 0px 0px 0px">
				{"    "}
				<StackItem width="33.33%" display="flex">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-white"
						box-shadow="--shadow1"
						border-radius="6px"
					/>
					{"        "}
					<Box text-align="center" padding="5px 10px 5px 10px">
						<Image width="auto" height="50px" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/3%20(1).jpg?v=2021-01-30T07:18:06.425Z" />
					</Box>
					<Box>
						<Image width="100%" height="auto" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1%20(1).jpg?v=2021-01-30T07:13:39.853Z" display="block" />
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
				<StackItem width="33.33%" display="flex">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-white"
						box-shadow="--shadow1"
						border-radius="6px"
					/>
					{"        "}
					<Box text-align="center" padding="5px 10px 5px 10px">
						<Image width="auto" height="50px" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/3%20(1).jpg?v=2021-01-30T07:18:06.425Z" />
					</Box>
					<Box>
						<Image width="100%" height="auto" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1%20(1).jpg?v=2021-01-30T07:13:39.853Z" display="block" />
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
				<StackItem width="33.33%" display="flex">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						background="--color-white"
						box-shadow="--shadow1"
						border-radius="6px"
					/>
					{"        "}
					<Box text-align="center" padding="5px 10px 5px 10px">
						<Image width="auto" height="50px" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/3%20(1).jpg?v=2021-01-30T07:18:06.425Z" />
					</Box>
					<Box>
						<Image width="100%" height="auto" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1%20(1).jpg?v=2021-01-30T07:13:39.853Z" display="block" />
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
		</Section>
		<Section background="--color-lightPrimary" padding="80px 0 160px 0">
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
				margin="16px auto 16px auto"
			>
				3M Exim has its global presence. The company also caters to the large reputed Indian Retail labels like Reliance Trends, Pantaloons, 
Wills Lifestyle, Vishal Megamart (TPG Group) and Future Retail Ltd(Big Bazar).
			</Text>
			<Stack justify-content="center">
				{"    "}
				<StackItem display="flex">
					<Override slot="StackItemContent" padding="10px 10px 10px 10px" background="--color-white" />
					<Image
						max-width="150px"
						max-height="150px"
						width="150px"
						height="150px"
						src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/vanhe.jpg?v=2021-01-30T11:22:38.918Z"
						background="--color-white"
					/>
					{"            "}
				</StackItem>
				<StackItem display="flex">
					<Override slot="StackItemContent" padding="10px 10px 10px 10px" background="--color-white" />
					<Image
						max-width="150px"
						max-height="150px"
						width="150px"
						height="150px"
						src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-02.png?v=2021-01-30T12:19:10.937Z"
						background="--color-white"
					/>
					{"            "}
				</StackItem>
				<StackItem display="flex">
					<Override slot="StackItemContent" padding="10px 10px 10px 10px" background="--color-white" />
					<Image
						max-width="150px"
						max-height="150px"
						width="150px"
						height="150px"
						src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-08.png?v=2021-01-30T12:20:40.481Z"
						background="--color-white"
					/>
					{"            "}
				</StackItem>
				<StackItem display="flex">
					<Override slot="StackItemContent" padding="10px 10px 10px 10px" background="--color-white" />
					<Image
						max-width="150px"
						max-height="150px"
						width="150px"
						height="150px"
						src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-06.png?v=2021-01-30T12:21:09.370Z"
						background="--color-white"
					/>
					{"            "}
				</StackItem>
				<StackItem display="flex">
					<Override slot="StackItemContent" padding="10px 10px 10px 10px" background="--color-white" />
					<Image
						max-width="150px"
						max-height="150px"
						width="150px"
						height="150px"
						src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-14.png?v=2021-01-30T12:21:26.763Z"
						background="--color-white"
					/>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Box display="flex" justify-content="center">
				<Link
					href="#"
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
		<Section background="--color-primary" padding="80px 0 30px 0">
			<Text margin="0 0px 0 0px" font="500 20px/1.5em --fontFamily-googlePoppins" color="--white" letter-spacing="0.5px">
				3M Exim Pvt. Ltd.
			</Text>
			<Text
				margin="0 0px 0 0px"
				font="normal 300 14px/1.5 --fontFamily-googlePoppins"
				color="--whiteLight"
				letter-spacing="0.5px"
				max-width="900px"
			>
				Decades ago, a visionary entrepreneur Shri Jagdish Chand Singla Ji, started out on a journey to reach out to 
he world, with India at heart in 1960 to build Singla Apparels Pvt. Ltd; which has its presence in the garment 
industry for over 50 years. The company has been growing steadily in capacity, expertise and sales.
			</Text>
			<Stack padding="40px 0px 0px 0px" justify-content="space-between">
				{"    "}
				<StackItem display="flex">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Link href="#" color="--white" text-decoration-line="initial">
						Copyright © 2021 3M Exim Pvt. Ltd
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem display="flex">
					<SocialMedia instagram="https://twitter.com/quarklyapp" facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp">
						<Override slot="link" background="rgba(0, 0, 0, 0)" hover-background="rgba(0, 0, 0, 0)" />
						<Override slot="icon" color="--white" />
					</SocialMedia>
					{"            "}
				</StackItem>
				<StackItem display="flex" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Components.MainMenus display="grid" align-items="center">
						<List
							list-style-type="none"
							as="ul"
							margin="0 0px 0 0"
							padding="0px 0px 0px 0"
							display="grid"
							grid-auto-flow="column"
							grid-gap="40px"
							lg-grid-gap="30px"
						>
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
								Privacy Policy
							</Link>
						</List>
					</Components.MainMenus>
					{"            "}
				</StackItem>
			</Stack>
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
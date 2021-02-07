import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"clients"} />
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
		<Components.TopSection />
		<Section background="--color-primary" padding="0 0 120px 0">
			<Text quarkly-title="Heading" font="--headline2" color="--white" margin="16px 0px 10px 0px">
				Our Clients
			</Text>
			<Text quarkly-title="Description" max-width="900px" color="--whiteLight" margin="0 0px 16px 0px">
				3M Exim has its global presence. The company also caters to the large reputed Indian Retail labels like Reliance Trends, Pantaloons, Wills Lifestyle, Vishal Megamart (TPG Group) and Future Retail Ltd(Big Bazar).{"\n\n"}
			</Text>
			<Text quarkly-title="Heading" font="normal 500 24px/1.2 --fontFamily-googlePoppins" color="--white" margin="16px 0px 5px 0px">
				Domestic
			</Text>
			<Box
				display="flex"
				grid-gap="15px"
				grid-template-columns="repeat(6, 170px)"
				grid-auto-columns="170px"
				flex-wrap="wrap"
				justify-content="flex-start"
				margin="5px 0px 0px 0px"
			>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-08.png?v=2021-01-30T12:20:40.481Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/925921388s.jpg?v=2021-02-07T16:21:47.060Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/thumb_logo-Pantaloons-1432207932.png?v=2021-02-07T16:22:59.112Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1%20(1).jpg?v=2021-02-07T16:23:58.586Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/news7943.jpg?v=2021-02-07T16:25:06.862Z" />
				</Components.LogoBox>
			</Box>
			<Text quarkly-title="Heading" font="normal 500 24px/1.2 --fontFamily-googlePoppins" color="--white" margin="40px 0px 5px 0px">
				Overseas
			</Text>
			<Box
				display="flex"
				grid-gap="15px"
				grid-template-columns="repeat(6, 170px)"
				grid-auto-columns="170px"
				flex-wrap="wrap"
				margin="5px 0px 0px 0px"
			>
				<Components.LogoBox />
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-06.png?v=2021-01-30T12:21:09.370Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/vanhe.jpg?v=2021-01-30T11:22:38.918Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-02.png?v=2021-01-30T12:19:10.937Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-03.png?v=2021-01-31T18:41:39.652Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-07.png?v=2021-01-31T18:41:39.669Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-16.png?v=2021-01-31T18:41:39.650Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-04.png?v=2021-01-31T18:41:39.649Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-05.png?v=2021-01-31T18:41:39.646Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-15.png?v=2021-01-31T18:41:39.645Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-13.png?v=2021-01-31T18:41:39.645Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-11.png?v=2021-01-31T18:41:39.644Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-10.png?v=2021-01-31T18:41:39.643Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-09.png?v=2021-01-31T18:41:39.641Z" />
				</Components.LogoBox>
				<Components.LogoBox>
					<Override slot="image" src="https://uploads.quarkly.io/601439a871e66d001efaf959/images/1-12.png?v=2021-01-31T18:41:39.634Z" />
				</Components.LogoBox>
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
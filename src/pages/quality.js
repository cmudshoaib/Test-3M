import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"quality"} />
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
		<Section background="--color-primary" padding="0 0 80px 0">
			<Text quarkly-title="Heading" font="--headline2" color="--white">
				Quality
			</Text>
			<Text quarkly-title="Description" max-width="900px" color="--whiteLight" margin="0 0px 16px 0px">
				The company has SA 8000:2008 Certificate from RINA Services S.p.a. Genova, ITALY and SEDEX from SGS,  and having a special team for Quality Assurance and Quality Control.{" "}
				<br />
				The company is consistently improving & updating itself  to the ever increasing quality demands of the Global Market.{"\n"}
				<br />
				<br />
				{"\n"}The company operates at a general AQL level of 2.5.{"\n"}
				<br />
				{"\n"}Our Quality Motto is “ Enhancing the customer satisfaction by providing quality products by adopting best raw material, environmental practices and complying with best service standards,{"  "}
			</Text>
			<Text quarkly-title="Heading" font="--headline3" color="--white" margin="100px 0px 12px 0px">
				Machinery Details
			</Text>
			<Text
				quarkly-title="Description"
				max-width="900px"
				color="--whiteLight"
				margin="0 0px 16px 0px"
				font="14px Poppins, sans-serif"
			>
				The company is equipped with most advanced technology machinery, and is always keen to move ahead to keep pace with the changing technologies.
The detailed list of Plant & Machinery is  being annexed :-{"  "}
			</Text>
			<Box quarkly-title="Details" margin="20px 40px 0px 40px" display="flex" sm-flex-wrap="wrap">
				<Box
					quarkly-title="Single Detail"
					width="40%"
					background="--color-lightPrimary"
					padding="20px 20px 20px 20px"
					display="flex"
					grid-template-columns="1fr"
					grid-gap="10px"
					flex-direction="column"
					sm-width="100%"
				>
					<Components.QualityItem color="--primary" />
					<Components.QualityItem color="--primary">
						<Override slot="text">
							Programmable, single needle power operated industrial lock stitch sewing machine complete set with trimmer - ( 20 Nos )
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--primary">
						<Override slot="text">
							Power operated 4 thread over-lock machine completer set without trimmer - &#123; 38 Nos &#125;
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--primary">
						<Override slot="text">
							Power operated 4 thread over-lock machine completer set with trimmer - &#123; 04 Nos &#125;
						</Override>
					</Components.QualityItem>
				</Box>
				<Box
					quarkly-title="Single Detail"
					width="40%"
					background="--color-lightPrimary"
					padding="20px 20px 20px 20px"
					display="flex"
					grid-template-columns="1fr"
					grid-gap="10px"
					flex-direction="column"
					margin="0px 0px 0px 20px"
					sm-width="100%"
					sm-margin="20px 0px 0px 0"
				>
					<Components.QualityItem color="--primary">
						<Override slot="text">
							Power operated 5 thread flat-lock machine completer set without trimmer - &#123; 12 Nos &#125;
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--primary">
						<Override slot="text">
							Power operated 5 thread flat-lock machine completer set with trimmer - &#123; 04 Nos &#125;
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--primary">
						<Override slot="text">
							Chain stitching machine - &#123; 3 Nos &#125;
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--primary">
						<Override slot="text">
							Button hole machine with locking device, complete set  - &#123; 01 Nos &#125;
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--primary">
						<Override slot="text">
							Button stitch sewing machine - &#123; 01 Nos &#125;
						</Override>
					</Components.QualityItem>
				</Box>
			</Box>
		</Section>
		<Section background="--color-lightPrimary" padding="80px 0 120px 0">
			<Text quarkly-title="Heading" font="--headline3" color="--primary" margin="100px 0px 12px 0px">
				Printing Machinery Details
			</Text>
			<Text
				quarkly-title="Description"
				max-width="900px"
				color="--primary"
				margin="0 0px 16px 0px"
				font="14px Poppins, sans-serif"
			>
				The company is equipped with most advanced technology machinery, and is always keen to move ahead to keep pace with the changing technologies.
The detailed list of Plant & Machinery is  being annexed :-
			</Text>
			<Box quarkly-title="Details" display="flex" margin="20px 40px 0px 40px" sm-flex-wrap="wrap">
				<Box
					quarkly-title="Single Detail"
					width="40%"
					padding="20px 20px 20px 20px"
					display="flex"
					grid-template-columns="1fr"
					grid-gap="10px"
					flex-direction="column"
					sm-width="100%"
					background="--color-primary"
				>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="icon" color="--lightPrimary" />
						<Override slot="text">
							Automatic multi-head flat bed screen printing machine - &#123; 01 Nos &#125;
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="icon" color="--lightPrimary" />
						<Override slot="text">
							High speed micro inkjet engraver with UV exposing unit - &#123; 01 Nos &#125;
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="icon" color="--lightPrimary" />
						<Override slot="text">
							Digital technology screen making system for rotary screen
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="icon" color="--lightPrimary" />
						<Override slot="text">
							Mechanical fabric stretching unit
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="icon" color="--lightPrimary" />
						<Override slot="text">
							Mesh tension meter
						</Override>
					</Components.QualityItem>
				</Box>
				<Box
					quarkly-title="Single Detail"
					width="40%"
					padding="20px 20px 20px 20px"
					display="flex"
					grid-template-columns="1fr"
					grid-gap="10px"
					flex-direction="column"
					margin="0px 0px 0px 20px"
					sm-width="100%"
					sm-margin="20px 0px 0px 0"
					background="--color-primary"
				>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Metal halide lamp exposure unit
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Screen dryer cum touch-up cabinet
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Automatic emulsion coater
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Screen washout and cleaning unit
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							High pressure water spray gun
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
				</Box>
			</Box>
			<Text quarkly-title="Heading" font="--headline3" color="--primary" margin="100px 0px 12px 0px">
				Finishing Machinery Details
			</Text>
			<Text
				quarkly-title="Description"
				max-width="900px"
				color="--primary"
				margin="0 0px 16px 0px"
				font="14px Poppins, sans-serif"
			>
				The company is equipped with most advanced technology machinery, and is always keen to move ahead to keep pace with the changing technologies.
The detailed list of Plant & Machinery is  being annexed :-
			</Text>
			<Box
				quarkly-title="Details"
				margin="20px 40px 0px 40px"
				display="flex"
				sm-flex-wrap="wrap"
				md-flex-wrap="wrap"
				md-flex-direction="row"
			>
				<Box
					quarkly-title="Single Detail"
					width="25%"
					padding="20px 20px 20px 20px"
					display="flex"
					grid-template-columns="1fr"
					grid-gap="10px"
					flex-direction="column"
					sm-width="100%"
					background="--color-primary"
					align-self="flex-start"
					md-width="100%"
				>
					<Text font="500 20px/1.5em --fontFamily-googlePoppins" color="--white" margin="0 0px 0 0px">
						Washing
					</Text>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="icon" color="--lightPrimary" />
						<Override slot="text">
							Garment washing machine
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="icon" color="--lightPrimary" />
						<Override slot="text">
							Industrial tumble dryer
						</Override>
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="icon" color="--lightPrimary" />
						<Override slot="text">
							Hydro extractor
						</Override>
					</Components.QualityItem>
				</Box>
				<Box
					quarkly-title="Single Detail"
					width="25%"
					padding="20px 20px 20px 20px"
					display="flex"
					grid-template-columns="1fr"
					grid-gap="10px"
					flex-direction="column"
					margin="0px 0px 0px 20px"
					sm-width="100%"
					sm-margin="20px 0px 0px 0"
					background="--color-primary"
					align-self="flex-start"
					md-width="100%"
					md-margin="20px 0px 0px 0"
				>
					<Text font="500 20px/1.5em --fontFamily-googlePoppins" color="--white" margin="0 0px 0 0px">
						Finishing
					</Text>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Industrial steam iron with vacuum table &#123; 28 Nos &#125;
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Industrial tumble dryer
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Hydro extractor
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
				</Box>
				<Box
					quarkly-title="Single Detail"
					width="50%"
					padding="20px 20px 20px 20px"
					display="flex"
					grid-template-columns="1fr"
					grid-gap="10px"
					flex-direction="column"
					margin="0px 0px 0px 20px"
					sm-width="100%"
					sm-margin="20px 0px 0px 0"
					background="--color-primary"
					md-width="100%"
					md-margin="20px 0px 0px 0"
				>
					<Text font="500 20px/1.5em --fontFamily-googlePoppins" color="--white" margin="0 0px 0 0px">
						Finishing
					</Text>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Digiwash II (stainless steel – &#123; 01 No. &#125;
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Sample cutter for GSM (export model) – &#123; 02 Nos &#125;
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Beesley Balance &#123; 01 Nos &#125;
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Lab pH bench (new model) – &#123; 01 No. &#125;
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Spectravision – 1nx – &#123; 02 Nos &#125;
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Digital traverse thread counter – &#123; 01 No. &#125;
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Hot air oven SS  - &#123; 01 No. &#125;
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							AATCC shrinkage scale – &#123; 01 No. &#125;
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
					<Components.QualityItem color="--lightPrimary">
						<Override slot="text">
							Grading scale (to assess staining & change in colour) – &#123; 02 Nos &#125;
						</Override>
						<Override slot="icon" color="--lightPrimary" />
					</Components.QualityItem>
				</Box>
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
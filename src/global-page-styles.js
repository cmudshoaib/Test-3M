import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "font": "16px --fontFamily-googlePoppins",
        "padding": "160 0px 0px 0px",
        "margin": ""
    },
    "index": {
        "font": "16px --fontFamily-googlePoppins",
        "padding": "160 0px 0px 0px",
        "margin": ""
    },
    "capabilities": {
        "font": "16px --fontFamily-googlePoppins",
        "padding": "160 0px 0px 0px",
        "margin": ""
    },
    "quality": {
        "font": "16px --fontFamily-googlePoppins",
        "padding": "160 0px 0px 0px",
        "margin": ""
    },
    "our-brand": {
        "font": "16px --fontFamily-googlePoppins",
        "padding": "160 0px 0px 0px",
        "margin": ""
    },
    "clients": {
        "font": "16px --fontFamily-googlePoppins",
        "padding": "160 0px 0px 0px",
        "margin": ""
    },
    "contact-us": {
        "font": "16px --fontFamily-googlePoppins",
        "padding": "160 0px 0px 0px",
        "margin": ""
    },
    "about-us": {
        "font": "16px --fontFamily-googlePoppins",
        "padding": "160 0px 0px 0px",
        "margin": ""
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />

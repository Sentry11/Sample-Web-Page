import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import { SectionHeading, Subheading as SubheadingBase } from "../temp/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../temp/Buttons.js";
import Pngegg from "../temp/pngegg.png";
import { ReactComponent as SvgDotPattern } from "../temp/dot-pattern.svg";
import { Link } from "react-router-dom";

const Container = tw.div`relative `;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative p-10`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left text-[#724C9D]`;
const Heading = tw(
  SectionHeading
)`mt-4 text-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-black`;


const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-red-500 z-10`
]);

const MainAbout = ({
  subheading = "Our Track Record",
  heading = (
    <>
      We have been doing this  <wbr /> with <span tw="text-[#2C1B47]">pleasure.</span>
    </>
  ),
  description = "We make our job to make people more happier.We have been baking for a long time. Each of us does everything with care  ",
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://timerse.com",
  imageSrc = Pngegg,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  // Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: "Clients",
      value: "2282+"
    },
    {
      key: "Projects",
      value: "3891+"
    },
    {
      key: "Awards",
      value: "1000+"
    }
  ];

  if (!statistics) statistics = defaultStatistics;

  return (
    <Container>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? <Image imageSrc={imageSrc} css={imageCss} /> : <img src={imageSrc} css={imageCss} alt="" />}
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <PrimaryButton  >
              <Link style ={{color:"white"}} to = "/about">
              {primaryButtonText}
              </Link>
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
export default MainAbout
// import React from "react";
// import { ReactComponent as SvgDecoratorBlob1 } from "../temp/dot-pattern.svg"
// import styled from "styled-components";

// import tw from "twin.macro";


// const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
//   ${tw`pointer-events-none z-10 relative right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 `}
// `;
// const PageCTA = () => {
    
//     return (
//         <> 
//          <ImageDecoratorBlob/>
//         <h1>CTA Page</h1>;
//         </>
   
//     )
// };

// export default PageCTA;
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import mockupImageSrc from "../temp/app-mockup.png"
import { ContentWithPaddingXl, Container as ContainerBase } from "../temp/Layouts";
import { SectionHeading, Subheading as SubheadingBase } from "../temp/Headings.js";
import appleIconImageSrc from "../temp/apple-icon.png";
import googlePlayIconImageSrc from "../temp/google-play-icon.png"
import AnimationRevealPage from "../helpers/AnimationRevealPage";

const Container = tw(ContainerBase)`bg-[#DCCAE9]   h-screen pt-40  `
const Content = tw(ContentWithPaddingXl)``
const Row = tw.div`px-8 flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left justify-center `;

const ColumnContainer = tw.div`max-w-2xl`
const TextContainer = tw(ColumnContainer)``;
const Text = tw(SectionHeading)`text-black lg:text-left max-w-none text-3xl leading-snug`;
const Subheading = tw(SubheadingBase)`text-[#2C1B47] mb-4 tracking-wider`

const LinksContainer = tw.div`mt-8 lg:mt-16 flex flex-col items-center sm:block`
const Link = styled.a`
  ${tw`w-56 p-3 sm:p-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full inline-flex justify-center items-center mt-6 first:mt-0 sm:mt-0 sm:ml-8 first:ml-0 bg-gray-100 hocus:bg-gray-300 text-gray-900 hocus:text-gray-900 shadow hover:shadow-lg focus:shadow-lg focus:outline-none transition duration-300`}
  img {
    ${tw`inline-block h-8 mr-3`}
  }
  span {
    ${tw`leading-none inline-block`}
  }
`;

const ImageContainer = tw(ColumnContainer)`mt-32 lg:mt-0 lg: flex justify-end md: h-auto w-auto`;

const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`

const PageCTA =  ({
  subheading = "We`re making that as fast as possible",
  text = "Developers all over the world are trying do their best.",
  link1Text = "Coming soon",
  link1Url = "http://apple.com",
  link1IconSrc = appleIconImageSrc,
  link2Text = "Coming soon",
  link2Url = "http://play.google.com",
  link2IconSrc = googlePlayIconImageSrc,
  pushDownFooter = true,
  imageSrc = mockupImageSrc,
}) => {
  return (
    
    <>
    <Container css={pushDownFooter && tw`mb-32 lg:mb-32 md: mb-96 `}>
      <Content>
        <Row>
          <AnimationRevealPage animation ={"animate__slideInLeft"}>
          <TextContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Text>{text}</Text>
            <LinksContainer>
              <Link href={link1Url}>
                <img src={link1IconSrc} alt=""/>
                <span>{link1Text}</span>
              </Link>
              <Link href={link2Url}>
                <img src={link2IconSrc} alt=""/>
                <span>{link2Text}</span>
              </Link>
            </LinksContainer>
          </TextContainer>
         </AnimationRevealPage>
         <AnimationRevealPage animation ={"animate__slideInDown"}>
          <ImageContainer>
            <img src={imageSrc} alt="" tw="w-64"/>
          </ImageContainer>
          </AnimationRevealPage>
        </Row>
        <DecoratorBlobContainer>

        </DecoratorBlobContainer>
      </Content>
    </Container>
    </>

  );
};

export default PageCTA;
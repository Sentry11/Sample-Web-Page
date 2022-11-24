import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "../temp/Layouts.js"

import { ReactComponent as FacebookIcon } from "../temp/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../temp/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../temp/youtube-icon.svg";
import { Link as LinkRouter } from "react-router-dom";

const Container = tw(ContainerBase)`bg-[#0B0205] text-white  `
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;

const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.span`border-b-2 border-transparent hocus:text-[#9356A0] hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-[#9356A0] transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-white`
const Footer = () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            
            <LogoText>Footer</LogoText>
          </LogoContainer>
          <LinksContainer>


          <LinkRouter style = {{color:"white", fontSize:'18px'}} to="/" > <Link >Home</Link></LinkRouter>
          <LinkRouter style = {{color:"white", fontSize:'18px'}} to="about" > <Link >About</Link> </LinkRouter> 
          <LinkRouter style = {{color:"white", fontSize:'18px'}} to="blogs" >  <Link >Blog</Link> </LinkRouter>
          <LinkRouter style = {{color:"white", fontSize:'18px'}} to="privacy-policy" > <Link >Privacy Policy</Link> </LinkRouter> 
          <LinkRouter style = {{color:"white", fontSize:'18px'}} to="terms-and-conditions" >   <Link >Conditions and Terms</Link></LinkRouter> 


          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2022, Sentry_11 Inc. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};

export default Footer
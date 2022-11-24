import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "../temp/Headings.js";
import { SectionDescription } from "../temp/Typography.js";
import { Container, ContentWithVerticalPadding } from "../temp/Layouts.js";
import { ReactComponent as CheckboxIcon } from "../temp/CheckboxIcon.svg";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";

import CardProducts from "../home-components/card-products.js";
import MainBlogs from "../home-components/main-blogs.js";
import Faqs from "../home-components/faqs.js";

import MainContact from "../home-components/main-contact.js";
import MainAbout from "../home-components/main-about.js";


const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-1 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl ml-3 mb-24`;
const Heading = tw(SectionHeading)`text-left text-black leading-snug xl:text-6xl `;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-black max-w-lg`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-black mb-4`;
const FeatureText = tw.p`ml-2 font-medium text-black`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-8 lg:mt-0 lg:ml-16 `;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-12 xl:-translate-y-8`;
const Image = tw.img` w-48 drop-shadow-lg  rounded-t sm:rounded w-16  relative z-20 mb-0 pb-0 md:rounded relative z-20 mb-10 lg:w-full p-0 mb-10 pb-16 xl: w-full p-0 mb-10 `;

const CustomContainer = tw(Container)`mb-0 `


const data = {
  heading : "Life is uncertain. Eat dessert first.",
  description : "Making life sweet is the purpose of our existence. We trying to follow this:",
  imageSrc : "https://img.jamieoliver.com/home/wp-content/uploads/features-import/2017/07/JOL_kids_kit_V1-1024x683.jpg",
  imageDecoratorBlob : true,
  primaryButtonUrl : "https://google.com",
  primaryButtonText : "Get Started",
  buttonRounded : true,
  features : ["Presentable appearance", "Delicious smell", "100% of pleasure"],
  testimonial : {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    customerName: "Charlotte Hale",
    customerCompany: "Delos Inc."
  }
}  

const animate = "animate__fadeInLeftBig"

const Home = () => {
    return(
      <>

        <AnimationRevealPage animation = {animate}>

            <CustomContainer>         
               <ContentWithVerticalPadding>
                 <Row>
                   <TextColumn>
                     <Heading>{data.heading}</Heading>

                     <AnimationRevealPage animation = {animate}>

                    <Description>{data.description}</Description>
                   <FeatureList>
                    {data.features.map((feature, index) => (
                       <Feature key={index}> 
                         <FeatureIcon />
                          <FeatureText>{feature}</FeatureText>
                       </Feature>
                     ))}
                   </FeatureList>

                   </AnimationRevealPage>

                 </TextColumn>

                 <AnimationRevealPage animation = {animate}>

                 <ImageColumn>
                 
                   <ImageContainer>
                   
                     <Image src={data.imageSrc} />
                   
                  </ImageContainer>
                  </ImageColumn>
                  </AnimationRevealPage>
               </Row>
              </ContentWithVerticalPadding>
           </CustomContainer> 
           <MainAbout/>
          <CardProducts/>      
          <MainBlogs/>
          <Faqs/>
          <MainContact/>    
          </AnimationRevealPage>
         </>
       );
   
};

export default Home;

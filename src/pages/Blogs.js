
import React, { useState } from "react";
import { Container, ContentWithPaddingXl } from "../typography/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";


import { SectionHeading } from "../typography/Headings";
import { PrimaryButton } from "../typography/Buttons";

import AnimationRevealPage from "../helpers/AnimationRevealPage";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-[#0B0205]`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-0 w-full sm:w-1/2 lg:w-1/3 sm:pr-8 mb-4 `}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full! mb-4 text-black `}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 sm:rounded-t-none sm:rounded-l-lg md:w-full md:relative  xl:w-full lg:w-full  `}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-auto sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-black font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-white rounded-lg `;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-[#2C1B47] text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-[#B4A8AA] after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-[#724C9D] italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-[#9356A0] transition duration-300`;
const Description = tw.div`text-black`;

const ButtonContainer = tw.div`flex justify-center mb-20`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const Blogs = ({
  headingText = "Blog Posts",
  posts = [
    {
      imageSrc:
        "https://images.squarespace-cdn.com/content/v1/5abbfcc0f93fd495aa784b11/1584416330568-2F4KP40BKFDQTRB0SEDC/image-asset.jpeg?format=1000w",
      category: "Travel Tips",
      date: "April 21, 2020",
      title: "Some example of blogs ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://timerse.com",
      featured: true
    },
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost()
  ]
}) => {
  const [visible, setVisible] = useState(7);
 
  const onLoadMoreClick = () => {
   
    setVisible(v => v + 6)
  
  };
  
  return (
    
  <>
  
      <Container>
      {/* <AnimationRevealPage animation={"animate__slideInUp"}> */}
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <AnimationRevealPage animation={"animate__slideInUp"}>
          <Posts>
         
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <AnimationRevealPage animation={"animate__slideInUp"}>
                <Post className="group" as="a" href={post.url}>
                
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    <CreationDate>{post.date}</CreationDate>
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                
                </Post>
                </AnimationRevealPage>
              </PostContainer>
             
            ))}
            
          </Posts>
          </AnimationRevealPage>
          {visible < posts.length && (
            <ButtonContainer>
            
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
             
            </ButtonContainer>
          )}
    
        </ContentWithPaddingXl>
      </Container>

      
  </>
   
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://gdkfiles.visitdenmark.com/files/382/182699_CPH_Cooking_Class_Martin_Heiberg.jpg?width=987",
  category: "Example of blogs",
  date: "April 19, 2020",
  title: "Example of blogs",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com"
});

export default Blogs;
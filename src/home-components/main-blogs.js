import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../typography/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative md:p-8 sm:p-16`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-[#2C1B47] text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs `;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-[#2C1B47] font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg text-black`;
const Link = tw.a`inline-block mt-2 text-sm text-[#724C9D]  font-bold cursor-pointer transition duration-300 border-b-2 border-transparent  `;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

const MainBlogs = () => {
  const blogPosts = [
    {
      imageSrc:
        "https://www.cignaglobal.com/static/images/blog/cooking-blog-1.jpg",
      category: "Event Tips",
      title: "Best blogs and TV shows to watch out and learn about cookings",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://www.verywellhealth.com/thmb/QD4JMtNirRRGQEcOtzDYaRll89k=/2121x1193/smart/filters:no_upscale()/GettyImages-1204545515-d186393c71414abbbed7b695f20c43bd.jpg",
      category: "Reviews",
      title: "Best practic for team in cooking ",
      url: "https://reddit.com"
    },
    {
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGHdu6KGl9AlIRe_yOZQ6XKddRpHUIpWOznQ&usqp=CAU",
      category: "Discover",
      title: "This vegetables blow your mind",
      url: "https://timerse.com"
    }
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Popular Blog Posts</HeadingTitle>
          <HeadingDescription>Some amazing blog posts that are written by even more amazing people.</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
                <Link href={post.url}>Read Post</Link>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

export default MainBlogs
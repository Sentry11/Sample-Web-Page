import React from "react";
import tw from "twin.macro";

import MainFeature1 from "../sections/TwoColWithButton.js";
import Features from "../sections/ThreeColSimple.js";
import TeamCardGrid from "../sections/ProfileThreeColGrid.js";
import SupportIconImage from "../temp/support-icon.svg";
import ShieldIconImage from "../temp/shield-icon.svg";
import CustomerLoveIconImage from "../temp/simple-icon.svg";

import AnimationRevealPage from "../helpers/AnimationRevealPage.js";

const Subheading = tw.span`uppercase tracking-wider text-sm text-[#2C1B47]`;


const About = () => {
  return (
   <>
     <AnimationRevealPage animation = {"animate__fadeInRight"}>

      <MainFeature1
        subheading={<Subheading>About Us</Subheading>}
        heading="With pleasure and love"
        buttonRounded={false}
        description = "We are a team that just loves to cook.One day we came up with the idea to show everyone that our hobby is not just cooking, but the way we can make people happy. At the end of a working day or at the very beginning, a person needs food, and the future mood of a person depends on the quality of this food and its taste. Whether he goes to bed in a good mood or starts his day in a good mood depends in particular on us."
        primaryButtonText="See Portfolio"
        imageSrc="https://www.myzen.tv/wp-content/uploads/2021/07/cooking-1024x576.jpg"
      />

    </AnimationRevealPage>

    <AnimationRevealPage animation = {"animate__fadeInLeft"}>

      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="If don't try, won't know"
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://www.tastingtable.com/img/gallery/tips-you-need-when-cooking-with-lemon/l-intro-1658781981.jpg"
        textOnLeft={false}
        description = "We don't need to tell you what quality our dishes are. Our customers say for us. But how many people how many opinions, so if you don’t try yourself, you won’t know"
      />

    </AnimationRevealPage>
   
    <AnimationRevealPage animation = {"animate__fadeInRight"}>
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="An equally important part of our work, in addition to cooking, is customer support and work done on time"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "If you don`t find answer to your question on faq`s section we always answer you in time"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "Real professionals in their field"
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "Our goal is your smile"
          },
        ]}
        linkText=""
      />
      </AnimationRevealPage>

      <AnimationRevealPage animation = {"animate__fadeInLeft"}>

      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
     </AnimationRevealPage>
   
    </>
  );
};

export default About;

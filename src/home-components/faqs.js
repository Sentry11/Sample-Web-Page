import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../temp/Headings.js";
import { ReactComponent as PlusIcon } from "../temp/plus.svg";
import { ReactComponent as MinusIcon } from "../temp/minus.svg";


const Container = tw.div`relative md:p-8 sm:p-16 `;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded h-full bg-center`
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-black`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold text-[#2C1B47]`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2  text-black p-1 rounded-full  group-hover:text-black transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`text-black pointer-events-none text-sm sm:text-base leading-relaxed`);

const Faqs = ({
  subheading = "",
  heading = "Questions",
  description = "Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.",
  imageSrc = "https://pyxis.nymag.com/v1/imgs/f64/19b/51c95f648d95243cff731b6bd097cb058d-slt-online-culinary-institute.2x.rsocial.w600.jpg",
  imageContain = false,
  imageShadow = true,
  faqs = null
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const defaultFaqs = [
    {
      question: "How do you preserve nutrients when cooking veggies ?",
      answer:
        "The best method to preserve and enhance the nutrients in vegetables like broccoli is to steam them, according to a November 2015 study that examined various cooking methods for vegetables. An easy way to steam them: Fill a large glass bowl with broccoli, add about a tablespoon of water to the bowl, cover the bowl with a plate, and then microwave it on high for a few minutes."
    },
    {
      question: "What does marinating do to meat?",
      answer:
        "Marinades are used to add different flavors to a piece of meat. Usually marinades contain some kind of acid, which reacts with the meat and breaks down some of the protein to make it more tender. But, don’t leave it in for too long because the meat could get mushy. Marinating can also help you grill healthier as studies have connected marinating your meat to fewer HCAs (an ingredient that has been found to be potentially carcinogenic) being formed in the cooking process.SpoonTip: Hack the pH levels in your marinade by tossing the meat in baking soda and salt, letting it sit, and then marinating it as usual. This helps the meat brown and hold water better. "
    },
    {
      question: "What makes cakes turn brown?",
      answer:
        "While we’re on the subject, baking soda is also one of the reasons why cakes turn brown. It is used to help cakes rise by replacing the long process that yeast takes. When added to the batter, baking soda reacts with any acids and produces carbon dioxide, which puffs up the batter. The more baking soda you add, the browner your cake or cookies get."
    },
    {
      question: "What’s the best way to boil pasta?",
      answer:
        "Most chefs agree that you should start with cold water, add salt for flavor, and then bring it to a boil. To keep the pot from boiling over after adding your pasta, keep the lid off. If that’s not working, place a wooden spoon across the top to break up the bubbles. Try not to add olive oil to the pasta while it’s boiling. Although it helps eliminate bubbles, it will make it harder for the sauce to stick to your pasta later. While it’s boiling, stir frequently to avoid clumping."
    }
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc} />
          </Column>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};

export default Faqs
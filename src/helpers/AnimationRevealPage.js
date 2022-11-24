import { AnimationOnScroll } from 'react-animation-on-scroll';
import tw from 'twin.macro';


const Fulldiv = tw.div`w-full`
/// animation is required props 
// in component that apply animation, animation = "animate__*needed animation*"
const AnimationRevealPage = ({children, animation}) => {


  if (!Array.isArray(children)) children = [children];

  const childrenWithAnimation = children.map((child,i ) => {
    return (
      <Fulldiv key = {i}>
      <AnimationOnScroll key = {i} animateIn={animation} animateOnce={true}>
        {child}
        </AnimationOnScroll>
        </Fulldiv>
    );
   });


  return (
      
    <>{childrenWithAnimation}</>  
     
  )
}

export default AnimationRevealPage;
import { useState} from "react";
import tw from "twin.macro";

import {ReactComponent as ArrovUp}  from '../icons/arrov-up.svg'


const Button = tw.div`
fixed m-0 bottom-16 ml-72 left-3/4 h-auto z-50 bg-[#9356A0] rounded-full border-t-[#2C1B47] shadow-[#5E5DF0 0 10px 20px -10px]
cursor-pointer xl:ml-64 lg:ml-40 md: ml-36 sm: ml-4
`

const ButtonUp = () => {

    const [visible, setVisible] = useState(true)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 500){
        setVisible(true)
      } 
      else if (scrolled <= 500){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <Button onClick={scrollToTop}
         
       style={{display: visible ? 'inline' : 'none'}} >
        <ArrovUp/>
      </Button>
    );
}

export default ButtonUp
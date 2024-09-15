import { RiReactjsLine } from "react-icons/ri";
import gitIcon from '../assets/git-icon.png';
import tailwindCssIcon from "../assets/tailwindCss-icon.png";
import reduxIcon from "../assets/redux-icon.png";
import jwtIcon from '../assets/jwt-icon.png';
import {motion} from "framer-motion";


const iconVarients = (duration) => ({
       initial: {y: -10},
       animate: {
        y: [10, -10],
        transition: {
          duration: duration, 
          ease: "linear",
          repeat: Infinity,
          repeatType: 'reverse'},
       }
});

const Technologies = () => {
  return (
  <div className="border-b border-neutral-800 pb-24">
      <motion.h2
       whileInView={{ opacity: 1, y:0}}
       initial={{ opacity: 0, y: -100}}
       transition={{duration: 1.5}}
       className="my-20 text-center text-4xl">Technologies</motion.h2>

      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">

        <motion.div 
           variants={iconVarients(2.5)}
           initial="initial"
           animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400 "/>
        </motion.div>


        <motion.div
          variants={iconVarients(2)}
           initial="initial"
           animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-7">
          <img src={gitIcon} alt="git" className="text-7xl text-cyan-400 "/>
        </motion.div>

        <motion.div 
         variants={iconVarients(6)}
           initial="initial"
           animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-7">
          <img src={tailwindCssIcon} alt="tailwind"className="text-7xl text-cyan-400 "/>
        </motion.div>

        <motion.div 
          variants={iconVarients(2)}
           initial="initial"
           animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-7">
          <img src={reduxIcon} alt='redux' className="text-7xl text-cyan-400 "/>
        </motion.div>

        <motion.div 
        variants={iconVarients(4)}
           initial="initial"
           animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-7">
          <img src={jwtIcon} alt="jwt" className="text-7xl text-cyan-400 "/>
        </motion.div>

      </motion.div>

  </div>
  );
};

export default Technologies;
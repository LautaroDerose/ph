import React, { useEffect, useState } from 'react'
import { BiRun } from 'react-icons/bi'
import { motion } from "framer-motion";
import styles from '../styles';
import { fadeIn } from '../utils/motion'

const Card2 = ({ id, imgUrl, title, index, active, handleClick, description, price }) => {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (active === id) {
      const descriptionTimeout = setTimeout(() => {
        setShowDescription(true);
      }, 2000); 
      return () => clearTimeout(descriptionTimeout); 
    }
    setShowDescription(false);
  }, [active, id]);

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      initial="hidden" 
      animate={active === id ? "visible" : "hidden"} 
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <motion.div
          initial="hidden" 
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -20 }, 
            visible: { opacity: 1, x: 0, transition: { delay: 0.5 } }, 
          }}
          className="absolute bottom-0 p-8 flex justify-start items-center w-full bg-[rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col w-2/5 border-r-2 mr-20 pl-10 justify-center">
            <div className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism mb-[16px]`}>
              <BiRun size='8rem' className='w-1/2 h-1/2 object-contain text-white' />
            </div>
            <p className="font-normal text-[16px] leading-[20px] text-white uppercase ">Potencia tu Salud</p>
            <h2 className=" mt-2 font-semibold sm:text-[32px] text-[24px] text-white ">{title}</h2>
            <h3 className=''>${price}</h3>
          </div>
          <div className="w-3/5 p-4">
            {showDescription && (
              <p>{description}</p>
            )}
            <button className="p-2 my-2 border-2 border-[#00F59B] text-[#00F59B]">Ver Detalles</button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card2;


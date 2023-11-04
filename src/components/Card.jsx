import React, { useEffect, useState } from 'react'
import { BiRun } from 'react-icons/bi'
import { motion } from "framer-motion";
import styles from '../styles';
import { fadeIn } from '../utils/motion'
import Modal from './Modal';


const Card = ({ id, imgUrl, title, index, active, handleClick, description, details, price }) => {
  const [showDescription, setShowDescription] = useState(false);
  useEffect(() => {
    if (active === id) {
      const descriptionTimeout = setTimeout(() => {
        setShowDescription(true);
      }, 1000); 
      return () => clearTimeout(descriptionTimeout); 
    }
    setShowDescription(false);
  }, [active, id]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2] '
      } flex items-center justify-center min-w-[170px]  h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover "
        // className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <div className='absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] lg:w-[30vw] lg:mb-40 xl:mb-60'>
          <h3 style={{whiteSpace:'nowrap', }} className="font-semibold md:text-[26px]  xs:text-[18px] text-white a">
            {title}
          </h3>
        </div>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex bg-[rgba(0,0,0,0.5)] ">
        {/* <div className="absolute bottom-0 p-8 justify-start w-full flex bg-[rgba(0,0,0,0.5)] rounded-b-[24px]"> */}
          <div className='flex flex-col md:w-2/5'>
            <div className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism mb-[16px]`}>
            {/* <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}> */}
              <BiRun size='8rem' className=' object-contain text-white'/>
            </div>
            <p className="font-normal text-[16px] leading-[20px] text-white uppercase">Potencia tu salud </p>
            <h2 className=" font-semibold  text-[24px] text-white">
              {title}
            </h2>
            <h3 className='text-green-400 lg:text-end mr-4 underline'>${price}</h3>
            <button onClick={handleOpenModal} className='w-[50%] mt-3 py-1 border-2 bg-white text-black block md:hidden'>Ver Detalles</button>
          </div>        
              {showDescription && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className='w-4/5  flex-col  border-l-2 border-white pl-4 hidden md:block'
                >
                <p className='text-white  '>{description}</p>
                <button onClick={handleOpenModal} className='w-[50%] mt-3 py-1  bg-white text-black'>Ver Detalles</button>
                </motion.div>
              )}      
        </div>
      )}
    </motion.div>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={title} details={details} description={description}>
      <div  >
        <h1 className="font-bold text-[#019EDD] py-4">{title}</h1>
        <p>{description}</p>
      </div>
    </Modal>
    </>
  );
};



export default Card;


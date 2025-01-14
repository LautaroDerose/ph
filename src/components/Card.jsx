import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BiRun } from 'react-icons/bi';
import Modal from './Modal';

const Card = ({ id, imgSRC, title, description, details, price, priceD, index, active, handleClick }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (active === id) {
      const descriptionTimeout = setTimeout(() => {
        setShowDescription(true);
      }, 1000);
      return () => clearTimeout(descriptionTimeout);
    }
    setShowDescription(false);
  }, [active, id]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`relative ${
          active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[70vh] transition-[flex] duration-700 ease-out-flex cursor-pointer overflow-hidden`}
        onClick={() => handleClick(id)}
      >
        <img
          src={imgSRC}
          alt={title}
          className="absolute w-full h-full object-cover"
        />
        {active !== id ? (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-[2px]"></div>
            <h3 className="font-semibold text-xl md:text-2xl text-white z-10 text-center px-4">
              {title}
            </h3>
          </motion.div>
        ) : (
          <motion.div
            className="absolute bottom-0 left-0 right-0 px-6 py-2 md:p-8 bg-gradient-to-t from-black to-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between">
              <div className="mb-2 md:mb-0">
                <motion.div
                  className="w-16 h-16 mb-4 bg-white bg-opacity-20 rounded-full hidden md:flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="md:flex justify-center items-center w-[80px] h-[80px] glassmorphism">
                    <BiRun size="3rem" className="object-contain text-white" />
                  </div>
                </motion.div>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className="text-sm text-white uppercase mb-2">Potencia tu salud</p>
                    <h2 className=" text-xl md:text-2xl font-semibold text-white mb-2">{title}</h2>
                  </div>
                  {showDescription && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-fit md:w-1/2 hidden md:flex  "
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleOpenModal}
                        className="md:px-6 px-2 py-1 md:py-2 bg-white  text-black rounded-full font-medium"
                      >
                        Ver Detalles
                      </motion.button>
                    </motion.div>
                  )}
                </div>
                {showDescription && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="  "
                    >
                      <p className=" lg:w-8/12 text-white text-xs md:text-base ">{description}</p>
                      
                    </motion.div>
                  )}
                <div className='flex my-2 items-center justify-end'>
                  <button
                    onClick={handleOpenModal}
                    className="px-2 py-1 mt-2 md:hidden bg-white text-black rounded-full font-medium"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
              
            </div>
          </motion.div>
        )}
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        details={details}
        // price={price}
        priceD={priceD}
        description={description}
      />
    </>
  );
};

export default Card;

// import React, { useEffect, useState } from 'react'
// import { motion } from "framer-motion"
// import { BiRun } from 'react-icons/bi'
// const Card = ({ id, imgSRC, title, description, details, price, priceD, index, active, handleClick }) => {
//   const [showDescription, setShowDescription] = useState(false)
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   useEffect(() => {
//     if (active === id) {
//       const descriptionTimeout = setTimeout(() => {
//         setShowDescription(true)
//       }, 1000)
//       return () => clearTimeout(descriptionTimeout)
//     }
//     setShowDescription(false)
//   }, [active, id])

//   const handleOpenModal = () => {
//     setIsModalOpen(true)
//   }

//   const handleCloseModal = () => {
//     setIsModalOpen(false)
//   }

//   return (
//     <>
//       <motion.div
//         variants={{
//           hidden: { opacity: 0, x: -50 },
//           visible: { opacity: 1, x: 0 },
//         }}
//         initial="hidden"
//         animate="visible"
//         transition={{ duration: 0.5, delay: index * 0.2 }}
//         className={`relative ${
//           active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
//         } flex items-center justify-center min-w-[170px] h-[70vh] transition-[flex] duration-700 ease-out-flex cursor-pointer overflow-hidden`}
//         onClick={() => handleClick(id)}
//       >
//         <img
//           src={imgSRC}
//           alt={title}
//           className="absolute w-full h-full object-cover"
//         />
//         {active !== id ? (
//           <motion.div 
//             className="absolute inset-0 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-[2px]"></div>
//             <h3 className="font-semibold text-2xl text-white z-10 text-center px-4 transform -rotate-90 lg:rotate-0">
//               {title}
//             </h3>
//           </motion.div>
//         ) : (
//           <motion.div 
//             className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="flex flex-col md:flex-row md:items-end md:justify-between">
//               <div className="mb-4 md:mb-0">
//                 <motion.div 
//                   className="w-16 h-16 mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                 <div className={`flex justify-center items-center w-[80px] h-[80px] glassmorphism `}>
//                   <BiRun size='3rem' className=' object-contain text-white'/>
//                 </div>
//                 </motion.div>
//                 <p className="text-sm text-white uppercase mb-2">Potencia tu salud</p>
//                 <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
//               </div>
//               {showDescription && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="md:w-1/2"
//                 >
//                   <p className="text-white mb-4">{description}</p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleOpenModal}
//                     className="px-6 py-2 bg-white text-black rounded-full font-medium"
//                   >
//                     Ver Detalles
//                   </motion.button>
//                 </motion.div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </motion.div>
//       {isModalOpen && (
//         <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={title} details={details} description={description} price={price} priceD={priceD} />
//       )}
//     </>
//   )
// }

// const Modal = ({ isOpen, onClose, title, details, description, price, priceD }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="bg-white p-8 rounded-lg max-w-md w-full"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h2 className="text-2xl font-bold text-[#019EDD] mb-4">{title}</h2>
//         <p className="mb-4">{description}</p>
//         <p className="mb-4">{details}</p>
//         <div className="flex justify-between items-center mb-4">
//           <p className="font-bold">Precio: ${price}</p>
//           <p className="text-gray-600">Descuento: ${priceD}</p>
//         </div>
//         <button
//           onClick={onClose}
//           className="w-full bg-[#019EDD] text-white py-2 rounded-full font-medium"
//         >
//           Cerrar
//         </button>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default Card

// import React, { useEffect, useState } from 'react'
// import { BiRun } from 'react-icons/bi'
// import { motion } from "framer-motion";
// import styles from '../styles';
// import { fadeIn } from '../utils/motion'
// import Modal from './Modal';


// const Card = ({ id, imgUrl,imgSRC, title, description, details, price, priceD, index, active, handleClick }) => {
//   const [showDescription, setShowDescription] = useState(false);
//   useEffect(() => {
//     if (active === id) {
//       const descriptionTimeout = setTimeout(() => {
//         setShowDescription(true);
//       }, 1000); 
//       return () => clearTimeout(descriptionTimeout); 
//     }
//     setShowDescription(false);
//   }, [active, id]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <motion.div
//       variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
//       className={`relative ${
//         active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2] '
//       } flex items-center justify-center min-w-[170px]  h-[70vh] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
//       onClick={() => handleClick(id)}
//     >
//       <img
//         src={imgSRC}
//         alt={title}
//         className="absolute w-full h-full object-cover "
//       />
//       {active !== id ? (
//         <div className='absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] lg:w-[30vw] lg:mb-40 xl:mb-60'>
//           <div className="absolute inset-0 bg-slate-200 bg-opacity-50 blur-md"></div>
//           <h3 style={{ whiteSpace: 'nowrap' }} className="font-semibold md:text-[26px] xs:text-[18px] text-slate-800 relative">
//             {title}
//           </h3>
//         </div>
//       ) : (
//         <div className="absolute bottom-0 p-8 justify-start w-full flex bg-[rgba(0,0,0,0.5)] ">
//           <div className='flex flex-col md:w-2/5'>
//             <div className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism mb-[16px]`}>
//               <BiRun size='8rem' className=' object-contain text-white'/>
//             </div>
//             <p className="font-normal text-[16px] leading-[20px] text-white uppercase">Potencia tu salud </p>
//             <h2 className=" font-semibold  text-[24px] text-white">
//               {title}
//             </h2>
//             <button onClick={handleOpenModal} className='w-[50%] mt-3 py-1 border-2 bg-white text-black block md:hidden'>Ver Detalles</button>
//           </div>        
//               {showDescription && (
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                   className='w-4/5  flex-col  border-l-2 border-white pl-4 hidden md:block'
//                 >
//                 <p className='text-white'>{description}</p>
//                 <button onClick={handleOpenModal} className='w-[50%] mt-3 py-1  bg-white text-black'>Ver Detalles</button>
//                 </motion.div>
//               )}      
//         </div>
//       )}
//     </motion.div>
//     <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={title} details={details} description={description} price={price} priceD={priceD}>
//       <div  >
//         <h1 className="font-bold text-[#019EDD] py-4">{title}</h1>
//         <p>{description}</p>
//       </div>
//     </Modal>
//     </>
//   );
// };

// export default Card;
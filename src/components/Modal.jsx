import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import { XIcon } from 'lucide-react'

const Modal = ({ isOpen, onClose, title, details, price, priceD, description }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleModalScroll = (e) => {
    e.stopPropagation()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl"
            onScroll={handleModalScroll}
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-white border-b">
              <div className="flex gap-4 items-center ">
                <h1 className="text-3xl font-bold text-green-600">{title}</h1>
                <div className="flex flex-wrap items-center gap-4">
                  {/* <span className="text-2xl font-semibold text-red-600 line-through">${price}</span> */}
                  <span className="px-4 py-2 text-2xl font-bold text-white bg-green-600 rounded-full">${priceD}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-gray-200 rounded-md text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {/* <XIcon size={24} /> */} Cerrar
              </button>
            </div>

            <div className="p-6 space-y-6">
              
              <div className="md:hidden">
                <h3 className="text-xl font-bold mb-2">Descripción</h3>
                <p className="text-gray-600">{description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold mb-2">{details[0].title_1}</h2>
                  <p className="text-gray-600">{details[0].content_1}</p>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">{details[1].title_2}</h2>
                  <ul className="list-disc list-inside text-gray-600">
                    {details[1].content_2.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="https://forms.gle/Me4Q4JiddPts4MLf7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Obtener plan
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal


// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// const Modal = ({ isOpen, onClose, title, details, price, priceD, description }) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//   }, [isOpen]);

//   if (!isOpen) {
//     return null;
//   }

//   const handleModalScroll = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <div className=" lg:w-[70%] md:w-[80%] md:h-[80vh] mx-auto mt-10 fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
//       <div className="fixed inset-0  bg-black opacity-50" onClick={onClose}></div>
//       <div
//         className="relative  p-4 md:p-8 bg-white rounded shadow-lg"
//         onScroll={handleModalScroll}
//       >
//       <button className="absolute top-2 right-6 mt-2 px-3 md:px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 hover:bg-slate-300 duration-300" onClick={onClose}>Cerrar</button>
//        <div className="flex flex-col md:flex-row mt-3 items-center ">
//        <h1 className="font-bold text-green-500 text-xl mt-6 md:mt-0 md:text-4xl py-4">{title}</h1>
//         <h3 className='text-red-800 text-xl ml-4 line-through '>${price}</h3>
//         <h3 className='bg-green-700 text-white px-4 py-2 text-xl font-medium ml-4 underline rounded-full'>${priceD}</h3>
//        </div>

//         <div className="p-4 md:hidden block ">
//           <h3 className="font-bold text-xl ">Descripcion</h3>
//           <p className="text-xs  ">{description}</p>
//         </div>
//         <div className="flex flex-col md:flex-row gap-8 p-4">
//           <div className="md:w-1/2">
//             <h2 className="font-bold">{details[0].title_1}</h2>
//             <p className="text-xs lg:text-lg" >{details[0].content_1}</p>
//           </div>
//           <div className="md:w-1/2">
//             <h2 className="font-bold">{details[1].title_2}</h2>
//             {details[1].content_2.map((item, i) => (
//               <li className="text-xs lg:text-lg" key={i}>{item}</li>
//             ))}
//           </div>
//           </div>

        
//         <Link to= "https://forms.gle/Me4Q4JiddPts4MLf7" target="_blank" className="my-2 py-2 px-6 bg-green-500 text-green-950 font-bold">Obtener plan</Link>
//       </div>
//     </div>
//   );
// };

// export default Modal;
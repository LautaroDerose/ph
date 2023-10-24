import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, details, description }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleModalScroll = (e) => {
    e.stopPropagation();
  };

  return (
    <div className=" lg:w-[70%] md:w-[80%] h-[80vh] mx-auto mt-10 fixed inset-0 flex items-center justify-center z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div
        className="relative  p-4 md:p-8 bg-white rounded shadow-lg"
        onScroll={handleModalScroll}
      >
      <button className="absolute top-6 right-6  px-3 md:px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded" onClick={onClose}>Cerrar</button>
        <h1 className="font-bold text-green-500 text-xl mt-6 md:mt-0 md:text-4xl py-4">{title}</h1>
        
        <div className="p-4 md:hidden block ">
          <h3 className="font-bold text-xl ">Descripcion</h3>
          <p className="text-xs  ">{description}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 p-4">
          <div className="md:w-1/2">
            <h2 className="font-bold">{details[0].title_1}</h2>
            <p className="text-xs lg:text-lg" >{details[0].content_1}</p>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-bold">{details[1].title_2}</h2>
            {details[1].content_2.map((item, i) => (
              <li className="text-xs lg:text-lg" key={i}>{item}</li>
            ))}
          </div>
          </div>

        
        <button className="my-2 py-2 px-6 bg-green-500 text-green-950 font-bold">Obtener plan</button>
      </div>
    </div>
  );
};

export default Modal;
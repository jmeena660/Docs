import React, { useRef, useEffect } from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  const textRef = useRef(null);

  useEffect(() => {
    // Load data from local storage when the component mounts
    const savedText = localStorage.getItem(`card_${data.key}`);
    if (savedText) {
      textRef.current.innerText = savedText;
    }
  }, [data.key]);

  const handleResetText = () => {
    textRef.current.innerText = "Feed me with your keeps";
    // Save data to local storage when text is reset
    localStorage.setItem(`card_${data.key}`, "Feed me with your keeps");
  };

  const handleTextChange = () => {
    // Save data to local storage when text is changed
    localStorage.setItem(`card_${data.key}`, textRef.current.innerText);
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className='relative flex-shrink-0 w-52 h-72 rounded-[30px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
    >
      <FaRegFileAlt size={50} />
      <p
        ref={textRef}
        className='text-sm leading-tight mt-5 font-semibold'
        contentEditable={true}
        suppressContentEditableWarning={true}
        onBlur={handleTextChange} // Save data when focus is lost from the text element
      >
        {data.desc}
      </p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
          <div><h5 className="text-white text-sm">{data.filesize}</h5></div>
          <div className="flex items-center">
            {data.close ? <IoMdClose onClick={handleResetText} /> : <LuDownload size={20} fill='#ffffff' />}
          </div>
        </div>
        {data.tag.isopen ? (
          <div className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;







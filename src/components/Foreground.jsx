import React, { useRef } from 'react';
import Card from './Card';


const Foreground = () => {
    const ref=useRef(null);
  const data = [
    {
    key: 1,
      desc: "Feedme with your keeps",
      filesize: ".9mb",
      close: true,
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
    },  
    {
        key: 2,
      desc: "Feedme with your keeps",
      filesize: ".4mb",
      close: true,
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        key: 3,
      desc: "Feedme with your keeps",
      filesize: ".7mb",
      close: true,
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        key: 4,
        desc: "Feedme with your keeps",
        filesize: ".9mb",
        close: true,
        tag: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
      },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} reference ={ref} />
      ))}
    </div>
  );
}

export default Foreground;


import React, { useState } from "react";

// imgs will be an array which has the imagesq'/

function Slider({imgs}) {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleButtonClick = (index) => {
        setSelectedImageIndex(index);
      };

  return (
    <> 
        <div className="container max-w-full">
            <div className="bg-[#141414] text-[#999999] border-[#3d3d3d] border-b-[4px] pt-4 pl-24 pr-24">
                <div className="flex justify-between">
                    {imgs.map((images, index)=>(  
                         <h1 onClick={()=>handleButtonClick(index)} className={`text-lg text-center hover:text-white cursor-pointer ${(selectedImageIndex===index)?'border-red-500 border-b-4':'0'} pl-20 pr-20 p-10 font-medium`} key={index}>Heading {index + 1}</h1>                
                    ))}
                </div>
            </div>
        </div>

        {
        <div className="mt-4">
          <img
            src={imgs[selectedImageIndex]}
            alt={`Image ${selectedImageIndex + 1}`}
            className="max-w-full border-4 border-white"
          />
        </div>
      }
    </>
  );
}

export default Slider;

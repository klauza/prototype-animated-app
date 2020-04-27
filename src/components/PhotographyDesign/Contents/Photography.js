import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { PhotographyContent } from './PhotographyCSS';
import ModalImage from './ModalImage';

const Photography = () => {

  const [image, setImage] = useState(null);
  const [activeDrags, setActiveDrags] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onStart = () => {
    setActiveDrags(prevState => prevState++);
  };

  const onStop = () => {
    setActiveDrags(prevState => prevState--);
  };

  const dragHandlers = {
    onStart: onStart, 
    onStop: onStop
  };
  const imagesDB = [
    {
      id: 0,
      img: "https://images.pexels.com/photos/3268257/pexels-photo-3268257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      customStyles: {width: "212px", height: "193px", position: 'absolute', top: '15px', left: '12px'},
      rotate: {transform: "rotateZ(4deg)"}
    },
    {
      id: 1,
      img: "https://images.pexels.com/photos/2097475/pexels-photo-2097475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      customStyles: {width: "212px", height: "193px", position: 'absolute', top: '92px', left: '31px'},
      rotate: {transform: "rotateZ(-3deg)"}
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3783044/pexels-photo-3783044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      customStyles: {width: "212px", height: "193px", position: 'absolute', top: '144px', left: '12px'},
      rotate: {transform: "rotateZ(2deg)"}
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3623309/pexels-photo-3623309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      customStyles: {width: "212px", height: "193px", position: 'absolute', top: '92px', left: '9px'},
      rotate: {transform: "rotateZ(-6deg)"}
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/3222421/pexels-photo-3222421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      customStyles: {width: "212px", height: "193px", position: 'absolute', top: '69px', left: '6px'},
      rotate: {transform: "rotateZ(5deg)"}
    }

  ]

  // const zoomImage = (img) => {
  //   setImage(img);
  //   setIsZoomed(true);
  // }
  // const closeImage = () => {
  //   setIsZoomed(false);
  //   setImage(null);
  // }

  const toggleModal = (img) => {
    setImage(img);
    setIsModalOpen(prevState => !prevState);
  }


  return (
    <>
    {isModalOpen && (
      <ModalImage 
        img={image}
        id="modal"
        isOpen={isModalOpen}
        onClose={toggleModal}
      /> 
    )}
    <PhotographyContent>
      <h1>Photography Content</h1>
      <p>images can be moved</p>
      <div className="gallery-container" style={{height: '600px', width: '100%', position: 'relative', padding: '0'}}>
        <div style={{height: '100%', width: "100%", padding: '5px'}}>

          {imagesDB.map((img, i) => { 
          return(
            <Draggable key={i} bounds="parent" {...dragHandlers} >
              <div className="box photo-image" style={img.customStyles}>
                <img src={img.img} draggable="false" style={img.rotate} />
                <button onTouchStart={()=>toggleModal(img.img)} onClick={()=>toggleModal(img.img)}>BTN</button>
              </div>
            </Draggable>
          )
          })}

        </div>
      </div>

    </PhotographyContent>
    </>
  )
}

export default Photography

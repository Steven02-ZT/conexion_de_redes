import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux'

function ProductImagesView() {
  const producto = useSelector((state) => state.product)
  const {product,loading} = producto

  const [mainImage, setMainImage] = useState(product.general.images.length > 0 ? product.general.images[0].path : null);
  
  const [zoomLevel, setZoomLevel] = useState(1);

  function changeImage(imageUrl) {
    setMainImage(imageUrl);
  }

  const isMobile =
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i) ||
  navigator.userAgent.match(/iPod/i) ||
  navigator.userAgent.match(/BlackBerry/i) ||
  navigator.userAgent.match(/Windows Phone/i);

  function zoomImage(event) {
    const zoom = document.getElementById("zoom");
    const mainImage = document.getElementById("main-image");

    if (isMobile){
      return
    }

    const clientX = event.clientX - mainImage.getBoundingClientRect().left;
    const clientY = event.clientY - mainImage.getBoundingClientRect().top;

    const width = mainImage.offsetWidth;
    const height = mainImage.offsetHeight;
    const naturalWidth = mainImage.naturalWidth;
    const naturalHeight = mainImage.naturalHeight;

    const maxTranslateX = (naturalWidth - width) / 2;
    const maxTranslateY = (naturalHeight - height) / 2;

    const scaleX = 2.5;
    const scaleY = 2.5;

    let translateX = -(clientX / width - 0.5) * naturalWidth * (scaleX - 1);
    let translateY = -(clientY / height - 0.5) * naturalHeight * (scaleY - 1);

    translateX = Math.min(maxTranslateX, Math.max(-maxTranslateX, translateX));
    translateY = Math.min(maxTranslateY, Math.max(-maxTranslateY, translateY));

    zoom.style.backgroundImage = `url('${mainImage.src}')`;
    zoom.style.transform = `scale(${scaleX}, ${scaleY}) translate(${translateX}px, ${translateY}px)`;
    zoom.style.visibility = "visible";
  }

  function hideZoom() {
    const zoom = document.getElementById("zoom");
    zoom.style.transform = "none";
    zoom.style.visibility = "hidden";
  }

  const [spacing,setSpacing] = useState(0)
  function zoomIn() {
    // Limitar el zoom a un valor máximo si lo deseas
    setZoomLevel(zoomLevel + 0.1);
    const mainImage = document.getElementById("main-image");
    mainImage.style.backgroundImage = `url('${mainImage.src}')`;
    setSpacing(spacing+8)
    mainImage.style.transform = `scale(${zoomLevel + 0.1}, ${zoomLevel + 0.1}) translate(${spacing + 8}px, ${spacing + 8}px)`;
    mainImage.style.visibility = "visible";
  } 

  function zoomOut() {
    // Limitar el zoom a un valor mínimo si lo deseas
    setZoomLevel(zoomLevel - 0.1);
    const mainImage = document.getElementById("main-image");
    mainImage.style.backgroundImage = `url('${mainImage.src}')`;
    setSpacing(spacing-8)
    mainImage.style.transform = `scale(${zoomLevel - 0.1}, ${zoomLevel-0.1}) translate(${spacing - 8}px, ${spacing - 8}px)`;
    mainImage.style.visibility = "visible";
  }

  useEffect(() => {
    if (isMobile){
      const panel = document.getElementById("productPanelView");
      panel.style.overflow = "auto"
    }
  })

  return (
    <div className="flex productDiv items-center justify-center">
      <div className="flex flex-col overflow-auto productImages w-24">
      {product.general.images.map((element) => (
          <img
            src={element.path}
            alt={`Image ${element.id}`}
            className="w-24 h-24 cursor-pointer"
            onClick={() => changeImage(element.path)}
            key={element.id}
          />
        ))}
      </div>
      <div className="relative overflow-hidden flex justify-center items-center productPanelView w-max max-h-max" id="productPanelView">
        <img
          id="main-image"
          src={mainImage}
          alt="Imagen principal"
          className="w-96 h-96 m-auto"
          onMouseMove={zoomImage}
          onMouseLeave={hideZoom}
        />
        <div
          id="zoom"
          className="absolute top-0 left-0 w-80 h-80 border-2  bg-white bg-no-repeat bg-contain pointer-events-none"
          style={{visibility:"hidden"}}
        ></div>
      </div>
      {isMobile && (
        <div className=" grid h-52 justify-center items-center mt-4 ml-4 zoomButtons">
          <button onClick={zoomIn} className="p-5 bg-slate-800 text-white rounded-md">Zoom +</button>
          <button onClick={zoomOut} className="p-5 bg-slate-800 text-white rounded-md">Zoom -</button>
        </div>
      )}
    </div>
  );
}

export default ProductImagesView;

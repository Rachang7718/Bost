import React, { useState, useEffect } from "react";
import slider1 from "../assets/slider1.png";
import slider4 from "../assets/slider4.jpg";

function SliderImage() {
  let [isImage, setImage] = useState(1065);
  let [isIndex, setIndex] = useState(1);

  useEffect(() => {
    setInterval(() => {
      const targetElement = document.getElementById("slider");
      const targetElement1 = document.getElementById("slider1");
      const targetElement2 = document.getElementById("slider2");
      const targetElement3 = document.getElementById("slider3");
      const targetElement4 = document.getElementById("slider4");
      if (isImage < 4260) {
        setImage(isImage + 1065);
      } else {
        setImage(0);
      }
      if (isIndex < 5) {
        setIndex(isIndex + 1);
      } else {
        setIndex(1);
      }
      targetElement.style.transform = `translateX(-${isImage}px)`;
      targetElement1.style.transform = `translateX(-${isImage}px)`;
      targetElement2.style.transform = `translateX(-${isImage}px)`;
      targetElement3.style.transform = `translateX(-${isImage}px)`;
      targetElement4.style.transform = `translateX(-${isImage}px)`;
    }, 5000);
  }, [isImage, isIndex]);

  return (
    <>
      <div className="flex items-end relative overflow-hidden mb-24">
        <img
          src={slider4}
          id="slider"
          className="h-[351px] w-[1100px] object-fill transition ease-in-out "
        />

        <img
          src={slider1}
          id="slider1"
          className="h-[351px] w-[1100px] object-fill transition ease-in-out"
        />

        <img
          src={slider4}
          id="slider2"
          className="h-[351px] w-[1100px] object-fill transition ease-in-out "
        />

        <img
          src={slider1}
          id="slider3"
          className="h-[351px] w-[1100px] object-fill transition ease-in-out"
        />

        <img
          src={slider4}
          id="slider4"
          className="h-[351px] w-[1100px] object-fill transition ease-in-out"
        />

        <div className="flex items-center absolute gap-5 w-full justify-center pb-4">
          <button
            className="rounded-full transition ease-in-out delay-150"
            style={
              isIndex == 1
                ? { backgroundColor: "white", padding: "8px" }
                : { borderColor: "white", borderWidth: "2px", padding: "6px" }
            }
          ></button>
          <button
            className="rounded-full transition ease-in-out delay-150"
            src={slider1}
            id="slider1"
            style={
              isIndex == 2
                ? { backgroundColor: "white", padding: "8px" }
                : { borderColor: "white", borderWidth: "2px", padding: "6px" }
            }
          ></button>
          <button
            className="rounded-full transition ease-in-out delay-150"
            style={
              isIndex == 3
                ? { backgroundColor: "white", padding: "8px" }
                : { borderColor: "white", borderWidth: "2px", padding: "6px" }
            }
          ></button>
          <button
            className="rounded-full transition ease-in-out delay-150"
            style={
              isIndex == 4
                ? { backgroundColor: "white", padding: "8px" }
                : { borderColor: "white", borderWidth: "2px", padding: "6px" }
            }
          ></button>
          <button
            className="rounded-full transition ease-in-out delay-150"
            style={
              isIndex == 5
                ? { backgroundColor: "white", padding: "8px" }
                : { borderColor: "white", borderWidth: "2px", padding: "6px" }
            }
          ></button>
        </div>
      </div>
    </>
  );
}

export default SliderImage;

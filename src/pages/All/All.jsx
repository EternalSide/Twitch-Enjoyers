import React, { useEffect, useRef, useState } from "react";
import { Pasti } from "../../materials/Pasti";
import Post from "../../components/Post/Post";
import Form from "../../components/Form/Form";
import ScrollToTop from "react-scroll-to-top";
import "./All.css";
const All = () => {
  return (
    <>
      <div className="fakeheight" />
      <Form disabled />
      {Pasti.map((pasta) => (
        <Post message={pasta.text} />
      ))}
      <Post />
    </>
  );
};

export default All;

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Terima Kasih!</h2>
        <p className="email-msg">Cek email untuk Invoice</p>
        <p className="description">
          Kalau ada pertanyaan soal pesananmu email kesini aja ya ^-^
          <a className="email" href="mailto:baguscodes@google.com">
            baguscodes@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Lanjut belanja
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

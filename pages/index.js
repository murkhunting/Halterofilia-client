import Layout from "../layouts/Layout";

import { Link, Image } from "next/link";

export default function Home() {
  return (
    <div className="home">
      <div className="portada">
        <div className="titulo">
          <h1>CLUB</h1>
          <h1>HALTEROFILIA</h1>
          <h1>BARCELONA</h1>
        </div>
        <div className="baner">
          <h2>THINK DIFFERENT</h2>
          <h2>TRAIN DIFFERENT</h2>
        </div>
      </div>
      <div className="programaonline"></div>
      <div className="formacionestécnicas"></div>
      <div className="sobrenosotros"></div>
    </div>
  );
}

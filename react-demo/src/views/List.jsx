import React from "react";
import { useParams, useLocation } from "react-router-dom";
import "./List.scss";
export default function List() {
  const { state } = useLocation();
  const add = () => {
    const result = 3 +2;
    console.log(result)
  }
  console.log("是什么", state);
  return <h1 className="list">List</h1>;
}

import { React, useState, useEffect } from "react";
import ItemList from "./ItemList";
import { AllProducts} from "../helpers/AllProducts.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { getFirestore } from "../Firebase/firebase";
import { listCallback } from "../helpers/AllProducts.js";

function ItemListContainer(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getFirestore()
      .collection("items")
      .get()
      .then((res) => {
        const items = listCallback(res);
        console.log(items);
        setItems(items);
      });
  }, []);

  return (
    <div className="fs-5  text-center d-flex m-auto justify-content-center flex-wrap ">
      <ItemList className="" items={items} />
    </div>
  );
}

export default ItemListContainer;
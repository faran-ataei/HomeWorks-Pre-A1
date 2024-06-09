import { useEffect, useState } from "react";
import db from "../../db/data.json";
import { v4 as uuidv4 } from "uuid";
import "./ListItem.css";

export default function ListItem() {
  const [data, setData] = useState([]);
  const [uuid, setUuid] = useState(uuidv4());
  useEffect(() => {
    setData(db);
  }, []);

  return (
    <div className="card-parent">
      {data.map((item) => {
        console.log(item);
        return (
          <>
            <div className="cards" key={uuid}>
              <button className={"card-btn" + " " + item.name.slice(0, item.name.indexOf(" "))}><i className="bi bi-basket3-fill"></i></button>

              <img
                className="card-img-top card-img"
                src={item.src}
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {item.offPrice ? (
                  <>
                    <p className="card-text"> <span className="price">${item.price}</span> <span>${item.offPrice}</span> </p>
                  </>
                ) : (
                  <p className="card-text">${item.price}</p>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

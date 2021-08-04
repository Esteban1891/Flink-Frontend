import axios from "axios";
import { useState, useEffect } from "react";
import CardHolder from "./CardHolder";
import NavBar from "./NavBar";
import ModalWindow from "./ModalWindow/ModalWindow";
import "./style.scss";

const baseUrl = `http://143.198.58.196/api/v1/formulary/`;

function CardBox() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [company, setCompany] = useState({});

  // GET request.
  const getRequest = async () => {
    await axios
      .get(`${baseUrl}?format=json`)

      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(()=>{
    getRequest();
  }, [])

  useEffect(()=>{
    getRequest();
  }, [modal])

  return (
    <div>
      <NavBar data={data}/>
      {modal
        ? <ModalWindow
            setModal={setModal}
            company={company}
            setCompany={setCompany}
          />
        : <CardHolder
            data={data}
            setModal={setModal}
            setCompany={setCompany}
          />
      }
      
    </div>
  );
}

export default CardBox;

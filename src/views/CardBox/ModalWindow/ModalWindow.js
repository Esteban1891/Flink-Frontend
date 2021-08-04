import { getFormularies, postFormulary, putFormulary, deleteFormulary } from '../../../services/serviceApi'
import { useState } from "react";
import axios from "axios";
import "./style.scss";


const baseUrl = `http://143.198.58.196/api/v1/formulary/`;

function ModalWindow({ setModal, company, setCompany }) {
  const [formCompany, setFormCompany] = useState(company);

  function handleChange({ target }) {
    setFormCompany({
      ...formCompany,
      [target.name]: [target.value],
    });

  }

  function conversion(str) {
    if (typeof(str[0]) === 'string') {
      const newArray = str[0].split(',').map( element => parseInt(element))
      return newArray;
    }
    return str;
  }

  function validateArray(arr){
    if( typeof(arr) === 'object' ) {
      return arr[0];
    }
    return arr;
  }

  // PUT request.
  const postRequest = async (event) => {
    event.preventDefault();
    let id = {...formCompany};
    let data = {
        id: formCompany.id,
        name_company: validateArray(formCompany.name_company),
        description_company: formCompany.description_company,
        symbol: formCompany.symbol,
        market_values: conversion(formCompany.market_values)
    }

    const config = {headers: {'Content-Type' : 'application/json'}}  
    await putFormulary(data);
    setModal(false)
  };

  return (
    <div>

      <div className="form__back">
        <button
          onClick={() => setModal(false)}
          className="form__back__button"
        >Regresar</button>
      </div>

      <div>
        <form
          onSubmit={postRequest}
          className="form"
        >
          <input
            name="name_company"
            value={formCompany.name_company}
            onChange={handleChange}
            className="form__input-text"
          />

          <input
            name="symbol"
            value={formCompany.symbol}
            onChange={handleChange}
            className="form__input-text"
          />

          <input
            name="description_company"
            value={formCompany.description_company}
            onChange={handleChange}
            className="form__input-text"
          />

          <input
            name="market_values"
            value={formCompany.market_values}
            onChange={handleChange}
            className="form__input-text"
          />

          <div className="form__buttons">
             <input
                type="submit"
                className="form__buttons__button"/>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ModalWindow;

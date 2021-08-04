import { default as axios } from "axios";

const http = require('http');
let baseUrl = "http://143.198.58.196/api/v1";

export const getFormularies = async () => {
  return await axios.get(`${baseUrl}formulary/`).then((res) => res.data);
};

export const postFormulary = async (data) => {
  return await axios
    .post(`${baseUrl}formulary/`, data)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

// export const putFormulary = async (data) => {
//   return await axios
//     .put(`${baseUrl}formulary/${data.id}/`, data)
//     .then((res) => res.data)
//     .catch((err) => console.log(err));
// };

export const putFormulary = async (data) => {

    return await axios({
        url: `/formulary/${data.id}/`,
        method: 'PUT',
        baseURL: baseUrl,
        headers: {'Content-Type': 'application/json'},
        httpAgent: new http.Agent({ keepAlive: true }),
        data: data
    }).then(res => res.data);
  };

export const deleteFormulary = async (id) => {
  return await axios
    .delete(`${baseUrl}formulary/${id}/`)
    .then((res) => res.status)
    .catch((err) => console.log(err));
};


/* const data = {
  id: "b6e4a42d-aa1c-480c-8b5f-7c6a67230c85",
  name_company: "Dow Jones industrial Average",
  description_company:
    "he Dow Jones Industrial Average, Dow Jones, or simply the Dow",
  symbol: "DOWJOSE",
  market_values: [10, 20, 30, 40, 50, 60, 70, 80, 10, 100],
}; */
// getFormularies().then((e) => console.log(e));
// postFormulary(data).then(e => console.log(e));
// putFormulary(data).then(e => console.log(e))
// deleteFormulary('e40c8602-211f-4f9a-a587-9add8dcaf15a').then(e => console.log(e))

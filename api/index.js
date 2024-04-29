import aixos from "axios";

export const getDataFromAPI = async () => {
  return (await aixos.get("https://gw.x2bee.com/api/display/v1/shop/1")).data
    .conrList;
};
// export const getDataFromAPI = async () => {
//   return (await aixos.get("http://192.168.0.156:8094/api/display/v1/shop/1"))
//     .data.conrList;
// };

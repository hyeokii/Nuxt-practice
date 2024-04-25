import aixos from "axios";

// export const getDataFromAPI = async (vueCmptId) => {
//   const response = (
//     await aixos.get("https://gw.x2bee.com/api/display/v1/shop/1")
//   ).data.conrList;
//   return response.filter((item) => item.vueCmptId === vueCmptId);
// };
export const getDataFromAPI = async () => {
  return (await aixos.get("https://gw.x2bee.com/api/display/v1/shop/1")).data
    .conrList;
};

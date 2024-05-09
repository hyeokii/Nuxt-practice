import axios from "axios";

const BASE_URL = "https://gw.x2bee.com/api/display/v1/plan";

export const getPlanGroup = async () => {
  const res = (await axios.get(`${BASE_URL}/group`)).data;
  return res;
};

export const getPlanList = async ({
  sortOption = "recent",
  pageNo = 1,
  pageSize = 9,
  brandNo,
  dispGrpNo,
}) => {
  let url = "";
  if (pageNo === 1) {
    url = `${BASE_URL}/planList?dispMediaCd=99&sortType=${sortOption}&pageNo=${pageNo}&pageSize=${pageSize}&progressYn=Y`;
  } else {
    url = `${BASE_URL}/planList?dispMediaCd=99&sortType=${sortOption}&pageNo=1&pageSize=${
      pageSize * pageNo
    }&progressYn=Y`;
  }

  if (brandNo) {
    url += `&brandNo=${brandNo}`;
  }
  if (dispGrpNo) {
    url += `&dispGrpNo=${dispGrpNo}`;
  }

  const res = await axios.get(url);
  return res.data;
};

export const addPlanList = async ({
  pageNo,
  dispGrpNo,
  sortOption = "recent",
}) => {
  const nextPage = Number(pageNo) + 1;
  let url = `${BASE_URL}/planList?dispMediaCd=99&sortType=${sortOption}&pageNo=${nextPage}&pageSize=9&progressYn=Y`;

  if (dispGrpNo) {
    url += `&dispGrpNo=${dispGrpNo}`;
  }
  const res = await axios.get(url);
  return res.data.payload.planInfoList;
};

export const getBrandList = async () => {
  const res = (await axios.get(`${BASE_URL}/brand`)).data;
  return res;
};

export const getBrandNameList = async () => {
  const res = (await axios.get(`${BASE_URL}/brand`)).data;
  return res.map((brand) => {
    return brand.brandNm;
  });
};

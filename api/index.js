import aixos from "axios";

export const getPlanGroup = async () => {
  const res = (
    await aixos.get("https://gw.x2bee.com/api/display/v1/plan/group")
  ).data;
  return res;
};

export const getPlanList = async () => {
  const res = (
    await aixos.get("https://gw.x2bee.com/api/display/v1/plan/planList")
  ).data;
  return res;
};

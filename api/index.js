import aixos from "axios";

export const getPlanGroup = async () => {
  const res = (
    await aixos.get("https://gw.x2bee.com/api/display/v1/plan/group")
  ).data;
  return res;
};

import axios from "axios";

export default {
  async getPlanResult(pageNo, pageSize, groupNo, sortType){
    const planSearchData = {
      dispMediaCd: "99",	// 전시매체코드(고정)
      sortType: sortType,	// recent, close 정렬코드
      pageNo: pageNo,	// 페이지 번호
      pageSize: pageSize,	// 페이지사이즈 (고정)
      progressYn: "Y",	// 진행중 여부
      brandNo: "",	// 브랜드 번호
      dispGrpNo: groupNo	// 기획전그룹번호 (없으면 전체)
    };

    const planResultData = await axios.get("https://gw.x2bee.com/api/display/v1/plan/planList", {params: planSearchData});

    return planResultData;
  }
};

import React from "react";
import MainBanner from "./Banner";
import KnowInstitute from "./KnowInstitute";
import AttendanceData from "./AttendanceData";
import ReportingChannel from "./ReportingChannel";
import TestimonialsContainer from "./TestimonialsContainer";
import ArticleContainer from "../../components/ArticleContainer";
import Radio from "../../components/Radio";

const Main = () => {
  return (
    <>
      <MainBanner />
      <KnowInstitute />
      <AttendanceData />
      <TestimonialsContainer />
      <ReportingChannel />
      <ArticleContainer limit={4} />
      <Radio />
    </>
  );
};

export default Main;

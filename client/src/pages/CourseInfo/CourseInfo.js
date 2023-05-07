import { Container, Paper, Typography } from "@material-ui/core";

import React from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./CourseInfo.module.css";
import NoticeToggle from "./NoticeToggle/NoticeToggle";

const CourseInfo = () => {
  return (
    <div>
      <CommonHeader title="Electrician Tutorial By David" />
      <Container className="my-5">
        <Paper className="px-5 py-3">
          <div className="">
            <div className="d-flex justify-content-between align-items-center my-4">
              <Typography variant="h6">Course Content</Typography>
              <Typography style={{ color: "GrayText" }} variant="subtitle2">
                Course start date: 07/05/2023 Category: Electrician
              </Typography>
            </div>
            <NoticeToggle />
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default CourseInfo;

import { Avatar, Paper, Typography } from "@material-ui/core";
import React from "react";
import CommonHeader from "../../components/Common/CommonHeader";
import Styles from "./Profile.module.css";
import ToggleProfileInfo from "./ToggleProfileInfo/ToggleProfileInfo";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <CommonHeader title={user && user.userName && user.userName} />
      <div className={Styles.avatar}>
        <Avatar className={Styles.avatar__profile__pic} />
      </div>
      <Container fluid className="mb-5">
        <Row>
        
          <Col  className="">
            <Paper className="p-4 m-3 d-flex flex-column shadow">
              <Typography className="my-3 text-primary" variant="h5">
                Profile
              </Typography>
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Username
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.userName}
              </Typography>
              <br />
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Preferred language
              </Typography>
              <Typography variant="body1">English</Typography>
              <br />
           
              
              <Typography
                className="my-2"
                style={{ color: "gray" }}
                variant="body2"
              >
                Email address
              </Typography>
              <Typography variant="body1">
                {user && user.userName && user.email}
              </Typography>
            </Paper>

          

           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;

import React from "react";
import Styles from "./AddCourse.module.css";
import { Button, IconButton, Paper, Typography } from "@material-ui/core";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AddCourseModal from "./AddCourseModal/AddCourseModal";

const AddCourse = () => {
  return (
    <>
      <div className={Styles.child__div}>
        <Paper className='p-3 px-5 rounded shadow my-3'>
          <IconButton style={{ backgroundColor: "green", textAlign: "center" }}>
            <NoteAddIcon className={Styles.icon__style} />
          </IconButton>

          <div className="text-center my-3">
            <AddCourseModal/>
          </div>
        </Paper>
        <Paper className='p-3 px-5 rounded shadow my-3'>
          <IconButton style={{ backgroundColor: "green", textAlign: "center" }}>
            <ImportContactsIcon className={Styles.icon__style} />
          </IconButton>

          <div className="text-center my-3">
            <Button variant='contained' color='primary' className="text-center">View Course</Button>
          </div>
        </Paper>
        
      </div>
    </>
  );
};

export default AddCourse;

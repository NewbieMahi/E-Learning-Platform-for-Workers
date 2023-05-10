import { Button, Divider } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './CourseCard.module.css'
import LazyLoad from 'react-lazyload';


const CourseCard = ({title,name,id,img}) => {
    return (
        <LazyLoad height={200} offset={100} once={true} >
        <div className={Styles.course__Card}>
            <Link to={`/course/${id}`} className={Styles.container}>
            <img className={Styles.image} src={img}alt=""/>
            <div className={Styles.overlay}>
            <p className={Styles.text}>View</p>
            </div>
            </Link>
            
            
            <div className={Styles.course__content}>
                <span>Electrician</span>
                <h5>{name}</h5>
                <h5>{title}</h5>
                <Button color='primary' variant="contained" >View Course</Button><br/>
                <span>One of the best Electrician course with more than 100+ learners</span>
            </div>
            
        </div>
        <Divider/>
        </LazyLoad>
    );
};

export default CourseCard;
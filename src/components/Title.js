import React from 'react';
import style from './Title.css';

const title = props => <h1 className={style.title}>{props.title} <span>({props.tasksNumber})</span></h1>

export default title;
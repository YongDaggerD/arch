import React from 'react';
import cs from './Content_midle.module.css';
import Hitstatus from './Hitstatus/Hitstatus';
import Time from './Time/Time';
import Doubleblok from './Doubleblok/Doubleblok';


const Content_midle = () => {
    return (
            <div className={cs.content_block}>
                    <Doubleblok />
                    <Hitstatus />
                    <Time />
            </div>
    );
}

export default Content_midle;
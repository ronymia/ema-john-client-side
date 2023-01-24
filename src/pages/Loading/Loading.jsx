import React from 'react';
import { Bars } from 'react-loader-spinner';
import './Loading.css';

const Loading = () => {
    return (
        <Bars
            height="200"
            width="200"
            color="#ff9900"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass="loading-page"
            visible={true}
        />
    )
}

export default Loading;

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography } from '@material-ui/core';

function LoadingMask() {
    return (<div style={{top:window.scrollY}} className='mask'>
        <CircularProgress />    
        <Typography align='center' style={{color:'#ffffff',marginLeft:10}}> Loading </Typography>
    </div>)
}

export default LoadingMask;
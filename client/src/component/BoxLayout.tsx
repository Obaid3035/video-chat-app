import React from 'react';
import {Box} from "@mui/material";
import { Outlet } from "react-router-dom";

const BoxLayout = () => {
    return (
        <Box
            justifyContent={'center'}
            bgcolor={'#1D1F2E'}
            alignItems={'center'}
            display={'flex'}
            width={'100%'}
            height={'100vh'}>
            <Box
                bgcolor={'#fff'}
                mx={3}
                width={500}
                height={450}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
                display={'flex'}
                borderRadius={12}
                boxShadow={'1px 4px 10px 0px rgba(255,255,255,0.75)'}
            >
                <Outlet/>
            </Box>
        </Box>
    );
};

export default BoxLayout;

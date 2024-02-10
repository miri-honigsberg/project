// import React from 'react'

import { Button, TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { addServiceToServer } from '../../../AppStore/DataServer';

const AddService = (observer(() => {
    const [service, setService] = useState({ name: "", descripition: "", child: "", adult: "", img: "" });

    return (
        <>
            <h2>הוספת שירות </h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' }, display: 'grid', columnGap: 3,
                    rowGap: 0.1,
                    gridTemplateColumns: 'repeat(1fr)',
                }}
                noValidate
                autoComplete="off"
            >
                <TextField label="שם השירות" variant="outlined" value={service.name}
                    onChange={(e) => setService({ ...service, name: e.target.value })} />

                <TextField label="תיאור" variant="outlined" value={service.descripition}
                    onChange={(e) => setService({ ...service, descripition: e.target.value })} />

                  
                <TextField label="מחירון למבוגר"  type="number" variant="outlined" value={service.adult}
                    onChange={(e) => setService({ ...service, adult: e.target.value })} />

                <TextField label="מחירון לילד"
                    variant="outlined"  type="number" value={service.child}
                    onChange={(e) => setService({ ...service, child: e.target.value })} />

                <TextField label="קישור לתמונה " variant="outlined" value={service.img}
                    onChange={(e) => setService({ ...service, img: e.target.value })} />

                <Button variant="contained" onClick={() =>{addServiceToServer(service)
                setService({ name: "", descripition: "", child: "", adult: "", img: "" })}}>הוסף שירות</Button>
            </Box>


        </>
    )
}))

export default AddService


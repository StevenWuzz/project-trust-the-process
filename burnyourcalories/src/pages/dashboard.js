import React, { useState } from 'react'
import { Paper, InputBase, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import NavBar from '../components/navbar'
import FlashCard from '../components/flashcard'
import reportImg from '../assets/reports.jpg'
import workoutImg from '../assets/workout.jpg'
import {
	Container,
	Box,
	Grid,
	Typography,
	Modal,
	Backdrop,
	Fade,
	Snackbar,
	SnackbarContent,
} from '@mui/material'

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#606B6F',
		minHeight: '100vh',
		minWidth: '100vw !important'
	},
	body: {
        display: 'flex !important',
        flexDirection: 'row',
    },
}))

export default function Dashboard({
    view,
    ...props
}) {
	const classes = useStyles(props)

    const reportText = 'Check out your past reports, to measure your progress and see how much you have improved!'

    const workoutText = 'Start working out with our ML detection system, that will measure how you are exercising in real-time!'

	return (
        <Container maxWidth='xs' className={classes.root}>
            <NavBar />
            <Typography variant='h4' textAlign={'center'} mt={5} color={'#F0EFEE'}>
                Choose an option:
            </Typography>
            <Container className={classes.body}>
                <FlashCard title={'Reports'} text={reportText} path={'/reports'} image={reportImg}/>
                <FlashCard title={'Workout'} text={workoutText} path={'/workout'} image={workoutImg}/>
            </Container>
        </Container>
	)
}

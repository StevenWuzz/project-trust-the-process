import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import SignInUp from '../components/signinup'
import {
	Container,
} from '@mui/material'
import Video from '../components/video'
import LiveStatistic from '../components/liveStatistics'

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '2px 4px',
		display: 'flex !important',
		alignItems: 'center',
        justifyItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		flexDirection: 'row',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
}))

export default function Workout({
    view,
    ...props
}) {
	const classes = useStyles(props)
	const [exercises, setExercises] = useState([])
	const t = 320;

	return (
        <Container className={classes.root}>
			{console.log(exercises)}
			<Video view={view} updateExercises={setExercises}/>
			{/* <LiveStatistic exercises={exercises} /> */}
			<LiveStatistic exercises={[{exerciseName: "squat", duration: 100}, {exerciseName: "pushup", duration: 50}]} totalWorkoutTime={t} />
        </Container>
	)
}

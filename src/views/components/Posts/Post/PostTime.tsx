import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { formatPostTime } from './post.helper';

interface Props {
	date: string;
	username: string;
}

export const PostTime = ({ date, username }: Props) => {
	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentDate(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Typography color='text.secondary' variant='body2' aria-label='post author' role='heading' mb={2}>
			{username} - {formatPostTime(currentDate, date)}
		</Typography>
	);
};

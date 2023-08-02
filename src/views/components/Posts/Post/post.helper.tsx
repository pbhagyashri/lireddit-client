export const formatPostTime = (currentDate: Date, date: string) => {
	const timePosted = new Date(date);

	// if older than a year, show date
	if (currentDate.getFullYear() > timePosted.getFullYear()) {
		return timePosted.toDateString();
	}

	const monthDiff = Math.abs(currentDate.getMonth() - timePosted.getMonth());
	const dayDiff = Math.abs(currentDate.getUTCDate() - timePosted.getUTCDate());
	const hourDiff = Math.abs(currentDate.getHours() - timePosted.getHours());
	const minuteDiff = Math.abs(currentDate.getMinutes() - timePosted.getMinutes());

	// if less than a month
	if (currentDate.getMonth() === timePosted.getMonth()) {
		// if less than a day, show num hours
		if (currentDate.getUTCDate() === timePosted.getUTCDate()) {
			// TODO: handle case when minuteDiff is less than 60 but the hour changes and hence hourDiff is greater or equal to 1
			if (hourDiff < 1) {
				if (minuteDiff === 0) {
					return 'just now';
				}
				return minuteDiff > 1 ? `${minuteDiff} minutes ago` : `${minuteDiff} minute ago`;
			}
			return hourDiff > 1 ? `${hourDiff} hours ago` : `${hourDiff} hour ago`;
		}
		// if less than a month but more than a day, show num days
		return dayDiff > 1 ? `${dayDiff} days ago` : `${dayDiff} day ago`;
	} else {
		// if older than a month, show num months
		return monthDiff > 1 ? `${monthDiff} months ago` : `${monthDiff} month ago`;
	}
};

import Moment from 'moment';

export const formatCalendarData = data => {
    console.log(data);
    const calendarData = {};
    Object.keys(data).map(timeBorrowed => {
        const startDate = Moment(data[timeBorrowed].startDate).format('YYYY-MM-DD');
        const endDate = Moment(data[timeBorrowed].endDate).format('YYYY-MM-DD');
        calendarData[startDate] = {
            disableTouchEvent: true,
            disabled: true,
            startingDay: true,
            marked: true,
            customStyles: {
                container: {
                    backgroundColor: 'blue'
                }
            }
        };
        calendarData[endDate] = {
            disableTouchEvent: true,
            disabled: true,
            endingDay: true,
            marked: true,
            customStyles: {
                container: {
                    backgroundColor: 'blue'
                }
            }
        };
        const daysDifference = Moment(endDate).diff(Moment(startDate), 'days');
        if (daysDifference > 1) {
            for (let i = 1; i < daysDifference; i++) {
                calendarData[
                    Moment(startDate)
                        .add(i, 'days')
                        .format('YYYY-MM-DD')
                ] = {
                    disableTouchEvent: true,
                    marked: true,
                    customStyles: {
                        container: {
                            backgroundColor: 'blue'
                        }
                    },
                    disabled: true
                };
            }
        }
        return calendarData;
    });
    return calendarData;
};

import Moment from 'moment';

export const formatCalendarData = data => {
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

// Function to receive all items and sort them into format for sectionList, then sort that data by the amount of borrowers (to find popularity), then only display the top 4.
export const formatPopularData = data => {
    const sortedCategoryList = data.reduce((acc, curr) => {
        const categoryExists = acc.find(item => item.title === curr.category.toLowerCase());
        categoryExists
            ? categoryExists.data.push(curr)
            : acc.push({ title: curr.category.toLowerCase(), data: [curr] });
        return acc;
    }, []);
    sortedCategoryList.forEach(category =>
        category.data.sort((a, b) => b.allBorrowers.length - a.allBorrowers.length));
    sortedCategoryList.forEach(category =>
        category.data.splice(4, category.data.length));
    return sortedCategoryList;
};

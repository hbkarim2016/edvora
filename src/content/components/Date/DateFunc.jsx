const DateFunc = rideDate => {

    let dateValue = new Date(rideDate);

    let months = [ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'June' , 'July' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ];
    let month = months[dateValue.getMonth()];

    let year = dateValue.getFullYear(); 
    let day = dateValue.getDate(); 
    let hours = dateValue.getHours(); 
    let minutes = dateValue.getMinutes(); 

    return { day, month, year, hours, minutes }
}

export default DateFunc;
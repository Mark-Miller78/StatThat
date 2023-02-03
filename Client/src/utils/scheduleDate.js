const scheduleDateFormat = (startDate) => {
    let day = new Date(startDate).getDay() ;
    let month = new Date(startDate).getMonth();
    let date = new Date(startDate).getDate();


    switch(day){
        case 0 :
            day = 'Sun'
            break;
        case 1 :
            day = 'Mon'
            break;
        case 2 :
            day ='Tues'
            break;
        case 3 : 
            day = 'Wed'
            break;
        case 4:
            day = 'Thurs'
            break;
        case 5:
            day = 'Fri'
            break;
        case 6:
            day = 'Sat'
    }

    switch(month){
        case 7:
            month = 'Aug'
            break;
        case 8:
            month = 'Sept'
            break;
        case 9:
            month = 'Oct'
            break;
        case 10:
            month = 'Nov'
            break;
        case 11:
            month = 'Dec'
            break;
        case 0:
            month = 'Jan'
    }

    if(date < 10){
        date = '0' + date
    }


   return `${day}, ${month} ${date}`;
}

export default scheduleDateFormat;
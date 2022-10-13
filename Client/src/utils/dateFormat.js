const dateFormat = (date) => {
    let day = new Date(date).getDate() ;
    let month = new Date(date).getMonth() + 1;
    let hours = new Date(date).getHours();
    let mins = new Date(date).getMinutes();

    if (day < 10){
        day = '0'+ day;
    }

    if (month < 10){
        month = '0' + month;
    }

    if(hours > 12){
        hours = hours - 12; 
    }

    if(mins === 0){
        mins = '00';
    }

   return `${day}/${month} ${hours}:${mins}PM`;
}

export default dateFormat;
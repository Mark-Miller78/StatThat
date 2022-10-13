const black = ['Colorado', 'Coastal Carolina', 'Iowa State', 'Marshall', 'Minnesota', 'Northern Illinois', 'Purdue', 'Southern Mississippi', 'Toledo'];

const white = ['Akron', 'Arizona', 'Arkansas', 'Bowling Green', 'Georgia Tech', 'Florida', 'Illinois', 'Missouri', 'New Mexico', 'Ole Miss', 'Penn State', 'Pittsburgh', 'Troy', 'UCF', 'Utah', 'Utah State', 'Washington State', 'Western Kentucky', 'West Virginia', 'Vanderbilt']

const fontColor = (team)=>{
    if(black.includes(team)){
        return 'Black';
    } else if (white.includes(team)){
        return 'White';
    } else {
        return
    };
};

export default fontColor;
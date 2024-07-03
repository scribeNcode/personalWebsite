

function getTimeAndDay(){
const currentMoment = new Date();
const utcHour = currentMoment.getUTCHours();
const utcMinutes = currentMoment.getUTCMinutes();
const currentSec = currentMoment.getUTCSeconds();
const currentTime = ` ${utcHour}:${utcMinutes}:${currentSec} `

//update currentTime
document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTime  ;

//update currentDay when the setInterval function is called every seconds
 getCurrentDay(currentMoment)
}



// function to get day
function getCurrentDay(currentMoment){
    let dayToday = currentMoment.getUTCDay()
    let today;
    
    //logic to determine the day of the week;
   if(dayToday == 0){
    today = 'Sun';
   }else if(dayToday == 1){
    today = 'Mon';
   }else if(dayToday == 2){
    today = 'Tue'
   }else if(dayToday == 3){
    today = 'Wed'
   }else if(dayToday == 4){
    today = 'Thu'
   }else if(dayToday == 5){
    today = 'Fri'
   }else if(dayToday == 6){
    today = 'Saturday'
   }else{
    today = 'error'
   }
   
    document.querySelector('[data-testid="currentDay"]').textContent = today
}


//This function calls current time and day
getTimeAndDay()



// This is a function 
setInterval(getTimeAndDay, 1000)


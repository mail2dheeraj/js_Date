/**
 * This function sort the Dates in assending order based on Time
 *it Takes one Parameter in array of jsDates 
 */

function sortDateByTime(arr){

arr.sort((a,b)=>{return new Date(a.toString()).getTime() - new Date(b.toString()).getTime()})

return arr;
}

/**
 * This function will return  12Hrs format time Along with AM or PM
 *it Takes one Parameter Sting of Time '11:30' 
 */
function convert24To12(time){
let splitedTime = time.toString().split(':');
let format =  parseInt(splitedTime[0]) >= 12 ? 'PM' : 'AM' ;

let h = parseInt(splitedTime[0])% 12 == 0 ? 12 : parseInt(splitedTime[0])% 12;

return `${h}:${splitedTime[1]}.${format}`;

}

module.exports = {
'sortDateByTime':sortDateByTime,
'convert24To12':convert24To12
};
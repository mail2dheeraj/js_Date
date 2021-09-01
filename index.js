
function sortDateByTime(arr){

arr.sort((a,b)=>{return new Date(a.toString()).getTime() - new Date(b.toString()).getTime()})

return arr;
}

module.exports = {
'sortDateByTime':sortDateByTime

};
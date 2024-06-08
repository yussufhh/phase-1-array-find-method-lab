// code your solution here
// function superbowlWin(record){
// let records = record.find(function(element){
// if(element.result==="W"){
//   console.log(element.year) 
// }
// else{ return undefined}
    
// })

// }
function superbowlWin(record){
  const winningRecord = record.find(play => play.result ==='W');
  return winningRecord? winningRecord.year: undefined;
}
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"}
]



superbowlWin(record)


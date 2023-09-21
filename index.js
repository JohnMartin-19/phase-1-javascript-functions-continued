// code your solution here
function saturdayFun(string){
    console.log('This is saturday. I want to ' + string)
}
saturdayFun("swim");

const mondayWork = function (param, msg = 'go to the office') {
    console.log("This monday , I will "+ param + msg);
  }; 
  mondayWork('swim'); 
  mondayWork();



function wrapAdjective(name = 'You are a', msg = "dedicated developer") {
  // 2
  const innerFunction = function (arg = "special") {
    // 3
    console.log(`${name},  ${msg} ${arg}`)
    //return `${name},  ${msg} ${arg}`; // 4
  };
  return innerFunction("student", "JavaScript"); 
};// 5
wrapAdjective(); 
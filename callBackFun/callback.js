//callback function is a function that is an argument for another function which
//call callback function inside their body

function someFun(){

}
function funWithCallBack(someFun){
  someFun()
}

funWithCallBack(someFun)

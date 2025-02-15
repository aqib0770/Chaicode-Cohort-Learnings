Array.prototype.myEvery = function(userFn){
    let flag = true
    for (let i=0; i<this.length; i++){
        if (userFn(this[i]) === false){
            flag=false
            break
        }
    }
    return flag
}
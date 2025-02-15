Array.prototype.myFind = function(userFn){
    let result = undefined
    for (let i=0; i<this.length; i++){
        if (userFn(this[i],i)){
            result = this[i]
            break
        }
    }
    return result
}
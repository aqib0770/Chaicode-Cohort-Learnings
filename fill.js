Array.prototype.myFill = function (value, Start=0, End=this.length){
    for (let i = Start; i < End; i++){
        this[i] = value
    }
    return this
}
Array.prototype.myCopy = function (indexAt, Start, End){
	const sliced = this.slice(Start, End)
	for (let i=0; i<sliced.length; i++){
		console.log(`${indexAt} + ${i} = ${indexAt+i}`)
		this[indexAt+i] = sliced[i]
	}
	return this
}
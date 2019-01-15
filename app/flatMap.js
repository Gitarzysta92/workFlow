const sampleArr = ['a','b',['c','d',['e','f','g'],'h','i'],['j','k'],'o', ['asd', ['asd', ['asd']]]];


function flatArray(array, aggregator = []) {
	const aggr = aggregator;
	const toFlat = array;

	toFlat.forEach(current => {
		if (Array.isArray(current)) {
			aggr.concat(flatArray(current, aggr));
		} else {
			aggr.push(current);
		}
	}); 
	return aggr; 
}

console.log(flatArray(sampleArr));
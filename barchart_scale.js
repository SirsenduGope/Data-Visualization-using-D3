var w = 600;
var h = 250;
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
11, 12, 15, 20, 18, 17, 16, 18, 23];

// var xScale = d3.scaleOrdinal()
// 	.domain(d3.range(dataset.length))
// 	.rangeRoundBands([0, w], 0.05);

var xScale = d3.scaleBand()
    .domain(d3.range(0, dataset.length))
    .range([0, w])
    .padding(0.05);

var svg = d3.select("body")
	.append("svg")
	.attr("width", w)
	.attr("height", h);

svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("x", function(d, i) {
		return xScale(i); // <-- Set x values
	})
	.attr("y", function(d){
		return h-d *4;
	})
	.attr("width", xScale.bandwidth())
	.attr("height", function(d){
		return d*4;
	})
	.attr("fill", function(d){
		return "rgb(0,"+(d*10)+",0";
	});
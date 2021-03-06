var dataset = [
[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
[410, 12], [475, 44], [25, 67], [85, 21], [220, 88]
];

var w = 500;
var h = 500;
var barPadding = 1;

var xScale = d3.scaleLinear()
	.domain([0, d3.max(dataset, function(d) { return d[0]; })])
	.range([w, 0]);

var yScale = d3.scaleLinear()
	.domain([0, d3.max(dataset, function(d) { return d[1]; })])
	.range([0, h]);


var svg = d3.select("body")
	.append("svg")
	.attr("width", w)
	.attr("height", h);

svg.selectAll("circle") // <-- No longer "rect"
	.data(dataset)
	.enter()
	.append("circle")
	.attr("cx", function(d) {
		return xScale(d[0]);
	})
	.attr("cy", function(d) {
		return yScale(d[1]);
	})
	.attr("r", function(d){
		return Math.floor(Math.sqrt(h - d[0]));
	});

svg.selectAll("text") // <-- Note "text", not "circle" or "rect"
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d) {
		return d[0] + "," + d[1];
	})
	.attr("x", function(d) {
		return xScale(d[0]);
	})
	.attr("y", function(d) {
		return yScale(d[1]);
	})
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr	("fill", "red");
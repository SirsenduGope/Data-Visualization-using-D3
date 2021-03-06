var dataset = [ 5, 10, 15, 20, 25 ];
var w = 500;
var h = 500;
var barPadding = 1;

var svg = d3.select("body")
	.append("svg")
	.attr("width", w)
	.attr("height", h);


//For rectangle bar chart
svg.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("x", function(d,i){
		return i* (w/dataset.length);
	})
	.attr("y", function(d){
		return h-d *4;
	})
	.attr("width", function(d , i){
		return ("width", w/dataset.length - barPadding);
	})
	.attr("height", function(d) {
		return d * 4;
	})
	.attr("fill", function(d) {
		return "rgb(0, 0, " + (d * 10) + ")";
	});


svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d) {
	return d;
	})
	.attr("x", function(d, i) {
		return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
	})
	.attr("y", function(d) {
		return h - (d * 4) + 14;
	})
	.attr("font-family", "sans-serif")
	.attr("font-size", "11px")
	.attr("fill", "white")
	.attr("text-anchor", "middle");

// d3.select("body").selectAll("div")
// 	.data(dataset)
// 	.enter()
// 	.append("div")
// 	.attr("class", "bar")
// 	.style("height", function(d) {
// 	var barHeight = d * 5; //Scale up by factor of 5
// 	return barHeight + "px";
// });


//For circle
// var circles = svg.selectAll("circle")
// .data(dataset)
// .enter()
// .append("circle");

// circles.attr("cx", function(d, i) {
// 	return (i * 50) + 25;
// 	})
// 	.attr("cy", 50/2)
// 	.attr("r", function(d) {
// 	return d;
// })
// 	.attr("fill", "yellow")
// .attr("stroke", "orange")
// .attr("stroke-width", function(d) {
// return d/2;
// })
// ;
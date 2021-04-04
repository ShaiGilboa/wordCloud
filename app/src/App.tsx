import React from 'react';
import * as d3 from 'd3';
import './App.css';

function App() {
  function calculateCloud(data: WordObj[]) {
    d3.layout.cloud()
      .size([600, 400])
      .words(data) // data from PubNub
      .rotate(function() { return ~~(Math.random()*2) * 90;}) // 0 or 90deg
      .fontSize(function(d: any) { return d.size; })
      .on('end', drawCloud)
      .start();
  }
  function drawCloud(words: WordObj[]) {
    d3.select('#cloud').append('svg')
      .attr('width', 600).attr('height', 400)
      .append('g')
      .selectAll('text')
      .data(words)
      .enter().append('text')
      .style('font-size', function(d : any) { return d.size + 'px'; })
      .style('font-family', function(d: any) { return d.font; })
      // .style('fill', function(d: any, i: any) { return colors(i); })
      .attr('text-anchor', 'middle')
      .attr('transform', function(d: any) {
        return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')';
      })
      .text(function(d: any) { return d.text; });
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;

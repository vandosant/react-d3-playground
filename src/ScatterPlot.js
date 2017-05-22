import React from 'react';
import { extent as d3ArrayExtent } from 'd3-array';
import { scaleLinear as d3ScaleLinear, scaleTime as d3ScaleTime } from 'd3-scale';
import { line as d3Line } from 'd3-shape';

type Props = {
  data: any,
  height: number,
  selectX: (datum: any) => any,
  selectY: (datum: any) => any,
  width: number,
}

export default ({
  data,
  height,
  selectX,
  selectY,
  width,
}: Props) => {
  const xScale = d3ScaleTime()
    .domain(d3ArrayExtent(data, selectX))
    .range([0, width])

  const yScale = d3ScaleLinear()
    .domain(d3ArrayExtent(data, selectY))
    .range([height, 0])

  const selectScaledX = datum => xScale(selectX(datum));
  const selectScaledY = datum => yScale(selectY(datum));
  
  const sparkLine = d3Line()
    .x(selectScaledX)
    .y(selectScaledY);

  const linePath = sparkLine(data);

  return (
    <svg
      className="container"
      height={height}
      width={width}
    >
      <g className="line">
        <path d={linePath} />
      </g>
    </svg>
  )
}

import React from 'react';
import { arc as d3Arc, pie as d3pie } from 'd3-shape';

type Props = {
  data: any,
  height: number,
  width: number,
}

export default ({
  data,
  height,
  width,
}: Props) => {
  var pies = d3pie()(data);

  const arcGenerators = pies.map(pie => {
    return d3Arc()
      .outerRadius(width / 2)
      .innerRadius(width / 2 - 45)
      .startAngle(pie.startAngle)
      .endAngle(pie.endAngle)
  })

  return (
    <svg
      className="container"
      viewBox={`0 0 ${width} ${height}`}
    >
      <g className="line"
        style={{
          transform: `translateY(${height/2}px) translateX(${width/2}px)`
        }}
      >
        {
          arcGenerators.map(g => {
            return <path d={g()} />
          })
        }
      </g>
    </svg>
  )
}

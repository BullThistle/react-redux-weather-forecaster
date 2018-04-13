import React from 'react';
import { LineChart, Line, YAxis, Tooltip } from 'recharts';

export default (props) => {
  return (
    <div>
      <LineChart height={120} width={180} data={props.data}>
        <YAxis
          style={{ display: 'none' }}
          type="number"
          domain={[props.min, props.max]}
        />
        <Line
          type="monotone"
          dataKey="temp"
          stroke={props.color}
          dot={false}
        />
        <Tooltip />
      </LineChart>
    </div>
  )
}

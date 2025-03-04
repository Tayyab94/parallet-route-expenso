import React from 'react'

const MetricList = ({ data = [] }) => {

    return (
        <ul className="flex flex-col m-3">
            {data.map((item) => (
                <li
                    key={item.id}
                    data-metric-id={item.id}
                    className="p-1 text-xl">
                    <span className="mx-2">{item.name}</span> {' - '}
                    <span className="mx-2">{new Intl.NumberFormat().format(item.value)} {' '} USD</span>
                </li>
            ))}
        </ul>
    )
}

export default MetricList

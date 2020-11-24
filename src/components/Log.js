import React from "react";

import "../css/component-level/Log.css";

export default function Log({ logs }) {

  var rendered_rows = null;

    if (logs) {

      rendered_rows = logs.map((item, index) => {
      return (
        <tr key={index}>
          {item.map((item, index) => {
            return <td key={index}>{item}</td>;
          })}
        </tr>
      );
    });
  }

  return (
    <div className="log-cont">
      <table className='log-table'>
        <thead>
          <tr>
            <th>Struct Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Fuel Reading</th>
            <th>Odometer Reading</th>
          </tr>
        </thead>

        <tbody>{rendered_rows}</tbody>
      </table>
    </div>
  );
}

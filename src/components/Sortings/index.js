import React from "react";
import Cards from "../Cards";
import "./Sortings.css";

function Sortings({ headings, users, handleSort }) {
  return (
    <div className="sortings mt-5">
      <table
        id="table"
        className="table table-striped table-hover"
      >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <Cards users={users} />
      </table>
    </div>
  );
}

export default Sortings;

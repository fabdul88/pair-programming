import React from "react";
// import axios from "axios";

function ReportList(props) {
  return (
    <div className="report__content">
      <div className="report__container">
        <div className="report__header">Report List</div>
        <div className="divider"></div>
        <div className="report__body">
          <div className="report__card">
            <div className="report__listItem">
              <label>Call Type</label>
              <div>
                {props.updatedList.map((item) => {
                  return (
                    <>
                      <p>{item.address}</p>
                      <p>{item.time}</p>
                      <p>{item.ambulanceArrivalTime}</p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportList;

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
              <div className="report__back">
                {props.updatedList.map((item) => {
                  return (
                    <>
                      <label className="report__label">ADDRESS</label>
                      <p className="report__p">{item.address}</p>
                      <label className="report__label">CALL TIME</label>
                      <p className="report__p">{item.time}</p>
                      <label className="report__label">
                        AMBULANCE ARRIVAL TIME
                      </label>
                      <p className="report__p">{item.ambulanceArrivalTime}</p>
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

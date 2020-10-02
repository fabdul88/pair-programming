import React from "react";
import axios from "axios";
import ReportList from "../ReportList/ReportList";

class Form extends React.Component {
  state = {
    list: [],
  };
  clickHandler = (event) => {
    event.preventDefault();
    console.log(event.target.address.value);
    const form = {
      callType: event.target.callType.value,
      address: event.target.address.value,
      callDate: event.target.calldate.value,
      time: event.target.time.value,
      ambulanceArrivalDate: event.target.arrivaldate.value,
      ambulanceArrivalTime: event.target.arrivaltime.value,
    };
    console.log(form);
    axios
      .post("formList", form)
      .then((res) => {
        this.setState({ list: res.data });
        console.log(this.state.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const stateData = this.state.list;
    return (
      <>
        <div className="form__content">
          <form onSubmit={this.clickHandler} className="form__container">
            <div className="form__header">Report Form</div>
            <div className="divider"></div>
            <div className="form__body">
              <div className="form__item">
                <label className="form__label">Call Type</label>
                <select className="form__input" name="callType">
                  <option value="ls">Lights & Siren</option>
                  <option value="nls">Non-Lights & Siren</option>
                  <option value="lns">Lights & Non-Siren</option>
                </select>
              </div>

              <div className="form__item">
                <label className="form__label">Address</label>
                <input
                  type="text"
                  name="address"
                  className="form__input"
                ></input>
              </div>

              <div className="form__item">
                <label className="form__label">Date of Call</label>
                <input
                  type="date"
                  name="calldate"
                  className="form__input"
                ></input>
              </div>

              <div className="form__item">
                <label className="form__label">Time</label>
                <input type="time" name="time" className="form__input"></input>
              </div>

              <div className="form__item">
                <label className="form__label">Ambulance Arrival Date</label>
                <input
                  type="date"
                  name="arrivaldate"
                  className="form__input"
                ></input>
              </div>

              <div className="form__item">
                <label className="form__label">Ambulance Arrival Time</label>
                <input
                  type="time"
                  name="arrivaltime"
                  className="form__input"
                ></input>
              </div>

              <button type="submit" className="form__button">
                Submit
              </button>
            </div>
          </form>
        </div>
        <ReportList updatedList={stateData} />
      </>
    );
  }
}

export default Form;

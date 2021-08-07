import React, { Fragment, useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";

function MyCalendar(props) {
  const [selectedStartDate, setStartDate] = useState(moment());
  const [inputStartValue, setInputStartValue] = useState(moment().format("YYYY-MM-DD"));
  const [selectedEndtDate, setEndtDate] = useState(moment());
  const [inputEndtValue, setInputEndtValue] = useState(moment().format("YYYY-MM-DD"));
  const [input, setInput] = useState({});
  const [dataResponse, setdataResponse] = useState("");

  const onStartDateChange = (date, value) => {
    setStartDate(date);
    setInputStartValue(value);
  };

  const onEndDateChange = (date, value) => {
    setEndtDate(date);
    setInputEndtValue(value);
  };


  const dateFormatter = str => {
    return str;
  };

  // let handleSubmit =  (event) =>
  // {
  // event.preventDefault();

  //   setInput({"time1":{selectedStartDate}._d,"time2":{selectedEndtDate}._d})
  //   fetch('/timerange',
  //   {
  //   method: 'POST',
  //   body: JSON.stringify({input}),
  //   headers: {
  //     'Content-Type': 'application/json'
  //     }
  //  })
  // .then(res => res.json())
  // .then(json => setInput(json));

  // const body = {input}
  // setdataResponse( body.msg);
  // console.log("respond body " + body.user)
  // }

  return (
    <Fragment>
      {/* <form  onSubmit={handleSubmit}> */}
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
        <KeyboardDateTimePicker
          autoOk={true}
          showTodayButton={true}
          value={selectedStartDate}
          format="YYYY-MM-DD"
          inputValue={inputStartValue}
          onChange={onStartDateChange}
          rifmFormatter={dateFormatter}
        />
        {/* {console.log(selectedStartDate._d)} */}

        <KeyboardDateTimePicker
          autoOk={true}
          showTodayButton={true}
          value={selectedEndtDate}
          format="YYYY-MM-DD"
          inputValue={inputEndtValue}
          onChange={onEndDateChange}
          rifmFormatter={dateFormatter}
        />
        {/* {console.log(selectedEndtDate._d)} */}

      </MuiPickersUtilsProvider>
      <input type="submit" value="SUBMIT"  />

      {/* </form> */}
    </Fragment>
  );
}

export default MyCalendar;
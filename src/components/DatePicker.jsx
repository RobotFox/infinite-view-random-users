import { useState } from "react";

const DatePicker = () => {
  const [dateFrom, setDateFrom] = useState("gg/mm/aaaa");
  const [dateTo, setDateTo] = useState("gg/mm/aaaa");

  const handleChangeDateFrom = (e) => {
    let defaultDateFrom = "gg/mm/aaaa";
    try {
      const dateSelected = e.target.value;
      if (dateSelected != "") {
        defaultDateFrom = new Date(dateSelected).toLocaleDateString("it-IT");
      }
    } catch (error) {
      console.log("DatePicker::handleChangeDateFrom::Error", error);
    }
    setDateFrom(defaultDateFrom);
  };

  const handleChangeDateTo = (e) => {
    let defaultDateTo = "gg/mm/aaaa";
    try {
      const dateSelected = e.target.value;
      if (dateSelected != "") {
        defaultDateTo = new Date(dateSelected).toLocaleDateString("it-IT");
      }
    } catch (error) {
      console.log("DatePicker::handleChangeDateTo::Error", error);
    }

    setDateTo(defaultDateTo);
  };

  return (
    <>
      <div className="datepicker-box">
        <p className="datepicker-input">
          {`date_from: ${dateFrom}`}{" "}
          <input
            type="date"
            className="date-picker"
            onChange={(e) => handleChangeDateFrom(e)}
          />
        </p>

        <p className="datepicker-input">
          {`date_to: ${dateTo}`}{" "}
          <input
            type="date"
            className="date-picker"
            onChange={(e) => handleChangeDateTo(e)}
          />
        </p>
      </div>
    </>
  );
};

export default DatePicker;

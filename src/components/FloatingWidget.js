import React, { useState } from "react";
import "./Banner.css";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import "react-datepicker/dist/react-datepicker.css";

const FloatingWidget = () => {
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div
      className="fwContainer"
      style={{
        width: "100%",
        height: "70px",
        position: "relative",
        zIndex: "999",
        marginTop: "-150px",
        backgroundColor: "white",
        display: "flex",
        padding: "10px",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          width: "30%",
          marginLeft: "2%",
          backgroundColor: "",
          textAlign: "center",
          display: "flex",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </div>
      <div
        style={{
          width: "30%",
          marginInline: "3%",
          alignItems: "center",
          borderRadius: "4px",
          border: "1px solid blueviolet",
          borderShadow: "30px 20px 30px 10px rgba(56, 125, 255, 0.17)",
        }}
      >
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <p>1 Room, 1 Adult, 0 Children</p>
        </div>
      </div>
      <div
        style={{
          width: "30%",
          marginRight: "2%",
          display: "flex",
          borderRadius: "4px",
          border: "1px solid blueviolet",
          borderShadow: "30px 20px 30px 10px rgba(56, 125, 255, 0.17)",
        }}
      >

          <div
            style={{
              marginTop: "5px",
              textAlign: "center",
              display: "flex",
              marginLeft:"2px"
            }}
          >
            <form>
              <input
                name="email"
                type="email"
                placeholder="  Special Code"
                style={{width:"170px",height:"40px",border:"none"}}
              />
            </form>
          </div>
          <button
            style={{
              width: "70px",
              height: "40px",
              padding: "2px",
              marginTop: "4px",
              marginLeft: "20px",
              backgroundColor: "blueviolet",
              color: "white",
              border: "none",
              borderRadius: "2px",
            }}
          >
            Search
          </button>
       
      </div>
    </div>
  );
};

export default FloatingWidget;

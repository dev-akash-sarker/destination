import React, { useState } from "react";
import { Button, Container, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { valueuser } from "../feature/slice/TourSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

const Place = () => {
  // const [extra, setExtra] = useState();
  const uservalue = useSelector((uservalue) => uservalue.valuein.ValueIn);
  const [validateinfo, setValidateinfo] = useState({
    destinationfrom: "",
    destinationto: "",
    date: "",
    guest: "",
    classType: "",
  });
  const dispatch = useDispatch();
  // console.log(uservalue.destinationfrom);

  // console.log(validateinfo);
  const destFrom = [
    {
      value: "Please Select Destination",
    },
    {
      value: "Dhaka",
    },
    {
      value: "Chottogram",
    },
    {
      value: "Cox-bazar",
    },
  ];
  const guesFrom = [
    {
      value: "How many Guests",
    },
    {
      value: "1 person",
    },
    {
      value: "2 person",
    },
    {
      value: "3 person",
    },
    {
      value: "4 person",
    },
  ];
  const classType = [
    {
      value: "Class Type",
    },
    {
      value: "Economy Class",
    },
    {
      value: "Business Class",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidateinfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validationSchema = () => {
    if (
      !validateinfo.destinationfrom &&
      !validateinfo.destinationto &&
      !validateinfo.date &&
      !validateinfo.guest &&
      !validateinfo.classType
    ) {
      console.log("hoy nai");
    } else {
      console.log("hoise");
      dispatch(valueuser(validateinfo));
      localStorage.setItem("visitor-user", JSON.stringify(validateinfo));
    }
  };
  const handleSubmit = (e) => {
    validationSchema();
  };

  const deleteValue = () => {
    localStorage.removeItem("visitor-user");
    dispatch(valueuser(null));
  };

  return (
    <>
      <Container style={{ position: "relative" }}>
        <div className="centerd-style">
          <form className="Formcenter" onSubmit={handleSubmit}>
            <TextField
              className="place-style"
              select
              label="Destination From"
              defaultValue="Please Select Destination"
              name="destinationfrom"
              onChange={handleChange}
            >
              {destFrom.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className="place-style"
              select
              label="Destination To"
              name="destinationto"
              defaultValue="Please Select Destination"
              onChange={handleChange}
            >
              {destFrom.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-required"
              label="Journey Date"
              name="date"
              InputLabelProps={{
                shrink: true,
              }}
              type="date"
              onChange={handleChange}
            />
            <TextField
              className="place-style"
              select
              label="Guests"
              defaultValue="How many Guests"
              name="guest"
              onChange={handleChange}
            >
              {guesFrom.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className="place-style"
              select
              label="ClassName"
              defaultValue="Class Type"
              name="classType"
              onChange={handleChange}
            >
              {classType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <div className="btn-center">
              <Button className="btn-book" variant="contained" type="submit">
                Book
              </Button>
            </div>
          </form>
          <div className="details-style">
            <ul>
              <li>Destination From</li>
              <li>Destination To</li>
              <li>Journey Date</li>
              <li>Guests</li>
              <li>ClassName</li>
            </ul>
          </div>
          <div className="bg-value">
            <ul style={{ position: "relative" }}>
              {uservalue == null ? null : <li>{uservalue.destinationfrom}</li>}
              {uservalue == null ? null : <li>{uservalue.destinationto}</li>}
              {uservalue == null ? null : <li>{uservalue.date}</li>}
              {uservalue == null ? null : <li>{uservalue.guest}</li>}
              {uservalue == null ? null : <li>{uservalue.classType}</li>}

              {uservalue == null ? (
                ""
              ) : (
                <li className="deleteIcon" onClick={deleteValue}>
                  <RiDeleteBin6Line />
                </li>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Place;

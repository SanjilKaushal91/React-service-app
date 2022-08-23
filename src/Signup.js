import * as React from "react";
import { useState } from "react";
import "./App.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { withRouter } from "react-router";
import postData from "./apiServices";
import { style } from "./boxStyle";

function Signup(props) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    address: "",
    mob_no: "",
    password: "",
    price: "",
  });
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    let data = {
      name: user.name,
      email: user.email,
      mob_no: user.mob_no,
      role: user.role,
      address: user.address,
      password: user.password,
      price: user.price,
    };

    postData(data);

    if (
      user.name !== "" &&
      user.email !== "" &&
      user.mob_no !== "" &&
      user.password !== "" &&
      user.role !== "" &&
      user.price !== "" &&
      user.address !== ""
    ) {
      setOpen(true);
      setTimeout(() => {
        props.history.push("/userDetails");
      }, 2000);
    } else {
      alert("Fill all details properly");
    }
  };

  return (
    <>
      <div className="background">
        <form id="form" action="">
          <h1>Enter your details</h1>
          <br />
          <TextField
            id="outlined-required 1"
            required
            className="input"
            label="Name"
            placeholder="Enter your name here"
            value={user.name}
            onChange={(event) => {
              setUser((previousState) => {
                return { ...previousState, name: event.target.value };
              });
            }}
          />{" "}
          <br /> <br />
          <TextField
            id="outlined-required"
            required
            label="Email"
            className="input"
            placeholder="Enter your mail here"
            value={user.email}
            onChange={(event) =>
              setUser((previousState) => {
                return { ...previousState, email: event.target.value };
              })
            }
          />
          <br /> <br />
          <TextField
            id="outlined-number"
            required
            autoComplete="username"
            className="input"
            label="Mobile Number"
            type="number"
            value={user.mob_no}
            onChange={(event) =>
              setUser((previousState) => {
                return { ...previousState, mob_no: event.target.value };
              })
            }
          />{" "}
          <br /> <br />
          <TextField
            id="outlined-required"
            required
            label="address"
            className="input"
            placeholder="Enter your address here"
            value={user.address}
            onChange={(event) =>
              setUser((previousState) => {
                return { ...previousState, address: event.target.value };
              })
            }
          />
          <br /> <br />
          <Box sx={{ maxWidth: "50%", marginLeft: 23 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Service</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user.role}
                label="role"
                onChange={(event) =>
                  setUser((previousState) => {
                    return { ...previousState, role: event.target.value };
                  })
                }
                required
                autoComplete="role"
              >
                <MenuItem value={"plumber"}>plumber</MenuItem>
                <MenuItem value={"washerman"}>washerman</MenuItem>
                <MenuItem value={"electrician"}>electrician</MenuItem>
              </Select>
            </FormControl>
          </Box>{" "}
          <br />
          <TextField
            id="outlined-number"
            autoComplete="price"
            label="Price"
            type="number"
            required
            className="input"
            value={user.price}
            onChange={(event) =>
              setUser((previousState) => {
                return { ...previousState, price: event.target.value };
              })
            }
          />{" "}
          <br /> <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            value={user.password}
            required
            className="input"
            placeholder="Enter your Password here"
            onChange={(event) =>
              setUser((previousState) => {
                return { ...previousState, password: event.target.value };
              })
            }
            autoComplete="current-password"
          />{" "}
          <br /> <br />
          <Button onClick={handleClick} variant="outlined" className="btn1">
            Sign Up
          </Button>
          <Button
            onClick={() => props.history.push("/dashboard")}
            variant="outlined"
            color="success"
            className="btn2"
          >
            Dashboard
          </Button>
        </form>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h1">
              Sign Up Successfully
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              sx={{ mt: 2 }}
              component="h2"
            >
              Name : {user.name}
            </Typography>
            <Typography id="modal-modal-description">
              Mobile Number : {user.mob_no} <br /> role : {user.role} <br />{" "}
              Price : {user.price} Rs/- <br />
              Email : {user.email} <br />
              Address : {user.address}
              <br />
              Password : {user.password}
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default withRouter(Signup);

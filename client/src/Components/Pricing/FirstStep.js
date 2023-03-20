import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { MultiStepContext } from "../../StepContex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const FirstStep = () => {
  const { setCurrentStep, userData, setUserData } =
    useContext(MultiStepContext);
  const [value, setValue] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...userData, ...data };

    if (Object.keys(newData).length === 10) {
      setUserData(newData);
      setCurrentStep(1);
    } else {
      alert("please fill the form carefully");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex">
          <div className="w-50 me-5">
            <label>
              <b>First Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              value={userData["name"]}
              {...register("name", { required: true })}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            {errors.name && (
              <span className="text-danger">Enter Your First Name</span>
            )}
          </div>

          <div className="w-50">
            <label>
              <b>Age</b>
            </label>
            <input
              type="number"
              className="form-control"
              value={userData["age"]}
              {...register("age", { required: true })}
              onChange={(e) =>
                setUserData({ ...userData, age: e.target.value })
              }
            />
            {errors.age && <span className="text-danger">Enter Your Age</span>}
          </div>
        </div>

        <div className="d-flex">
          <div className="w-50 me-5">
            <label>
              <b>Email</b>
            </label>
            <input
              type="email"
              className="form-control"
              value={userData["email"]}
              {...register("email", { required: true })}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            {errors.email && (
              <span className="text-danger">Enter Your Email</span>
            )}
          </div>

          <div className="w-50">
            <label>
              <b>Mobile Number</b>
            </label>
            <input
              type="number"
              className="form-control"
              value={userData["phone"]}
              {...register("phone", { required: true })}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
            />
            {errors.phone && (
              <span className="text-danger">Enter Your Mobile Number</span>
            )}
          </div>
        </div>

        <div className="d-flex">
          <div className="w-50 me-5 pt-3">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Birthday"
                value={userData["birthday"] ? userData["birthday"] : value}
                onChange={(newValue) => {
                  setValue(newValue);
                  const newUserData = { ...userData, birthday: newValue };
                  setUserData(newUserData);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <br />
          </div>

          <div className="w-50">
            <label>
              <b>Gender</b>
            </label>
            <input
              type="text"
              className="form-control"
              value={userData["gender"]}
              {...register("gender", { required: true })}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
            />
            {errors.gender && (
              <span className="text-danger">Enter Your Gender</span>
            )}
          </div>
        </div>

        <div className="d-flex">
          <div className="w-50 me-5">
            <label>
              <b>Address in Line 1</b>
            </label>
            <input
              type="text"
              className="form-control"
              value={userData["address"]}
              {...register("address", { required: true })}
              onChange={(e) =>
                setUserData({ ...userData, address: e.target.value })
              }
            />
            {errors.address && (
              <span className="text-danger">Enter Your Address</span>
            )}
          </div>

          <div className="w-50">
            <label>
              <b>Country / Region</b>
            </label>
            <input
              type="text"
              className="form-control"
              value={userData["country"]}
              {...register("country", { required: true })}
              onChange={(e) =>
                setUserData({ ...userData, country: e.target.value })
              }
            />
            {errors.country && (
              <span className="text-danger">Enter Your Country/Region</span>
            )}
          </div>
        </div>

        <div className="d-flex">
          <div className="w-50 me-5">
            <label>
              <b>City</b>
            </label>
            <input
              type="text"
              className="form-control"
              value={userData["city"]}
              {...register("city", { required: true })}
              onChange={(e) =>
                setUserData({ ...userData, city: e.target.value })
              }
            />
            {errors.city && (
              <span className="text-danger">Enter Your City</span>
            )}
          </div>

          <div className="w-50">
            <label>
              <b>PostCode</b>
            </label>
            <input
              type="text"
              className="form-control"
              value={userData["postCode"]}
              {...register("postCode", { required: true })}
              onChange={(e) =>
                setUserData({ ...userData, postCode: e.target.value })
              }
            />
            {errors.postCode && (
              <span className="text-danger">Enter Your Post Code</span>
            )}
          </div>
        </div>

        <div className="text-end mt-3">
          <button style={{ width: "150px" }} className="btn btn-warning">
            next
            <FontAwesomeIcon className="ms-3" icon={faArrowRight} />
          </button>
        </div>
      </form>
    </div>
  );
};

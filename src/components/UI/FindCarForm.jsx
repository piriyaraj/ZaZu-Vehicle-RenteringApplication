import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  const submitHandler = (event) => {
    var vehicle = event.target.elements.type.value;
    var district = event.target.elements.district.value;
  };
  return (
    <Form className="form" onSubmit={submitHandler}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="select__group">
          <select name="type">
            <option value="cycle">Cycle</option>
            <option value="bike">Bike</option>
            <option value="van">Van</option>
            <option value="car">Car</option>
            <option value="car">Bus</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select name="district">
            <option value="Colombo">Colombo</option>
            <option value="Gampaha">Gampaha</option>
            <option value="Kalutara">Kalutara</option>
            <option value="Kandy">Kandy</option>
            <option value="Matale">Matale</option>
            <option value="NuwaraEliya">Nuwara Eliya</option>
            <option value="Galle">Galle</option>
            <option value="Matara">Matara</option>
            <option value="Hambantota">Hambantota</option>
            <option value="Jaffna">Jaffna</option>
            <option value="Kilinochchi">Kilinochchi</option>
            <option value="Mannar">Mannar</option>
            <option value="Vavuniya">Vavuniya</option>
            <option value="Mullaitivu">Mullaitivu</option>
            <option value="Batticaloa">Batticaloa</option>
            <option value="Ampara">Ampara</option>
            <option value="Trincomalee">Trincomalee</option>
            <option value="Kurunegala">Kurunegala</option>
            <option value="Puttalam">Puttalam</option>
            <option value="Anuradhapura">Anuradhapura</option>
            <option value="Polonnaruwa">Polonnaruwa</option>
            <option value="Badulla">Badulla</option>
            <option value="Moneragala">Moneragala</option>
            <option value="Ratnapura">Ratnapura</option>
            <option value="Kegalle">Kegalle</option>
          </select>
        </FormGroup>
        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;

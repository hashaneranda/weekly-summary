/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Form Input Components of the App
 * Date: 12-06-2020
 */

import React, { useState } from "react";

import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  Radio,
  FormControl,
  FormHelperText,
  FormLabel,
  InputLabel,
  Slider,
  Switch,
  FormControlLabel,
  RadioGroup,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { withStyles } from "@material-ui/core/styles";

//styles
import "./formInput.scss";

export const TextAreaInput = ({
  formClass = "",
  labelClass = "",
  labelValue = null,
  inputError = false,
  ...props
}) => {
  return (
    <FormControl
      className={`formInput ${formClass}`}
      error={inputError ? true : false}
    >
      {labelValue && (
        <FormLabel className={` ${labelClass}`}>{labelValue}</FormLabel>
      )}
      <TextField
        id="outlined-multiline-static"
        multiline
        variant="outlined"
        {...props}
      />
      <FormHelperText className="defaultHellperTxt">
        {inputError ? inputError : ""}
      </FormHelperText>
    </FormControl>
  );
};

/**
 *TextInput Component
 *
 * @param {*} { ...props }
 * @returns TextInput Component
 */
export const TextInput = ({
  formClass = "",
  labelClass = "",
  labelValue = null,
  inputError = false,
  ...props
}) => {
  return (
    <FormControl
      className={`formInput ${formClass}`}
      error={inputError ? true : false}
    >
      {labelValue && (
        <FormLabel className={` ${labelClass}`}>{labelValue}</FormLabel>
      )}
      <TextField
        id="outlined-basic"
        variant="outlined"
        error={inputError ? true : false}
        {...props}
      />
      <FormHelperText className="defaultHellperTxt">
        {inputError ? inputError : ""}
      </FormHelperText>
    </FormControl>
  );
};

/**
 *SelectBox Component
 *
 * @param {*} { data, className, ...props }
 * @returns SelectBox Component
 */
export const SelectBox = ({
  inputError = false,
  formClass = "",
  labelValue = "",
  labelClass = "",
  data,
  className,
  ...props
}) => {
  return (
    <FormControl
      className={`formInput ${formClass}`}
      error={inputError ? true : false}
    >
      {labelValue && (
        <FormLabel className={` ${labelClass}`}>{labelValue}</FormLabel>
      )}
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        variant="outlined"
        className={className}
        error={inputError ? true : false}
        // value={age}
        // onChange={handleChange}
        {...props}
      >
        {data.map((item) => (
          <MenuItem value={item.key}>{item.value}</MenuItem>
        ))}
      </Select>
      <FormHelperText className="defaultHellperTxt">
        {inputError ? inputError : ""}
      </FormHelperText>
    </FormControl>
  );
};

/**
 *DatePicker Component
 *
 * @param {*} { className, ...props }
 * @returns DatePicker Component
 */
export const DatePicker = ({
  value = "",
  handleDateChange = () => {},
  inputAdormantPosition = "end",
  className = "",
  placeholder = "",
  ...props
}) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        format="MM/DD/YYYY"
        inputValue=""
        value={value}
        InputAdornmentProps={{ position: inputAdormantPosition }}
        onChange={handleDateChange}
        placeholder={placeholder}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
};

/**
 *Check box component
 *
 * @param {*} { className, ...props }
 * @returns ChechBox component
 */
export const CheckBox = ({ formLabel = "", className = "", ...props }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="primary"
          className={`checkBox ${className}`}
          {...props}
        />
      }
      label={formLabel}
    />
  );
};

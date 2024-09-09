import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "../common/ErrorText";
import { formatKey } from "../../utils/HelperFun";

function AppInput({
  name,
  img,
  icon,
  placeholder,
  label,
  type,
  rows,
  ...rest
}) {
  const renderElementType = rows ? "textarea" : "input";

  // const { min, max } =  setDateMinAndMax({ minDate: '', maxDate: '' }) ;

  label = formatKey(label ?? name);

  return (
    <>
      {/* <label htmlFor={name} className="form-label">
        {label}
        {rest.required && <span className="text-danger">*</span>}
      </label>
      <Field
        className="form-control text-start"
        name={name}
        id={name}
        type={type}
        rows={rows}
        // min={min ?? undefined}
        // max={max ?? undefined}
        as={renderElementType}
        placeholder={placeholder ?? `Enter  ${label}`}
      />

      <ErrorMessage name={name} component={ErrorText} /> */}
      <div className="mt-2">
        <label htmlFor={name} className="name-txt">
          {label}
          {rest.required && <span className="text-danger">*</span>}
        </label>
        <div className="input-wrapper">
          {img ? (
            <span className="icon me-0">
              <img src={img} alt="email-icon" />
            </span>
          ) : (
            ""
          )}

          <Field
            name={name}
            id={name}
            type={type}
            as={renderElementType}
            rows={rows}
            placeholder={placeholder ?? `Enter  ${label}`}
            autoComplete="off"
            className="p-0"
          />
          {icon ? icon : ""}
        </div>
        <ErrorMessage
          style={{ fontWeight: "500" }}
          name={name}
          component="div"
          className="text-danger"
        />
      </div>
    </>
  );
}

export default AppInput;

import React from "react";

export const FormBtn = props =>
  <button {...props}
    id="add_new_band_btn">
    {props.children}
  </button>;

  export default FormBtn;

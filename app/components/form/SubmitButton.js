import React from "react";
import { useFormikContext } from "formik";
import AppButon from "../AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButon title={title} onPress={handleSubmit}></AppButon>;
}

export default SubmitButton;

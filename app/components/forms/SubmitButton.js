import React from "react";
import { useFormikContext } from "formik";

import Appbtn from '../../components/button/Appbtn'

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Appbtn title={title} color="primary" onPress={handleSubmit} />;
}

export default SubmitButton;

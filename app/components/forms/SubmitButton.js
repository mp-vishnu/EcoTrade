import React from "react";
import { useFormikContext } from "formik";
import { View } from "react-native";
import Appbtn from '../../components/button/Appbtn'

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <View style={{alignItems:'center'}}>
      <Appbtn title={title} color="primary" onPress={handleSubmit} />
    </View>
  );
}

export default SubmitButton;

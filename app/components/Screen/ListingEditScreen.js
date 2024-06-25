import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../../components/forms";
import Screen from "../../components/Screen";
import CategoryPickerItem from "../CategoryPickerItem";
import ImageInput from "../ImageInput";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor:'red', icon:'apps' },
  { label: "Clothing", value: 2, backgroundColor:'green', icon:'email'  },
  { label: "Camera", value: 3, backgroundColor:'blue', icon:'lock' },
];

function ListingEditScreen() {
  return (
 <>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
         <ImageInputLayout title="Select Image" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <Picker items={categories} name="category"
        numberOfColumns={3}
         PickerItemComponent={CategoryPickerItem} placeholder="Category" />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    //paddingHorizontal: 20,
    //paddingVertical:7,

  },
});
export default ListingEditScreen;
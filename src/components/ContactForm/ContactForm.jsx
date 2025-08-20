import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
const initialValues = {
  name: "",
  number: "",
};
const DataSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short name")
    .max(50, "Too long name")
    .required("Name field is required "),
  number: Yup.string()
    .min(3, "Too short number")
    .max(50, "Too long number")
    .required("phone number fiels is required"),
});
export default function ContactForm({ onAdd }) {
  const contactNameId = useId();
  const contactNumberId = useId();
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: Date.now(),
      ...values,
    };
    onAdd(newContact);
    actions.resetForm();
  };
  return (
    <div className={css.formBox}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={DataSchema}
      >
        <Form className={css.form}>
          <label htmlFor="contactNameId">Contact name:</label>
          <Field id={contactNameId} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
          <label htmlFor="contactNumberId">Phone number:</label>
          <Field id={contactNumberId} type="text" name="number" />
          <ErrorMessage name="number" component="span" />
          <button className={css.formBtn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

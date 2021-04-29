import { Button, Formik } from "@royalnavy/react-component-library";
import { Field, Form, useFormikContext } from "formik";
import React from "react";
import { Prompt } from "react-router-dom";

export const EditThingForm: React.FC = () => {
  const { dirty, isSubmitting } = useFormikContext();

  /*
    const discardConfig = {
      bodyText: 'Are you sure you want to cancel editing this replenishment?',
      title: 'You sure about this?'
    };

    const message = JSON.stringify(discardConfig);
  */

  return (
    <>
      <Prompt
        message="Are you sure you want to cancel editing this replenishment?"
        when={dirty && !isSubmitting}
      />
      <Form>
        <Field component={Formik.TextInput} type="text" name="name" />
        <Button type="submit">Save</Button>
      </Form>
    </>
  );
};

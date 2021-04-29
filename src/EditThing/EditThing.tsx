import { Formik } from "formik";
import React from "react";
import { Link, useHistory } from "react-router-dom";

import { EditThingForm } from "./EditThingForm";

interface Thing {
  name: string;
  age: number;
}

export const EditThing: React.FC = () => {
  const history = useHistory();

  const initialValues = {
    name: "fred",
    age: 10,
  };

  const onSubmit = (data: Thing) => {
    history.push("/");
  };

  return (
    <>
      <Link to="/">Home</Link>
      <hr />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <EditThingForm />
      </Formik>
    </>
  );
};

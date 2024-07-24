import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const HospitalSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  image: Yup.string().url('Invalid URL').required('Required'),
  speciality: Yup.array().of(Yup.string().required('Required')).required('Required'),
  rating: Yup.number().min(0).max(5).required('Required')
});

const HospitalForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={HospitalSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label>City</label>
            <Field type="text" name="city" />
            <ErrorMessage name="city" component="div" />
          </div>
          <div>
            <label>Image URL</label>
            <Field type="text" name="image" />
            <ErrorMessage name="image" component="div" />
          </div>
          <div>
            <label>Specialities</label>
            <Field as="select" name="speciality" multiple>
              <option value="Heart">Heart</option>
              <option value="Ear">Ear</option>
              {/* Add more options as needed */}
            </Field>
            <ErrorMessage name="speciality" component="div" />
          </div>
          <div>
            <label>Rating</label>
            <Field type="number" name="rating" />
            <ErrorMessage name="rating" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default HospitalForm;

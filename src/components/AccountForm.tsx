import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Field, FieldProps, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import { object, string } from "yup";

import { AccountPayload } from "../models";

const validationSchema = object({
  accountName: string()
    .min(5, "Must contain at least 5 characters")
    .required("Enter an account name"),
});

export interface AccountFormProps {
  createAccount: Function;
  onboarding?: boolean;
}

const AccountForm: React.FC<AccountFormProps> = ({ createAccount, onboarding }) => {
  const history = useHistory();
  const initialValues: AccountPayload = {
    accountName: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        createAccount({ ...values });

        if (!onboarding) {
          history.push("/accounts");
        }
      }}
    >
      {({ isValid, isSubmitting }) => (
        <Form data-test="account-form">
          <Field name="accountName">
            {({ field, meta: { error, value, initialValue, touched } }: FieldProps) => (
              <TextField
                variant="outlined"
                margin="dense"
                fullWidth
                required
                id={"account-name-input"}
                type="text"
                placeholder="Account Name"
                data-test={"account-name-input"}
                error={(touched || value !== initialValue) && Boolean(error)}
                helperText={touched || value !== initialValue ? error : ""}
                {...field}
              />
            )}
          </Field>
          <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                data-test="account-submit"
                disabled={!isValid || isSubmitting}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default AccountForm;

import {
  Grid,
  Switch,
  TextField,
  RadioGroup,
  Radio,
  Button,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { FormikTouched } from "formik";
import React from "react";
import { EMailFrequencyEnums, FormValues } from "../../models/Form";
import { FormProps } from "./Form.props";

const Form = React.memo((props: FormProps) => {
  console.log(props.formik);

  const formItems = [
    {
      key: 1,
      columns: 9,
      text: (
        <>
          <Typography variant="h6">
            Allow users to download their conversations
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            Web chat only
          </Typography>
        </>
      ),
      className: "mt-2",
    },
    {
      key: 2,
      columns: 3,
      text: (
        <Switch
          name="conversationDownloadsEnabled"
          checked={props.formik.values?.conversationDownloadsEnabled}
          onChange={props.formik.handleChange}
        />
      ),
      className: "rtl",
    },
    {
      key: 3,
      columns: 9,
      text: (
        <>
          <Typography variant="h6">
            Allow users to clear their conversations
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            Web chat only
          </Typography>
        </>
      ),
      className: "mt-2",
    },
    {
      key: 4,
      columns: 3,
      text: (
        <Switch
          name="conversationClearEnabled"
          checked={props.formik.values?.conversationClearEnabled}
          onChange={props.formik.handleChange}
        />
      ),
      className: "rtl",
    },
    {
      key: 5,
      columns: 9,
      text: (
        <>
          <Typography variant="h6">
            Show live chat icon for instant connection
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            Web chat only
          </Typography>
        </>
      ),
      className: "mt-2",
    },
    {
      key: 6,
      columns: 3,
      text: (
        <Switch
          name="showLiveChatIcon"
          checked={props.formik.values?.showLiveChatIcon}
          onChange={props.formik.handleChange}
        />
      ),
      className: "rtl",
    },
    {
      key: 7,
      columns: 9,
      text: (
        <>
          <Typography variant="h6">
            Request user details prior to connecting
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            Name, email or contact number, and reason
          </Typography>
        </>
      ),
      className: "mt-2",
    },
    {
      key: 8,
      columns: 3,
      text: (
        <Switch
          name="collectUserInfoEnabled"
          checked={props.formik.values?.collectUserInfoEnabled}
          onChange={props.formik.handleChange}
        />
      ),
      className: "rtl",
    },
    {
      key: 9,
      columns: 9,
      text: (
        <>
          <Typography variant="h6">Receive transcripts by email</Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 1.5 }}
            color="text.secondary"
          >
            CSV file containing all conversations held in the selected period
          </Typography>
        </>
      ),
      className: "mt-2",
    },
    {
      key: 10,
      columns: 3,
      text: (
        <Switch
          name="emailEnabled"
          checked={props.formik.values?.emailEnabled}
          onChange={props.formik.handleChange}
        />
      ),
      className: "rtl",
    },
    {
      key: 11,
      columns: 6,
      text: (
        <>
          <Typography variant="h6">Please provide an email address</Typography>
        </>
      ),
      className: "mt-2",
    },
    {
      key: 12,
      columns: 6,
      text: (
        <TextField
          className="ltr w-100 text-left"
          required
          id="emailAddress"
          label="emailAddress"
          value={props.formik?.values?.emailAddress}
          onChange={props.formik.handleChange}
          error={props.formik?.touched.emailAddress && Boolean(props.formik?.errors.emailAddress)}
          helperText={props.formik?.touched?.emailAddress && props.formik?.errors.emailAddress}
        />
      ),
      className: "rtl",
    },
    {
      key: 13,
      columns: 9,
      text: (
        <>
          <Typography variant="h6">Frequency</Typography>
        </>
      ),
      className: "mt-2",
    },
    {
      key: 14,
      columns: 3,
      text: (
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="emailFrequency"
          id="emailFrequency"
          value={props.formik?.values?.emailFrequency}
          onChange={(e) =>
            props.formik.setValues((values: FormikTouched<FormValues>) => ({
              ...values,
              emailFrequency: e.target?.value,
            }))
          }
        >
          <FormControlLabel
            value={EMailFrequencyEnums.WEEKLY}
            control={<Radio />}
            label="weekly"
            name="weekly"
          />
          <FormControlLabel
            value={EMailFrequencyEnums.DAILY}
            control={<Radio />}
            label="daily"
            name="daily"
          />
        </RadioGroup>
      ),
      className: "rtl",
    },
    {
      key: 15,
      columns: 6,
      text: (
        <Button variant="outlined" onClick={props.handleCancel}>
          Cancel
        </Button>
      ),
      className: "",
    },
    {
      key: 16,
      columns: 6,
      text: (
        <Button variant="contained" type="submit">
          Save Changes
        </Button>
      ),
      className: "rtl",
    },
  ];

  return (
    <form onSubmit={props.formik?.handleSubmit}>
      <Grid container spacing={2} direction="row">
        {formItems.map((item) => (
          <Grid
            key={item.key}
            item
            xs={item.columns}
            className={item.className}
          >
            {item.text}
          </Grid>
        ))}
      </Grid>
    </form>
  );
});

export default Form;

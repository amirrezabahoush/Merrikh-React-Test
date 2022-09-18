import { FormikConfig, FormikHandlers } from "formik";
import { FormValues } from "../../models/Form";

export type FormProps = {
  formik: any;
  handleCancel: () => void;
};
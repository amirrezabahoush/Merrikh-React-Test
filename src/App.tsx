import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import MainLayout from "./layouts/Main";
import { getInitialData } from "./services";
import * as yup from "yup";
import { useFormik } from "formik";
import SettingsIcon from "@mui/icons-material/Settings";
import TabPanel from "./components/TabPanel";
import { EMailFrequencyEnums, FormValues } from "./models/Form";
import Form from "./components/Form";

const tabItems = [
  {
    key: 1,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <SettingsIcon className="pr-1" /> General
      </div>
    ),
    icon: "",
  },
  { key: 2, label: "Take Offline", icon: "" },
  { key: 3, label: "Blocked Users", icon: "" },
];

const validationSchema = yup.object().shape({
  emailAddress: yup.string().required("Email is required"),
});

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { data: response } = useQuery(["initialData"], getInitialData, {
    onSuccess: ({ data }) => {
      const { conversationTranscripts, ...others } = data;
      formik.setValues({
        ...others,
        emailAddress: conversationTranscripts.emailAddress,
        emailEnabled: conversationTranscripts.emailEnabled,
        emailFrequency: conversationTranscripts.emailFrequency,
      });
    },
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      collectUserInfoEnabled: false,
      conversationClearEnabled: false,
      conversationDownloadsEnabled: false,
      emailEnabled: false,
      emailAddress: "",
      emailFrequency: EMailFrequencyEnums.DAILY,
      initMessage: false,
      showLiveChatIcon: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log({ values });
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleCancel = () => {
    if (response?.data) {
      const { conversationTranscripts, ...others } = response?.data;
      formik.setValues({
        ...others,
        emailAddress: conversationTranscripts.emailAddress,
        emailEnabled: conversationTranscripts.emailEnabled,
        emailFrequency: conversationTranscripts.emailFrequency,
      });
    }
  };

  return (
    <MainLayout>
      <Grid container spacing={2}>
        <Grid item xs={24}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={(event, newValue) => setActiveTab(newValue)}
              aria-label="basic tabs example"
            >
              {tabItems.map((item) => (
                <Tab
                  key={item.key}
                  label={item.label}
                  aria-controls={`simple-tabpanel-${item.key}`}
                />
              ))}
            </Tabs>
          </Box>
          <TabPanel value={activeTab} index={0}>
            <Card>
              <CardContent>
                <Typography sx={{ fontWeight: "bold" }} gutterBottom>
                  General Settings
                </Typography>
                <Divider variant="fullWidth" component="div" />
                <Form formik={formik as any} handleCancel={handleCancel} />
              </CardContent>
            </Card>
          </TabPanel>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default App;

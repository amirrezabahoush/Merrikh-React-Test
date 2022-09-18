import { Box } from "@mui/material";
import { TabPanelProps } from "./TabPanel.props";

function TabPanel(props: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`simple-tabpanel-${props.index}`}
      aria-labelledby={`simple-tab-${props.index}`}
      {...props}
    >
      {props.value === props.index && <Box sx={{ p: 3 }}>{props.children}</Box>}
    </div>
  );
}

export default TabPanel;
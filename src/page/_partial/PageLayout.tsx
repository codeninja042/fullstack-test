// PageLayout.tsx
import React, {ReactNode} from "react";
import {Stack, Paper} from "@mui/material";
import {AnalyzedChart} from ".";

interface PageLayoutProps {
  mainComponent: ReactNode;
  columnReverse?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  mainComponent,
  columnReverse = false,
}) => (
  <Stack
    spacing={2}
    sx={{padding: 2}}
    direction={columnReverse ? "column-reverse" : "column"}>
    <Paper>
      <AnalyzedChart />
    </Paper>
    <Paper>{mainComponent}</Paper>
  </Stack>
);

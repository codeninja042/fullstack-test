import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {Timeframe} from "src/enum";
import {TimeSelector} from "./_partial/TimeSelector";

const StyledAppBar = styled(MuiAppBar)`
  padding: 12px 30px;
  flex-direction: row;
`;

export interface AppBarProps {
  title: string;
}

export const AppBar: React.FC<AppBarProps> = ({title}: AppBarProps) => {
  return (
    <StyledAppBar>
      <Typography
        component={Link}
        to="/"
        variant="h6"
        color="inherit"
        noWrap
        sx={{flexGrow: 1, alignSelf: "center", textDecoration: "none"}}>
        {title}
      </Typography>
      <TimeSelector timeframes={Object.values(Timeframe)} />
    </StyledAppBar>
  );
};

import { Typography, AppBar, Toolbar } from "@mui/material";
import PropTypes from "prop-types";

export default function Header({ title, caption }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" component="h1">
          {title}
        </Typography>
        <Typography
          sx={{
            paddingLeft: 5,
          }}
        >
          {caption}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
};

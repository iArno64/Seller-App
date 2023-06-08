import { Typography, AppBar, Toolbar, Link } from "@mui/material";
import { Image } from "mui-image";
import PropTypes from "prop-types";
import { Link as RRLink } from "react-router-dom";

export default function Header({ title, caption, imageUrl }) {
  return (
    <AppBar
      position="static"
      sx={{
        height: 70,
      }}
    >
      <Toolbar>
        <Link to="/" component={RRLink}>
          <Image
            src={imageUrl}
            alt={title}
            width={500}
            height={70}
            duration={25}
          />
        </Link>
        {/* <Link
          to={"/"}
          component={RRLink}
          src={imageUrl}
          alt={title}
          width={500}
          height={70}
          duration={25}
        /> */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            textAlign: "center",
            marginLeft: "20",
          }}
        >
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
  imageUrl: PropTypes.string,
};

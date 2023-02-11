import { Box, Grid, Typography } from "@mui/material";
import styles from "./style.module.sass";
import header_background from "assets/images/header_background.png";
import header_avatar from "assets/images/header_avatar.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Grid className={styles.header_container} id="home">
      <img
        src={header_background}
        alt="lol"
        loading="lazy"
        className={styles.background_img}
      />
      <Box className={styles.text_container}>
        <img src={header_avatar} alt="lol" loading="lazy" />
        <Typography variant="body1">
          Real time notification <br />
          include D1/H4 charts analysis <br />
          You will never miss support or resistance , within a time frame (4
          Hours + 1 Day). you will keep in touch of the market all the time ,
          when you used our app
        </Typography>
        <Link to="#download_app">Download</Link>
      </Box>
    </Grid>
  );
}

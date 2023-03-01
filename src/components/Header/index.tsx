import { Box, Grid, Typography } from "@mui/material";
import styles from "./style.module.sass";
import header_background from "assets/images/header_background.png";
import header_avatar from "assets/images/header_avatar.png";

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
          You will never miss support or resistance <br /> Our Expert Advisor is
          an unique & creative application in Forex trading With the ability to
          trade with 28 symbol of currencies.
        </Typography>
        <a
          href="https://play.google.com/store/apps/details?id=com.youseforex.support_and_restincance"
          target="_blank"
          rel="noreferrer"
        >
          Download Trial App
        </a>
      </Box>
    </Grid>
  );
}

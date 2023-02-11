import { Grid, Typography } from "@mui/material";
import styles from "./style.module.sass";
import footer_logo from "assets/images/footer_logo.svg";
import { ReactComponent as FacebookIcon } from "assets/images/facebook_icon.svg";
import { FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Grid
      container
      className={styles.footer_container}
      display="flex"
      flexDirection="column"
    >
      <Grid
        className={styles.footer_content}
        container
        display="flex"
        alignItems="center"
      >
        <Grid className={styles.logo} item xs={12} md={4}>
          <a href="#home">
            <img src={footer_logo} alt="footer" loading="lazy" />
          </a>
        </Grid>
        <Grid item xs={12} md={5}>
          <a
            target="_blank"
            href="mailto:support@forexsniper.net"
            rel="noreferrer"
            className={styles.contact_link}
          >
            <Typography variant="subtitle1" className={styles.contact_us}>
              <FaRegEnvelope /> Contact Us :
            </Typography>
            <Typography variant="subtitle2" className={styles.mail}>
              support@forexsniper.net
            </Typography>
          </a>
        </Grid>
        <Grid className={styles.social_icons} item xs={12} md={3}>
          <FacebookIcon />
        </Grid>
      </Grid>
      <Grid className={styles.copy_rights}>
        <Typography variant="caption">Copyright 2023 © Forex Sniper</Typography>
      </Grid>
    </Grid>
  );
}

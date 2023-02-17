import { Box, Grid, Typography } from "@mui/material";
import styles from "./style.module.sass";
import download_section_circle from "assets/images/download_section_circle.png";
import download_section_phone from "assets/images/download_section_phone.png";
import get_it_on_play from "assets/images/get_it_on_play.png";
import qrcode from "assets/images/qrcode.png";

export default function Download() {
  return (
    <Grid className={styles.download_container} container id="download_app">
      <Grid xs={12} md={6} item className={styles.image_container}>
        <img
          className={styles.circle}
          src={download_section_circle}
          alt={"circle"}
          loading="lazy"
        />
        <img
          className={styles.phone}
          src={download_section_phone}
          alt={"circle"}
          loading="lazy"
        />
      </Grid>
      <Grid xs={12} md={6} item className={styles.info_container}>
        <Grid className={styles.text_section}>
          <Typography variant="caption" className={styles.hero_title}>
            Support & Resistance
          </Typography>
          <Typography variant="h4" className={styles.title}>
            Download
          </Typography>
          <Typography variant="h6" className={styles.subtitle}>
            Our New App Now
          </Typography>
        </Grid>
        <Grid className={styles.btns_section}>
          <Box>
            <img
              src={qrcode}
              alt="qrcode"
              loading="lazy"
              className={styles.qrcode}
            />
          </Box>
        </Grid>
        <Grid className={styles.btns_section}>
          <a
            href="https://play.google.com/store/apps/details?id=com.youseforex.support_and_restincance"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={get_it_on_play}
              alt="google play"
              loading="lazy"
              className={styles.get_it_on_play}
            />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

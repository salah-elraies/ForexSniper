import { Grid, Typography, useMediaQuery } from "@mui/material";
import styles from "./style.module.sass";
import forexSniperLogo from "assets/images/forexSniperLogo.svg";
import { useState } from "react";

export default function Nav() {
  const matches1370px = useMediaQuery("(min-width:1370px)");
  const [isActive, setIsActive] = useState("home");
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const handleClickLink = (link_to: string) => {
    setIsActive(link_to);
  };
  const onMenuIconClick = () => {
    setIsActiveMenu(!isActiveMenu);
  };
  return (
    <Grid container className={styles.home_nav}>
      <Grid
        className={styles.web_view}
        container
        display="flex"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Grid item xs={3} className={styles.logo_container}>
          <img src={forexSniperLogo} alt="lol" />
        </Grid>
        {matches1370px ? (
          <Grid
            xs={9}
            item
            justifyContent={"flex-end"}
            display="flex"
            className={styles.links}
          >
            <a
              href="#home"
              onClick={() => handleClickLink("home")}
              className={isActive === "home" ? styles.active : ""}
            >
              <Typography variant="caption">Home</Typography>
            </a>
            <a
              href="#features"
              onClick={() => handleClickLink("features")}
              className={isActive === "features" ? styles.active : ""}
            >
              <Typography variant="caption">Features</Typography>
            </a>
            <a
              href="#support"
              onClick={() => handleClickLink("app_screenshots")}
              className={isActive === "app_screenshots" ? styles.active : ""}
            >
              <Typography variant="caption">Support & Resistance</Typography>
            </a>
            <a
              href="#app_screenshots"
              onClick={() => handleClickLink("support")}
              className={isActive === "support" ? styles.active : ""}
            >
              <Typography variant="caption">App Screenshots</Typography>
            </a>
            <a
              href="#download_trial"
              onClick={() => handleClickLink("download_trial")}
              className={isActive === "download_trial" ? styles.active : ""}
            >
              <Typography variant="caption">Download trial App</Typography>
            </a>
            <a
              href="#download_app"
              onClick={() => handleClickLink("download_app")}
              className={isActive === "download_app" ? styles.active : ""}
            >
              <Typography variant="caption">Download App</Typography>
            </a>
          </Grid>
        ) : (
          <Grid className={styles.menu_icon} onClick={onMenuIconClick}>
            <span className={isActiveMenu ? styles.active : ""}></span>
          </Grid>
        )}
      </Grid>
      {isActiveMenu ? (
        <Grid className={`${styles.mobile_view}`}>
          <Grid className={styles.under_lay}></Grid>
          <Grid className={styles.view_container}>
            <Grid className={styles.logo_container}>
              <img src={forexSniperLogo} alt="lol" />
            </Grid>
            <Grid className={styles.links}>
              <a
                href="#home"
                onClick={() => handleClickLink("home")}
                className={isActive === "home" ? styles.active : ""}
              >
                <Typography variant="caption">Home</Typography>
              </a>
              <a
                href="#features"
                onClick={() => handleClickLink("features")}
                className={isActive === "features" ? styles.active : ""}
              >
                <Typography variant="caption">Features</Typography>
              </a>
              <a
                href="#support"
                onClick={() => handleClickLink("app_screenshots")}
                className={isActive === "app_screenshots" ? styles.active : ""}
              >
                <Typography variant="caption">Support & Resistance</Typography>
              </a>
              <a
                href="#app_screenshots"
                onClick={() => handleClickLink("support")}
                className={isActive === "support" ? styles.active : ""}
              >
                <Typography variant="caption">App Screenshots</Typography>
              </a>
              <a
                href="#download_trial"
                onClick={() => handleClickLink("download_trial")}
                className={isActive === "download_trial" ? styles.active : ""}
              >
                <Typography variant="caption">Download trial App</Typography>
              </a>
              <a
                href="#download_app"
                onClick={() => handleClickLink("download_app")}
                className={isActive === "download_app" ? styles.active : ""}
              >
                <Typography variant="caption">Download App</Typography>
              </a>
            </Grid>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}

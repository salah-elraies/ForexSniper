import { Grid, Typography } from "@mui/material";
import FeatureCard from "./FeatureCard";
import styles from "./style.module.sass";
import push_notification_icon from "assets/images/push_notification_icon.svg";
import quick_access_icon from "assets/images/autoTradePins.svg";
// import friendly_design_icon from "assets/images/friendly_design_icon.svg";
import fully_secured_icon from "assets/images/fully_secured_icon.svg";
// import daily_update_icon from "assets/images/daily_update_icon.svg";
import expert_op_icon from "assets/images/expert_op_icon.jpeg";

export default function Features() {
  return (
    <Grid
      container
      flexDirection={"column"}
      className={styles.features_container}
      id="features"
    >
      <Typography variant="caption" className={styles.subtitle}>
        {`Our App Presents`}
      </Typography>
      <Typography variant="h4" className={styles.title}>
        {`Features`}
      </Typography>
      <Grid container className={styles.cards_container}>
        <FeatureCard
          index={"01"}
          image={push_notification_icon}
          title="Push Notification"
        />
        <FeatureCard
          index={"02"}
          image={quick_access_icon}
          title="Accurate Action"
        />
        {/* <FeatureCard
          index={"03"}
          image={friendly_design_icon}
          title="Friendly Design"
        /> */}
        <FeatureCard
          index={"03"}
          image={fully_secured_icon}
          title="Fully Secured"
        />
        <FeatureCard
          index={"04"}
          image={expert_op_icon}
          title="Expert advisor"
        />
      </Grid>
    </Grid>
  );
}

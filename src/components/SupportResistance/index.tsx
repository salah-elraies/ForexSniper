import { Box, Grid, Typography } from "@mui/material";
import styles from "./style.module.sass";
import support_resistance_side_icons from "assets/images/support_resistance_side_icons.svg";
export default function SupportResistance() {
  return (
    <Grid
      className={styles.support_container}
      container
      flexDirection={"column"}
      id="support"
    >
      <Grid className={styles.support_header_contaienr}>
        <Box className={styles.support_header}>
          <img
            src={support_resistance_side_icons}
            alt="support"
            loading="lazy"
          />
          <Typography variant="caption">Support & Resistance</Typography>
          <img
            src={support_resistance_side_icons}
            alt="support"
            loading="lazy"
          />
        </Box>
        {/* symbols cards */}
      </Grid>
    </Grid>
  );
}

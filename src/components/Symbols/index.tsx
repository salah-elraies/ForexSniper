import { Box, Grid, Typography } from "@mui/material";
import styles from "./style.module.sass";
import sympolsMoneyIcon from "assets/images/sympolsMoneyIcon.svg";
export default function Symbols() {
  return (
    <Grid
      className={styles.symbols_container}
      container
      flexDirection={"column"}
    >
      <Grid className={styles.symbols_header_contaienr}>
        <Box className={styles.symbols_header}>
          <img src={sympolsMoneyIcon} alt="Symbols" loading="lazy" />
          <Typography variant="caption">Symbols</Typography>
          <img src={sympolsMoneyIcon} alt="Symbols" loading="lazy" />
        </Box>
        {/* symbols cards */}
      </Grid>
    </Grid>
  );
}

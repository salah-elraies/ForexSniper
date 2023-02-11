import { Grid, Typography } from "@mui/material";
import styles from "./style.module.sass";
export default function StatusCard({
  icon,
  topTitle,
  number,
  bottomTitle,
  background,
  backgroundHover,
}: {
  icon: string;
  topTitle: string;
  number: string;
  bottomTitle: string;
  background: string;
  backgroundHover: string;
}) {
  return (
    <Grid
      item
      xs={6}
      md={3}
      sx={[
        {
          "&:hover": { background: backgroundHover },
          background,
        },
      ]}
      className={styles.status_card_container}
    >
      <img
        src={icon}
        alt={bottomTitle}
        loading="lazy"
        className={styles.icon}
      />
      <Typography variant="caption" className={styles.topTitle}>
        {topTitle}
      </Typography>
      <Typography variant="h6" className={styles.number}>
        {number}
      </Typography>
      <Typography variant="caption" className={styles.bottomTitle}>
        {bottomTitle}
      </Typography>
    </Grid>
  );
}

import { Box, Grid, Typography } from "@mui/material";
import styles from "./style.module.sass";

export default function FeatureCard({
  index,
  image,
  title,
}: {
  index: string;
  image: any;
  title: string;
}) {
  return (
    <Grid
      className={`${styles.card_container} ${
        styles[title.replace(" ", "_").toLowerCase()]
      }`}
    >
      <Typography variant="caption" className={styles.card_index}>
        {index}
      </Typography>
      <Box className={styles.card_image_container}>
        <img src={image} alt={index} loading="lazy" />
      </Box>
      <Typography variant="h6" className={styles.card_title}>
        {title}
      </Typography>
    </Grid>
  );
}

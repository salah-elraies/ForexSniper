import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";
import styles from "./style.module.sass";

export default function DescriptionSection({
  subtitle,
  title,
  body,
  ankor = "",
  ankorText = "",
  isEven = false,
  image,
}: {
  subtitle: string;
  title: string;
  body: string;
  ankor?: string;
  ankorText?: string;
  isEven?: boolean;
  image: ReactNode;
}) {
  return (
    <Grid
      container
      className={`${styles.description_container} ${
        isEven ? styles.is_even : ""
      }`}
      id="download_trial"
    >
      {isEven ? (
        <>
          <Grid
            xs={12}
            md={6}
            display="flex"
            justifyContent={"center"}
            item
            className={`${styles.image_container} ${styles.is_even}`}
          >
            {image}
          </Grid>
          <Grid xs={12} md={6} item className={styles.data_contaienr}>
            <Typography variant="caption" className={styles.subtitle}>
              {subtitle}
            </Typography>
            <Typography variant="h4" className={styles.title}>
              {title}
            </Typography>
            <Typography variant="body1" className={styles.body}>
              {body}
            </Typography>
            {ankor ? <a href={ankor}>{ankorText}</a> : null}
          </Grid>
        </>
      ) : (
        <>
          <Grid xs={12} md={6} item className={styles.data_contaienr}>
            <Typography variant="caption" className={styles.subtitle}>
              {subtitle}
            </Typography>
            <Typography variant="h4" className={styles.title}>
              {title}
            </Typography>
            <Typography variant="body1" className={styles.body}>
              {body}
            </Typography>
            {ankor ? <a href={ankor}>{ankorText}</a> : null}
          </Grid>
          <Grid
            xs={12}
            md={6}
            display="flex"
            justifyContent={"center"}
            item
            className={styles.image_container}
          >
            {image}
          </Grid>
        </>
      )}
    </Grid>
  );
}

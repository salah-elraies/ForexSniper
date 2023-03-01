import { Box, Grid, Pagination, Typography } from "@mui/material";
import styles from "./style.module.sass";
import support_resistance_side_icons from "assets/images/support_resistance_side_icons.svg";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";

type SupportResistanceState = {
  loading: boolean;
  error: { code: number; message: string };
  data: {
    ID: number;
    Symbol: string;
    D1H4: string;
    SR: string;
    Price: string;
    Date: string;
    Time: string;
  }[];
  total_items_page: number;
  total_count: number;
  total_pages: number;
};
const initSupport: SupportResistanceState = {
  loading: false,
  error: { code: 0, message: "" },
  data: [],
  total_count: 0,
  total_items_page: 1,
  total_pages: 5,
};
export default function SupportResistance() {
  const [page, setPage] = useState(1);
  const [supportState, Dispatch]: [
    SupportResistanceState,
    React.Dispatch<{
      type: string;
      payload: any;
    }>
  ] = useReducer(descriptionReducer, initSupport);
  function descriptionReducer(
    state: SupportResistanceState,
    { type, payload }: { type: string; payload: any }
  ) {
    switch (type) {
      case "LOADING":
        return {
          ...state,
          loading: payload,
        };
      case "ERROR":
        return {
          ...state,
          error: payload,
        };
      case "DATA":
        return {
          ...state,
          data: payload.data,
          total_count: payload.total_count,
          total_items_page: payload.total_items_page,
          total_pages: payload.total_pages,
          loading: false,
          error: { code: 0, message: "" },
        };

      default:
        return state;
    }
  }
  useEffect(() => {
    axios
      .get(
        `${
          process.env.NODE_ENV === "development"
            ? "https://forexsniper.net"
            : ""
        }/forexWebApi/supportRresistance.php?page=${page}`
      )
      .then(({ data }: any) => {
        Dispatch({
          type: "DATA",
          payload: {
            data: data.data,
            total_count: data.total_count,
            total_items_page: data.total_items_page,
            total_pages: 5,
          },
        });
      })
      .catch((err) => {
        Dispatch({
          type: "ERROR",
          payload: { code: err.code, message: err.message },
        });
      });
  }, [page]);
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
      </Grid>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        maxWidth="100%"
        className={styles.table_parent}
      >
        <Grid className={styles.table_container}>
          <Grid className={styles.table_header}>
            <Box>
              <Typography variant="caption">#</Typography>
            </Box>
            <Box>
              <Typography variant="caption">Symbol</Typography>
            </Box>
            <Box>
              <Typography variant="caption">D1/H4</Typography>
            </Box>
            <Box>
              <Typography variant="caption">S/R</Typography>
            </Box>
            <Box>
              <Typography variant="caption">Price</Typography>
            </Box>
            <Box>
              <Typography variant="caption">Date</Typography>
            </Box>
            <Box>
              <Typography variant="caption">Time</Typography>
            </Box>
          </Grid>
          <Grid className={styles.body_container}>
            {supportState.data.map((row, i) => (
              <Grid
                className={`${styles.table_row} ${
                  i % 2 === 0 ? styles.even : styles.odd
                }`}
                key={row.ID}
              >
                <Box>
                  <Typography variant="caption">{row.ID}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">{row.Symbol}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">{row.D1H4}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">{row.SR}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">{row.Price}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">{row.Date}</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">{row.Time}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={supportState.total_pages}
            page={page || 1}
            onChange={(_, myPage) => setPage(myPage)}
            className={styles.pagination}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

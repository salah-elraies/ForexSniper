import { Box, Grid, Typography } from "@mui/material";
import styles from "./style.module.sass";
import sympolsMoneyIcon from "assets/images/sympolsMoneyIcon.svg";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./style.css";
import "swiper/swiper-bundle.css";
import "swiper/swiper-element.css";

type SymbolsType = {
  loading: boolean;
  error: { code: number; message: string };
  data: {
    ID: number;
    Symbol: string;
    img1: string;
    img2: string;
  }[];
};
const initSymbols: SymbolsType = {
  loading: false,
  error: { code: 0, message: "" },
  data: [],
};
export default function Symbols() {
  const [symbolsState, Dispatch]: [
    SymbolsType,
    React.Dispatch<{
      type: string;
      payload: any;
    }>
  ] = useReducer(descriptionReducer, initSymbols);
  function descriptionReducer(
    state: SymbolsType,
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
          data: payload,
          loading: false,
          error: { code: 0, message: "" },
        };

      default:
        return state;
    }
  }
  useEffect(() => {
    axios
      .get("https://forexsniper.net/forexWebApi/symbols.php")
      .then(({ data }: any) => {
        Dispatch({ type: "DATA", payload: data.data });
      })
      .catch((err) => {
        Dispatch({
          type: "ERROR",
          payload: { code: err.code, message: err.message },
        });
      });
  }, []);
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
      <Grid className={styles.symbols_cards_container}>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={30}
          navigation={{
            disabledClass: `swiper-button-disabled`,
          }}
          modules={[Navigation]}
          className={styles.swiper_container}
          dir={"ltr"}
          key={"language"}
        >
          <Grid>
            {symbolsState.data.map((item, index: number) => (
              <SwiperSlide key={item.ID}>
                <Grid className={styles.symbol_card}>
                  <Box className={styles.img_contaienr}>
                    <img src={item.img1} alt="image_1" loading="lazy" />
                  </Box>
                  <Typography className={styles.symbol_text} variant="body1">
                    {item.Symbol}
                  </Typography>
                  <Box className={styles.img_contaienr}>
                    <img src={item.img2} alt="image_2" loading="lazy" />
                  </Box>
                </Grid>
              </SwiperSlide>
            ))}
          </Grid>
        </Swiper>
      </Grid>
    </Grid>
  );
}

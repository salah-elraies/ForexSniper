import { Grid } from "@mui/material";
import styles from "./style.module.sass";
import downloads_icon from "assets/images/downloads_icon.svg";
import votes_icon from "assets/images/votes_icon.svg";
import star_rating_icon from "assets/images/star_rating_icon.png";
import current_version_icon from "assets/images/current_version_icon.svg";
import StatusCard from "./StatusCard";
import { useEffect, useReducer } from "react";
import axios from "axios";

type StatusType = {
  loading: boolean;
  error: { code: number; message: string };
  data: {
    current_version: string;
    star_rating: string;
    vote: string;
    downloads: string;
    current_year: string;
    facebook_url: string;
    download_app_url: string;
  };
};
const initStatus: StatusType = {
  loading: false,
  error: { code: 0, message: "" },
  data: {
    current_version: "",
    current_year: "",
    download_app_url: "",
    downloads: "",
    facebook_url: "",
    star_rating: "",
    vote: "",
  },
};
export default function StatusCards() {
  const [statusState, Dispatch]: [
    StatusType,
    React.Dispatch<{
      type: string;
      payload: any;
    }>
  ] = useReducer(descriptionReducer, initStatus);
  function descriptionReducer(
    state: StatusType,
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
      .get("/forexWebApi/statistics.php")
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
      className={styles.status_container}
      container
      width="100%"
      id="app_screenshots"
    >
      <StatusCard
        icon={downloads_icon}
        topTitle={"More Than"}
        number={statusState.data.downloads}
        bottomTitle={"Downloads"}
        background={
          "linear-gradient(162.41deg, #00818A -1.34%, rgba(0, 22, 138, 0.661458) 81.65%, rgba(0, 129, 138, 0) 243.8%)"
        }
        backgroundHover={
          "linear-gradient(169.81deg, rgba(0, 22, 138, 0.661458) 93.29%, #00818A 149.27%, rgba(0, 129, 138, 0) 258.65%)"
        }
        key={0}
      />
      <StatusCard
        icon={votes_icon}
        topTitle={"More Than"}
        number={`${statusState.data.vote}`}
        bottomTitle={"Vote"}
        background={
          "linear-gradient(157.47deg, #4D008A 1.98%, rgba(0, 22, 138, 0.661458) 62.51%, rgba(0, 129, 138, 0) 221.9%)"
        }
        backgroundHover={
          "linear-gradient(157.9deg, #4D008A -84.53%, #00818A 23.89%, rgba(0, 129, 138, 0) 235.73%)"
        }
        key={1}
      />
      <StatusCard
        icon={star_rating_icon}
        topTitle={"For Now"}
        number={statusState.data.star_rating}
        bottomTitle={"5 Star Rating"}
        background={
          "linear-gradient(162.65deg, #4D008A -5.59%, #00818A 78.99%, rgba(0, 129, 138, 0) 244.24%)"
        }
        backgroundHover={
          "linear-gradient(159.4deg, #4D008A 96.07%, rgba(0, 22, 138, 0.661458) 131.55%, rgba(0, 129, 138, 0) 224.97%)"
        }
        key={2}
      />
      <StatusCard
        icon={current_version_icon}
        topTitle={"Version"}
        number={statusState.data.current_version}
        bottomTitle={"Current Version"}
        background={
          "linear-gradient(162.41deg, rgba(0, 22, 138, 0.661458) -1.34%, #00818A 81.65%, rgba(0, 129, 138, 0) 243.8%)"
        }
        backgroundHover={
          "linear-gradient(163.41deg, #00818A -67.25%, rgba(0, 22, 138, 0.661458) 38.69%, rgba(0, 129, 138, 0) 245.69%)"
        }
        key={3}
      />
    </Grid>
  );
}

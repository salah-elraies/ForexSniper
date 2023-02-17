import DescriptionSection from "components/DescriptionSection";
import Header from "components/Header";
import Nav from "components/Nav";
import styles from "./style.module.sass";
// import leftPhone from "assets/images/leftPhone.png";
// import centerPhone from "assets/images/centerPhone.png";
// import rightPhone from "assets/images/rightPhone.png";
import autoTradePins from "assets/images/autoTradePins.svg";
import Symbols from "components/Symbols";
import Features from "components/Features";
import SupportResistance from "components/SupportResistance";
import StatusCards from "components/StatusCards";
import Download from "components/Download";
import Footer from "components/Footer";
import { useEffect, useReducer } from "react";
import axios from "axios";

type DescriptionType = {
  data: {
    title1: string;
    sub_title1: string;
    description1: string;
    right_img: string;
    center_img: string;
    left_img: string;
    title2: string;
    sub_title2: string;
    description2: string;
  };
  loading: boolean;
  error: { code: number; message: string };
};
const initDescription: DescriptionType = {
  data: {
    title1: "",
    sub_title1: "",
    description1: "",
    right_img: "",
    center_img: "",
    left_img: "",
    title2: "",
    sub_title2: "",
    description2: "",
  },
  error: { code: 0, message: "" },
  loading: false,
};

export default function Home() {
  const [DescriptionSectionState, Dispatch]: [
    DescriptionType,
    React.Dispatch<{
      type: string;
      payload: any;
    }>
  ] = useReducer(descriptionReducer, initDescription);
  function descriptionReducer(
    state: DescriptionType,
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
      .get("https://forexsniper.net/forexWebApi/blockOne.php")
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
    <>
      <Nav />
      <Header />
      <DescriptionSection
        subtitle={DescriptionSectionState.data.sub_title1}
        title={DescriptionSectionState.data.title1}
        body={DescriptionSectionState.data.description1}
        key={0}
        image={
          <div className={styles.mobiles_image} data-count="three">
            <img
              src={DescriptionSectionState.data.left_img}
              alt="leftPhone"
              loading="lazy"
            />{" "}
            <img
              src={DescriptionSectionState.data.center_img}
              alt="centerPhone"
              loading="lazy"
            />{" "}
            <img
              src={DescriptionSectionState.data.left_img}
              alt="rightPhone"
              loading="lazy"
            />
          </div>
        }
      />
      <DescriptionSection
        key={1}
        isEven={true}
        subtitle={DescriptionSectionState.data.sub_title2}
        title={DescriptionSectionState.data.title2}
        body={DescriptionSectionState.data.description2}
        ankor=""
        ankorText=""
        image={
          <div className={styles.mobiles_image} data-count="one">
            <img src={autoTradePins} alt="autoTradePins" loading="lazy" />{" "}
          </div>
        }
      />
      <Symbols />
      <Features />
      <SupportResistance />
      <StatusCards />
      <Download />
      <Footer />
    </>
  );
}

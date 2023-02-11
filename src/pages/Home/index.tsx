import DescriptionSection from "components/DescriptionSection";
import Header from "components/Header";
import Nav from "components/Nav";
import styles from "./style.module.sass";
import leftPhone from "assets/images/leftPhone.png";
import centerPhone from "assets/images/centerPhone.png";
import rightPhone from "assets/images/rightPhone.png";
import autoTradePins from "assets/images/autoTradePins.svg";
import Symbols from "components/Symbols";
import Features from "components/Features";
import SupportResistance from "components/SupportResistance";
import StatusCards from "components/StatusCards";
import Download from "components/Download";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <DescriptionSection
        subtitle="Support & Resistance"
        title="Forex Sniper"
        body={`Received notification when support or resistance happens to Trading on the support and resistance in the Forex marketHere in the program we will send you a message when every support or resistance observed by "Sniper" This will make you feel all the movements of the market and that on 28 pairs of Currency + gold and petroleum.`}
        ankor="#download_app"
        key={0}
        ankorText="Download"
        image={
          <div className={styles.mobiles_image} data-count="three">
            <img src={leftPhone} alt="leftPhone" loading="lazy" />{" "}
            <img src={centerPhone} alt="centerPhone" loading="lazy" />{" "}
            <img src={rightPhone} alt="rightPhone" loading="lazy" />
          </div>
        }
      />
      <DescriptionSection
        key={1}
        isEven={true}
        subtitle="How To Trade"
        title="Auto trade today"
        body={`It is a tool in application with smart features allowing you to trade on forex platform with sufficient and responsive mechanisms.it can't perform solely as decision will differ from user to another based on their trading experience. We are will help you and didn’t trading behalf of you.`}
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

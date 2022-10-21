import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, ODER IT.WE WILL BUY IT AND DELIVER TO YOUR DOOR STEP.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            OUR WHATSAPP: 08097034355.
            <br /> CALL LIN: 08156067874.
          </p>
      
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY To SATURDAY
            <br /> 8:30am – 6:00pm
          </p>
     
        </div>
      </div>
    </div>
  );
};

export default Footer;

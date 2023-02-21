import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png"  objectFit="cover"  layout="fill" alt=""/>
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.motto}>
              We did it.Here, Pizza baked with love
            </h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>Find our Restaurants</h1>
            <p className={styles.text}>
              Araon road #304.
              <br/> Sirsaganj,283151
              <br/> (123) 456-1010
            </p>
            <p className={styles.text}>
              Araon road #304.
              <br/> Sirsaganj,283151
              <br/> (123) 456-1010
            </p>
            <p className={styles.text}>
              Araon road #304.
              <br/> Sirsaganj,283151
              <br/> (123) 456-1010
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>Working Hours</h1>
            <p className={styles.text}>
              MONDAY TO FRIDAY
              <br/>9:00-22:00
            </p>
            <p className={styles.text}>
              SATURDAY - SUNDAY
              <br/>12:00-24:00
            </p>
          </div>

      </div>
      </div>
  )
}

export default Footer
import styles from "./banner.module.css";

function BannerCollage() {
  return (
    <>
      <div className={styles.BannerCollage}>
        <div className={styles.BannerItem1}></div>
        <div className={styles.BannerItem2}></div>
        <div className={styles.BannerItem3}></div>
        <div className={styles.BannerItem4}></div>
        <div className={styles.BannerItem5}></div>
        <div className={styles.BannerItem6}></div>
        <div className={styles.BannerItem7}></div>
        <div className={styles.BannerItem8}></div>
      </div>
    </>
  );
}

export default BannerCollage;
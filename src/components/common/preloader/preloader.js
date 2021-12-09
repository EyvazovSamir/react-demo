import preloader from "../../../assets/images/preloader.gif";
import styles from "../../Users/users.module.css";

let Preloader = (props) => {
  return (
    <div>
      <img className={styles.preloader} src={preloader} />
    </div>
  );
};

export default Preloader;

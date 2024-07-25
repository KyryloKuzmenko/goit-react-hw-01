import styles from "./Profile.module.css"

const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div>
        <img src={props.image} alt="User avatar" className={styles.image} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Followers</span>
          <span className={styles.quantity}>{props.stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span className={styles.quantity}>{props.stats.views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span className={styles.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

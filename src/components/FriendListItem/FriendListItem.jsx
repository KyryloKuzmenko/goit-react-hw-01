import styles from "./FriendsListItem.module.css";

const FriendListItem = (props) => {
  return (
    <div>
      <img src={props.avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{props.name}</p>
      <p className={`${props.isOnline ? styles.isOnline : styles.isOffline}`}>
        {props.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;

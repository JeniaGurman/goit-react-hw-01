import css from "../FriendList/FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = clsx({
    [css.friendStatus]: true,
    [css.online]: isOnline,
    [css.offline]: !isOnline,
  });

  return (
    <li className={css.friendItem}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={statusClass}>{isOnline ? "Online" : "Offline"}</p>
    </li>
  );
};

export default FriendListItem;
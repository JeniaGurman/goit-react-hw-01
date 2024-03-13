import FriendListItem from "./FriendListItem";
import css from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div className={css.friendContainer}>
      <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
            key={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
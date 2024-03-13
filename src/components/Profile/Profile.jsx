import css from "../Profile/Profile.module.css"

const Profile = ({
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
}) => {
    return (
        <div className={css.profile}>
      <div className={css.container}>
        <img className={css.userAvatar} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className={css.statsListTitle}>Followers</span>
          <span className={css.statsListRate}>{followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsListTitle}>Views</span>
          <span className={css.statsListRate}>{views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsListTitle}>Likes</span>
          <span className={css.statsListRate}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};


export default Profile;
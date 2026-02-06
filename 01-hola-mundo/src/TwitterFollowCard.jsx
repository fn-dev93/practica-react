import { useState } from "react";

export function TwitterFollowCard({ userName, name , initialIsFollowing}) {
  const [isFollowing, setIsFollowingState] = useState(initialIsFollowing);

  const imgSrc = `https://unavatar.io/${userName}`;
  const buttonClassName = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";

  const handleClick = () => {
    setIsFollowingState(!isFollowing);
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-avatar"
          alt={`Avatar ${name}`}
          src={imgSrc}
        />
        <div className="tw-follow-card-info">
          <strong>{name}</strong>
          <span className="tw-follow-card-info-username">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-follow-card-button-text">
            {isFollowing ? "Following" : "Follow"}
          </span>
          <span className="tw-follow-card-button-stop-hover">Unfollow</span>
        </button>
      </aside>
    </article>
  );
}

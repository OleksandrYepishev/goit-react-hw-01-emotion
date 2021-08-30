import PropTypes from 'prop-types';
import {
  ProfileCard, Description, Avatar, ProfileName,
  ProfileTag, ProfileLocation, Stats, Label, Quantity
} from './Profile.styled';

export const Profile = props => {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;

  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={name} />
        <ProfileName>{name}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </Stats>
    </ProfileCard >
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

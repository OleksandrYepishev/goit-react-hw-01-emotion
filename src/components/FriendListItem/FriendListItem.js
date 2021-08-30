import PropTypes from 'prop-types';
import { Item, Chip, FriendAvatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <Item key={id}>
    <Chip eventStatus={isOnline ? 'green' : 'red'}></Chip>
    <FriendAvatar src={avatar} alt={name} width="48" />
    <FriendName>{name}</FriendName>
  </Item>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};

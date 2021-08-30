import styled from '@emotion/styled';

export const Item = styled.li`
display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 350px;
  height: 100px;
  `;

export const Chip = styled.span`
 display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 15px;
  background-color:${({ eventStatus }) => (
        eventStatus
    )};
`;

export const FriendAvatar = styled.img`
margin-right: 20px;
`;

export const FriendName = styled.p`
font-weight: bold;
`;

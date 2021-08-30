import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 0;
  padding: 0;
  width: 300px;
  box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(238, 255, 247, 0);
  background-color: rgb(248, 247, 239);
`;

export const Description = styled.div`
 text-align: center;
  color: gray;
`;

export const Avatar = styled.img`
    width: 35%;
  padding: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 505px;
`;

export const ProfileName = styled.p`
font-weight: bold;
  color: black;
`;

export const ProfileTag = styled.p`
font-weight: normal`;

export const ProfileLocation = styled.p`
color: rgb(112, 107, 107)
`;

export const Stats = styled.ul`
  background-color: rgb(218, 214, 214);
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin: 0 40px;
  padding: 0;
  box-shadow: 0px 3px 0px 2px rgba(0, 0, 0, 0.1),
    0px 6px 0px 4px rgba(0, 0, 0, 0.1), 0px 9px 0px 6px rgba(0, 0, 0, 0.1),
    0px 12px 0px 8px rgba(0, 0, 0, 0.1), 0px 15px 0px 10px rgba(0, 0, 0, 0.1),
    0px 18px 0px 12px rgba(0, 0, 0, 0.1), 0px 21px 0px 14px rgba(0, 0, 0, 0.1),
    0px 24px 0px 16px rgba(0, 0, 0, 0.1), 0px 27px 0px 18px rgba(0, 0, 0, 0.1),
    0px 30px 0px 20px rgba(0, 0, 0, 0.1), 5px 5px 15px 5px rgba(0, 0, 0, 0);
  background: #444444
  `;

export const Label = styled.span`
color: rgb(247, 242, 242);
  display: flex;
  margin: 5xp
  `;

export const Quantity = styled.span`
box-shadow: blue;
  color: rgb(10, 10, 10);
  font-weight: bolder;
  margin: 5px
  `;
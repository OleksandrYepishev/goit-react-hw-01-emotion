import styled from '@emotion/styled';

export const Transaction = styled.table`
width: 750px;
  height: 30px;
  font-size: 25px;

  tr {
    height: 50px;
    color: lightslategrey;
    text-align: center;
    text-transform: capitalize;
}

th {
    text-transform: uppercase;
    color: rgb(243, 241, 241);
    background-color: rgb(44, 160, 160);
}

td {
    width: 200px;
}

 tr: nth-child(2n) {
    background-color: rgb(216, 232, 247);
}
`;




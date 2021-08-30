import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  padding: 0;
  margin: 0;
  width: 500px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StatisticsTitle = styled.h2`
  margin-top: 60px;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 10px;
  margin: 5px;
  list-style: none;
  
`;

export const Item = styled.li`
  display: flex;
  margin: 15px;
  justify-content: center;
  align-items: center;
 flex-flow: column;
  font-size: 15px;
  margin: 0;
  width: 150px;


`;


export const ItemLabel = styled.span`
    font-size: 10x;
  
`;

export const ItemPercentage = styled.span`
  font-size: 25px;
  font-weight: 600;
  
`;
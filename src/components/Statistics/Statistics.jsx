import PropTypes from 'prop-types';
import getRandomColor from '../../utils/getRandomColor';
import {
  SectionStatistics, StatisticsTitle, StatList, Item,
  ItemLabel, ItemPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <SectionStatistics>
    {title && <StatisticsTitle>{title}</StatisticsTitle>}

    <StatList>
      {stats.map(({ id, label, percentage }) => (
        <Item
          key={id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <ItemLabel>{label}</ItemLabel>
          <ItemPercentage>{percentage}%</ItemPercentage>
        </Item>
      ))}
    </StatList>
  </SectionStatistics>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

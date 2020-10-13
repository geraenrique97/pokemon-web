import { CardItem } from '../../molecules/CardItem';
import { StyledGrid } from './style';
import PropTypes from 'prop-types';

export const CardList = ({items}) => (
  <StyledGrid>
    {items.map((item) => <CardItem key={item.name} item={item} />)}
  </StyledGrid>
);

CardList.propTypes = {
  items: PropTypes.array,
};

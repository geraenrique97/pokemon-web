import {StyledCard, StyledEmptyImg} from './style';
import {Card} from '@material-ui/core';
import PropTypes from 'prop-types';

export const CardItem = ({item}) => {
  const {normalizedName, img} = item;
  return (
    <StyledCard>
      <Card>
        {img? <img src={img}></img> : <StyledEmptyImg />}
      </Card>
      <p>{normalizedName}</p>
    </StyledCard>
  );
};

CardItem.propTypes = {
  item: PropTypes.object,
};

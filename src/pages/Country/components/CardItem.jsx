import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActions, CardContent, Collapse, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  renderValue: PropTypes.func,
};

CardItem.defaultProps = {
  renderValue: null,
};

// Material UI
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardItem({ item, renderValue }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <li>
      <CardActions disableSpacing>
        {item.title}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{typeof renderValue === 'function' && renderValue(item)}</CardContent>
      </Collapse>
    </li>
  );
}

export default CardItem;

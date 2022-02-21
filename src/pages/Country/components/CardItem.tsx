import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActions, CardContent, Collapse, IconButton } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import type { Item, Currencies } from '../../../types';

// Material UI
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// CardItem component
type CardItemProps = {
  item: Item;
};

// function to render UI
function renderValue(value: Item) {
  if (!value.content) return '';

  switch (value.category) {
    case 'names':
    case 'borders':
      if (!Array.isArray(value.content)) return '';
      return value.content.join(', ');

    case 'region':
      return value.content;

    case 'currencies':
      const valueContent = value.content as Currencies;
      if (Object.keys(valueContent).length === 0) return '';
      const keyCurrencies: string = Object.keys(valueContent)[0];
      return valueContent[keyCurrencies].name;

    case 'languages':
      return Object.values(value.content).join(', ');

    default:
      return '';
  }
}

function CardItem({ item }: CardItemProps) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <li>
      <CardActions disableSpacing>
        <b>{item.title}</b>
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
        <CardContent>{renderValue(item)}</CardContent>
      </Collapse>
    </li>
  );
}

export default CardItem;

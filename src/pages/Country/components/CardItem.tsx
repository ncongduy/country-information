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

// Component
type CardItemProps = {
  item: Item;
  renderValue: (value: Item) => string | Currencies | { [key: string]: string } | string[];
};

function CardItem({ item, renderValue }: CardItemProps) {
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

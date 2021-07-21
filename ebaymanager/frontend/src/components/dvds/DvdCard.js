import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function DvdCard(props) {
  const classes = useStyles();
  const { id, title, imageUrl, cexBuy, cexSell, cexTrade } = props.dvd;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography gutterBottom variant='h5' component='h2' align='center'>
          {title}
        </Typography>
        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent>
          <List>
            <Divider />
            <ListItem>
              <ListItemText align='left'>Cex Buy</ListItemText>
              <ListItemText align='right'>{cexBuy}</ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText align='left'>Cex Sell</ListItemText>
              <ListItemText align='right'>{cexSell}</ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText align='left'>Cex Trade</ListItemText>
              <ListItemText align='right'>{cexTrade}</ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// <CardActions>
// <button
//   onClick={props.deleteDvd.bind(this, id)}
//   className='btn btn-danger btn-sm'
// >
//   DELETE
// </button>
// </CardActions>

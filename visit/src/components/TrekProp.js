import React , { useState } from 'react';
import {Link,BrowserRouter, Switch, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Modal,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlaceProp.css';
const useStyles = makeStyles({
  root: {
    maxWidth:450,
   
  },
});

export default function TrekProp(props) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  return (
    <div className="cd">
    <Card className={classes.root} style={{margin:"50px"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt="hotel image"
          height="200"
          
          image={props.imgsrc}
          title="Contemplative Reptile"
        />
        <CardContent style={{ color:"black"}}>
          <Typography gutterBottom variant="h5" component="h2">
          {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.location}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
   
      
    </Card>
    </div>
  );
}
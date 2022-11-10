import { connect, useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/Reducers/Cart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Container, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useEffect} from 'react';
import { getProducts } from '../../store/Reducers/Product';


const List = (props) => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
      // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { addItemToCart } = props;



  return (
    <>
      <Container align="center">
        {
            props.list.map((category, index) => (
            <Card key={`category-${index}`} variant="text">
              <Typography variant="h3">{category.displayName}</Typography>
              <Typography>{category.desciption}</Typography>
            </Card>
          ))
        }
        <Box sx={{ display: 'flex', flexDirection: 'row', margin: '25px', justifyContent: 'space-around', padding: '0', }}>
          {
              props.list.map((products, index) => (
              <Card key={`products-${index}`} sx={{ width: '250px', }}>
                <CardMedia
                  component='img'
                  height='140'
                  image={products.image}
                  alt={products.name}
                />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {products.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${products.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity In Stock: {products.inventory}
                    </Typography>
                  </CardContent>
                <CardActionArea>
                  <Stack direction="row" spacing={1}>
                  <ButtonGroup >
                    <Button
                      onClick={() => addItemToCart(products)}
                      variant='text'
                      label="add to cart"
                    >Add To Cart</Button>
                    <Button label="details" variant='text'>View Detail</Button>
                    </ButtonGroup>
                    </Stack>
                </CardActionArea>
              </Card>
            ))
          }
        </Box>
      </Container>
    </>
  )
}


const mapStateToProps = ({ productReducer, cartReducer }) => {
  return {
    list: productReducer.products,
    cart: cartReducer,
  }
}

const mapDispatchToProps = {
  addItemToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

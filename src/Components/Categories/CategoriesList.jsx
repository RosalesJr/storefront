import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';



const List = (props) => {
  console.log(props);

  const filteredProducts = props.list.products.filter(product => product.category === props.list.activeCategory);


  return (
    <>
      {
        filteredProducts.map((products, index) => (
          <Card align="center" key={`products-${index}`}>           
            <CardContent>{products.image}</CardContent> 
            <CardActionArea>
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
            </CardActionArea>
          </Card>
        ))
      }
    </>
  )
}

const mapStateToProps = ({ productReducer }) => {
  return {
    list: productReducer
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(List);

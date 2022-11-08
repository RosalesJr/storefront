import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography';
import { filterCategory } from '../../store/Product';
import { connect } from 'react-redux';


const Categories = (props) => {

  const { filterCategory } = props;

  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Browse our Categories
      </Typography>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => filterCategory('food')}>Food</Button>
        <Button onClick={() => filterCategory('electronics')}>Electronics</Button>
      </ButtonGroup>
    </>

  )
}

const mapStateToProps = ({ productReducer }) => {
  return {
    list: productReducer,
    categories: productReducer.categories,
  }
}

const mapDispatchToProps = {
  filterCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
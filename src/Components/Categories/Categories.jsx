import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography';
import { filterCategory } from '../../store/Reducers/Product';
import { connect } from 'react-redux';


const Categories = (props) => {
  const { filterCategory } = props;

  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Browse our Categories
      </Typography>
      {
      props.categories.map((category, index) => (
      <ButtonGroup key={`category-${index}`} variant="text" aria-label="text button group">
        <Button onClick={() => filterCategory(category.name)}>{category.displayName}</Button>
      </ButtonGroup>
      ))
    }
    </>

  )
}

const mapStateToProps = ({ productReducer }) => {
  return {
    products: productReducer,
    categories: productReducer.categories,
  }
}

const mapDispatchToProps = {
  filterCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
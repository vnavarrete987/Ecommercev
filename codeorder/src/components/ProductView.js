import { makeStyles } from "@material-ui/core/styles";
import { Grid, CssBaseline } from "@material-ui/core";
import products from "../product-data";
import Product from "./Product";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const ProductView = (props) => {
  const classes = useStyles();
  // path name de la url actual.
  const idProduct = props.location.pathname.replace( /^\D+/g, '');
  return (
    <>
      <CssBaseline />
      <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Producto seleccionado
        </Typography>
        <div className={classes.root}>
          {products.filter(product => product.id == idProduct).map(filteredProduct => (
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Product key={filteredProduct.id} product={filteredProduct} />
            </Grid>
          ))}
        </div>
      </div>
    </Container>
    </>
  );
};

export default ProductView;
function ProductListItem({filteredProd}) {
const { name, price } = filteredProd

const productStyles = {border: '1px solid grey', marginTop: 7, padding: 4}

    return (
    <div style={productStyles}>
        {name}  &nbsp; &nbsp;  ${price}
    </div>
  )
}

export default ProductListItem
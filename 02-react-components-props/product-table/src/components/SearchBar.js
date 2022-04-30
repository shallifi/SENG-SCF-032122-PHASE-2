function SearchBar() {
  //NOTE: this search bar is not functional yet. just decorative

    const formStyles = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        width: 200,
        marginBottom: 15
    }

  return (
    <>
        <form style={formStyles}>
        <input type="text" name="item" placeholder="Search..."/>
        <label style={{width: 300}}>
        <input type="checkbox" />
        Only show products in stock
        </label>
        </form>
    </>
  )
}

export default SearchBar
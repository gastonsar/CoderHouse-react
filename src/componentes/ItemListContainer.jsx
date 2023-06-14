import Container from "react-bootstrap/esm/Container"




export const ItemListContainer = ({greeting, bgColor, alineacion}) => { 
 return (
 <Container>
<h1 style={{color: bgColor, textAlign: alineacion }}>{greeting}</h1>

  </Container>
 )
}
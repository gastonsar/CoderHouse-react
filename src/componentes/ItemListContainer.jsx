import Container from "react-bootstrap/esm/Container"




export const ItemListContainer = ({color, alineacion}) => { 
 return (
 <Container>
  
<h1 style={{color: color, textAlign: alineacion}}> Novedades </h1>

  </Container>
 )
}
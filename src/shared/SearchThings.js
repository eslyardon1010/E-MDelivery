import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native'


/*AL PRESIONAR EL ICONO DE BUSCAR NOSOTROS LE PASAMOS EL METODO DE OBTENER NAME Y A ESTE LE ESTAMOS MANDANDO LOS QUE 
INGRESE EN EL SEARCHBAR Y NOS ARROJA COMO RESULTADO TODAS LAS BEBIDAS QUE SE RELACIONAN AL NOMBRE QUE ESCRIBIO. 
LA BUSQUEDA ES POR NOMBRE EN INGLES. 
*/
const SearchBar = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search by name"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress={()=>  { navigation.navigate("SearchResults")}}
      style={styles.searchBar}
    />
  );
};
const styles = StyleSheet.create({
  searchBar: {
    fontSize: 8,
    width: 300,
    height: 28,
    borderRadius: 30,
    alignContent: "center",
    alignSelf:"center",
     shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },});

export default SearchBar;
import styled from "styled-components/native";

const ContainerPrincipal = styled.SafeAreaView`
    flex: 1;
    margin-top: 10px;
`;

const FlatListProdutos = styled.FlatList`
/* Aqui coloco meu codigo */
`;

const ItemProduto = styled.Text`
    padding: 10px;
    margin: 10px;
    font-size: 20px;
    color: ${props => props.selecionado ? "white": "white"}
`;

const TouchProduto = styled.TouchableOpacity`
    background-color: ${props => props.selecionado ? "#00ffff": "green"};
    margin: 10px;
    text-align: center;
`;

const MinhaImagem = styled.Image`
width: 150px;
height:150px;
margin-left:20px;
`;


export {
    ContainerPrincipal,
    FlatListProdutos,
    ItemProduto,
    TouchProduto,
    MinhaImagem
}

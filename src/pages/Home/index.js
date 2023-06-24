import React from "react";
import { Text, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";

import { Container } from "../../styles/style-geral";
import { 
    ContainerPrincipal,
    FlatListProdutos,
    ItemProduto,
    TouchProduto,
    MinhaImagem
    } from "./styles";

// import imagemBunequinho from "../../assets/male.jpg" ;
// const imgURI = Image.resolveAssetSource(imagemBunequinho).uri;



export default function Home({route}){

    const [produtos, setProdutos] = useState([
        {id:1, nome: "Coleta de reciclaveis"},
        {id:2, nome: "Coleta de óleo"},
        {id:3, nome: "Coleta de Alimentos"},
        {id:4, nome: "Coleta de Pilhas"},
        {id:5, nome: "Doação de cobertores"},
        {id:6, nome: "Coleta de Alimentos"},
    ]);

    const [selecionado, setSelecionado] = useState(null);


    const renderItem = ({item}) => {
        return (
            <TouchProduto
                selecionado ={(item.id === selecionado)}
                onPress={() => setSelecionado(item.id)}>
                <ItemProduto 
                    selecionado ={(item.id === selecionado)}>
                    {item.nome}
                </ItemProduto>
            </TouchProduto>
        );
    }

    return (
        <ContainerPrincipal>
            {/* <Text>Sou a pagina Home</Text>
            <Text>{route.params.email}</Text>
            <Text>{route.params.doritos}</Text> */}

            {/* Hoje vamos aprender a utilziar o flatlist */}

            <MinhaImagem onPress  source={require("../../assets/Design_sem_nome__2_-removebg-preview.png")}></MinhaImagem>

            {/* <MinhaImagem source={{uri: imgURI}}></MinhaImagem> */}

            <FlatListProdutos 
                data={produtos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            >
            </FlatListProdutos>
        </ContainerPrincipal>
    )
}
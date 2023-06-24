import React, { useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import MeuInput from "../../components/MeuInput";
import SuperButton from "../../components/SuperButton";

import { Container, MeuText } from "../../styles/style-geral";

// Dados 
const usuario = {
  email: "emailcerto@correto",
  senha: "123456"
};

// Todo componente no React Native é uma função ou uma classe
function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const logar = () => {
    if (!email || !senha) {
      Alert.alert("O e-mail e a senha devem ser preenchidos.");
    } else if (email !== usuario.email || senha !== usuario.senha) {
      Alert.alert("O e-mail ou a senha estão incorretos.");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <Container style={style.boxLogin}>
      <MeuText fontSize={60} style={style.titulo}>
        Login
      </MeuText>

      <MeuInput
        label="E-mail"
        placeHolder="exemplo@exemplo.com"
        comMascara={false}
        setValor={setEmail}
      ></MeuInput>

      <MeuInput
        label="Senha"
        placeHolder="123456"
        comMascara={true}
        setValor={setSenha}
      ></MeuInput>

      <View style={style.boxRecuperarSenha}>
        <Text style={style.recuperarSenha}>Recuperar senha</Text>
      </View>

      <SuperButton value={"Entrar"} acao={logar}></SuperButton>
    </Container>
  );
}

const style = StyleSheet.create({
  boxLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white" 
  },
  titulo: {
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 15
  },
  boxRecuperarSenha: {
    width: 300,
    alignItems: "flex-end"
  },
  recuperarSenha: {
    color: "green",
    textAlign: "center",
    padding: 10
  }
});

export default Login;

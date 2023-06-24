import React, { useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { MeuText } from "../../styles/style-geral";

const Reports = () => {
  const [reports, setReports] = useState([]);

  // Função para carregar os relatórios
  const loadReports = () => {
    // Lógica para carregar os relatórios da API ou de outra fonte de dados
    // e atualizar o estado "reports" com os dados recebidos
    const data = fetchReports(); // Exemplo de função para buscar os relatórios
    setReports(data);
  };

  // Função para renderizar cada item do relatório
  const renderItem = ({ item }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        {/* Adicione aqui os outros dados do relatório que deseja exibir */}
      </View>
    );
  };

  return (
    <View>
      <Button title="Carregar Relatórios" onPress={loadReports} />
      {reports.length > 0 ? (
        <FlatList
          data={reports}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <MeuText>Nenhum relatório disponível</MeuText>
      )}
    </View>
  );
};

export default Reports;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #009092;
  margin-bottom: 20px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const OptionLabel = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

const OptionSwitch = styled.input`
  margin-right: 5px;
`;

export default function Settings() {
  return (
    <Container>
      <Title>Settings</Title>
      <Option>
        <OptionLabel>Option 1:</OptionLabel>
        <OptionSwitch type="checkbox" />
      </Option>
      <Option>
        <OptionLabel>Option 2:</OptionLabel>
        <OptionSwitch type="checkbox" />
      </Option>
      <Option>
        <OptionLabel>Option 3:</OptionLabel>
        <OptionSwitch type="checkbox" />
      </Option>
      <Option>
        <OptionLabel>Option 4:</OptionLabel>
        <OptionSwitch type="checkbox" />
      </Option>
      {/* Adicione mais opções de configurações aqui */}
    </Container>
  );
}


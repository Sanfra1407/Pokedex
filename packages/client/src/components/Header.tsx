import React from "react";
import Row from "antd/lib/row";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

const Header: React.FC = () => {
  return (
    <header className="pokedex__header">
      <Row style={{ textAlign: "center" }}>
        <Title style={{ marginBottom: 0.5 }}>Pokédex</Title>
        <Paragraph strong style={{ marginTop: 0 }}>
          Find your favourite Pokémon by name or by type
        </Paragraph>
      </Row>
    </header>
  );
};

export default Header;

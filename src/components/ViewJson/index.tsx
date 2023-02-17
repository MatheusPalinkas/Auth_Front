import { Container, Code } from "./styles";
import { IViewJson } from "./IViewJson";

export const ViewJson: React.FC<IViewJson> = ({ objectJson }) => {
  const jsonString = JSON.stringify(objectJson, null, 4);
  return (
    <Container>
      <Code>{jsonString}</Code>
    </Container>
  );
};

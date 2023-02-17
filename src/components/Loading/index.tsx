import { useContext } from "react";

import { ILoadingContext, LoadingContext } from "../../contexts/LoadingContext";

import { Container, Loader } from "./styles";

export const Loading: React.FC = () => {
  const { loading } = useContext(LoadingContext) as ILoadingContext;

  if (!loading) return <></>;

  return (
    <Container>
      <Loader />
    </Container>
  );
};

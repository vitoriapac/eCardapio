import { Container } from "./styles";
import { OrderBoard } from "../OrdersBoard";

export function Orders() {
  return (
    <Container>
      <OrderBoard icon="🕑" title="Fila de espera" />
      <OrderBoard icon="👨‍🍳" title="Em preparação" />
      <OrderBoard icon="✅" title="Pronto" />
    </Container>
  );
}

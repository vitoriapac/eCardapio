import { OrderBoard, OrderContainer } from "./styles";

export function Board() {
  return (
    <OrderBoard>
      <header>
        <span>🕑</span>
        <strong>Em produção</strong>
        <span>(1)</span>
      </header>

      <OrderContainer>
        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>

        <button type="button">
          <strong>Mesa 2</strong>
          <span>2 itens</span>
        </button>
      </OrderContainer>
    </OrderBoard>
  );
}

import { Currency } from "./current.model";

export const coinChange = (
  price: number, // Preço de custo
  wallet: Currency[], //Caixa
  index: number = 2,
  change: number[] = []
): number[] => {
  while (price != wallet[index].value || wallet[index].quantity == 0) {
    if (wallet[index].quantity === 0) {
      index++;
      continue;
    }
    if (price > wallet[index].value) {
      change.push(wallet[index].value);
      price -= wallet[index].value;
      wallet[index].quantity -= 1;
    }
    if (price < wallet[index].value) {
      index++;
    }
  }
  change.push(wallet[index].value);
  wallet[index].quantity -= 1;
  return change;
};

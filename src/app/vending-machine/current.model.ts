export interface Currency {
  value: number;
  quantity: number;
}

export const Real: Currency[] = [
  {
    value: 5.0,
    quantity: 0
  },
  {
    value: 2.0,
    quantity: 0
  },
  {
    value: 1.0,
    quantity: 0
  },
  {
    value: 0.5,
    quantity: 0
  },
  {
    value: 0.25,
    quantity: 20
  }
];

export const clientCoin: Currency[] = [
  {
    value: 5.0,
    quantity: 0
  },
  {
    value: 2.0,
    quantity: 0
  },
  {
    value: 1.0,
    quantity: 0
  },
  {
    value: 0.5,
    quantity: 0
  }
];

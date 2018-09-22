export interface Product {
    id: number;
    name: string;
    valor: number;
    quantity: number;
    source: string;
}


export const Produtos: Product[] = [
    {
      id: 1,
      name: 'Agua com gás Crystal',
      quantity: 20,
      source: '/assets/imgs/AGUA-COM-GAS-CRYSTAL.jpg',
      valor: 10.00,
    },
    {
      id: 2,
      name: 'Água mineral Bonafonti',
      quantity: 8,
      source: '/assets/imgs/AGUA-MINERAL-BONAFONT-500ML.jpg',
      valor: 7.00,
    },
    {
      id: 3,
      name: 'Barra de chocolate Baucudo',
      quantity: 3,
      source: '/assets/imgs/BARRA-CHOCOLATE-BAUDUCO.jpg',
      valor: 5.00,
    },
    {
      id: 4,
      name: 'Barra goiabinha Baucudo',
      quantity: 15,
      source: '/assets/imgs/BARRA-GOIABINHA-BAUDUCO.jpg',
      valor: 2.00
    },
    {
      id: 5,
      name: 'Biscoito recheado Bono',
      quantity: 6,
      source: '/assets/imgs/biscoito_recheado_bono.jpg',
      valor: 4.00
    },
    {
      id: 6,
      name: 'Biscoito recheado Passatempo',
      quantity: 20,
      source: '/assets/imgs/biscoito_recheado_passatempo.jpg',
      valor: 3.00
    },
    {
      id: 7,
      name: 'Biscoito Passatempo neste mini-wafer',
      quantity: 7,
      source: '/assets/imgs/BISCOITO-PASSATEMPO-NESTLE-MINI-WAFER-20.jpg',
      valor: 3.80
    },
    {
      id: 8,
      name: 'Biscoito Wafer Neste Passatempo 20g Chocolate',
      quantity: 8,
      source: '/assets/imgs/BISCOITO-WAFER-NESTLE-PASSATEMPO-20G-CHO.jpg',
      valor: 4.50
    },
    {
      id: 9,
      name: 'Bolinho Baucudo 27g chocolate',
      quantity: 10,
      source: '/assets/imgs/BOLINHO-BAUDUC-DUO-27G-CHOCOLATE.jpg',
      valor: 2.50
    },
    {
      id: 10,
      name: 'Bolinho Bauduco roll cake 34g chocolate',
      quantity: 6,
      source: '/assets/imgs/BOLINHO-BAUDUCCO-ROLL-CAKE-34G-CHOCOLATE.jpg',
      valor: 1.50
    }
  ]
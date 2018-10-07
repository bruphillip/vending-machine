export interface Product {
  id: number;
  name: string;
  valor: number;
  quantity: number;
  source: string;
  sealed?: number;
}

export const Produtos: Product[] = [
  {
    id: 1,
    name: "Água com gás Crystal",
    quantity: 20,
    source: "/assets/imgs/AGUA-COM-GAS-CRYSTAL.jpg",
    valor: 10.0
  },
  {
    id: 2,
    name: "Água mineral Bonafonti",
    quantity: 8,
    source: "/assets/imgs/AGUA-MINERAL-BONAFONT-500ML.jpg",
    valor: 7.0
  },
  {
    id: 3,
    name: "Barra de chocolate Bauduco",
    quantity: 3,
    source: "/assets/imgs/BARRA-CHOCOLATE-BAUDUCO.jpg",
    valor: 5.0
  },
  {
    id: 4,
    name: "Barra goiabinha Bauduco",
    quantity: 15,
    source: "/assets/imgs/BARRA-GOIABINHA-BAUDUCO.jpg",
    valor: 2.0
  },
  {
    id: 5,
    name: "Biscoito recheado Bono",
    quantity: 6,
    source: "/assets/imgs/biscoito_recheado_bono.jpg",
    valor: 4.0
  },
  {
    id: 6,
    name: "Biscoito recheado Passatempo",
    quantity: 20,
    source: "/assets/imgs/biscoito_recheado_passatempo.jpg",
    valor: 3.0
  },
  {
    id: 7,
    name: "Biscoito Passatempo nestle mini-wafer",
    quantity: 7,
    source: "/assets/imgs/BISCOITO-PASSATEMPO-NESTLE-MINI-WAFER-20.jpg",
    valor: 3.5
  },
  {
    id: 8,
    name: "Biscoito Wafer Nestle Passatempo 20g Chocolate",
    quantity: 8,
    source: "/assets/imgs/BISCOITO-WAFER-NESTLE-PASSATEMPO-20G-CHO.jpg",
    valor: 4.5
  },
  {
    id: 9,
    name: "Bolinho Bauduco 27g chocolate",
    quantity: 10,
    source: "/assets/imgs/BOLINHO-BAUDUC-DUO-27G-CHOCOLATE.jpg",
    valor: 2.5
  },
  {
    id: 10,
    name: "Bolinho Bauduco roll cake 34g chocolate",
    quantity: 6,
    source: "/assets/imgs/BOLINHO-BAUDUCCO-ROLL-CAKE-34G-CHOCOLATE.jpg",
    valor: 1.5
  }
];

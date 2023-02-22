export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    images: ["51iJx7YWDOL._AC_SL1000_.jpg"]
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    images: ["41pm+jo7atL._AC_SL1000_.jpg"]
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    images: ["41pm+jo7atL._AC_SL1000_.jpg"]
  },
  {
    id: 4,
    name: 'Laptop DP7510',
    price: 1499,
    description: 'A large laptop with the best characteristics',
    images: ["61fCWc8ZxES._AC_SL1500_.jpg"]
  },
  {
    id: 5,
    name: 'Xbox Series X',
    price: 499,
    description: 'A great console with a huge variety of games',
    images: ["61JGKhqxHxL._AC_SL1500_.jpg"]
  },
  {
    id: 6,
    name: 'PlayStation 5',
    price: 599,
    description: 'The best next gen console with a lot proccessing power',
    images: ["D_NQ_NP_2X_841787-MLA44484414455_012021-F.webp"]
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
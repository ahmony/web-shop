export interface productsStateInt {
        id: number,
        title: string,
        price: number,
        description: string,
        quantity: number,
        img: string
}

interface productsActionInt {
    type: string,
    payload: any
}

const initialState: productsStateInt[] = [ {
      id: 1,
      title: 'Orange t-shirt',
      price: 35,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      quantity: 3,
      img: '../img/product1.jpg'
    },
    {
      id: 2,
      title: 'Traveller bag',
      price: 55,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      quantity: 5,
      img: '../img/product2.jpg'
    },
    {
      id: 3,
      title: 'Sunglasses',
      price: 20,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi voluptates eveniet temporibus, modi libepturi!',
      quantity: 1,
      img: '../img/product3.jpg'
    },
  {
      id: 4,
      title: 'Women watch',
      price: 55,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi voluptates eveniet temporibus, modi libepturi!',
      quantity: 4,
      img: '../img/product4.jpg'
    },{
      id: 5,
      title: 'Fancy hat',
      price: 25,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi voluptates eveniet temporibus, modi libepturi!',
      quantity: 8,
      img: '../img/product5.jpg'
    }];

const productsReducer = (state: productsStateInt[] = initialState, action: productsActionInt) => {
    return state;
}

export default productsReducer;
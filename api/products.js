let sleepTime = 0;
function sleep(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn());
    }, sleepTime);
    sleepTime ? null : (sleepTime = 2000);
  });
}

const dataService = {
  getProductsList() {
    let products = [
      {
        id: 'potato',
        title: 'Картошка',
        price: 49.99,
        image: '/assets/potato.jpg',
      },
      {
        id: 'carrot',
        title: 'Морковка',
        price: 55.00,
        image: '/assets/carrot.jpg',
      },
      {
        id: 'cabbage',
        title: 'Капуста',
        price: 28.50,
        image: '/assets/cabbage.jpg',
      }
    ];
    return products;
  },
};

const productsApi = {
  getProductsList() {
    return sleep(dataService.getProductsList);
  },
};
export default productsApi;

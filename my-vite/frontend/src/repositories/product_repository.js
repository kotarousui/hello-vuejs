const _products = [
  {
    uuid: 'ede2b0a09f474df5e704',
    name: 'チャーハン',
  },
  {
    uuid: '1a75daaa93657b0b56d7',
    name: '麻婆豆腐',
  },
  {
    uuid: '5941ed7b7edf5dc41a54',
    name: '回鍋肉',
  },
  {
    uuid: 'b3f5bee8ea73df025cb1',
    name: '酢豚',
  },
  {
    uuid: '5bbd3e5e79ec4a989b09',
    name: '青椒肉絲',
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 500)
  },
}
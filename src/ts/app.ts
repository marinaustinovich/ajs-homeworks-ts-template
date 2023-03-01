import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from "./domain/Movie";
import Device from "./domain/Device";
const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(
  1011,'The Avengers',
  2500, 2012,
  'USA','Avengers Assemble!',
  ['action movie', 'fantastic'],
  '137 мин',  'Marvel'));
const device : Device = new Device (1015,'Galaxy Fold', 3000, 2015,)
cart.add(device);
console.log(cart.items);
console.log('sum ', cart.countTotal());
console.log('sum with discount ', cart.countTotalWithDiscount(10));

cart.removeCart(1001);
device.add();
console.log('cart after deleted Book and added the second Device ',cart.items);

cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
console.log('cart after trying to add the second MusicAlbum ', cart.items);
console.log(cart.countTotal());
console.log(cart.countTotalWithDiscount(10));

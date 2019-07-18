import React from 'react';
import Store from './Store';

class CounterStore extends Store{
  // Your implementation here.
  // Hint: extend the Store class!
  increment = () => {};
  decrement = () => {};
}

const counterStore = new CounterStore();

export default counterStore;

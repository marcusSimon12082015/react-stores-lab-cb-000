class Store {
  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.
  constructor(initialState){
    this.state = initialState;
    this.listeners = [];
  }

  setState(state){
    this.state = state;
  }

  getState(){
    return this.state;
  }
}

export default Store;

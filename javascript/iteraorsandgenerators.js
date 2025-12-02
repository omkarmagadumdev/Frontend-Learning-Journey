const myIterator = {
  current: 1,
  last: 5,
  
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    }
    return { value: undefined, done: true };
  }
};

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

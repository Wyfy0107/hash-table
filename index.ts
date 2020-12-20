class HashTable {
  table: any[];
  keys: string[];
  constructor(size: number) {
    this.table = new Array(size).fill(null);
    this.keys = [];
  }

  hash(key: string) {
    const hash = Array.from(key).reduce(
      (hashAccumulator: number, keySymbol: string) =>
        hashAccumulator + keySymbol.charCodeAt(0),
      0
    );

    return hash % this.table.length;
  }

  set(key: string, value: any) {
    if (this.keys.includes(key)) {
      return 'key exists';
    }
    this.keys.push(key);
    const hashKey = this.hash(key);
    if (this.table[hashKey] !== null) {
      return (this.table[hashKey] = [...this.table[hashKey], value]);
    }
    return (this.table[hashKey] = [value]);
  }

  delete(key: string) {
    const hashKey = this.hash(key);
    this.table[hashKey] = null;
  }

  get(key: string) {
    const hashKey = this.hash(key);
    return this.table[hashKey];
  }

  getKeys() {
    return [...this.keys];
  }
}

const hashTable = new HashTable(20);

hashTable.set('first', { name: 'duy' });
hashTable.set('second', { name: 'na' });
console.log(hashTable.get('first'));
console.log(hashTable.get('second'));
console.log(hashTable.getKeys());
console.log(hashTable.table);

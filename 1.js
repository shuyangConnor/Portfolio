this.id = 'global'

console.log('this.id :>> ', this.id) // this.id :>>  global

function normalFun() {
  return this.id
}

const arrowFun = () => {
  return this.id
}

const newNormal = new normalFun()
console.log('newNormal :>> ', newNormal) // newNormal :>>  normalFun {}
try {
  const newArrow = new arrowFun()
} catch (error) {
  console.log('error :>> ', error) // error :>>  TypeError: arrowFun is not a constructor
}

console.log('normalFun :>> ', normalFun()) // normalFun :>>  undefined
console.log('arrowFun() :>> ', arrowFun()) // arrowFun() :>>  global

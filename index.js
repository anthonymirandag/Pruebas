 class ShoppingCart {  
      constructor({db}) {    
          this.db = db 
         }    
    addProduct (product) {    
        this.db.push(product)  
      }    
      empty () {    
        this.db = []  
      }
      getproducts () {    return Object.freeze([...this.db])  }
      removeProduct (id) {}    // remove a product   }
      printProduts (){
        console.log('Productos',this.db)
      }
  }

let db = [] 
let cart = new ShoppingCart({db})
cart.addProduct({   name: 'foo',   price: 9.99})
cart.printProduts = ()=>{console.log("Hola soy mutable", this.db)}
cart.printProduts()
let cart2 = new ShoppingCart({db})
cart2.printProduts()



function addProduct (product){   
      db.push(product)  
    }    
function empty () {    
  db = []  
}
function getProducts () {    
    return Object.freeze([...db])  }

function removeProduct (id) {}
const printProduts = ()=>{
  console.log('Productos',db)
}

function makeShoppingCart({db}) {  

  
  return Object.freeze({    
                  addProduct,   
                  empty,   
                  getProducts,
                  removeProduct,
                  printProduts  })
}

db = []
cart = makeShoppingCart({ db })
cart.addProduct({   name: 'foo',   price: 9.99})
cart.printProduts = ()=>{console.log("Hola soy mutable", db)}
cart.printProduts()


function makeSomething({ member }) {  
  const { other } = makeSomethingElse()     
  function method () {    }
  return Object.freeze({     other,    method  })
}


function makeProductList({ productDb }) {  
    return Object.freeze({    
        addProduct,    
        empty,    
        getProducts,    
        removeProduct,    
        others  })
      } 
          // definitions for   // addProduct, etc…}
function makeShoppingCart(productList) {  
    return Object.freeze({    
          items: productList,    someCartSpecificMethod,    })
  function someCartSpecificMethod () {  } 
        }       
      
const productDb = []
const productList = makeProductList({ productDb })        

const cart = makeShoppingCart(productList)


function makeShoppingCart({   addProduct,  empty,  getProducts,  removeProduct, others}) {  
  return Object.freeze({    
    addProduct,    
    empty,    
    getProducts,    
    removeProduct,    
    someOtherMethod,   others})
    function someOtherMethod () {   }}


  
    
// Typos de operaciones deseable , obligatorio , no deseable
// Tres niveles
// Primer nivel .Hacer operaciones de filtros para una subquerie

// Segundo nivel . Unir esas operaciones en una queries
// Terce nivel. Indexar todas las subquieres al filtro y uni ala quierie



const operationsFilter = {}

operationsFilter['deseable'] = (field,contains)=>{
  return {
  }
}
operationsFilter['obligatorio'] = (field,contains)=>{
  return {

  }
}
operationsFilter['noDeseable'] = (field,contains)=>{
  return {

  }
}

// Primer nivel .Hacer operaciones de filtros para una subquerie
const makeOperation = (type)=>{
  if(type === "Deseable")
        return operationsFiltros["Deseable"]
  if(type === "No Deseable")
        return operationsFiltros["noDeseable"]
  if(type === "Obligatorio")
        return operationsFiltros["obligatorio"]
}

// Segundo nivel . Unir esas operaciones en una queries

let filtersList = {}

filtersList['area'] = (operations,query)=>{
  operations.forEach((o)=>{
    const type  = operations
    const operation = makeOperation(type,contains,query)
    // push a query 
    // quirie.should.push
    console.log('Subqueries para area')
  })
  } 
  filtersList['name'] = (operations,query)=>{
    operations.forEach((o)=>{
      const type  = operations
      const operation = makeOperation(type)
      operation(contains,query)
      // push a query 
      // quirie.should.push
      console.log('Subqueries para area')
    })
    } 

const makeFilter = (filterName)=>{
  if(filterName === "Area")
        return filtersList["area"]
  if(filterName === "Name")
        return filtersList["name"]
} 

const addFilterToQuery = (filters,query)=>{
  filters.forEach(f => {
      const { filterName , operations } = f
      const filter = makeFilter(filterName)
      filter(operations,query)
  });
  return query    
}

const makeSearchs = (Search)=>{
  ///
}

const addSearchToQuery = (searchs , query) =>{
  searchs.forEach(search =>{
      const searcQuries = makeFilter(search) 
       //should.push
    })
  return query
}

const makeQuery = (searchs,filters)=>{
  const query = {}
  if(searchs.lenght > 0)
     addSearchToQuery(query)
  if(filters.lenght > 0)
     addFilterToQuery(query)
  return query
}
const elasticQuery = ()=>{

const transfromFields = ()=>{console.log('tranforma field a elatic')}
    return Object.freeze({
    transfromFields,
    query 
   })
  }
const express = require('express')

const api = express()
api.use(express.json())

let products_id = 0
let products = []

api.post('/api/products', (request, response) => {
  let product = request.body
  product.id = ++products_id

  products.push(product)

  response.send(product)
})

api.get('/api/products', (request, response) => {
  response.send(products)
})

api.get('/api/products/:id', (request, response) => {
  let product = products.find( p => p.id === Number(request.params.id) )

  response.send(product)
})

api.put('/api/products/:id', (request, response) => {
  let product = products.find( p => p.id === Number(request.params.id) )
  let index = products.indexOf(product)
  let id = product.id

  product = request.body
  product.id = id
  products[index] = product

  response.send(product)
})

api.delete('/api/products/:id', (request, response) => {
  let product = products.find( p => p.id === Number(request.params.id) )
  let index = products.indexOf(product)

  products.splice(index, 1)

  response.send(product)
})

api.listen(3000, () => console.log('listening on port 3000...'))

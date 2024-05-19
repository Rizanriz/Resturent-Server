const jsonServer = require("json-server")

const ResturentServer = jsonServer.create()

const middleWare = jsonServer.defaults()

const route = jsonServer.router('db.json')

const PORT = 3000 || process.env.PORT

ResturentServer.use(middleWare)
ResturentServer.use(route)
ResturentServer.listen(PORT,()=>{
    console.log(`Resturent server started at port ${PORT} waiting for client request`);
})
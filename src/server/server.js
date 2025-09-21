const express = require('express')
const path = require('path')

const startServer = ( options ) => {
    const { port, public_path = 'public'} = options 

    const app = express()  
    //Para poder usar el middleware se usa la palabra use (express) 
    app.use(express.static(public_path)) // contenido estatico que ponemos disponible

    app.get('local', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        console.log(indexPath)
        res.sendFile(indexPath)
    })

    app.listen( port , () => {
        console.log(`Escuchando por el puerto ${port}`)
    })
}

module.exports = {
    startServer
}
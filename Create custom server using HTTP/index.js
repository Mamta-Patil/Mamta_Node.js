const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {
    console.log(req.method, req.url)

    if (req.method == "GET" && req.url == "/home") {
        res.end("Welcome")
    }
    else if (req.method == "GET" && req.url == "/about") {
        res.end("This is about page")
    }
    else if (req.method == "GET" && req.url == "/getproduct") {
        fs.readFile("./db.json", "utf-8", (err, products) => {
            if (err) {
                console.log(err)
                res.end(err)
            }
            else {
                const productsdatafromdb = JSON.parse(products)
                // console.log(products) 
                res.end(JSON.stringify(productsdatafromdb.products))
            }
        })
    }
    else if (req.method == "GET" && req.url == "/user") {
        fs.readFile("./db.json", "utf-8", (err, user) => {
            if (err) {
                console.log(err)
                res.end(err)
            }
            else {
                const userdatafromdb = JSON.parse(user)
                // console.log(user) 
                res.end(JSON.stringify(userdatafromdb.user))
            }
        })
    }

    else {
        res.end("Request Not Match")
    }
});

server.listen(8080, () => {
    console.log("server is running at 8080")
})
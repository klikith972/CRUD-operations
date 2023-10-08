const http=require('http')

const server=http.createServer((request,response)=>{
    if(request.method=='GET'){
        if(request.url=='/getusers'){
            response.end("This response for users")
        }
        if(request.url=='/getproducts'){
        response.end("This response for PRODUCTS")
        }
        response.end("This response for GETnode  request")

    }
    if(request.method=='POST'){
        if(request.url=='/createuser'){
            response.end("This response for createuser")
        }
        if(request.url=='/createproduct'){
            response.end("This response for createproduct")
        }
        response.end("This response for POST request")
    }
    if(request.method=='PUT'){
        response.end("This response for PUT request")
    }
    if(request.method=='DELETE'){
        response.end("This response for DELETE request")
    }
    

})
server.listen(3000,()=>console.log("server listening on port 3000"))
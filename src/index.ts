import { createServer } from "http";

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  switch(req.url){
    case "/":
      if(req.method === "GET"){
      let response = {message: "hello world!", success: true}
      res.end(JSON.stringify(response));
    }
    break;
    case "/health":
      if(req.method === "GET"){
      let response = {message: "healthy", success: true}
      res.end(JSON.stringify(response));
    }
    break;
    default:
      let response = {message: 'Your request is not supported:(', success: false};
    res.end(JSON.stringify(response));
  }
});

server.listen(process.env.PORT || 3000);

const express = require('express'); 
const app = express();
app.use(express.json()); 

app.get("/cousers", (request, response) => { 
    const query = request.query; 
    console.log(query); 
   return response.json(["Curso 1","Curso 2","Curso 3"]);
}); 

app.post("/coursers", (request, response) => {
    const body = request.body; 
    console.log(body); 
    return response.json(["Curso 1","Curso 2","Curso 3", "Curso 4"]);
});

app.put("/coursers/:id", (request, response) => {
    const { id } = request.params; 
    console.log(id);
    return response.json(["Curso 6","Curso 2","Curso 3", "Curso 4"]);
}) ;

app.patch("/coursers/:id", (request, response) => {
    const params = request.params; 
    console.log(params);
    return response.json(["Curso 6","Curso 7","Curso 3", "Curso 4"]);
}); 

app.delete("/coursers/:id", (request, response) => {
    return response.json(["Curso 7","Curso 3", "Curso 4"]);
}); 


app.listen(3333); 
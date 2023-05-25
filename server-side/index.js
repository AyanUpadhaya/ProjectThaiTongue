const express = require('express');
const cors = require('cors');
const chefs = require('./src/data/chefs.json');
const recipes = require('./src/data/recipes.json');
const app = express();
const port = 8000;
//https://thai-tongue-server.vercel.app
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Express!')
  })
app.get('/chefs',(req,res)=>{
    res.send(chefs)
})
app.get('/recipes',(req,res)=>{
    res.send(recipes)
})
app.get('/recipes/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    if(id<0 || id>12){
        res.send({})
    }
    const recipe = recipes.find(recipe=>recipe.id === id)
    res.send(recipe)
})
app.get('/chefs/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    if(id<0 || id>4){
        res.send({})
    }
    const chef = chefs.find(chef=>chef.id === id)
    res.send(chef)
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

const express = require("express")
const app = express();
const cors = require('cors');

const {initializeDatabase} = require("./db/db.connect")
const Inventory = require("./models/inventory.models")

app.use(cors())
app.use(express.json())
initializeDatabase()




const newInventory ={
    id: 10, 
    name: "Hydrogen (H2)", 
    full: 45, 
    empty: 12, 
    icon: "🟣"
}

async function createInventory(newInventory){
    try{
       const inventory = new Inventory(newInventory)
       const saveInventory = await inventory.save()
       console.log("saveInventory", saveInventory)
    }catch(error){
       throw error;
    }
}


//createInventory(newInventory)

async function readAllInventories(){
    try{
        const allInventories = await Inventory.find()
        return allInventories
    }catch(error){
        throw error
    }
}

app.get("/inventories", async(req, res)=>{
    try{
         const inventories = await readAllInventories()
         if(inventories.length!=0){
            res.json(inventories)
         }else{
            res.status(404).json({error: 'No inventories Found'})
         }
    }catch(error){
            res.status(500).json({error: 'Failed to fetch inventories'})
    }
})

const PORT =3000;
app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT)
})

const mongoose = require("mongoose")

const inventorySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true
      },
      full: {
        type: Number,
        required: true
      },
      empty: {
        type: Number,
        required: true
      },
      icon: {
        type: String,
        required: true
      },
     
}, {
  timestamps: true
})

const Inventory = mongoose.model('Inventory', inventorySchema)
module.exports = Inventory;
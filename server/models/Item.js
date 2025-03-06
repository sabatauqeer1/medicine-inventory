import mongoose from "mongoose";
const ItemSchema = new mongoose.Schema({
  itemValue: {type:Array
    
    
  
  },
 
});

export const Items = mongoose.model("Item", ItemSchema);

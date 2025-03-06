import { Items } from "../../models/item.js";
export const updateItem = async (req, res) => {

   

    const updatedItem = await Items.updateOne({"$push":{"itemValue": { "item": "Abies nigra" },}})
    return("done upddated")
  }
      

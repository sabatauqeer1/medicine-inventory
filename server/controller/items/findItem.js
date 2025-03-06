import { Items } from "../../models/item.js";


export const FindItems = async (req, res) => {
  try {
    const { itemValue } = req.body;

    const findRes = await Items.findOne(
      // console.log(itemValue),
      
      {
    
    "itemValue":itemValue}
    );
  
    console.log(findRes);
    
    return res.json(findRes)
    
    
  } catch (error) {
    res.json({msg:error.msg})

    
  }
 
};








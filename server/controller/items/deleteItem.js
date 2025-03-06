import { Items } from "../../models/item.js";
export const deleteItem = async (req, res) => {
  const { id, userId } = req.params;
  const { itemValue, deleteSingle, deleteAll } = req.body;
  try {
    if (deleteSingle || itemValue) {
      const deletedItem = await Items.updateOne(
        { userId: userId },
        { $pull: { itemValue: itemValue } },
        { upsert: true }
      );
      res.send("deleted single");
    }

    if (deleteAll) {
      const deletedItems = await Items.deleteMany({ userId: userId, _id: id });
      res.send("deleted all ");
    }
  } catch (error) {}
};

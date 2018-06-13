export default {
    Query: {
        allItems: async (parent, args, { Item }) => {
            const items = await Item.find();
            return items.map(item => {
                item._id = item._id.toString();
                return x;
            });
        }
    },
    Mutation: {
        addItem: async (parent, args, { Item }) => {
            const addedItem = await new Item(args).save();
            addedItem._id = addedItem._id.toString();
            return addedItem;
        }
    }
};

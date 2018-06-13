import Realm from "realm";

const FaveSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: "date"
  }
};

const realm = new Realm({ schema: [FaveSchema] });

export const createFave = id => {
  realm.write(() => {
    realm.create("Fave", { id: `${id}`, faved_on: new Date() });
  });
};

export const queryAllFaves = () => realm.objects("Fave");

export const deleteFave = id => {
  realm.write(() => {
    const faveToDelete = realm.objects("Fave").filtered("id == $0", id);
    realm.delete(faveToDelete);
  });
};

export default realm;

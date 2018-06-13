import Realm from "realm";

const FaveSchema = {
  name: "Fave",
  primaryKey: "id",
  properties: {
    id: "string",
    faved_on: "date"
  }
};

const tokenSchema = {
  name: "Token",
  primaryKey: "token",
  properties: {
    id: 'string',
    token: "string"
  }
}

const realm = new Realm({ schema: [FaveSchema, tokenSchema] });

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

export const createToken = (token, id) => {
  realm.write(() => {
    realm.create("Token", { token: `${token}`, id: `${id}` });
  });
};

export const queryToken = () => realm.objects("Token");

export default realm;

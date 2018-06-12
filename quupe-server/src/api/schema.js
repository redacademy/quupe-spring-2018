// const typeDefs = `{
// type Item{
//      id: ID!
//      title: String!
//      details: String!
//      geolocation: String!
//      image: String!
//      condition: String!
//      year: String!
//      categories: [String!]
//      price: String!
//      available: Boolean
//      }
// type Category{
//      categoryid: ID
//      category: String!
// }
// type Query {
//      items: [Item]
//      item(id: ID!): Item
//      categoryScreen: [Category]
// }

// }`;

// export default typeDefs;

export default `
type Item{
     _id: String!
     title: String!
}

type Query {
     allItems: [Item!]!
}
type Mutation {
     addItem(title: String!): Item!
}
`;

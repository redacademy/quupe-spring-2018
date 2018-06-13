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

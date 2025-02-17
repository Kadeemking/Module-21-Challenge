const typeDefs =`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book{
  bookId: String
  title: String
  description: String
  image: String
  link: String
  authors: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    bookId: String
    title: String
    description: String
    image: String
    link: String
    authors: [String]!
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;

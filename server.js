const { ApolloServer, gql } = require('apollo-server');

// 本来はDBから取得する
// 擬似的に定義
const books = [
  {
    title: '吾輩は猫である',
    author: '夏目漱石',
  },
  {
    title: '走れメロス',
    author: '太宰治',
  },
];

// 問い合わせ内容を定義
const typeDefs = gql`
  # 型を定義
  type Book {
    title: String,
    author: String
  }

  # クエリを定義
  # booksというクエリに対して、Bookの配列を返す
  type Query {
    books: [Book]
  }
`;

// クエリが呼ばれた時に返すデータ
const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

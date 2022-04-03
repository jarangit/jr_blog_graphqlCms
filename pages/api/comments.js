import { GraphQLClient, gql } from "graphql-request";

const graphql_api = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphql_token = process.env.GRAPHCMS_TOKEN;

export default async function asynchandler(req, res) {
  const graphqlClient = new GraphQLClient(graphql_api, {
    headers: {
      authorization: `Bearer ${graphql_token}`,
    },
  });
  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          posts: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  const result = await graphqlClient.request(query, {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}

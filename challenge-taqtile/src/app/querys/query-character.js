import { gql } from "@apollo/client";

const CHARACTER_INFO = gql`
  query {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`;

export default CHARACTER_INFO;
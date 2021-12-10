import { gql } from "@apollo/client";

const CHARACTER_EPISODES  = (characterId) => gql`
  query {
      character(id: ${characterId}) {
        name
        image
        episode {
          id
          name
        }
      }
    }
`;

export default CHARACTER_EPISODES;





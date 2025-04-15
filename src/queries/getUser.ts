// queries/getUser.ts
import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($uid: String!) {
    user(uid: $uid) {
      name
      email
      number
      profile_url
      addressDetails {
        line1
        line2
        city
        state
        country
        code
        number
        alternate_number
        type
        weekend_availability
      }
    }
  }
`;

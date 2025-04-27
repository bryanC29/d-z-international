import { gql } from '@apollo/client';

export const GET_SAVED_ADDRESSES = gql`
  query User($uid: String!) {
    user(uid: $uid) {
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
      name
      email
      number
    }
  }
`;

import { gql } from '@apollo/client';

export const GET_RETURN_DETAILS = gql`
  query GetReturnDetails($pid: String!, $uid: String!) {
    product(pid: $pid) {
      name
    }
    user(uid: $uid) {
      name
    }
  }
`;

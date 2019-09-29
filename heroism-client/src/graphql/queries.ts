// tslint:disable
// this is an auto generated file. This will be overwritten

export const getGame = `query GetGame($id: ID!) {
  getGame(id: $id) {
    id
    owner
    rival
    moves {
      items {
        userId
        fieldNumber
      }
      nextToken
    }
  }
}
`;
export const listGames = `query ListGames(
  $filter: ModelGameFilterInput
  $limit: Int
  $nextToken: String
) {
  listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      owner
      rival
      moves {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getMove = `query GetMove($id: ID!) {
  getMove(id: $id) {
    userId
    game {
      id
      owner
      rival
      moves {
        nextToken
      }
    }
    fieldNumber
  }
}
`;
export const listMoves = `query ListMoves(
  $filter: ModelMoveFilterInput
  $limit: Int
  $nextToken: String
) {
  listMoves(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userId
      game {
        id
        owner
        rival
      }
      fieldNumber
    }
    nextToken
  }
}
`;

// tslint:disable
// this is an auto generated file. This will be overwritten

export const createGame = `mutation CreateGame($input: CreateGameInput!) {
  createGame(input: $input) {
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
export const updateGame = `mutation UpdateGame($input: UpdateGameInput!) {
  updateGame(input: $input) {
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
export const deleteGame = `mutation DeleteGame($input: DeleteGameInput!) {
  deleteGame(input: $input) {
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
export const createMove = `mutation CreateMove($input: CreateMoveInput!) {
  createMove(input: $input) {
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
export const updateMove = `mutation UpdateMove($input: UpdateMoveInput!) {
  updateMove(input: $input) {
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
export const deleteMove = `mutation DeleteMove($input: DeleteMoveInput!) {
  deleteMove(input: $input) {
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

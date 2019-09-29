/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateGameInput = {
  id?: string | null,
  owner: string,
  rival?: string | null,
};

export type UpdateGameInput = {
  id: string,
  owner?: string | null,
  rival?: string | null,
};

export type DeleteGameInput = {
  id?: string | null,
};

export type CreateMoveInput = {
  userId: string,
  fieldNumber: number,
  moveGameId?: string | null,
};

export type UpdateMoveInput = {
  userId?: string | null,
  fieldNumber?: number | null,
  moveGameId?: string | null,
};

export type DeleteMoveInput = {
  id?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDFilterInput | null,
  owner?: ModelStringFilterInput | null,
  rival?: ModelStringFilterInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelMoveFilterInput = {
  userId?: ModelStringFilterInput | null,
  fieldNumber?: ModelIntFilterInput | null,
  and?: Array< ModelMoveFilterInput | null > | null,
  or?: Array< ModelMoveFilterInput | null > | null,
  not?: ModelMoveFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
};

export type CreateGameMutation = {
  createGame:  {
    __typename: "Game",
    id: string,
    owner: string,
    rival: string | null,
    moves:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        userId: string,
        fieldNumber: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
};

export type UpdateGameMutation = {
  updateGame:  {
    __typename: "Game",
    id: string,
    owner: string,
    rival: string | null,
    moves:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        userId: string,
        fieldNumber: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
};

export type DeleteGameMutation = {
  deleteGame:  {
    __typename: "Game",
    id: string,
    owner: string,
    rival: string | null,
    moves:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        userId: string,
        fieldNumber: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateMoveMutationVariables = {
  input: CreateMoveInput,
};

export type CreateMoveMutation = {
  createMove:  {
    __typename: "Move",
    userId: string,
    game:  {
      __typename: "Game",
      id: string,
      owner: string,
      rival: string | null,
      moves:  {
        __typename: "ModelMoveConnection",
        nextToken: string | null,
      } | null,
    } | null,
    fieldNumber: number,
  } | null,
};

export type UpdateMoveMutationVariables = {
  input: UpdateMoveInput,
};

export type UpdateMoveMutation = {
  updateMove:  {
    __typename: "Move",
    userId: string,
    game:  {
      __typename: "Game",
      id: string,
      owner: string,
      rival: string | null,
      moves:  {
        __typename: "ModelMoveConnection",
        nextToken: string | null,
      } | null,
    } | null,
    fieldNumber: number,
  } | null,
};

export type DeleteMoveMutationVariables = {
  input: DeleteMoveInput,
};

export type DeleteMoveMutation = {
  deleteMove:  {
    __typename: "Move",
    userId: string,
    game:  {
      __typename: "Game",
      id: string,
      owner: string,
      rival: string | null,
      moves:  {
        __typename: "ModelMoveConnection",
        nextToken: string | null,
      } | null,
    } | null,
    fieldNumber: number,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame:  {
    __typename: "Game",
    id: string,
    owner: string,
    rival: string | null,
    moves:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        userId: string,
        fieldNumber: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      owner: string,
      rival: string | null,
      moves:  {
        __typename: "ModelMoveConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMoveQueryVariables = {
  id: string,
};

export type GetMoveQuery = {
  getMove:  {
    __typename: "Move",
    userId: string,
    game:  {
      __typename: "Game",
      id: string,
      owner: string,
      rival: string | null,
      moves:  {
        __typename: "ModelMoveConnection",
        nextToken: string | null,
      } | null,
    } | null,
    fieldNumber: number,
  } | null,
};

export type ListMovesQueryVariables = {
  filter?: ModelMoveFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMovesQuery = {
  listMoves:  {
    __typename: "ModelMoveConnection",
    items:  Array< {
      __typename: "Move",
      userId: string,
      game:  {
        __typename: "Game",
        id: string,
        owner: string,
        rival: string | null,
      } | null,
      fieldNumber: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame:  {
    __typename: "Game",
    id: string,
    owner: string,
    rival: string | null,
    moves:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        userId: string,
        fieldNumber: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame:  {
    __typename: "Game",
    id: string,
    owner: string,
    rival: string | null,
    moves:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        userId: string,
        fieldNumber: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame:  {
    __typename: "Game",
    id: string,
    owner: string,
    rival: string | null,
    moves:  {
      __typename: "ModelMoveConnection",
      items:  Array< {
        __typename: "Move",
        userId: string,
        fieldNumber: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateMoveSubscription = {
  onCreateMove:  {
    __typename: "Move",
    userId: string,
    game:  {
      __typename: "Game",
      id: string,
      owner: string,
      rival: string | null,
      moves:  {
        __typename: "ModelMoveConnection",
        nextToken: string | null,
      } | null,
    } | null,
    fieldNumber: number,
  } | null,
};

export type OnUpdateMoveSubscription = {
  onUpdateMove:  {
    __typename: "Move",
    userId: string,
    game:  {
      __typename: "Game",
      id: string,
      owner: string,
      rival: string | null,
      moves:  {
        __typename: "ModelMoveConnection",
        nextToken: string | null,
      } | null,
    } | null,
    fieldNumber: number,
  } | null,
};

export type OnDeleteMoveSubscription = {
  onDeleteMove:  {
    __typename: "Move",
    userId: string,
    game:  {
      __typename: "Game",
      id: string,
      owner: string,
      rival: string | null,
      moves:  {
        __typename: "ModelMoveConnection",
        nextToken: string | null,
      } | null,
    } | null,
    fieldNumber: number,
  } | null,
};

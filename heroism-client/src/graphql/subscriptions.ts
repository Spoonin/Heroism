// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateGame = `subscription OnCreateGame {
  onCreateGame {
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
export const onUpdateGame = `subscription OnUpdateGame {
  onUpdateGame {
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
export const onDeleteGame = `subscription OnDeleteGame {
  onDeleteGame {
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
export const onCreateMove = `subscription OnCreateMove {
  onCreateMove {
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
export const onUpdateMove = `subscription OnUpdateMove {
  onUpdateMove {
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
export const onDeleteMove = `subscription OnDeleteMove {
  onDeleteMove {
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

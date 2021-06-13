// I. Add Vote
export const AddVote = (uuid) => (dispatch) => {
  dispatch({
    type: 'VOTE_MEM',
    payload: {
      uuid,
    },
  });
};
// II. Down Vote
export const DownVote = (uuid) => (dispatch) => {
  dispatch({
    type: 'DOWNVOTE_MEM',
    payload: {
      uuid,
    },
  });
};

// III. Add Mem

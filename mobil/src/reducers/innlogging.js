import {
  INNLOGGA_SOM,
} from '../actions/innlogging';

const INITIAL_STATE = {
  epost: '',
  innlogga: false,
};

export default innlogging = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INNLOGGA_SOM:
      const { epost, innlogga } = action.payload;
      return {
        ...state,
        epost,
        innlogga,
      };
    default:
      return state;
  }
};

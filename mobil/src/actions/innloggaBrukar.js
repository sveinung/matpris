export const INNLOGGA_SOM = 'INNLOGGA_SOM';
export const LOGG_UT = 'LOGG_UT';

export const innloggaSom = (epost) => {
  return {
    type: INNLOGGA_SOM,
    payload: {
      epost,
      innlogga: true,
    },
  }
};

export const loggUt = () => {
  return {
    type: LOGG_UT,
    payload: true,
  }
};

export const INNLOGGA_SOM = 'INNLOGGA_SOM';

export const innloggaSom = (epost) => {
  return {
    type: INNLOGGA_SOM,
    payload: {
      epost,
      innlogga: true,
    },
  }
};

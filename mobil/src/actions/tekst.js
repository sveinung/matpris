export const ENDRE_TEKST = 'ENDRE_TEKST';

export const endreTekst = (tekst) => {
  return {
    type: ENDRE_TEKST,
    payload: tekst,
  }
};

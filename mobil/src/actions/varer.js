export const ENDRE_TEKST = 'ENDRE_TEKST';
export const LEGG_TIL_VARE = 'LEGG_TIL_VARE';

export const endreTekst = (tekst) => {
  return {
    type: ENDRE_TEKST,
    payload: tekst,
  };
};

export const leggTilVare = (vare) => {
  return {
    type: LEGG_TIL_VARE,
    payload: vare,
  }
};

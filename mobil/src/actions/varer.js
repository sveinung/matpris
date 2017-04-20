const LEGG_TIL_VARE = 'LEGG_TIL_VARE';

export const leggTilVare = (vare) => {
  return {
    type: LEGG_TIL_VARE,
    payload: vare,
  }
};

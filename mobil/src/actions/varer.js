//  @flow

import vareService from '../services/varer';

export const HENT_VARER = 'HENT_VARER';
export const ENDRE_TEKST = 'ENDRE_TEKST';
export const LEGG_TIL_VARE = 'LEGG_TIL_VARE';
export const FJERN_VARE = 'FJERN_VARE';

export const endreTekst = (tekst: string) => {
  return {
    type: ENDRE_TEKST,
    payload: tekst,
  };
};

export const hentVarer = () => (dispatch: Function) => {
  return vareService.hentVarer()
    .then((varer) => {
      dispatch({
        type: HENT_VARER,
        payload: varer,
      })
    }).catch((error) => {
      console.log(error);
    });
};

export const leggTilVare = (varenamn: string) => (dispatch: Function) => {
  return vareService.leggTilVare(varenamn)
    .then((vare: Vare) => dispatch({
        type: LEGG_TIL_VARE,
        payload: vare,
      })
    );
};

export const fjernVare = (vareId: string) => (dispatch: Function) => {
  return vareService.fjernVare(vareId)
    .then(() => dispatch({
      type: FJERN_VARE,
      payload: vareId,
    })
  );
};

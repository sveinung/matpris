export const ENDRE_EPOST = 'ENDRE_EPOST';
export const ENDRE_PASSORD = 'ENDRE_PASSORD';
export const ENDRE_FORNAMN = 'ENDRE_FORNAMN';
export const ENDRE_ETTERNAMN = 'ENDRE_ETTERNAMN';

export const endreEpost = (epost) => {
  return {
    type: ENDRE_EPOST,
    payload: epost,
  }
};

export const endrePassord = (passord) => {
  return {
    type: ENDRE_PASSORD,
    payload: passord,
  }
};

export const endreFornamn = (fornamn) => {
  return {
    type: ENDRE_FORNAMN,
    payload: fornamn,
  }
};

export const endreEtternamn = (etternamn) => {
  return {
    type: ENDRE_ETTERNAMN,
    payload: etternamn,
  }
};

export const ENDRE_EPOST = 'ENDRE_EPOST';
export const ENDRE_PASSORD = 'ENDRE_PASSORD';
export const REGISTRERINGSFEIL = 'REGISTRERINGSFEIL';

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

export const registreringsfeil = (feilmelding) => {
  return {
    type: REGISTRERINGSFEIL,
    payload: feilmelding,
  }
};

export const INNLOGGINGS_EPOST = 'INNLOGGINGS_EPOST';
export const INNLOGGINGS_PASSORD = 'INNLOGGINGS_PASSORD';
export const INNLOGGINGSFEIL = 'INNLOGGINGSFEIL';

export const endreEpost = (epost) => {
  return {
    type: INNLOGGINGS_EPOST,
    payload: epost,
  };
};

export const endrePassord = (passord) => {
  return {
    type: INNLOGGINGS_PASSORD,
    payload: passord,
  };
};

export const innloggingsfeil = (feilmelding) => {
  return {
    type: INNLOGGINGSFEIL,
    payload: feilmelding,
  }
};

export interface saberStates {
  isSith?: boolean;
  isJedi?: boolean;
  isUnique?: boolean; 
}; 

export const INIT_STATE = {
  isSith: false,
  isJedi: false,
  isUnique: false,
};

export const saberReducer = (state: saberStates, action: string) => {
  switch (true) {
    case action === 'unique':
      console.log({
        ...state,
        isUnique: true,
      })
      return {
        ...state,
        isUnique: true,
      };
    case action === 'jedi':
      console.log({
        ...state,
        isJedi: true,
      })
      return {
        ...state,
        isJedi: true,
      };
    case action === 'sith':
      console.log({
        ...state,
        isSith: true,
      })
      return {
        ...state,
        isSith: true,
      }
    default:
      console.log({
        ...state,

      }) 
      return {
        ...state,
        isSith: false,
        isJedi: false,
        isUnique: false,
      };
  }
};


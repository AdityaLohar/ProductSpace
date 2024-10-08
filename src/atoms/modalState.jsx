import { atom } from 'recoil';

// Atom to manage visibility (for scaling or fading effect)
export const isVisibleformState = atom({
  key: 'isVisibleFormState',
  default: false, // Default is not visible
});

// Atom to manage if the form is open
export const isOpenFormState = atom({
  key: 'isOpenFormState',
  default: false, // Default is closed
});


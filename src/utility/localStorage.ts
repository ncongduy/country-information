import { RootState } from '../redux/store';

const KEY = 'redux';

export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export async function saveState(state: RootState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    console.warn('Do not save to localStorage', e);
  }
}

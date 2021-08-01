import {generateUniqueId} from './generateUniqueId';

export const generateItem = (name = '') => ({
  id: generateUniqueId(),
  name,
});

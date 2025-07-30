import Hashids from 'hashids';

const hashids = new Hashids('votre-sel-secret', 8);

export function encodeId(id) {
  return hashids.encode(id);
}

export function decodeId(hash) {
  const decoded = hashids.decode(hash);
  return decoded.length ? decoded[0] : null;
}
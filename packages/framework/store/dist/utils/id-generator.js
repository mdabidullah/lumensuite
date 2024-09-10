import { uuidv4 as uuidv4IdGenerator } from 'lib0/random.js';
import { nanoid as nanoidGenerator } from 'nanoid';
export function createAutoIncrementIdGenerator() {
    let i = 0;
    return () => (i++).toString();
}
export function createAutoIncrementIdGeneratorByClientId(clientId) {
    let i = 0;
    return () => `${clientId}:${i++}`;
}
export const uuidv4 = () => {
    return uuidv4IdGenerator();
};
export const nanoid = () => {
    return nanoidGenerator(10);
};
//# sourceMappingURL=id-generator.js.map
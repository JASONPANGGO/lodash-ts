/**
 * pick props from an object
 * @param object
 * @param props
 * @returns
 */
 export const pick = <T extends {}, K extends keyof T>(object: T, props: K[]): Pick<T, K> => {
    const entries = props.map((key) => [key, object[key]]);
    return Object.fromEntries(entries);
  };
  
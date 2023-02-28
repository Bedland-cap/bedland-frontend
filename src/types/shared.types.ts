export type Getters<T extends string, K> = {
  [k in T]: K;
};

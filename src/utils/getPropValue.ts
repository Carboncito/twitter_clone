export const getPropValue = <T extends object, K extends object = any>(
  props: T,
  values: K,
  defaultValue: keyof K,
): string => {
  const keysProps = Object.keys(props) as Array<keyof typeof props>;
  const keysValues = Object.keys(values) as Array<keyof typeof values>;
  const valueFinded = keysValues.find(key =>
    keysProps.includes(key as unknown as keyof T),
  );

  return values[valueFinded || defaultValue];
};

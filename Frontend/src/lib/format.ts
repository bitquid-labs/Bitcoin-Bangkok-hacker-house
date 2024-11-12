export function matchFloatingPoints(value: string) {
  const regex = /^(?:\d{1,20}(\.\d{0,16})?|\.\d{1,16})?$/;
  return regex.test(value);
}



import { dot } from "./dot";
import { genType } from "./genType";
import { isNumber } from "./isNumber";
import { multiply } from "./multiply";
import { sqrt } from "./sqrt";
import { subtract } from "./subtract";

export function refract<T extends genType>(I: T, N: T, eta: number) {
  const NdotI = dot(N, I);
  const k = 1 - eta * eta * (1 - NdotI * NdotI);
  if (k < 0) {
    return genType[isNumber(I) ? 1 : I.length](0.0);
  } else {
    return subtract(multiply(eta, I), multiply(eta * NdotI + sqrt(k), N));
  }
}
import { calculateAgeFromBirthDate6AndGenderCode } from "../calculate-age-from-birth-date6-and-gender-code";

export function is미성년자(
  ...params: Parameters<typeof calculateAgeFromBirthDate6AndGenderCode>
) {
  return calculateAgeFromBirthDate6AndGenderCode(params[0], params[1]) < 19;
}

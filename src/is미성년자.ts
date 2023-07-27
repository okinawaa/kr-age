import { calculateAgeFromBirthdate6AndGenderCode } from "./calculateAgeFromBirthdate6AndGenderCode";

export function is미성년자(
  ...params: Parameters<typeof calculateAgeFromBirthdate6AndGenderCode>
) {
  return calculateAgeFromBirthdate6AndGenderCode(params[0], params[1]) < 19;
}

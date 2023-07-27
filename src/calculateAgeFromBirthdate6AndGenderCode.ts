const 출생시기 = {
  "1900년대생": ["1", "2", "5", "6"],
  "2000년대생": ["3", "4", "7", "8"],
} as const;

// 생년월일과 성별코드를 받아서 나이를 계산하는 함수
export function calculateAgeFromBirthdate6AndGenderCode(
  birthDate6: string,
  genderCode: (typeof 출생시기)[keyof typeof 출생시기][number]
): number {
  let 출생년도: number;

  if (출생시기["1900년대생"].some((x) => x === genderCode)) {
    출생년도 = 1900;
  } else if (출생시기["2000년대생"].some((x) => x === genderCode)) {
    출생년도 = 2000;
  } else {
    throw new Error("올바른 성별코드를 입력해주세요.");
  }

  const year = parseInt(birthDate6.slice(0, 2));
  const month = parseInt(birthDate6.slice(2, 4));
  const day = parseInt(birthDate6.slice(4, 6));

  const birthYear = 출생년도 + year;
  const birthMonth = month - 1;
  const birthDay = day;
  const birthDateObj = new Date(birthYear, birthMonth, birthDay);
  const ageDiffMilliseconds = Date.now() - birthDateObj.getTime();
  const ageDate = new Date(ageDiffMilliseconds);
  const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  return calculatedAge;
}

import { expect, it, vi } from "vitest";

import { calculateAgeFromBirthDate6AndGenderCode } from "./calculateAgeFromBirthDate6AndGenderCode";
it("1900년대생의 남성 성별코드로 나이 계산", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "970902";
  const genderCode = "1";

  const age = calculateAgeFromBirthDate6AndGenderCode(birthDate, genderCode);

  expect(age).toBe(25);
});

it("1900년대생의 여성 성별코드로 나이 계산", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "970902";
  const genderCode = "2";

  const age = calculateAgeFromBirthDate6AndGenderCode(birthDate, genderCode);

  expect(age).toBe(25);
});

it("2000년대생의 남성 성별코드로 나이 계산", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "180902";
  const genderCode = "3";

  const age = calculateAgeFromBirthDate6AndGenderCode(birthDate, genderCode);

  expect(age).toBe(4);
});

it("2000년대생의 여성 성별코드로 나이 계산", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "180902";
  const genderCode = "4";

  const age = calculateAgeFromBirthDate6AndGenderCode(birthDate, genderCode);

  expect(age).toBe(4);
});

it("1900년대생의 외국인 남성 성별코드로 나이 계산", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "880902";
  const genderCode = "5";

  const age = calculateAgeFromBirthDate6AndGenderCode(birthDate, genderCode);

  expect(age).toBe(34);
});

it("1900년대생의 외국인 여성 성별코드로 나이 계산", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "880902";
  const genderCode = "6";

  const age = calculateAgeFromBirthDate6AndGenderCode(birthDate, genderCode);

  expect(age).toBe(34);
});

it("2000년대생의 외국인 남성 성별코드로 나이 계산", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "150502";
  const genderCode = "7";

  const age = calculateAgeFromBirthDate6AndGenderCode(birthDate, genderCode);

  expect(age).toBe(8);
});

it("2000년대생의 외국인 여성 성별코드로 나이 계산", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "151002";
  const genderCode = "8";

  const age = calculateAgeFromBirthDate6AndGenderCode(birthDate, genderCode);

  expect(age).toBe(7);
});

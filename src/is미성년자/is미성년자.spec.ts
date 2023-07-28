import { expect, it, vi } from "vitest";
import { is미성년자 } from "./is미성년자";

it("2006년생은 미성년자이다.", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "060902";
  const genderCode = "3";

  const 미성년자인가 = is미성년자(birthDate, genderCode);

  expect(미성년자인가).toBeTruthy();
});

it("2001년생은 미성년자가 아니다..", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "010902";
  const genderCode = "3";

  const 미성년자인가 = is미성년자(birthDate, genderCode);

  expect(미성년자인가).toBeFalsy();
});

it("1991년생은 미성년자가 아니다..", () => {
  const date = new Date(2023, 7, 28);
  vi.useFakeTimers();
  vi.setSystemTime(date);

  const birthDate = "910202";
  const genderCode = "1";

  const 미성년자인가 = is미성년자(birthDate, genderCode);

  expect(미성년자인가).toBeFalsy();
});

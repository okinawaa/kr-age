# kr-age

## calculateAgeFromBirthDate6AndGenderCode

생년월일 6자리 + 성별코드 1자리를 받는 경우 이를 기반으로 `만나이`를 계산해줘요.
230619라면, 성별코드를 이용해 1923년생인지 2023년생인지 구분해줍니다.


```typescript
function calculateAgeFromBirthDate6AndGenderCode(birthDate6: string, genderCode: "1" | "2" | "5" | "6" | "3" | "4" | "7" | "8"): number;
```

## Examples

```typescript
calculateAgeFromBirthDate6AndGenderCode('970902',"1"); // 25
calculateAgeFromBirthDate6AndGenderCode('180902',"4"); // 4 2000년대 생으로 인색
calculateAgeFromBirthDate6AndGenderCode('180902',"1"); // 104 1900년대 생으로 인색
```




## is미성년자

현재 날짜를 기준으로 만나이를 고려하여 미성년자인지 판단해줘요.

```typescript
function is미성년자(birthDate6: string, genderCode: "1" | "2" | "5" | "6" | "3" | "4" | "7" | "8"): boolean;
```

## isBirthDate6

주어진 문자열이 올바른 생년월일 여섯자리인지 검증합니다.

```typescript
function isBirthDate6(birthDate: string): boolean;
```

## Examples

```typescript
isBirthDate6('980211'); // true
isBirthDate6('19960729'); // false
isBirthDate6('foobar'); // false
```


## isAge

주어진 문자열이 유효한 나이인지 검사합니다.

```typescript
function isAge(ageInput: string): boolean;
```

## Examples

```typescript
isAge('25'); // true
isAge('asd'); // false
isAge('24.3'); // false
```

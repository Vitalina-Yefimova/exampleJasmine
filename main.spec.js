jasmine.getEnv().configure({
  random: false
})

// 2. Тестування функції `ageClassification(num)`:** Ваше завдання полягає у написанні тестів для функції `ageClassification(num)`, яка класифікує вік людини.
// Тест повинен перевірити коректність роботи функції для всіх вказаних у прикладі діапазонів віку.

describe('Testing ageClassification function', () => {

  it('age -1 returns null', () => {
    expect(ageClassification(-1)).toBeNull()
  })

  it('age 0 returns null', () => {
    expect(ageClassification(0)).toBeNull()
  })

  it('age 1 returns Дитинство', () => {
    expect(ageClassification(1)).toBe('Дитинство')
  })

  it('age 24 returns Дитинство', () => {
    expect(ageClassification(24)).toBe('Дитинство')
  })

  it('age 24.01 returns Молодість', () => {
    expect(ageClassification(24.01)).toBe('Молодість')
  })

  it('age 44 returns Молодість', () => {
    expect(ageClassification(44)).toBe('Молодість')
  })

  it('age 44.01 returns Зрілість', () => {
    expect(ageClassification(44.01)).toBe('Зрілість')
  })

  it('age 65 returns Зрілість', () => {
    expect(ageClassification(65)).toBe('Зрілість')
  })

  it('age 65.1 returns Старість', () => {
    expect(ageClassification(65.1)).toBe('Старість')
  })

  it('age 75 returns Старість', () => {
    expect(ageClassification(75)).toBe('Старість')
  })

  it('age 75.01 returns Довголіття', () => {
    expect(ageClassification(75.01)).toBe('Довголіття')
  })

  it('age 90 returns Довголіття', () => {
    expect(ageClassification(90)).toBe('Довголіття')
  })

  it('age 90.01 returns Рекорд', () => {
    expect(ageClassification(90.01)).toBe('Рекорд')
  })

  it('age 122 returns Рекорд', () => {
    expect(ageClassification(122)).toBe('Рекорд')
  })

  it('age 122.01 returns null', () => {
    expect(ageClassification(122.01)).toBeNull()
  })

  it('age 150 returns null', () => {
    expect(ageClassification(150)).toBeNull()
  })
})

// 3. Тестування функції weekFn(cond): Напишіть тести для функції weekFn(cond), що повертає назву дня тижня за заданим числом.
// Тест повинен переконатися, що функція коректно повертає назви для чисел від 1 до 7, та повертає null для невідповідних значень (наприклад, 9, 1.5, '2').

describe('Testing the weekFn function for different week day values', () => {

  it('weekFn(1) returns Понеділок', () => {
    expect(weekFn(1)).toBe('Понеділок')
  })

  it('weekFn(2) returns Вівторок', () => {
    expect(weekFn(2)).toBe('Вівторок')
  })

  it('weekFn(3) returns Середа', () => {
    expect(weekFn(3)).toBe('Середа')
  })

  it('weekFn(4) returns Четвер', () => {
    expect(weekFn(4)).toBe('Четвер')
  })

  it('weekFn(5) returns П\'ятниця', () => {
    expect(weekFn(5)).toBe('П\'ятниця')
  })

  it('weekFn(6) returns Субота', () => {
    expect(weekFn(6)).toBe('Субота')
  })

  it('weekFn(7) returns Неділя', () => {
    expect(weekFn(7)).toBe('Неділя')
  })

  it('weekFn(9) returns null', () => {
    expect(weekFn(9)).toBeNull()
  })

  it('weekFn(1.5) returns null', () => {
    expect(weekFn(1.5)).toBeNull()
  })

  it('weekFn("2") returns null', () => {
    expect(weekFn("2")).toBeNull()
  })
})
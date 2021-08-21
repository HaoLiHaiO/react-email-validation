import isValidRegEmail from '../isValidRegEmail';

describe('isValidRegEmail', () => {
    test('returns true when email is valid', () => {
      expect(isValidRegEmail('hello@hotmail.com')).toBe(true);
    });

    test('returns false when email dot is in first position of the email', () => {
        expect(isValidRegEmail('.hello@hotmail.com')).toBe(false);
      });

      test('returns false when email is empty', () => {
        expect(isValidRegEmail('.hello@hotmail.com')).toBe(false);
      });
  });
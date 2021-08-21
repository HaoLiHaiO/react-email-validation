import isValidRegEmail from '../isValidRegEmail';

describe('isValidRegEmail', () => {
    it('returns true when email is valid', () => {
      expect(isValidRegEmail('loremipsum@validemail.com')).toBe(true);
      expect(isValidRegEmail('lorem-ipsum@validemail.com')).toBe(true);
      expect(isValidRegEmail('loremipsum@validemail.com')).toBe(true);
    });

    it('returns false when email is invalid', () => {
        expect(isValidRegEmail('.loremipsum@validemail.com')).toBe(false);
        expect(isValidRegEmail('loremipsum@')).toBe(false);
        expect(isValidRegEmail('@validemail.com')).toBe(false);
        expect(isValidRegEmail('')).toBe(false);
      });
  });
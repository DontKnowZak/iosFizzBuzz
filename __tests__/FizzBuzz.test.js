import 'react-native';
import React from 'react';
import Play from '../Play';
import renderer from 'react-test-renderer';

describe('FizzBuzz', () => {
  it('returns fizz when given 3', () => {
    expect(Play(3)).toBe('fizz');
  });
  it('returns buzz when given 5', () => {
    expect(Play(5)).toBe('buzz');
  });
  it('returns fizzbuzz when given 15', () => {
    expect(Play(15)).toBe('fizzbuzz');
  });
  it('returns 4 when given 4', () => {
    expect(Play(4)).toBe(4);
  });
});

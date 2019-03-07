import React from 'react';
import { mount } from 'enzyme';
import RepoList from './';

/**
 * These tests are pretty naive on purpose
 */
const data = [
  {
    id: 1,
    name: 'Test',
    html_url: 'https://github.com/motleyagency/test',
    language: 'JavaScript',
  },
  {
    id: 2,
    name: 'Test 2',
    html_url: 'https://github.com/motleyagency/test2',
    language: 'Ocaml',
  },
];

let Elem = null;

beforeEach(() => {
  Elem = mount(
    <RepoList
      data={data}
      username="petetnt"
      fetchMore={jest.fn()}
      isLastPage={false}
    />,
  );
});

it('renders a title', () => {
  const title /* @TODO Get the title */ = expect(title.text()).toEqual(
    'petetnt – repos',
  );
});

it('renders a repo names', () => {
  const names /* @TODO Get the repo name */ = expect(names.length).toEqual(2);
  expect(names.at(0).text()).toEqual('Test');
  expect(names.at(1).text()).toEqual('Test 2');
});

it('renders repo names as a link', () => {
  throw new Error('test not implemented');
});

it('renders load more button if there is more to load', () => {
  const button = Elem.find(Button);

  expect(button.length).toEqual(1);
});

it('does not renders load more button if there is nothing to load', () => {
  throw new Error('test not implemented');
});

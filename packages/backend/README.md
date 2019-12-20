# Code challenge - backend

This code challenge tests your backend skills.

## Scenario

We had a super GDPR compliant server for a list of fake users, but someone deleted the implementation! Oh no! Your task is to:

1.  Read this `README`
2.  Install dependencies with `yarn` or `npm` (we usually use `yarn`)
3.  Create the server implementation with the `http` server of your choice.
4.  Make sure that the tests pass (`yarn test`)
5.  (If you are applying for a job) Submit your work to us (See [../../README.md](../../README.md)) and we will discuss it in the next interview!

### MVP

* Server runs on port 4848 (because reasons...)
* `/api/users` endpoint serves all the data under `data/data.json` with status code 200
* `/api/users/${id}` endpoint serves a single user data by ID
* `/api/users/xxx` serves 404 not found.
* All tests pass

### Hints

* The tests are done with [Jest](https://facebook.github.io/jest/) but you can use the test runner of your choice if needed.

* You'll need [a GitHub account to get the API token](https://developer.github.com/v3/auth/#basic-authentication). See [settings/tokens](https://github.com/settings/tokens).

* This project uses [our styleguide](https://github.com/motleyagency/eslint-config-motley), which might not fit 100% to your current coding style. Not to worry, we are quite flexible with it and formatting is handled by
  Prettier in _pre-commit_ phase.

### Bonus points

We use GraphQL a lot in our projects these days. Modify the server so that the data is queryable from `/graphql` endpoint
and `/graphiql` serves [GraphiQL IDE](https://github.com/graphql/graphiql) for exploring the data.

> Hint: We quite often use [Apollo](https://www.apollographql.com/) for these kinds of tasks.

#### Example query

Query:

```graphql
{
  user(id: 1) {
    name
    address {
      street
    }
  }
}
```

Result:

```json
{
  "name": "Tevin Gislason",
  "address": {
    "street": "Vilma Freeway"
  }
}
```

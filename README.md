![github-explorer](https://raw.githubusercontent.com/mouracamila/github-explorer-project/master/explanation.gif)

<h1 align="center">
GitHub Explorer
</h1>

## Introduction

This project was developed at [RocketSeat](https://rocketseat.com.br/) Bootcamp 11. Its objective was to create a UI, using [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/), to consume the [GitHub API](https://api.github.com).

## Structuring & Technologies

**API request**, uses [Axios](https://github.com/axios/axios) HTTP client.

**Navigation**, uses [React-router-dom](https://reacttraining.com/react-router/web/guides/quick-start). The application navigation takes advantage of the hooks _useRouteMatch_ (these or any hooks are available React >= 16.8).

**Tagged the components**, to work with CSS uses [Styled components](https://styled-components.com/).

**Colors**, for the hover buttons, it applies the property _shade_ from [Polished](https://polished.js.org/) library.

## Developed beyond the proposal

I implemented three new functionality:

- Delete the repository in the list, the dashboard.
- Delete all repositories in the list.
- Navigate to the repository, from the repository’s details page.

## Installation

1. Clone this Repository:

```

 $ git clone git@github.com:mouracamila/github-explorer-project.git

```

2. Installing dependencies:

```

$ yarn

```

3. Running project:

```

$ yarn dev

```

After running **yarn dev** the project, in your terminal, this message should be displayed:

```
Compiled successfully!

You can now view github-explorer-project in the browser.

Local: http://localhost:3000
```

## License

This project is under license from [MIT](https://en.wikipedia.org/wiki/MIT_License).

---

with ❤ - [MouraCamila](https://github.com/mouracamila)

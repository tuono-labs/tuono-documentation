# Contributing

##  Setup repository

- Clone the repo

- Install tuono

  ```sh
  cargo install tuono
  ```

- Install JS dependencies

  ```sh
  pnpm i
  ```

- Run dev server

  ```sh
  tuono dev
  ```

## Test production site

```sh
tuono build --static
cargo run --release
```

## Update `tuono` version in `apps/documentation`

Update `tuono` version in the following files

- `apps/documentation/Cargo.toml`
- `apps/documentation/package.json`

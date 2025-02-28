# Contributing

##  Setup repository

1. Clone the repo

2. Install tuono

   ```sh
   cargo install tuono
   ```

3. Install JS dependencies

   ```sh
   pnpm i
   ```

4. Ensure that installation has been completed successfully

   ```sh
   pnpm run check-all
   ```

5. Run dev server

   ```sh
   tuono dev
   ```

## Test production site

```sh
tuono build --static
cargo run --release
```

## Creating a Pull Request

Once you've completed and tested your code, you can create a PR to merge your changes.

Refer to [Tuono Contributing > Pull request](https://tuono.dev/documentation/contributing/pull-requests) for more information on how to open a PR.

## Update `tuono` version in `apps/documentation`

Update `tuono` version in the following files

- `apps/documentation/Cargo.toml`
- `apps/documentation/package.json`

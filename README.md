# setup-centraldogma

This GitHub Action is deprecated. Please use https://github.com/odanado/setup-release instead.


GitHub Action to setup [centraldogma-go](https://github.com/line/centraldogma-go).

## Usage

### Example

```yaml
# .github/workflows/release.yml
on:
  push:
    branches:
      - main
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: odanado/setup-centraldogma@v1

      - run: dogma --help
```

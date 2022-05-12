# Python Game

Built to support the Arcade Platfomer article at https://realpython.com/platformer-python-arcade/

Assets downloaded from:

- Tileset: https://opengameart.org/content/platformer-pack-redux-360-assets
- Sounds: https://opengameart.org/content/63-digital-sound-effects-lasers-phasers-space-etc and https://opengameart.org/content/51-ui-sound-effects-buttons-switches-and-clicks
- Credit for all assets: https://www.kenney.nl. Donations are suggested.

Tilemaps created with https://www.mapeditor.org/, donation suggested.

# Setup for development:

- Setup a python 3.x venv (usually in `.venv`)
  - You can run `./scripts/create-venv.sh` to generate one
- `pip3 install --upgrade pip`
- Install pip-tools `pip3 install pip-tools`
- Update dev requirements: `pip-compile --output-file=requirements.dev.txt requirements.dev.in --upgrade`
- Update requirements: `pip-compile --output-file=requirements.txt requirements.in --upgrade`
- Install dev requirements `pip3 install -r requirements.dev.txt`
- Install requirements `pip3 install -r requirements.txt`
- `pre-commit install`

## Update versions

`pip-compile --output-file=requirements.dev.txt requirements.dev.in --upgrade`

# Run `pre-commit` locally.

`pre-commit run --all-files`

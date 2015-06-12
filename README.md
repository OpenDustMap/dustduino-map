# Dustduino-map

Add, track, and visualize air quality sensor data.

## About

The Dustduino-map is a web tool designed to be deployed to track and visualize air quality data generated by arduino-based air quality sensors. The site is based on the dustduino-server backend for managing sensors and data. Users can create new sensors, manage information about existing sensors, and visualize historical data.

Dustduino-map is a part of OpenDustMap and the Dustduino project which connects makers and electronics hackers with civic-minded citizens and journalists to create better data on air quality.

Bug reports, suggestions, and pull requests welcome. See CONTRIBUTING.md.

## Related repositories

  - dustduino-server

If you are looking for how to setup a DustDuino with Adruino Uno board, read this wiki.

## Installation

To get started:

- `npm install`
- `bower install`
- `grunt serve -w`

## Deployment

This project is set up with [Travis](https://travis-ci.org/) deploy scripts already included which will deploy to `gh-pages`. To utilize these, you will need to enable the repo on the Travis system and include the following two environment variables.

- **GH_REF** - the URL of the repo, similar to `github.com/developmentseed/dustduino-map.git`
- **GH_TOKEN** - a GitHub personal access token available from https://github.com/settings/tokens


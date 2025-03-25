#!/usr/bin/env bash

if command -v podman &>/dev/null; then
  CMD="podman"
elif command -v docker &>/dev/null; then
  CMD="docker"
else
  echo "Error: Neither Podman or Docker is installed."
  exit 1
fi

$CMD run --rm --network host --volume="$PWD:/srv/jekyll" -it docker.io/ruby bash -c "gem install bundler jekyll && cd /srv/jekyll && bundle install && bundle exec jekyll serve --host 0.0.0.0 && bash"

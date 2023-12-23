@app
architect-issue-768

@static
prefix /
folder ./src/public
spa true

@ws
a
b

@aws
# profile default
region us-west-2
architecture arm64
runtime typescript

@plugins
architect/plugin-typescript

@typescript
base-runtime nodejs20.x

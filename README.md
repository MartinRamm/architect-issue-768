This is a minimal reproducible example (ok...except maybe typescript) of [architect issue #768](https://github.com/architect/architect/issues/768).

# Instructions
1. Run `pnpm i && ./node_modules/.bin/arc sandbox`.
1. Open `http://localhost:3333` in the browser of your choice
1. Click on `Test`. The message log will show `"response from a"`.
1. Deploy to AWS: Run ` AWS_ACCESS_KEY_ID='[your key id]' AWS_SECRET_ACCESS_KEY='[your access key]' ./node_modules/.bin/arc deploy --production`
1. Open `./src/public/index.html` and replace `undefined` on line 18 with the `WS` url outputted by the above command
1. Repeat the `Deploy to AWS` command
1. Open the `[  Uploaded  ]` url outputted by the first `Deploy to AWS` command
1. Click on `Test`. The message log will show `"response from b"`.

As you see, the sandbox routes the message to handler `a`, while AWS routes the message to handler `b`.

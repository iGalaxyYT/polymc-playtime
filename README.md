# ⏱️ polymc-playtime

Export your PolyMC playtime to a web server of your choice

## Setup

1. Install the package

```
npm install -g @igalaxy/polymc-playtime
OR
yarn global add @igalaxy/polymc-playtime
```

2. Find the location of the polymc-playtime executable by doing `where polymc-playtime` on Windows or `which polymc-playtime` on macOS/Linux
3. Find the location of the Node.js executable by doing `where node` on Windows or `which node` on macOS/Linux
3. Open Settings > Custom Commands in PolyMC
4. Set the Post-exit command to one of the following:
   - `/usr/bin/env <node path> <polymc-playtime path> --path="$INST_DIR" --method=lanyard --lanyard-id="your-discord-user-id" --auth="your-lanyard-token"`
   - `/usr/bin/env <node path> <polymc-playtime path> --path="$INST_DIR" --method=endpoint --endpoint="https://your.custom/endpoint" --auth="your-auth-secret"`

If using the endpoint method, the auth secret can be anything of your choice. It is simply used so you can authenticate the request serverside.

With the Lanyard method, the playtime is stored in [Lanyard](https://github.com/Phineas/Lanyard) KV under the key `polymc_playtime`.

Apologies for the janky setup, for some reason PolyMC custom commands don't respect the PATH env variable, so exact executable locations are needed.

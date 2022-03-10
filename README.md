# ⏱️ polymc-playtime

Export your PolyMC playtime to a web server of your choice

## Setup

1. Install the package

```
npm install -g @igalaxy/polymc-playtime
OR
yarn global add @igalaxy/polymc-playtime
```

2. Open Settings > Custom Commands in PolyMC
3. Set the Post-exit command to one of the following:
   - `polymc-playtime --method=lanyard --lanyard-id="your-discord-user-id" --auth="your-lanyard-token"`
   - `polymc-playtime --method=endpoint --endpoint="https://your.custom/endpoint" --auth="your-auth-secret"`

If using the endpoint method, the auth secret can be anything of your choice. It is simply used so you can authenticate the request serverside.

With the Lanyard method, the playtime is stored in [Lanyard](https://github.com/Phineas/Lanyard) KV under the key `polymc_playtime`.

Custom Commands in PolyMC appear to be broken for me on Windows, but I've tested this on macOS and it works fine. In theory this should work fine in a Linux environment as well.

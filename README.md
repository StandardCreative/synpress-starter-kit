# Synpress Starter Kit

Synpress is quite useful for testing dApps but let's face it, it's a real pain to get working: as of now, Jan 2023, the documentation is not very user-friendly and the recent versions (2.3.3-3.0.5) suffer from various problems with Metamask pop-ups. 

There are really well-written tutorials out there with great explanations, but unfortunately they are outdated. 

This is where Synpress Starter Kit comes in. It's designed to get you a basic working setup with a minimum of effort. It uses Synpress 2.4.1, which seems to be the latest version where Metamask pop-ups reliably show up.

## Usage

1. Clone this repo
2. `npm install`
3. Create `.env` file using the template `.env.SET_ME_UP` (it contains further guidance)
4. Perform the Quick Fix described below.
5. `npm run test` to run a sample test on https://app.uniswap.org/ (it will only connect the wallet)
6. To write your own tests for your site, modify the file `tests/e2e/specs/sampletest.spec.js`

### Quick Fix

a. Open file "synpress-starter-kit\node_modules\@synthetixio\synpress\commands\metamask.js" 
b. Comment out lines 654 through 680, more precisely:
  - Replace line 654:
```javascript
  } else if (getNetwork().isTestnet) {
```
with

```javascript
  } // else if (getNetwork().isTestnet) {
```

- Comment out all subsequent lines until line 680 (inclusive)

## Further Discussion 

What exactly is the issue the Quick Fix is combatting? When Synpress (2.4.1) confirms a tx it - for whatever reason - is programmed to always click the up arrow on the custom gas fee. The gas fee starts out around 2e-8 on Goerli, but clicking that arrow causes it to increase by 1, thus making it 1.00000002!

This clicking gas up arrow maybe makes sense for some version of Metamask, but not the one that Synpress 2.4.1 installs by default.

The Quick Fix simply changes the library code so it doesn't do that. But probably the cleanest way to proceed would be to try out a bunch of versions of Metamask to determine the one the dev who put in that code was using. One drawback of the Quick Fix is that it disables the capability to set a gas limit programmatically in Synpress.

Note that 2.4.1 is not the latest version. The latest one, as of the time of writing this note, is 3.0.5. However, this latest version doesn't seem to play with its default version of Metamask: the confirmation pop-up never shows up when initiating a transaction.


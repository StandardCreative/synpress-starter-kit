# Synpress Starter Kit

Synpress is quite useful for testing dApps but let's face it, it's a real pain to get working: as of now, Jan 2023, the documentation is not very user-friendly and the most recent versions (3.0.0-3.0.5) have some problems with Metamask pop-ups. 

There are really well-written tutorials out there with great explanations, but unfortunately they are outdated. 

This is where Synpress Starter Kit comes in. It's designed to get you a basic working setup with the absolute minimum of effort.

## Usage

1. Clone this repo
2. `npm install`
3. Create `.env` file using the template `.env.SET_ME_UP` (it contains further guidance)
4. `npm run test` to run a sample test on https://app.uniswap.org/ (it will only connect the wallet)
5. To write your own tests for your site, modify the file `tests/e2e/specs/sampletest.spec.js`

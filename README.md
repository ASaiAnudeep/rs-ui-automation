# rs-ui-automation

This framework provides a structured approach to test the RudderStack UI using WebdriverIO for browser automation and CucumberJS for test case definition and execution.

## Getting Started

### Prerequisites:

- Node.js and npm (or yarn) installed
- WebdriverIO browser drivers for your target browsers
- Basic knowledge of JavaScript, CucumberJS, and WebdriverIO

### Installation:

- Install dependencies: `npm install`

### Configure RudderStack API Credentials:

- Create a .env file in the project root and add your RudderStack user credentials:

```env
RS_EMAIL="<email>"
RS_PASSWORD="<password>"
```

## Run Tests:

- Execute the test suite: `npm test`
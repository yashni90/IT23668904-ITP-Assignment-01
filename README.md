# IT23668904 - Singlish Text Conversion Test Suite

A comprehensive Playwright test automation project for validating Singlish (phonetic Sinhala) to Sinhala script conversion functionality on the Swift Translator platform.

## Project Overview

This project contains automated test cases for the Swift Translator application (https://www.swifttranslator.com/) that converts Singlish text (phonetic representation of Sinhala language) into proper Sinhala Unicode script.

### Test Categories

- **Positive Tests** (`positive.spec.js`): Tests for correctly formatted Singlish inputs with expected proper Sinhala outputs
- **Negative Tests** (`negative.spec.js`): Tests for edge cases, multiple spaces, dates, currencies, brand names, and complex formatting
- **UI Tests** (`ui.spec.js`): Real-time UI verification tests on the Swift Translator website
- **Example Tests** (`example.spec.js`): Basic Playwright example tests

## Technology Stack

- **Test Framework**: Playwright 1.58.0
- **Language**: JavaScript (Node.js)
- **Browser**: Chromium (configurable for multiple browsers)
- **Reporter**: HTML report generation

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd c:\Users\USER\Desktop\it23668904
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will install:
   - `@playwright/test` - Playwright testing framework
   - `@types/node` - TypeScript types for Node.js

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (with browser visible)
```bash
npm run test:headed
```

### Run tests with UI Mode (interactive test runner)
```bash
npm run test:ui
```

### Run tests in debug mode
```bash
npm run test:debug
```

## Project Structure

```
it23668904/
├── tests/
│   ├── example.spec.js          # Basic Playwright examples
│   ├── positive.spec.js         # Positive test scenarios
│   ├── negative.spec.js         # Negative/edge case tests
│   └── ui.spec.js              # UI interaction tests
├── screenshots/                 # Screenshots captured during test runs
├── test-results/               # Detailed test execution results
├── playwright-report/          # HTML test report
├── package.json                # Project configuration and dependencies
├── playwright.config.js        # Playwright test configuration
└── README.md                   # This file
```

## Test Scenarios

### Positive Test Cases (positive.spec.js)

Validates correct conversions for:
- Simple sentences (e.g., "api bath kanavaa." → "අපි බත් කනවා.")
- Compound sentences with conjunctions
- Complex sentences with conditional clauses
- Interrogative forms (questions)
- Imperative forms (commands)
- Positive and negative forms
- Greetings
- Polite requests and responses
- Informal phrasing
- Day-to-day expressions
- Multi-word expressions and collocations
- Grammatical variations and tenses
- Conjunction variations
- Prepositional phrases
- Adverbial expressions
- And more...

### Negative Test Cases (negative.spec.js)

Tests edge cases and complex scenarios:
- Present tense variations
- Future tense variations
- Negation patterns
- Technical/brand terms mixed with Sinhala (e.g., LinkedIn, WhatsApp)
- Currency formats (e.g., Rs.120,0000)
- Date and time formats
- Units of measurement
- Multiple consecutive spaces
- Special characters and punctuation
- Complex technical sentences

### UI Test Cases (ui.spec.js)

Interactive tests against live application:
- Input field interaction
- Real-time text conversion
- Output verification
- Screenshot capture for validation
- DOM element locators validation

## Configuration (playwright.config.js)

Key configurations:
- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled (fullyParallel: true)
- **Retry Policy**: 2 retries on CI, 0 on local
- **Reporter**: HTML format
- **Trace Recording**: On first retry
- **Browser**: Chromium (Desktop Chrome)

## Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

The report includes:
- Test pass/fail status
- Execution time
- Screenshots (when captured)
- Detailed error messages
- Trace information for failed tests

## Screenshots

Test screenshots are automatically saved to the `screenshots/` directory during UI test runs for evidence and debugging purposes.

## Development Workflow

1. **Add new test case**: Edit the respective `.spec.js` file and add a new scenario object to the `scenarios` array
2. **Run specific tests**: Use `npm run test:ui` for interactive debugging
3. **Check results**: View `playwright-report/index.html` after test completion
4. **Debug failures**: Use `npm run test:debug` to step through failing tests

## Example: Adding a New Test Case

To add a new positive test case, edit `positive.spec.js`:

```javascript
{
  id: 'Pos_Fun_XXXX',
  name: 'Description of test',
  input: 'singlish input text here',
  expected: 'expected sinhala output here'
}
```

## CI/CD Integration

The project is configured for CI/CD environments with:
- Disabled parallel execution on CI
- 2 automatic retries on CI failures
- Build failure on `test.only` detection
- Trace collection for debugging

## Troubleshooting

### Tests fail to run
- Ensure Node.js and npm are installed: `node --version && npm --version`
- Reinstall dependencies: `rm -r node_modules && npm install`

### Connection errors
- Verify internet connection for UI tests (they connect to swifttranslator.com)
- Check if the website is accessible

### Timeout errors
- Increase timeout in playwright.config.js if needed
- Check network speed and system performance

## License

ISC

## Author

IT23668904 Project

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Test Reporters](https://playwright.dev/docs/test-reporters)

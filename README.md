# datetime-formatter-js

## Introducing our highly efficient time and date formatter, crafted with core JavaScript for optimal performance

Welcome to the datetime-formatter-js package documentation!

This package provides a set of functions for formatting and manipulating dates and times in JavaScript.

## Installation

To install the package, simply run the following command in your project's root directory:

```sh
npm install datetime-formatter-js
```

### or

```sh
yarn add datetime-formatter-js
```

## Usage

Here's an example of how to use the package:

```sh
import datetimeFormatter from "datetime-formatter-js";

datetimeFormatter.monthsName
// ["January", "February", "March", ...]

datetimeFormatter.daysName
// ['Sunday', 'Monday', 'Tuesday'...]

datetimeFormatter.getTimeAgo(1674926548237, true)
// 4m ago

datetimeFormatter.dateFormatter(Date.now(), "-")
// 28-1-2023
```

## API

## getTimeAgo()

- **getTimeAgo**: The package includes a `getTimeAgo()` function which takes a timestamp (e.g. by default sort is false) as input and returns a string indicating how long ago that timestamp was, e.g. "5 minutes ago" or "3 days ago".

## formatAMPM()

- **formatAMPM**: function to convert a given timestamp into a time string with "am" or "pm" appended to the end

## dateFormatter()

**Transform your date into various customizable formats with our dateFormatter() function. Simply pass in a date and the desired format type, including options such as:**

- **'-'**: for a format of '28-1-2023'
- **'/'**: for a format of '28/1/2023'
- **'sortMonth'**: for a format of 'Jan 28'
- **'fullMonth'**: for a format of 'January 28'
- **'sortMonthAndYear'**: for a format of 'Jan 28, 2023'
- **'fullMonthAndYear'**: for a format of 'January 28, 2023'"

## Support

If you have any issues or questions, please feel free to open an issue on the package's GitHub repository or contact me directly.

Thank you for using datetime-formatter-js!

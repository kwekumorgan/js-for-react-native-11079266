# js-for-react-native-11079266
ID: 11079266

# Array Manipulation Functions

This project includes two JavaScript functions designed for array manipulation. The `processArray` function processes an array of numbers, squaring even numbers and tripling odd numbers. The `formatArrayStrings` function formats an array of strings, converting them to uppercase or lowercase based on the processed numbers' parity.
 

# TASK 1

### processArray

**Purpose**: Processes an array of numbers by squaring even numbers and tripling odd numbers.

**Arguments**:
- `number`: An array of numbers to be processed.

**Returns**: A new array with processed numbers.

# TASK 2

### formatArrayStrings

**Purpose**: Formats an array of strings to uppercase or lowercase based on the parity of corresponding processed numbers.

**Arguments**:
- `processedNumber`: An array of processed numbers from `processArray`.
- `word`: An array of strings to be formatted.

**Returns**: A new array with formatted strings.

## Usage

1. Call `processArray` with an array of numbers.
2. Use the output from `processArray` as the first argument for `formatArrayStrings`.
3. Call `formatArrayStrings` with the processed numbers and an array of strings.




# TASK 3
# User Profiles Creation Function

This JavaScript function, `createUserProfiles`, takes two arrays as inputs: `names` and `modifiedName`. It processes these arrays to create an array of user profile objects.

## Functionality

- **Input**: Two arrays of strings.
  - `names`: An array of original names.
  - `modifiedName`: An array of modified names, corresponding to the original names.

- **Process**: The function iterates over the `names` array, creating a new object for each name with the following properties:
  - `id`: A unique identifier starting from 1.
  - `OriginalName`: The name from the `names` array.
  - `modifiedName`: The corresponding name from the `modifiedName` array.

- **Output**: An array of user profile objects.

## Usage

To use this function, simply call it with two arrays of equal length containing the original and modified names:

let originalNames = ['Alice', 'Bob'];
let modifiedNames = ['Ally', 'Rob'];
let userProfiles = createUserProfiles(originalNames, modifiedNames);

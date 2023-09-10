/** Command-line options */
class OptionDefinition {
    // Implementation
}

/**
 * An OptionList section includes a table that presents the provided option definitions.
 * 
 * @property header {string} - The section header
 * @property optionList {OptionDefinition[]} - An array of {@link https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md|option definition} objects. 
 * @property {string|string[]} [group] - If specified, only options from this particular group will be printed. {@link https://github.com/75lb/command-line-usage/blob/master/example/groups.js|Example}.
 * @property {string|string[]} [hide] - The names of one of more option definitions to hide from the option list. {@link https://github.com/75lb/command-line-usage/blob/master/example/hide.js|Example}.
 * @property {boolean} [reverseNameOrder=false] - By default, this property is set to false. When set to true, the option alias will be shown after the name, such as --verbose, -v, instead of the default order -v, --verbose.
 * @property {object} [tableOptions] - An options object suitable for passing into {@link https://github.com/75lb/table-layout#table-|table-layout}, providing customization options for the option list table. You can refer to an {@link https://github.com/75lb/command-line-usage/blob/master/example/option-list-options.js|example} here.
 * 
 * @example
 * Example 1: Demonstrating a simple option.
 * const section = {
 *   header: 'Options',
 *   optionList: [
 *     {
 *       name: 'help',
 *       alias: 'h',
 *       description: 'Display this usage guide.'
 *     }
 *   ]
 * } 
 * 
 * Example 2: Demonstrating various types of options in an OptionList section.
 * const section = {
 *   header: 'Options',
 *   optionList: [
 *     {
 *       name: 'help',
 *       alias: 'h',
 *       description: 'Display this usage guide.'
 *     },
 *     {
 *       name: 'src',
 *       description: 'The input files to process',
 *       multiple: true,
 *       defaultOption: true,
 *       typeLabel: '{underline file} ...'
 *     },
 *     {
 *       name: 'timeout',
 *       description: 'Timeout value in ms.',
 *       alias: 't',
 *       typeLabel: '{underline ms}'
 *     }
 *   ]
 * } 
 * 
 * Example: Demonstrating various types of options in an OptionList section.
 * const section = {
 *   header: 'Options',
 *   optionList: [
 *     {
 *       name: 'help',
 *       alias: 'h',
 *       description: 'Display this usage guide.'
 *     },
 *     {
 *       name: 'src',
 *       description: 'The input files to process',
 *       multiple: true,
 *       defaultOption: true,
 *       typeLabel: '{underline file} ...'
 *     },
 *     {
 *       name: 'timeout',
 *       description: 'Timeout value in ms.',
 *       alias: 't',
 *       typeLabel: '{underline ms}'
 *     }
 *   ]
 * } 
 * 
 * 
 */
class OptionListSection extends Section {
    // Implementation
}
  
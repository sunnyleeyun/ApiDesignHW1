/** Command-line options */
class OptionDefinition {
    // Implementation
}

/**
 * An OptionList section includes a table that presents the provided option definitions.
 * 
 * @property header {string} - The section header
 * @property optionList {OptionDefinition[]} - An array of {@link https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md|option definition} objects. 
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
 * Example 2: Demonstrating the usage of a `tableOptions` OptionList section.
 * const section3 = {
 *   header: 'Options',
 *   optionList: optionDefinitions,
 *   tableOptions: {
 *     columns: [
 *       {
 *         name: 'option',
 *         noWrap: true,
 *         padding: { left: '🔥  ', right: '' },
 *         width: 30
 *       },
 *       {
 *         name: 'description',
 *         width: 50,
 *         padding: { left: '', right: '   🔥' }
 *       }
 *     ]
 *   }
 * }
 * 
 *   
 */
class OptionListSection extends Section {
    // Implementation
}
  
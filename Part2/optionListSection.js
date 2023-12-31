/** Command-line options */
class OptionDefinition {
    // Implementation
}

/**
 * An OptionList section includes a table that presents the provided option definitions.
 * 
 * @property [header] {string} - The section header. By default, the style of the output is bold and underlined, but this can be overridden with ansi formatting.
 * @property optionList {OptionDefinition[]} - The list of options to be displayed. An array of {@link https://github.com/75lb/command-line-args/blob/master/doc/option-definition.md|option definition} objects. In addition to the option definition properties, two more properties can be included:
 *  <ul>
 *   <li> description (string): A description of the option.
 *   <li> typeLabel   (string): A custom type label to replace the default type string. More descriptive type labels like `ms`, `file`, `command`, etc., are often more useful than the default `string` type.
 * </ul>
 * @property {string|string[]} [superGroup] - Options to be grouped. If specified, only options from this particular group will be printed. The "super" prefix is used to differentiate from "group" at a lower hierarchy.
 * @property {string|string[]} [hide] - Options to be hidden. Provide the names of one or more option definitions to hide them from the option list.
 * @property {boolean} [reverseNameOrder] - Reverse the order of option name and alias. By default, this property is set to false. When set to true, the option alias will be displayed after the name, e.g., `--verbose, -v` instead of `-v, --verbose`).
 * @property {object} [tableOptions] - The style of the option list output. This is an options object suitable for passing into {@link https://github.com/75lb/table-layout#table-|table-layout}, providing customization options for the option list table.
 * 
 * @example
 * Example 1: Demonstrating a simple OptionList section.
 * const section1 = {
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
 * @example
 * Example 2: Illustrating the usage of a `superGroup` in an OptionList section.
 * const section2 = {
 *   header: 'Main options',
 *   optionList: [
 *     {
 *       name: 'help',
 *       description: 'Display this usage guide.',
 *       alias: 'h',
 *       type: Boolean,
 *       group: 'main'
 *     },
 *     {
 *       name: 'src',
 *       description: 'The input files to process',
 *       multiple: true,
 *       defaultOption: true,
 *       typeLabel: '{underline file} ...',
 *       group: 'input'
 *     },
 *     {
 *       name: 'timeout',
 *       description: 'Timeout value in ms',
 *       alias: 't',
 *       typeLabel: 'ms',
 *       group: 'main'
 *     }
 *   ],
 *   superGroup: ['main', 'input']
 * }
 * 
 * @example
 * Example 3: Illustrating the usage of a `hide` in an OptionList section.
 * const section3 = {
 *   header: 'Main options',
 *   hide: ['src'],
 *   optionList: [
 *     {
 *       name: 'help',
 *       description: 'Display this usage guide.',
 *       alias: 'h',
 *       type: Boolean
 *     },
 *     {
 *       name: 'src',
 *       description: 'THIS SHOULD BE HIDDEN.',
 *       type: String,
 *       multiple: true,
 *       defaultOption: true,
 *       typeLabel: '{underline file} ...'
 *     }
 *   ]
 * }
 * 
 * @example
 * Example 4: Illustrating the usage of a `reverseNameOrder` in an OptionList section.
 * const section4 = {
 *   header: 'Options',
 *   optionList: [
 *     {
 *       name: 'help',
 *       description: 'Display this usage guide.',
 *       alias: 'h',
 *       type: Boolean
 *     }
 *   ],
 *   reverseNameOrder: true
 * } * 
 * 
 * @example
 * Example 5: Demonstrating the usage of a `tableOptions` OptionList section.
 * const section5 = {
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
  
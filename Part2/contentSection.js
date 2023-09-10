/**
 * A Content section comprises a header and one or more lines of content.
 * 
 * @property header {string} - The section header
 * @property content {string|string[]|object[]} - Overloaded property, accepting data in one of four formats:  
 * <ol style="type: 1;">
 * <li> A single string (one line of text)
 * <li> An array of strings (multiple lines of text)
 * <li> An array of objects (recordset-style data). In this case, the data will be rendered in table format. The property names of each object are not important, so long as they are consistent throughout the array. 
 * <li> An object with two properties - `data` and `options`. In this case, the data and options will be passed directly to the underlying {@link https://github.com/75lb/table-layout|table layout} module for rendering. 
 * @property {boolean} [raw=false] - By default, this property is set to false. When set to true, it prevents indentation and wrapping, making it particularly useful for banners.
 * 
 * 
 * @example
 * Example 1: Demonstrating a simple string of content.
 * const section1 = {
 *   header: 'A typical app',
 *   content: 'Generates something {rgb(255,200,0).italic very {underline.bgRed important}}.'
 * }
 * 
 * Example 2: An array of strings is interpreted as lines, to be joined by the system newline character.
 * const section2 = {
 *   header: 'A typical app',
 *   content: [
 *     { colA: 'First row, first column.', colB: 'First row, second column.'},
 *     { colA: 'Second row, first column.', colB: 'Second row, second column.'}
 *   ]
 * }
 * 
 * Example 3: An object with `data` and `options` properties will be passed directly to the underlying [table layout](https://github.com/75lb/table-layout) module for rendering.
 * const section3 = {
 *   header: 'A typical app',
 *   content: {
 *     data: [
 *      { colA: 'First row, first column.', colB: 'First row, second column.'},
 *      { colA: 'Second row, first column.', colB: 'Second row, second column.'}
 *     ],
 *     options: {
 *       maxWidth: 60
 *     }
 *   }
 * } 
 * 
 * Example 4: Illustrating a basic content string with the raw property set to true.
 * const section4 = {
 *   header: 'A typical app',
 *   content: 'Generates something {rgb(255,200,0).italic very {underline.bgRed important}}.',
 *   raw: true
 * }
 */
class ContentSection extends Section {
    // Implementation
}


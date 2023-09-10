

/**
 * @module command-line-usage
 * @description A simple, data-driven module for creating a usage guide. 
 * <p>This is the top-level module exported by the 75Pound JavaScript SDK. In a CommonJS environment, it will be the default export of the <code>command-line-usage</code> package.
 * 
 * <h2> Synopsis </h2>
 * A usage guide is created by first defining an arbitrary number of sections, 
 * e.g. a description section, synopsis, option list, examples, footer, etc.
 * Each section has an optional header, some content, and must be of type content or optionList.
 * This section data is passed to <code>commandLineUsage()</code> which returns a usage guide.
 * 
 * <br> <br>
 * Inline ansi formatting can be used anywhere within section content using 
 * chalk template literal syntax.
 * 
 * <br> <br>
 * For example, this script:
 * <pre><code>
 * import commandLineUsage from 'command-line-usage';

 * const sections = [
 *   {
 *     header: 'A typical app',
 *     content: 'Generates something {italic very} important.'
 *   },
 *   {
 *     header: 'Options',
 *     optionList: [
 *       {
 *         name: 'input',
 *         typeLabel: '{underline file}',
 *         description: 'The input to process.'
 *       },
 *       {
 *         name: 'help',
 *         description: 'Print this usage guide.'
 *       }
 *     ]
 *   }
 * ];
 * const usage = commandLineUsage(sections);
 * console.log(usage);
 * </code></pre>
 * 
 * <h4>Outputs this guide:</h4>
 * <img src="https://raw.githubusercontent.com/75lb/command-line-usage/master/example/screens/synopsis.png" />
 * 
 * 
 * <h2> Some examples </h2>
 * <h3> Typical </h3>
 * A fairly typical usage guide with three sections - description, option list and footer.
 * 
 * <pre><code>
 * const commandLineUsage = require('command-line-usage');
 * 
 * const usage = commandLineUsage([
 *   {
 *     header: 'A typical app',
 *     content: 'Generates something {italic very} important. This is a rather long, but ultimately 
 *               inconsequential description intended solely to demonstrate description appearance.'
 *   },
 *   {
 *     header: 'Options',
 *     optionList: [
 *       {
 *         name: 'help',
 *         description: 'Display this usage guide.',
 *         alias: 'h',
 *         type: Boolean
 *       },
 *       {
 *         name: 'src',
 *         description: 'The input files to process. This is some additional text existing solely 
 *                       to demonstrate word-wrapping, nothing more, nothing less. And nothing in
 *                       between.',
 *         type: String,
 *         multiple: true,
 *         defaultOption: true,
 *         typeLabel: '{underline file} ...'
 *       },
 *       {
 *         name: 'timeout',
 *         description: 'Timeout value in ms.',
 *         alias: 't',
 *         type: Number,
 *         typeLabel: '{underline ms}'
 *       }
 *     ]
 *   },
 *   {
 *     content: 'Project home: {underline https://github.com/me/example}'
 *   }
 * ]);
 * 
 * console.log(usage);
 * </code></pre>
 * 
 * <img src="https://raw.githubusercontent.com/75lb/command-line-usage/master/example/screens/simple.png" />
 * 
 * <h3>Banners</h3>
 * A banner is created by adding the <code>raw: true</code> property to your content. This flag disables any formatting on the content, displaying it raw as supplied.
 * 
 * <h4>Header</h4>
 * Demonstrates a banner at the top.
 * 
 * <pre><code>
 * const chalk = require('chalk');
 * const getUsage = require('command-line-usage');
 * const header =
 *   `██▀███  ▓█████ ▓█████▄  ██▀███   █    ██  ███▄ ▄███▓
 * ▓██ ▒ ██▒▓█   ▀ ▒██▀ ██▌▓██ ▒ ██▒ ██  ▓██▒▓██▒▀█▀ ██▒
 * ▓██ ░▄█ ▒▒███   ░██   █▌▓██ ░▄█ ▒▓██  ▒██░▓██    ▓██░
 * ▒██▀▀█▄  ▒▓█  ▄ ░▓█▄   ▌▒██▀▀█▄  ▓▓█  ░██░▒██    ▒██
 * ░██▓ ▒██▒░▒████▒░▒████▓ ░██▓ ▒██▒▒▒█████▓ ▒██▒   ░██▒
 * ░ ▒▓ ░▒▓░░░ ▒░ ░ ▒▒▓  ▒ ░ ▒▓ ░▒▓░░▒▓▒ ▒ ▒ ░ ▒░   ░  ░
 *  ░▒ ░ ▒░ ░ ░  ░ ░ ▒  ▒   ░▒ ░ ▒░░░▒░ ░ ░ ░  ░      ░
 *  ░░   ░    ░    ░ ░  ░   ░░   ░  ░░░ ░ ░ ░      ░
 *   ░        ░  ░   ░       ░        ░            ░
 *                 ░                                   `;
 *
 * const sections = [
 *   {
 *     content: chalk.red(header),
 *     raw: true
 *   },
 *   {
 *     header: 'Synopsis',
 *     content: [
 *       '$ example [{bold --timeout} {underline ms}] {bold --src} {underline file} ...',
 *       '$ example {bold --help}'
 *     ]
 *   }
 * ];
 *
 * console.log(getUsage(sections));
 * 
 * </code></pre>
 * 
 * <h4>Outputs this guide:</h4>
 * <img src="https://raw.githubusercontent.com/75lb/command-line-usage/master/example/screens/header.png" />
 * 
 * 
 * 
 * <h4>Footer</h4>
 * Demonstrates a footer banner.
 * 
 * <pre><code>
 * const getUsage = require('command-line-usage')
 * const wales = '\u001b[49m\n\u001b[48;5;231m\u001b[38;5;231m▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄▄▄▄▄▄▄▄▄\u001b[38;5;125m▄\u001b[38;5;161m▄▄▄▄\u001b[48;5;181m\u001b[38;5;125m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄▄▄▄▄▄▄\u001b[38;5;188m▄\u001b[38;5;125m▄\u001b[48;5;138m\u001b[38;5;161m▄\u001b[48;5;181m\u001b[38;5;231m▄\u001b[48;5;231m▄▄▄▄\u001b[38;5;95m▄\u001b[38;5;139m▄\u001b[48;5;145m\u001b[38;5;231m▄\u001b[48;5;231m▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄▄\u001b[38;5;125m▄\u001b[38;5;145m▄\u001b[38;5;231m▄\u001b[38;5;188m▄\u001b[48;5;161m\u001b[38;5;231m▄\u001b[38;5;145m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;161m\u001b[38;5;89m▄\u001b[48;5;59m\u001b[38;5;131m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;231m\u001b[38;5;131m▄\u001b[38;5;231m▄▄▄▄▄▄\u001b[38;5;188m▄\u001b[38;5;161m▄\u001b[48;5;125m▄▄\u001b[48;5;161m▄▄\u001b[48;5;145m\u001b[38;5;125m▄\u001b[48;5;231m▄\u001b[48;5;145m\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m▄\u001b[48;5;145m\u001b[38;5;231m▄\u001b[48;5;231m▄▄▄▄▄\u001b[38;5;161m▄\u001b[38;5;231m▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄▄▄\u001b[48;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;181m\u001b[38;5;188m▄\u001b[38;5;181m▄\u001b[48;5;145m\u001b[38;5;145m▄\u001b[48;5;132m\u001b[38;5;89m▄\u001b[48;5;131m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m▄\u001b[38;5;161m▄▄▄\u001b[48;5;188m\u001b[38;5;125m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄\u001b[38;5;161m▄\u001b[48;5;132m▄\u001b[48;5;161m▄▄▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m▄\u001b[38;5;125m▄▄▄▄\u001b[48;5;188m\u001b[38;5;231m▄\u001b[48;5;231m▄▄▄\u001b[38;5;161m▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄\u001b[38;5;145m▄\u001b[38;5;231m▄\u001b[48;5;138m▄\u001b[48;5;231m\u001b[38;5;138m▄\u001b[38;5;188m▄\u001b[38;5;231m▄▄\u001b[48;5;131m\u001b[38;5;188m▄\u001b[38;5;231m▄\u001b[48;5;231m\u001b[38;5;145m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;89m▄\u001b[48;5;161m▄▄\u001b[48;5;181m▄\u001b[48;5;231m\u001b[38;5;145m▄\u001b[38;5;231m▄▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[48;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m▄▄▄\u001b[48;5;131m\u001b[38;5;231m▄\u001b[48;5;231m▄▄▄\u001b[38;5;188m▄\u001b[48;5;161m\u001b[38;5;231m▄\u001b[38;5;145m▄\u001b[38;5;161m▄\u001b[38;5;131m▄\u001b[48;5;231m\u001b[38;5;188m▄\u001b[38;5;231m▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;138m\u001b[38;5;89m▄\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;138m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄\u001b[38;5;139m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄▄\u001b[48;5;231m▄\u001b[38;5;231m▄▄▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[48;5;125m\u001b[38;5;161m▄▄▄\u001b[38;5;125m▄\u001b[48;5;161m▄▄\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[48;5;131m\u001b[38;5;161m▄\u001b[48;5;231m\u001b[38;5;231m▄\u001b[38;5;188m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;188m▄\u001b[38;5;231m▄\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;145m\u001b[38;5;188m▄\u001b[48;5;231m\u001b[38;5;231m▄\u001b[48;5;188m▄\u001b[48;5;231m▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m▄▄▄▄▄▄▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;89m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄▄\u001b[48;5;161m\u001b[38;5;161m▄▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[38;5;88m▄\u001b[48;5;89m\u001b[38;5;125m▄\u001b[48;5;161m▄\u001b[48;5;231m\u001b[38;5;161m▄▄\u001b[48;5;188m▄\u001b[48;5;131m▄\u001b[48;5;161m▄\u001b[38;5;125m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[38;5;231m▄\u001b[48;5;145m▄\u001b[48;5;231m▄▄▄\u001b[48;5;161m▄\u001b[38;5;188m▄\u001b[48;5;125m▄\u001b[38;5;161m▄\u001b[48;5;161m▄\u001b[48;5;138m\u001b[38;5;181m▄\u001b[48;5;231m\u001b[38;5;231m▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;231m\u001b[38;5;35m▄▄▄▄▄▄\u001b[38;5;161m▄\u001b[48;5;161m\u001b[38;5;29m▄\u001b[38;5;161m▄\u001b[48;5;231m▄\u001b[38;5;35m▄▄\u001b[48;5;145m\u001b[38;5;65m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[38;5;125m▄▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄▄▄\u001b[48;5;125m\u001b[38;5;125m▄▄\u001b[48;5;161m\u001b[38;5;161m▄▄\u001b[38;5;125m▄\u001b[38;5;161m▄▄▄▄▄\u001b[38;5;125m▄\u001b[38;5;35m▄\u001b[48;5;231m▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄\u001b[48;5;95m▄\u001b[48;5;35m▄\u001b[48;5;161m▄\u001b[48;5;89m\u001b[38;5;161m▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[48;5;29m\u001b[38;5;161m▄\u001b[48;5;35m▄\u001b[48;5;125m▄▄\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[48;5;125m\u001b[38;5;89m▄\u001b[48;5;161m\u001b[38;5;125m▄▄\u001b[48;5;125m\u001b[38;5;161m▄▄\u001b[48;5;161m▄▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[38;5;161m▄▄\u001b[48;5;125m▄\u001b[48;5;161m▄\u001b[38;5;35m▄\u001b[48;5;125m▄\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄\u001b[48;5;161m\u001b[38;5;29m▄\u001b[38;5;161m▄▄\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;89m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄▄\u001b[48;5;89m\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;161m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;161m▄▄\u001b[38;5;35m▄\u001b[48;5;65m▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;29m▄\u001b[38;5;125m▄\u001b[38;5;89m▄\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;161m▄▄\u001b[48;5;35m\u001b[38;5;125m▄\u001b[38;5;65m▄\u001b[38;5;35m▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄▄\u001b[48;5;161m\u001b[38;5;65m▄\u001b[48;5;125m\u001b[38;5;35m▄\u001b[48;5;35m▄\u001b[38;5;125m▄\u001b[48;5;125m▄\u001b[48;5;161m\u001b[38;5;161m▄\u001b[38;5;29m▄\u001b[38;5;161m▄\u001b[38;5;35m▄\u001b[48;5;125m▄\u001b[48;5;131m▄\u001b[48;5;35m▄\u001b[48;5;95m▄\u001b[48;5;161m\u001b[38;5;125m▄▄\u001b[38;5;161m▄\u001b[38;5;125m▄\u001b[38;5;161m▄\u001b[48;5;35m▄▄\u001b[38;5;95m▄\u001b[38;5;35m▄▄▄▄▄\u001b[48;5;125m\u001b[38;5;59m▄\u001b[38;5;125m▄\u001b[48;5;29m\u001b[38;5;65m▄\u001b[48;5;35m\u001b[38;5;35m▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄▄▄▄▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[38;5;65m▄\u001b[48;5;65m\u001b[38;5;35m▄\u001b[48;5;35m▄\u001b[48;5;161m▄\u001b[48;5;35m▄\u001b[38;5;65m▄\u001b[38;5;89m▄\u001b[38;5;29m▄\u001b[38;5;35m▄▄\u001b[48;5;65m▄\u001b[48;5;89m\u001b[38;5;59m▄\u001b[48;5;161m\u001b[38;5;161m▄▄▄\u001b[48;5;95m\u001b[38;5;35m▄▄\u001b[48;5;29m▄\u001b[48;5;35m\u001b[38;5;59m▄\u001b[38;5;35m▄▄▄\u001b[48;5;65m\u001b[38;5;161m▄\u001b[48;5;125m▄\u001b[48;5;29m\u001b[38;5;35m▄\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄\u001b[48;5;29m\u001b[38;5;125m▄\u001b[48;5;125m\u001b[38;5;161m▄\u001b[48;5;161m\u001b[38;5;125m▄\u001b[48;5;29m\u001b[38;5;161m▄\u001b[48;5;65m▄\u001b[48;5;161m▄\u001b[38;5;125m▄\u001b[48;5;35m\u001b[38;5;29m▄\u001b[38;5;35m▄▄▄\u001b[38;5;29m▄\u001b[38;5;88m▄\u001b[38;5;125m▄\u001b[48;5;95m\u001b[38;5;161m▄\u001b[48;5;125m\u001b[38;5;125m▄\u001b[48;5;95m\u001b[38;5;161m▄\u001b[48;5;161m▄\u001b[48;5;125m\u001b[38;5;59m▄\u001b[48;5;161m\u001b[38;5;35m▄\u001b[48;5;95m▄\u001b[48;5;35m▄▄▄\u001b[38;5;95m▄\u001b[48;5;95m\u001b[38;5;125m▄\u001b[48;5;161m▄\u001b[48;5;35m\u001b[38;5;161m▄▄\u001b[48;5;161m▄▄\u001b[48;5;35m\u001b[38;5;29m▄\u001b[38;5;35m▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄▄\u001b[48;5;125m▄\u001b[48;5;161m▄\u001b[48;5;65m▄\u001b[48;5;29m▄\u001b[48;5;35m▄▄\u001b[48;5;161m▄\u001b[48;5;65m▄\u001b[48;5;35m▄▄▄\u001b[48;5;65m▄\u001b[48;5;89m▄\u001b[48;5;35m▄▄▄▄\u001b[48;5;29m▄\u001b[48;5;125m▄\u001b[48;5;89m▄\u001b[48;5;35m▄▄▄▄\u001b[48;5;95m▄\u001b[48;5;161m▄\u001b[48;5;35m▄\u001b[48;5;65m▄\u001b[48;5;35m▄▄\u001b[48;5;95m▄\u001b[48;5;131m▄\u001b[48;5;35m▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[48;5;35m▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\u001b[49m\n\u001b[39m                                                  '
 * const optionDefinitions = [
 *   {
 *     name: 'help',
 *     description: 'Display this usage guide.',
 *     alias: 'h',
 *     type: Boolean
 *   },
 *   {
 *     name: 'src',
 *     description: 'The input files to process. This is some additional text existing solely to demonstrate word-wrapping, nothing more, nothing less. And nothing in between.',
 *     type: String,
 *     multiple: true,
 *     defaultOption: true,
 *     typeLabel: '{underline file} ...'
 *   },
 *   {
 *     name: 'timeout',
 *     description: 'Timeout value in ms.',
 *     alias: 't',
 *     type: Number,
 *     typeLabel: '{underline ms}'
 *   }
 * ];
 *
 * const sections = [
 *   {
 *     header: 'A typical app',
 *     content: 'Generates something {italic very} important.'
 *   },
 *   {
 *     header: 'Synopsis',
 *     content: [
 *       '$ example [{bold --timeout} {underline ms}] {bold --src} {underline file} ...',
 *       '$ example {bold --help}'
 *     ]
 *   },
 *   {
 *     header: 'Options',
 *     optionList: optionDefinitions
 *   },
 *   {
 *     content: [
 *       '{italic This app was tested by dragons in Wales.}',
 *       '',
 *       wales
 *     ],
 *     raw: true
 *   }
 * ];
 *
 * console.log(getUsage(sections));

 * </code></pre>
 * 
 * <h4>Outputs this guide:</h4>
 * <img src="https://raw.githubusercontent.com/75lb/command-line-usage/master/example/screens/footer.png" />
 * 
 * 
 * <br> <br>
 * <h3>For more examples, you can view the {@link https://github.com/75lb/command-line-usage/blob/master/README.md|GitHub repository}.</h3>
 * 
 */



/**
 * @global
 * @param {Section|Section[]} - One or more section objects: ({@link module:command-line-usage~content} or {@link module:command-line-usage~optionList}).
 * @throws {InvalidInputError}
 * @returns {string}
 */
function commandLineUsage (sections) {
    // Implementation
    return ""
}

module.export = commandLineUsage

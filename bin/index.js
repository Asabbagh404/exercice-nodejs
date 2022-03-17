#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');

program
    .version(`test/cli ${require('../package').version}`)
    .usage('<command> [options]')

program
    .command('create')
    .description('create an document in database')
    .action((name, options) => {
        require('../lib/createData')(name, options)
    })

// output help information on unknown commands
program.on('command:*', ([cmd]) => {
    program.outputHelp()
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`))
    process.exitCode = 1
})

// add some useful info on help
program.on('--help', () => {
    console.log()
    console.log(`  Run ${chalk.cyan(`era <command> --help`)} for detailed usage of given command.`)
    console.log()
})

program.parse(process.argv)

program.commands.forEach(c => c.on('--help', () => console.log()))

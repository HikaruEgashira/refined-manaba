import program from 'commander';

program.option('-v, --view', 'View mode').option('-d, --debug', 'Debug mode');
program.parse(process.argv);

switch (program.args[0]) {
  case 'login':
    console.log('login');
    break;
  default:
    console.log(program.args[0]);
}

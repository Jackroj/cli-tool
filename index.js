import { Command } from 'commander';
import inquirer from 'inquirer';
const program = new Command();
program
    .name('Get Employee info')
    .description('Get User Info from CLI')
    .version('1.0.0');
const prompts = [
    {
        name: 'name',
        message: 'Your Name?',
        validate: function(name) {
            if (!name) {
                return "Name is required"
            }
            return true
        }
    },
    {
        name: 'email',
        message: 'Your Email?',
        validate: function(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                return "required valid email"
            }
            return true
        }
    },
    {
        name: 'role',
        message: 'Choose a role?',
        type: 'rawlist',
        choices: ['Software Developer', 'Product Manager', 'HR', 'Student'],
        default: 'Student'
    },
    {
        name: 'region',
        message: 'Choose a region?',
        type: 'rawlist', 
        choices: ['Africa', 'Asia', 'Central America\'s', 'Europe', 'Middle East', 'North America', 'Pacific', 'South America'],
        default: 'Veg'
    }
];

program.command('employee')
.description('Get employee info')
.action(async function(){
    const answers = await inquirer.prompt(prompts)
    console.log(answers) 
})
program.parse();
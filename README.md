1. npm init -y
1. npm i -D jest
1. npx jest --init
    * ✔ Would you like to use Jest when running "test" script in "package.json"? … yes
    * ✔ Would you like to use Typescript for the configuration file? … no
    * ✔ Choose the test environment that will be used for testing › node
    * ✔ Do you want Jest to add coverage reports? … yes
    * ✔ Which provider should be used to instrument code for coverage? › v8
    * ✔ Automatically clear mock calls, instances, contexts and results before every test? … yes
1. In pacage.json/scripts => "test:watch": "jest --watchAll"
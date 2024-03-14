# Build A Restful Sports Team Management API

Use your personal coding best practices to create a set of restful endpoints for managing teams and their members.

You have been provided types for Team and Player.

## Requirements
1. Define a set of endpoints for performing CRUD operations on a team.
1. Define a set of endpoints for performing CRUD operations on the members of team.
1. The endpoint that gets all teams must support filtering on team name, level, sport. using an optional query parameter named "filter".
2. When filtering on team names, any team whose name partially matches the filter value, regardless of case, should be returned.
3. A person can belong to one or more teams.
4. A team can have 0 or more Players.
5. When retrieving a list of teams you should only see get the teams name and description.
5. When retrieving a specific player you should see the names of all of their teams.
6. When retrieving a specific team you should see the full name (first and last combined) of all the team's players.
1. Write your code as if it will go to production.  Do not hack together a solution.
1. You may use 3rd party libraries for things like an ORM and testing, but you cannot use complete frameworks NestJS.
1. Use proper Typescript types.  Do not use "any", implied any or "unknown".
1. You must use 3 distinct layers; controller, service and data access.
1. Create unit tests to fully test one part of the code.  Which part is tested is up to you.
2. Make use of async/await for asynchronous calls.  Do not use then.
1. Endpoints must be implemented using proper restful standards. This includes the correct http verbs and status codes.  Do not use rpc.

## Assumptions
1. The existing types defined in this repo should not need to be modified but additional types should be crated.
1. Your machine should have sqlite3 installed by default.  While this is true for most operating systems you have to manually install it.

***Installation***

1. git clone https://github.com/vishuvishalbi/vasitum.git
2. change directory to vasitum
3. npm i
4. npm start


***Apis***

curl localhost:3000/v1/register --data "username=test&password=password"

curl localhost:3000/v1/login --data "username=test&password=password"

curl localhost:3000/v1/current -H  "Authorization: Bearer token" --data "current=1000"

curl localhost:3000/v1/next -H "Authorization: Bearer token"


curl localhost:3000/v1/current -H  "Authorization: Bearer token"

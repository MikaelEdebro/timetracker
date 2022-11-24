To access Postgres in Docker:
docker ps
docker exec -it -u postgres <CONTAINER_ID> psql

psql commands:
\c postgres = connect to database with name "postgres"
\l = list databases
\q = quit

docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya1-java/app ../../..

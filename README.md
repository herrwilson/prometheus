# one_day
docker server instance
docker run -d --name some-clickhouse-server --ulimit nofile=262144:262144 clickhouse/clickhouse-server

docker connect to instance with curl
echo "SELECT 'Hello, ClickHouse!'" | docker run -i --rm --link some-clickhouse-server:clickhouse-server curlimages/curl 'http://clickhouse-server:8123/?query=' -s --data-binary @-

stopping / removing the container
docker stop some-clickhouse-server
docker rm some-clickhouse-server

cheat sheet
https://hub.docker.com/r/clickhouse/clickhouse-server/



docker run -d --name some-clickhouse-server -p 8123:8123 -p 9000:9000 -p 9009:9009 clickhouse/clickhouse-server

START CLI
docker exec -it some-clickhouse-server clickhouse-client

SHOW DATABASES;
USE database_name;
SHOW TABLES;
DESCRIBE table_name;
SELECT * FROM table_name LIMIT 100;
DROP TABLE table_name;
TRUNCATE TABLE table_name;

Validate and Iterate: Test your solutions in real-world scenarios. Gather feedback from users and continuously refine your product to meet their needs and expectations.

Conclusion
While the field of LIDAR and photogrammetry integration is well-established, there are still many opportunities for innovation. By addressing current challenges and focusing on emerging trends, you can develop solutions that stand out and provide significant improvements over existing technologies. Whether it's enhancing real-time processing, reducing costs, or integrating additional sensors, your contributions can make a meaningful impact in this evolving industry.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


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

Improving upon existing technology or finding a unique niche within the field of LIDAR and photogrammetry integration requires innovation and addressing current limitations or gaps. Here are some areas where you could potentially make significant contributions:

Potential Areas for Innovation
Real-Time Data Processing and Visualization

Challenge: Real-time processing and visualization of large datasets from LIDAR and photogrammetry are computationally intensive.
Opportunity: Develop algorithms or software solutions that can handle real-time data streaming, processing, and rendering more efficiently. This could involve leveraging edge computing, cloud processing, or advanced GPU acceleration techniques.
Enhanced Precision and Accuracy

Challenge: Integrating LIDAR and photogrammetry data often requires post-processing to achieve high precision and accuracy.
Opportunity: Create more robust algorithms that automatically align and merge LIDAR and photogrammetry data with minimal human intervention. Machine learning and AI could be employed to improve data fusion and error correction.
Cost-Effective Solutions

Challenge: High-precision LIDAR equipment and photogrammetry setups can be expensive.
Opportunity: Design affordable, high-quality LIDAR systems or hybrid devices that small businesses, researchers, and hobbyists can use. Innovations in hardware miniaturization, open-source software, or DIY kits could make advanced 3D scanning accessible to a wider audience.
Indoor and Confined Space Mapping

Challenge: Accurate mapping of indoor environments and confined spaces is difficult due to limited GPS signals and complex geometries.
Opportunity: Develop specialized LIDAR and photogrammetry systems tailored for indoor use. This could include portable or wearable devices with enhanced SLAM (Simultaneous Localization and Mapping) capabilities.
Integration with Other Sensors

Challenge: Current systems often rely solely on optical or laser-based sensors.
Opportunity: Integrate other types of sensors (e.g., thermal, hyperspectral, sonar) with LIDAR and photogrammetry to provide richer data sets. This multi-sensor fusion can improve accuracy and provide more comprehensive environmental insights.
Automated Analysis and Feature Extraction

Challenge: Manual analysis and feature extraction from 3D models can be time-consuming.
Opportunity: Develop AI-driven software for automated analysis and feature extraction from 3D models. Applications could range from automated defect detection in construction to identifying and cataloging archaeological features.
Environmental Monitoring and Sustainability

Challenge: Continuous and large-scale environmental monitoring is necessary for addressing climate change and conservation efforts.
Opportunity: Create systems that integrate LIDAR and photogrammetry with IoT devices for continuous, real-time environmental monitoring. This could be used for tracking deforestation, urban heat islands, or coastal erosion.
User-Friendly Interfaces and Applications

Challenge: Current software solutions can be complex and require specialized knowledge.
Opportunity: Develop intuitive, user-friendly interfaces and applications for non-experts. This could include mobile apps, VR/AR interfaces, or web platforms that simplify the use of 3D scanning and modeling technologies.
Steps to Innovate
Research and Identify Gaps: Conduct thorough research to understand the current limitations and challenges in the field. Identify specific areas where improvements or innovations are needed.

Build Prototypes: Start with prototyping your ideas. Use available hardware and software tools to create initial versions of your solution. Iterate based on feedback and testing.

Leverage Emerging Technologies: Stay updated with advancements in related fields such as AI, machine learning, edge computing, and sensor technology. Integrate these technologies into your solutions to enhance their capabilities.

Collaborate with Experts: Engage with professionals and researchers in the field. Collaborations can provide valuable insights, access to resources, and opportunities for joint development.

Focus on User Experience: Ensure that your solution is not only technically advanced but also user-friendly. Simplify complex processes and make your technology accessible to a broader audience.

Validate and Iterate: Test your solutions in real-world scenarios. Gather feedback from users and continuously refine your product to meet their needs and expectations.

Conclusion
While the field of LIDAR and photogrammetry integration is well-established, there are still many opportunities for innovation. By addressing current challenges and focusing on emerging trends, you can develop solutions that stand out and provide significant improvements over existing technologies. Whether it's enhancing real-time processing, reducing costs, or integrating additional sensors, your contributions can make a meaningful impact in this evolving industry.
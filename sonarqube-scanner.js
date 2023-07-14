const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'https://sonarqube.betterpw.live/',
    token: 'sqa_f4882b06efd80e530933bd9e5bc93fb1823bd046',
    options: {
      'sonar.projectName': 'ansh-mui-pagination-scan',
      'sonar.projectDescription': 'Ansh MUI Pagination Scan',
      'sonar.projectVersion': '1.0.0',
      'sonar.projectKey': 'ansh-mui-pagination-scan',
      // 'sonar.tests': 'test',
      'sonar.token': 'sqa_f4882b06efd80e530933bd9e5bc93fb1823bd046',
      'sonar.sources': './src',
    },
  },
  () => {
    console.log('Finished with Sonarqube Scanning');
    process.exit();
  }
);

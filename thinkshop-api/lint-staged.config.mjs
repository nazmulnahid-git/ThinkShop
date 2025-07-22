import baseConfig from '../../lint-staged.config.mjs';

export default {
  ...baseConfig,
  '*.ts': ['eslint --fix --cache'],
};
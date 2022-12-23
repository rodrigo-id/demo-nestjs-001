import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'configuration.yaml';

export default () => {
  console.log('THE DIR IS');
  console.log(__dirname, YAML_CONFIG_FILENAME);
  return yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;
};

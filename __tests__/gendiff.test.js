import fs from 'fs';
import path from 'path';
import genDiff from '../src';

describe('genDiff', () => {
  const pathToJSON1 = '__tests__/__fixtures__/testBefore.json';
  const pathToJSON2 = '__tests__/__fixtures__/testAfter.json';
  const pathToYml1 = '__tests__/__fixtures__/testBefore.yml';
  const pathTOYml2 = '__tests__/__fixtures__/testAfter.yml';
  const pathToIni1 = '__tests__/__fixtures__/testBefore.ini';
  const pathToIni2 = '__tests__/__fixtures__/testAfter.ini';
  const pathToJSONTree1 = '__tests__/__fixtures__/testBeforeTree.json';
  const pathToJSONTree2 = '__tests__/__fixtures__/testAfterTree.json';
  const pathToResult = '__tests__/__fixtures__/result';
  const pathToResultTree = '__tests__/__fixtures__/resultTree';
  const pathToIniTree1 = '__tests__/__fixtures__/testBeforeTree.ini';
  const pathToIniTree2 = '__tests__/__fixtures__/testAfterTree.ini';
  const pathToYmlTree1 = '__tests__/__fixtures__/testBeforeTree.yml';
  const pathToYmlTree2 = '__tests__/__fixtures__/testAfterTree.yml';
  const pathToResultTreePlain = '__tests__/__fixtures__/resultTreePlain';
  const formatPlain = 'plain';

  test.each([
    [pathToJSON1, pathToJSON2, pathToResult],
    [pathToYml1, pathTOYml2, pathToResult],
    [pathToIni1, pathToIni2, pathToResult],
    [pathToJSONTree1, pathToJSONTree2, pathToResultTree],
    [pathToIniTree1, pathToIniTree2, pathToResultTree],
    [pathToYmlTree1, pathToYmlTree2, pathToResultTree],
    [pathToJSONTree1, pathToJSONTree2, pathToResultTreePlain, formatPlain],
  ])(
    '%s and %s',
    (path1, path2, path3, format = 'standart') => {
      const actual = genDiff(path1, path2, format);
      const expected = fs.readFileSync(path.resolve(path.normalize(path3)), 'utf8');
      expect(actual).toBe(expected);
    },
  );
});

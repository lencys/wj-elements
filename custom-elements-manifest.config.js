import { customElementJetBrainsPlugin } from 'custom-element-jet-brains-integration';
import * as path from 'path';
import { parse } from 'comment-parser';
import fs from 'fs';

const packageData = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const { name, description, version, author, homepage, license } = packageData;

function replace(string, terms) {
  terms.forEach(({ from, to }) => {
    string = string?.replace(from, to);
  });

  return string;
}

export default {
  globs: ['packages/**/*.element.js'],
  exclude: ['packages/scss/*', 'packages/css/*'],
  outdir: 'dist',
  dev: false,
  watch: false,
  dependencies: true,
  packagejson: true,
  litelement: false,
  catalyst: false,
  fast: false,
  stencil: false,
  plugins: [
    {
      name: 'package-data',
      packageLinkPhase({ customElementsManifest }) {
        customElementsManifest.package = { name, description, version, author, homepage, license };
      },
    },
    {
      name: 'custom-tags',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText();
            const classDoc = moduleDoc?.declarations?.find((declaration) => declaration.name === className);
            const customTags = ['dependency', 'documentation', 'since', 'status', 'title'];
            let customComments = '/**';
            node.jsDoc?.forEach((jsDoc) => {
              jsDoc?.tags?.forEach((tag) => {
                const tagName = tag.tagName.getText();

                if (customTags.includes(tagName)) {
                  customComments += `\n * @${tagName} ${tag.comment}`;
                }
              });
            });
            // This is what allows us to map JSDOC comments to ReactWrappers.
            // classDoc['jsDoc'] = node.jsDoc?.map(jsDoc => jsDoc.getFullText()).join('\n');

            const parsed = parse(`${customComments}\n */`);
            parsed[0]?.tags?.forEach((t) => {
              switch (t.tag) {
                case 'dependency':
                  if (!Array.isArray(classDoc['dependencies'])) {
                    classDoc['dependencies'] = [];
                  }
                  classDoc['dependencies'].push(t.name);
                  break;
                case 'documentation':
                case 'since':
                case 'status':
                case 'title':
                  classDoc[t.tag] = t.name;
                  break;
                default:
                  if (!Array.isArray(classDoc[t.tag])) {
                    classDoc[t.tag] = [];
                  }

                  classDoc[t.tag].push({
                    name: t.name,
                    description: t.description,
                    type: t.type || undefined,
                  });
              }
            });
          }
        }
      },
    },
    {
      name: 'tag-names',
      analyzePhase({ ts, node, moduleDoc }) {
        switch (node.kind) {
          case ts.SyntaxKind.ClassDeclaration: {
            const className = node.name.getText();
            const classDoc = moduleDoc?.declarations?.find((declaration) => declaration.name === className);

            const importPath = moduleDoc.path;

            // This is kind of a best guess at components. "thing.component.ts"
            if (!importPath.endsWith('.element.js')) {
              return;
            }

            const tagNameWithoutPrefix = path.basename(importPath, '.element.js');
            const tagName = 'wje-' + tagNameWithoutPrefix;

            classDoc.tagNameWithoutPrefix = tagNameWithoutPrefix;
            classDoc.tagName = tagName;
            classDoc.customElement = true;
          }
        }
      },
    },
    customElementJetBrainsPlugin({
      outdir: './dist',
      excludeCss: true,
      packageJson: false,
      referencesTemplate: (name, tag) => {
        return {
          name: 'documentation',
          url: `https://elements.webjet.sk/components/${tag.replace('', '')}`,
        };
      },
    }),
  ],
};

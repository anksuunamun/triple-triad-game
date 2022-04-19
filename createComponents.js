// generate-react-cli - Чтобы не писать самостоятельно.

// Use 'node createComponents ComponentName'

const fs = require('fs');

const componentName = process.argv[2];

const indexJsTemplate = `import ${componentName} from "./${componentName}";

export default ${componentName};
`;

const componentFileTemplate = `const ${componentName} = ({}) => {
  return (
    <>
    </>
  )
};
  
export default ${componentName};
  `;

const moduleCssFileTemplate = `.root {
}`;

new Promise((res, rej) => {
  const path = `./src/components/${componentName}`;
  if (fs.existsSync(path)) {
    rej('Component is already exists!');
  }
  fs.mkdir(path, {recursive: true}, (err) => {
    if (err !== null) {
      rej(err);
    } else {
      res(path);
    }
  });
  return path;
})
  .then(async (dirPath) => {
    await fs.writeFile(`${dirPath}/${componentName}.js`, componentFileTemplate, (err) => {
      if (err !== null) {
        console.log('Something wrong!', err);
      }
    });
    return dirPath;
  })
  .then(async (dirPath) => {
    await fs.writeFile(`${dirPath}/${componentName}.module.scss`, moduleCssFileTemplate, (err) => {
      if (err !== null) {
        console.log('Something wrong!', err);
      }
    });
    return dirPath;
  })
  .then(async (dirPath) => {
    await fs.writeFile(`${dirPath}/index.js`, indexJsTemplate, (err) => {
      if (err !== null) {
        console.log('Something wrong!', err);
      }
    });
    return dirPath;
  })
  .catch((err) => {
    console.log(err);
  });
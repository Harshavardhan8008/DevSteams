Regarding whether to publish package-lock to git or not:
It is highly recommended you commit the generated package lock to source control: this will allow anyone else on your team, your deployments, your CI/continuous integration, and anyone else who runs npm install in your package source to get the exact same dependency tree that you were developing on. Additionally, the diffs from these changes are human-readable and will inform you of any changes npm has made to your node_modules, so you can notice if any transitive dependencies were updated, hoisted, etc.

when using ES module you need to mention type: "module" in package.json instead of commonjs
always give full file name including extension(.js) while importing files

learnt about npm ci

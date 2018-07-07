Client side for affirmation-demo application. Try it yourself [here](https://affirmations.will-metz.com).


####  Install dependencies from project directory:

```
npm install
```


#### For a hot reload dev-server you can use: 

```
npm run dev-server
```
Navigate to http://localhost:21337/



#### Build into bundle.js for dev or production:
```
npm run build:dev
```
    OR
```
npm run build:prod
```
#### Running Unit Tests:
```
npm test
```
#### Deployment Options:

To deploy to the web, insert an AWS S3 bucket resource name in package.json:

```
 "deploy": "aws s3 sync public/ s3://[YOUR_S3_RESOURCE_NAME] --delete"

```
Configure your aws command line instance:

```
aws configure
```
You can now push updates straight to the web with:
```
npm run deploy
```
 
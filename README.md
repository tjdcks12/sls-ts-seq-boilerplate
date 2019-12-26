## Serverless + Typescript + Sequelize 환경 개발



Typescript의 경우 tsconfig.json 에 명시되는 환경설정에 따라,

Sequelize의 경우 버전에 따라 코드상에서 동작하는 방식이나, 문법이 천차만별이기 때문에 이에 유의하여 개발해야 머리아플일이 적어진다.



### serverless framework 를 활용한 프로젝트 init

```
npm install -g serverless
mkdir `project name`
cd `project name`
serverless create --template aws-nodejs
```



#### 기본 directory set

```
`project name`
│  .gitignore
│  handler.js    
└  serverless.yml
```



#### 배포 환경 설정

serverless framework는 내부적으로 aws cli를 이용하여 배포되므로, aws configure 설정을 통해 계정 접속을 가능하도록 구성해야 한다.

```
$ aws configure
AWS Access Key ID[]: # AccessKeyId 입력.
AWS Secret Access Key ID[]: # SecretAccessKeyId 입력.
```



기본적으로 serverless 에서 제공하는 템플릿 중에는 aws-nodejs-typescript와 같은 것들이 존재하지만, 원하는 버전으로 작성하기 위해서는 직접 의존성을 주입하는것이 좋다.



### 서버 구동

서버리스 환경에서 내가 개발한 코드를 직접 실행해보기 위해서는 배포를 진행해야한다.

하지만, 매번 작성한 코드를 원격환경에 배포하는 방식은 비효율적이다. 서버리스 프레임워크는 플러그인 형태로 serverless-offline이라는 로컬환경에서 내가 작성한 코드를 실행해볼 수 있도록 지원하고 있다. 이 외에도 다양한 플러그인이 존재하는데, 이는 필요할때마다 살펴보도록하겠다.



```
npm install serverless-offline
```



### Typescript 적용

서버리스 환경은 aws-lambda를 활용하므로 타입스크립트 환경에서 동작하는 @types/aws-lambda 및

서버리스 프레임워크단에서 타입스크립트를 동작시키기 위한 serverless-plugin-typescript를 설치해준다.

```
npm install @types/aws-lambda
serverless-plugin-typescript
```



### serverless.yml

프로젝트 init 당시 생성되었던 serverless.yml 파일은 다음과같이 작성한다

```
service: sls-ts-seq-boilerplate

plugins:
  - serverless-plugin-typescript
  - serverless-offline

provider:
  name: aws
  runtime: nodejs10.x
  region: ap-northeast-2


functions:
  hello:
    handler: handler.hello

    events:
      - http:
          path: hello
          method: get

```



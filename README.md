# GraphQL을 활용한 동적 스키마 firestore 백엔드

# graphql-gcp-cloud-functions-datastore-realworld-example-app

GraphQL + Serverless GCP Cloud Functions + Datastore implementation of RealWorld Backend https://realworld.io

# ![RealWorld Example App](logo.png)

> ### [graphql-gcp-cloud-functions-datastore-realworld-example-app] codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://github.com/gothinkster/realworld)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with **[graphql-gcp-cloud-functions-datastore-realworld-example-app]** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **[graphql-gcp-cloud-functions-datastore-realworld-example-app]** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

# How it works

> Describe the general architecture of your app here

# Getting started

### you need these things.

> Node, NPM or Yarn

## Install firebase-tools

> npm install -g firebase-tools

## login firebsae

> firebase login

## create firebase project

### 1. create gcp project

![image](https://user-images.githubusercontent.com/33514304/79644975-544d4500-81e7-11ea-807c-4cf5b0d0c68b.png)

> input project-id ( 6 ~ 30 lower characters or '-' )

### 2. set firestore location in firebase consolee

> open browser and go https://console.firebase.google.com/project/['project-id']/database

> create database and select your location.

![image](https://user-images.githubusercontent.com/33514304/79644676-69c16f80-81e5-11ea-96c6-d689569cc5e2.png)

> firebase init

![image](https://user-images.githubusercontent.com/33514304/79644428-e5bab800-81e3-11ea-8c7d-d61b9a7ed1d4.png)

> 1. Choose Firestore and Functions

> 2. Use an existing project

> 3. and just push enter key 5 times!

### 3. just go functions directory and enjoy!

## DEMO

go to

post

https://us-central1-graphql-fd-realword.cloudfunctions.net/api/graphql?query={getOne(type:"posts",id:"1")}
http://localhost:5001/graphql-fd-realword/us-central1/api/graphql?query={getOne(type:"posts",id:"1")}

posts

https://us-central1-graphql-fd-realword.cloudfunctions.net/api/graphql?query={getList(type:"posts")}
http://localhost:5001/graphql-fd-realword/us-central1/api/graphql?query={getList(type:"posts")}

createPost

https://us-central1-graphql-fd-realword.cloudfunctions.net/api/graphql?query={createOne(type:"posts",id:"1",payload:"{\"post_id\":\"5\",\"title\":\"제목5\",\"contents\":\"내용5\"}")}

http://localhost:5001/graphql-fd-realword/us-central1/api/graphql?query={createOne(type:"posts",id:"1",payload:"{\"post_id\":\"5\",\"title\":\"제목5\",\"contents\":\"내용5\"}")}

updatePost

https://us-central1-graphql-fd-realword.cloudfunctions.net/api/graphql?query={updateOne(type:"posts",id:"5",payload:"{\"post_id\":\"5\",\"title\":\"제목55555\",\"contents\":\"내용55555\"}")}

http://localhost:5001/graphql-fd-realword/us-central1/api/graphql?query={updateOne(type:"posts",id:"5",payload:"{\"post_id\":\"5\",\"title\":\"제목55555\",\"contents\":\"내용55555\"}")}

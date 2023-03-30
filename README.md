# 최초 설치
npx react-native@latest init AwesomeProject4
cd AwesomeProject4
npx react-native start

# eslint, prettier 설정
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react
.eslintrc에 추가 아래구문
```
{
  "extends": ["plugin:prettier/recommended"]
}
```

# 네비게이션 설치
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack

# Reqct Native Elements 설치
npm install @rneui/themed @rneui/base
npm install --save react-native-vector-icons

# React DevTools 설치
npm install -g react-devtools
react-devtools # 실행명령어
adb shell input keyevent 82


# 기타 참조
typescript type정의
> https://velog.io/@eunnbi/React-Native-React-Navigation-Typescript
reactnavigation typescript 사용하기 공식문서
> https://reactnavigation.org/docs/typescript
reactnavigation typescript 설명블로그
> https://velog.io/@eunnbi/React-Native-React-Navigation-Typescript
mobx v6 알아보기
> https://kyounghwan01.github.io/blog/React/mobx/mobx6/#mobx-6%E1%84%87%E1%85%A5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%AA-%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5%E1%86%AB-%E1%84%87%E1%85%A5%E1%84%8C%E1%85%A5%E1%86%AB%E1%84%80%E1%85%AA%E1%84%8B%E1%85%B4-%E1%84%8E%E1%85%A1%E1%84%8B%E1%85%B5
navigation 예제따라하기
> https://code-masterjung.tistory.com/126


# UI설치..(예정)

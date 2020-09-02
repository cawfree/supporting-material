# react-native-web

## Preface

  - As we all know, React is an extremely expressive and versatile framework for designing web interfaces.
  - In my understanding, it's because React as a framework is a the product of three things:
    - Excellent design iteration.
    - A genuine challenge to age-old conventions in software development.
    - And a rich open source ecosystem that provides unparalleled levels of tooling (npm/yarn).
  - The paradigm of components, props, and state has proven such a great model for composing frontend, that we find implementations of React in platforms that stretch far beyond the web.
    - The most obvious example of this is React Native, where React basically taught the industry that implementing performant mobile applications with native performance doesn't necessitate low-level programming with traditional, comparably archaic languages such as Java or Objective-C. Recently, React Native has stepped out of the confines of a mobile device to support desktops like `macos` and `windows`. And this is just one language.
    - But there are other implementations which emphasize this characteristic even further. Take `react-ink`, where you can use React to design traditionally complex and low-level Command Line Interfaces with the ease of conventional scripting.
    - This presentation is written in React.
    - And these don't even touch on the react renderer itself, whereby we can repurpose the fundamental mechanics of what it means to express computation using React, to target whatever use case we can possibly imagine.
      - The outputs of our render methods don't necessarily even have to be graphics anymore, and yet still carry the guarantee and performance of the component life cycle.
      - When you really step back and begin to think deeply about it, the level of expression and utility that React enables is honestly _staggering_.

  - Now, React Native is like a generalization of React. It has the exact same utility and broad level of use cases, except it just employs the use of various abstractions that help us decouple from the browser.
    - So, a `<div />` becomes a `<View />`. A `<span />` becomes a `<Text />`. An `<img />` becomes and `<Image />`. That kind of thing. All other language characteristics apply.
    - In this regard, it's only natural that React Native can be turned back in on itself to target a webpage. The Web is just a specific view implementation of the generic API, after all.
    - Imagine the increase in productivity this affords us. React Native is truly what it means to **write once, and run anywhere**.

## Introduction

  - Hi, my name is `@cawfree` and I've been writing and publishing in React for longer than I care to mention.
  - In my time I've lead the development of four production React Native applications, and published over 100 React Native repositories. So, it's fair to say that I'm a little obsessed with this platform.
  - One thing a lot of people don't know about me though, is that I used to be a PhD student, and the title of my thesis was _Novel Approaches to Programming Heterogeneous Computational Systems_.
    - Okay, okay, so I don't understand the title either. But it meant "getting code to run on multiple platforms", so as you can imagine I have a particular sick interest in the the generality to computing that has been achieved by the Facebook team.
  - Presently, I work as an engineer at `getuni.app`, where we use React Native to deliver the very simplest payment experience possible to our users, powered by the decentralized platform for computing, Ethereum.
    - We use a single application codebase for Android, iOS and Web, which puts me in a really fortunate position in discussing how to structure and implement truly multiplatform properly web-first applications in React Native.


I'm going to cover everything. I know that this topic is labelled senior, but I don't like the idea of jumping in without some context. So what I plan to do is cover everything, including the basics, but presume a strong understanding of JavaScript and React.

### Creating a Project
  - There are two ways to start a project that suppots `react-native-web`.
  - You can use `npx create-react-native-web-app`, which creates the standard vanilla react native project containing your standard native Android and iOS binaries, alongside an additional webpack configuration which controls how your application is bundled into a format that's recognizable by a web browser.
  - Alternatively, you can use `npx create-react-native-app` to create an app that's managed by with Expo.
    - Expo is an open-source toolchain built on top of React Native. It abstracts away a lot of the low-level configuration for working with React Native, but obviously at a lack of control.
    - Now, you can `yarn eject` from an Expo project to achieve a finer level of control over your project and expose the underlying configuration, but this isn't really in the spirit of Expo. It's Expo's job to hide complexity and help you focus on productivity, and it is excellent at doing so.

  - So, the standard rules apply:
    - Use `npx create-react-native-web-app` if you wish to achieve complex, custom things with the runtime. Like, you can see yourself having to integrate with custom native libraries.
    - Use `npx create-react-native-app` if you plan to leverage either pure JavaScript libraries or the range of native libraries supported by Expo.
  - For this talk, we'll be using both methods of creation, so we'll be able to compare and contrast between these projects a little later on.

### Hello, world!

  - Let's start with a "Hello, world!" example.
  - A "Hello, world!" for me in React Native is a green box, so let's do it.

> Use snack.expo.io and demonstrate a green box.

Easy. Next, let's try create-react-native-web-app:

look at the graph
style of index.web.js
favour the web component, always test in web first, it's easier (no device shaking etc)
awareness of network specifics
i'm going to take you through it all
You can write react directly. But don't. It turts portability.
You can find this presentation, twitter, uni, gitcoin etc.

# Notes on call with Alina.
  - Global 24hr
  - 20 -> 21st August
  - _One hour_ for your talk.
  - Pitch preferences for timezone.
  - Chance of talking in the middle of the night
  - Two conferences; upcoming Java. Previously node.js.
  - Global online 24 hours. Lots of people.
  - To hear the speeches. Big registration list.
  - Build a community of developers together.
  - International summit. Anyone can join. Add some knowledge. Learn something new, dive deeper.
  - React Summit; touching the topic of React.

Process in General
  - Roughly three/four stages of preparation.
  - Discuss the topics.
  - Document on topics. Abstract about the topic; bullet points.
  - Specifics of the topic. Review process.
  - Detail into program blocks.
  - Feedback. Continue working on presentation.
  - Review for program and rehearsals and that kind of things.
  - Link to program for onine conferences in zoom.
  - Individual login + password.
  - Q&A.
  - Timeline -> Mark the milestones and dates/deadlines. Plan time accordingly.
  - Time commitment; apart from preparation, two or three hours aside from the talk and communicate.
  - Live Chat
  - link to website
  - Super practical talks.
  - Level of depth between talks approaching the talk.
  - Ask the committee which topics need more speakers.

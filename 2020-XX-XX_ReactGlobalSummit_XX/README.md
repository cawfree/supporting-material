# react-native-web

## Preface

  - As we all know, React is an extremely versatile and expressive framework for designing web interfaces.
  - In my understanding, it's because React as a framework is a the product of three key things:
    - Continual, genuine challenges to age-old conventions in software development.
    - Excellent community support and collaboration.
    - And a rich open source ecosystem that provides unparalleled levels of tooling.
  - The paradigm of components, props, and state has proven such a great model for composing frontend, that we now find implementations of React in platforms that stretch far beyond the web.
    - The most prominent example of this is React Native, where React basically taught the industry that implementing performant, scalable, mobile applications with native performance doesn't necessitate low-level programming with traditional, comparably restrictive languages. And recently, React Native has stepped out of the confines of mobile devices to support desktop environments like `macos` and `windows`. And this is all just one language.
    - But there are other implementations of React which emphasize the abstract nature of frontend specification even further. Take `react-ink` for example, where you can use React to design traditionally complex and low-level Command Line Interfaces with the ease of conventional scripting.

> Show an example react-ink project.

    - Even this presentation is written in React.

> Show this presentation's source code.

    - The cool kids call this a `Quine`.

    - And all of this doesn't even touch upon the React renderer itself, whereby we can override and repurpose the fundamental mechanics of what it means to express computation using React, with a view to tackle whatever use case we can possibly imagine.
      - I mean, the outputs of our render methods don't necessarily even have to be graphics anymore. You could write to a file.
      - Yet it still carries the guarantee and performance of the component life cycle.
      - So when you really step back and begin to think deeply about it, the level of expression and utility that React enables is truly amazing.

  - Now, React Native is like a generalization of React. It has the exact same utility and broad level of use cases, except it just employs the use of various abstractions that help us decouple away from the browser.
    - So, a `<div />` becomes a `<View />`. A `<span />` becomes a `<Text />`. An `<img />` becomes and `<Image />`. That kind of thing. All other language characteristics and design patterns still apply.
    - In this regard, it's only natural that React Native can be turned back in on itself to target a webpage. The Web is just a specific view implementation of the generic top-level API, after all.
    - Imagine the increase in productivity and quality this affords us.
      - You stress your code and layouts on multiple environments.
      - The value of your features, and therefore the value of your product, scales proportionally with the number of platforms you have the intention of supporting.
    - React Native is truly what it means to **write once, run anywhere**.

## Introduction

  - Hi, my name is `@cawfree` and I've been writing and publishing in React for longer than I care to mention now.
  - In my time I've lead the development of four production React Native applications, and open sourced over 100 React Native repositories. So, it's fair to say that I'm a little obsessed with this platform.
  - One thing a lot of people don't know about me though, is that I used to be a PhD student, and the title of my thesis was _Novel Approaches to Programming Heterogeneous Computational Systems_.
    - Okay, okay, so I don't understand the title either. But it was about "getting code to run on multiple platforms", so as you can imagine I have a particular sick interest in the the generality to computing that has been achieved by the Facebook team when it comes to React.
  - Presently, I'm one of the founders of `getuni.app`. We use React Native to deliver the very simplest payment experience possible to our users, powered by the decentralized platform for computing and finance, Ethereum.
    - We use a single application codebase for Android, iOS and the Web. Which I hope puts me in a good enough position to discuss with you how to structure and implement truly web-first user experiences in React Native.

And I'm going to try to cover everything I know. I understand that we're on the senior track, but I don't much like the idea of jumping in without some context. So if anything, it's for my own sake that I cover some a little bit of groundwork before we  deep dive.

So first, let's take a look at creating a project.

### Creating a Project
  
  - There are two mainstream ways to start a project that suppots `react-native-web`.
  - First, you can use `npx create-react-native-web-app`, which creates the standard vanilla react native project containing the usual suspects, your native Android and iOS projects and binaries, alongside an additional webpack configuration which controls how your application is bundled into a format that's understandable by a web browser.
  - Alternatively, you can use `npx create-react-native-app` to create a functionally equivalent app, with the key difference that the project infrastructure is mostly managed by Expo.
    - Expo is an open-source toolchain built on top of React Native. It abstracts away a lot of the low-level complexity that we have to work with when using React Native, but obviously at a cost of control. Expo's primary job to hide project complexity and help you focus on delivery, and it is excellent at doing so.
  - Now, you can always `yarn eject` from an Expo managed project to regain access to the fune tuning of your project, but this isn't really in the spirit of Expo.
    - Besides, nowadays, the supporting infrastructure of Expo is so comprehensive that it's uncommon to find yourself needing to do so these days.

  - So in this regard, the standard project creation rules apply:
    - Use `npx create-react-native-web-app` if you wish to achieve complex, custom things with the runtime.
      - A good test for this is whether you can can see yourself having to integrate with custom native libraries somewhere down the line.
    - Alternatively, use `npx create-react-native-app` if you plan to leverage either pure JavaScript libraries or the ever-growing range of native libraries that are already supported by Expo.

  - For this talk, we'll take a look at both methods of creation, so we'll probably be able to do some comparing and contrasting between these configurations a little later on.

### Hello, world!

  - Let's start with a "Hello, world!" example.
  - A "Hello, world!" for me in React Native is a green box, so let's do it.

> Use snack.expo.io and demonstrate a green box.

  - I'm going to be using Snack, which is a full Android, iOS and Web IDE that fits inside your browser. You don't even have to sign up, and you don't even need to setup a device or emulator these days.

> Show the same application on iOS, too.

  - Now, this is a simple example (possibly _too_ simple), but this is the picture of cross-platform that we're really trying to build.
  - Our whole goal in this talk is to continue building on top of this project, and maintain the same level of runtime consistency.
  - This brings to mind our first important point about multiplatform:
    - **Don't trust, verify.**
    - Okay, so this is one of the maxims of Bitcoin. But I think it applies well here. In order to guarantee that the features we introduce are platform-safe, you always need to keep testing across different platforms. You don't just trust that it works. You _verify_.
      - Obviously, this doesn't suit the way that we as developers approach certain problems, right? I mean, normally, we grab a cup of coffee, load up a specific environment and basically live there for six weeks.
      - But this means that you run the risk of including dependencies which _don't_ support the web, or vice-versa, so it's important to keep verifying your assumptions.

### What does it mean to support the web?

  - So, one of the issues is that it's really easy to fall into compatibility problems when managing dependencies.
    - Now, given that the range of quality open source packages served on [**npm**]() and [**yarn**]() is one of React's strongest selling points, it's really important that we properly understand how to determine a project's compatibility across different runtimes.
  - Some React Native projects simply won't work on the web due to an explicit dependence on things like `NativeModules`, which is an export from React Native that exposes linked device binaries from the native bridge to the JS runtime.
    - And the reason this doesn't work on Web is really quite simple; there's simply no bridge to link to!
    - There's no native infrastructure to mediate between on the web. In React Native Web, it's JavaScript or bust.
  - And the opposite is also complementary; there are some libraries which will work perfectly on the web and will just not execute on React Native.
    - This is normally due to a dependence on the assumed presence of Node.js core libraries such as `fs` or `crypto`, which do not exist quite in the same form on React Native.
    - Shout out to `react-native-fs` and `react-native-crypto`, by the way. 
      - Now, it _is_ possible to shim support for these libraries, but this isn't a guarantee. Shimming is akin to pollingfilling, so there's no guarantee of compliance or feature-completeness with whoever depends upon the library. So it can be risky to go down this route.
      - The way we need to approach these problems is that we shouldn't polyfill, we should _ponyfill_, because ponies are pretty.
    - Another problem you can encounter is that some of these libraries might make references to DOM elements like divs (`<div />`) or paragraphs (`<p />`), for example. And React Native Web is just like "yeah man, that's fine, keep it coming". But there's no concept of these kinds of elements in React Native mobile. So you have to look out for this.

> So, let's ground this with an example.
> Let's say I'd like to use a `<WebView />` in an App which supports Android, iOS and the Web.
  - I know it might seem weird to do this, but use cases pop up all of the time. We might be able to touch on some later.

```javascript
import React from "react";
import RNWebView from "react-native-webview";
import RNWWebView from "react-native-web-webview";
import { Platform } from "react-native";

const WebViewImpl = Platform.OS === "web" ? RNWWebView : RNWebView;

/* our component */
export default props => <WebViewImpl {...props} />;
```

  - It's that _easy_. Or is it?
    - Truth is, this won't work. We're only stating that at runtime, we wish to make the decision to switch between the React Native WebView and the Web counterpart.
    - But we still make an explicit dependence on `NativeModules` just be specifying the import, regardless of the platform.

> So how do we fix this?

```
/src
  + index.android.js
  + index.ios.js
  + index.web.js
```

```javascript
export { default } from "react-native-webview";
```

```javascript
export { default } from "react-native-web-webview";
```

```javascript
import WebView from "./WebView"; // looks basically the same
```

It's probably worth noting that **dynamic imports** would make it possible to make this decision at runtime:

```javascript
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";

export default function WebView (props): JSX.Element {
  const [Component, setComponent] = useState(null);

  useEffect(
    () => (async () => (
      setComponent(await import(Platform.OS === "web" ? "react-native-web-webview" : "react-native-webview"))
    )()) && undefined,
    [setComponent],
  );

  return Component ? <Component {...props} /> : Component;
}
```

This approach works too. But it's slightly overkill. It's difficult to interpret what's actually going on, plus you waste a render just trying to decide on what to import, since `useEffect` gets called and then you update the state, triggering a re-render.

### The bundlers have fundamental differences.

> Include a library that hasn't been babelified.

Anybody who has used `react-native-web` in anger has included a library and been hit with this error.
  - You've verified that there's no native binaries, and the project you're using is pure React Native.
    - So what's going on?
  - There's a _fundamental difference_ in how the bundlers work in React Native and React Native Web.
    - Vanilla React Native's bundler is _greedy_. It watches the entire recursive `node_modules` tree, and watches these for transform changes.
      - This is the reason why bundling for React Native usually takes a little longer than you'd expected it to, when compared to the web.
      - As an aside, this is one of the things I love about React Native. If a dependency doesn't work the way you want, you can enter the `node_modules` directly and hack some changes in and have these hot reload in the same way as if you'd changed your App's source files.
      - I should emphasise that this is purely for experimenting with your ideas. After an npm install (`npm i`), your changes will be lost, so it's only really useful for building up a broad idea of what your next Pull Request is potentially going to look like.
  - Back on the web, since we're not watching our `node_modules`, it means our dependencies that haven't been babelified won't be, and will throw a syntax error on execution.

> Open up Webpack.

  - Webpack is configured to do some very interesting things, like convert your Babel ES6 React App into standard JavaScript. But you'll notice, that's just your app.
    - By default, `react-native-web` has configured webpack to apply babel transforms to _only_ your source code, and none of your dependencies.
    - This means that if you include a project that hasn't been compiled with Babel, Webpack isn't going to apply any transformation to that code!
      - This is the error we see.

> Fix Webpack.

```javascript
// TODO: Apply changes to Webpack and restart.
```

  - You'll also notice some interesting things declared in Webpack. For example, you can see this alias which is configured to change any reference to `react-native` so that it resolves to `react-native-web`.
    - This is how `react-native-web` fundamentally works. All of your code is recursively made to point at is what is essentially a fork of `react-native` that has been refactored to target a browser.

## Next, lets take a look at styling.

  - Now, React Native, exports a `StyleSheet` object.
  - You might already wonder why this exists, since we know that we can declare `style` props using just a normal object:

```javascript
import React from "react";
import { View } from "react-native";

export default () => (
  <View
    style={{
      backgroundColor: "green",
      flex: 1,
    }}
  />
);
```

```javascript
import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
  },
});

export default () => (
  <View style={styles.container} />
);
```

  - Before we get into it, you might wonder why we do this. It's a lot more work to achieve the exact same result, right?
    - Well, not quite. Firstly, aside from obviously enhancing readability and separation of concerns, have you ever looked before at what a style key from a `StyleSheet` actually maps to?
      - It's a number.
    - When we use a StyleSheet, React Native performs all of the up-front work in delegating your style configuration to the runtime just once. In this regard, it's far more efficient to declare styles this way.
    - You'll also notice that every time our component is re-rendered, we're effectively allocating a new style object every time, and therefore triggering a re-render for the child.
      - Remember that React only shallowly-compares props, so even though we're looking at what we all recognize to be the exact same object on each re-render, React knows better.
      - A `StyleSheet` child by contrast isn't subject to this issue.

  - So at this point you're probably saying, well yeah, `StyleSheets` are all well and good for simple objects, but what if you have an attribute that's dynamic?

```javascript
import React, { useState } from "react";
import { View } from "react-native";

export default () => {
  const [backgroundColor] = useState(() => "green");
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
      }}
    />
  );
};
```

It's useful to know that we can _combine_ style using arrays, too. So we can take the best from both worlds:

```javascript
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex: { flex: 1 },
});

export default () => {
  const [backgroundColor] = useState(() => "green");
  return (
    <View
      style={[
        styles.flex,
        { backgroundColor },
      ]}
    />
  );
};
```

These are really powerful, and as ever, with great power, comes great responsibility! There's a hidden gotcha when using style arrays.
  - It is _not_ possible to have deeply nested arrays of styles.
  - This means that if you wish to accept a style prop and you're passing that prop into an array of styles, you prevent the caller from specifying an array of styles themselves:

> In the following example, we already "use up" our caller's ability to declare a style as an array:

```javascript
import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  stylesIWantToBeOverrided: { flex: 1 },
  stylesIDontWantToBeOverrided: { borderWidth: 1 },
});

export default function CustomView({ style }) {
  return (
    <View
      style={[
        styles.stylesIWantToBeOverrided,
        style, // can no longer be an array
        styles.stylesIDontWantToBeOverrided,
      ]}
    />
  );
}
```

> Luckily, there's a workaround for this too. We can just make a call to `StyleSheet.flatten` to simplify the parent `style` prop:

```javascript
import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  stylesIWantToBeOverrided: { flex: 1 },
  stylesIDontWantToBeOverrided: { borderWidth: 1 },
});

export default function CustomView({ style }) {
  return (
    <View
      style={[
        styles.stylesIWantToBeOverrided,
        StyleSheet.flatten(style),
        styles.stylesIDontWantToBeOverrided,
      ]}
    />
  );
}
```

  - This way, our parent can specify arrays of styles too.
  - With anyone for a background in traditional React.js, you might notice that the `StyleSheet` looks quite familiar.
    - This is because it's essentially [`aphrodite`]():

```javascript
import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "green",
  },
});

export default () => (
  <div className={css(styles.container)} />
);
```

### Requests

Next, let's take a look at hitting APIs.
  - In React Native and React Native Web, we can use standard off-the-shelf HTTP client libraries such as [`axios`]() to hit an API:

```javascript
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});

const url = "https://jsonplaceholder.typicode.com/todos/1";

export default () => (
  <TouchableOpacity
    style={styles.container}
    onPress={async () => {
      const { data } = await axios({
        url,
        method: "post",
        data: { some: "data" },
      });
      console.log({ data });
    }}
  />
);
```

  - This works pretty much as you'd expect on native platforms.
    - On the Web, however it won't!
    - This is because Cross-Origin-Resource-Sharing (CORS) rules commonly prevent you from being able make such a request.
    - You'll actually come across this error frequently, since it's a safe default for cloud services like Google App Engine or AWS to restrict the presence of CORS as a response header.

> Show CORS Error.

  - Now, there are a couple of workarounds for this.
    - The obvious workaround is to host the same API on your own domain that you serve the app. But for third party providers, this isn't possible without essentially wrapping the API.
    - Alternatively, you can use `https://cors-anywhere.herokuapp.com/` to handle your request for you:

```javascript
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});

const url = "https://jsonplaceholder.typicode.com/todos/1";

export default () => (
  <TouchableOpacity
    style={styles.container}
    onPress={async () => {
      const { data } = await axios({
        // Strips CORS response headers. That's it!
        url: `https://cors-anywhere.herokuapp.com/${url}`, 
        method: "post",
        data: { some: "data" },
      });
      console.log({ data });
    }}
  />
);
```

  - This is great for experimenting. In a production however, it would be more preferable to hit an [express middleware](https://www.github.com/cawfree/express-cors-anywhere) that performs the same job.
    - A lot of us share CORS Anywhere, which means that it's subject to slowdowns due to shared traffic.
    - Additionally, it's not a safe way to fire over sensitive information.

  - So all of this seems good, but remember the first maxim! Don't trust, _verify_. Let's go back to our native example.
    - Now you'll find your request _doesn't_ work. Safe defaults on native have an intuition that your response has been manipulated, and the response is not permitted to propagate any further.
    - So what's the final solution? A hook of course! It's always hooks.

```javascript
import { Platform } from "react-native";

export default funtion useCorsPrefix(): string {
  if (Platform.OS === "web") {
    return "https://cors-anywhere.herokuapp.com/";
  }
  return "";
};

// Example:
// import { default as useCorsPrefix } from "./useCorsPrefix";
// 
// const pfx = useCorsPrefix();
// const url = `${pfx}https://jsonplaceholder.typicode.com/todos/1`;
```

  - Now, this is all a really useful way to you start delivering fast, but you don't want to do this for everything.
  - As we've seen, experimenting with a CORS response is treated as a security error, and rightly so.
  - In production, any third party APIs we intend to target should be encapsulated by our own API.
    - This isn't just a great thing for security, but also it helps decouple your application frontend from specific third-party providers. You can just leave that to the API.

### Persistence?
### Navigation?

### Who is using React Native Web?
  - Uni
  - Twitter
  - Expo
  - Uber
  - The Times

emphasis on the webview

  - Some packages just won't work for you.
  - Anything will.



// how to expose compatibility

Easy. Next, let's try create-react-native-web-app:

because you're targeting phones, you usually don't have worry about responsive. although you can use a separate project, but consider whether that should be a different application
css-in-js aphrodite
things to look for when pulling in dependencies
filewatcher issues for lots of node_modules (universe picture)
how babel can break things - what the bundler is doing - how to override
how animated works
look at the graph
style of index.web.js
favour the web component, always test in web first, it's easier (no device shaking etc)
awareness of network specifics
i'm going to take you through it all
You can write react directly. But don't. It turts portability.
You can find this presentation, twitter, uni, gitcoin etc.

gitcoin, getuni.app, twitter

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

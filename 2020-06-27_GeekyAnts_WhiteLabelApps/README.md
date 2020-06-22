## Sections

### Introduction

Hello, my name is Alex, but I go by `@cawfree` in most of the React Native circles.

I've been developing applications in React Native for around three years, and I've been a native frontend developer for just over a decade now. So I feel a bit old. 

During that time, I've worked on around around three or four production-level React applications from the ground up, and have played a big role in promoting the adoption of React Native at my workplace. I'm also an extremely overactive open source contributor, so some of you listening may have had the fortune of scrolling right past one or two of my repos published to `npm`.

Now, what I'm going to talk about today is one kind of app design that I always seems to keep coming back to. The _White Label App_. I've worked closely on quite a few, and in that time I've seen just about as many instances of design decisions which turn out amazingly well as those which turn out overwhelmingly badly.

So in that light, I'm hoping to achieve two things today:
  - Firstly, I want to share some of the good design patterns for building White Label Apps that I've seen work in the past. The types of patterns I've been able to sleep comfortably on whilst shipping to prod.
  - Secondly, I want to emphasise just how well-suited React Native is as a framework for producing White Label Apps. Specifically, how React Native has fundamentally changed the game for White Label App development.

So before we get into it, what is a _White Label App_?

### What is a White Label App?

  - The way I like to think of a White Label App is that it's your standard native application, just with as much of the styling and configuration information as humanly possible defined by your API.
  - The end result is a single app build that can be "dressed up" and reconfigured in a great many of different ways, way after compilation has completed.
  - Now, White Label Apps are excellent sources of revenue.
    - They have great commercial appeal, since you can provide the customer a _truly bespoke_ look and feel at _little expense_, all done at the configuration level.
    - They lend themselves very well to a pricing-band sales model, where clients can potentially pay more to unlock greater functionality on behalf of their users.
    - In addition, as you deliver more customers, you broaden your possible audience interacting with your core app. This leads to far more comprehensive analytics for the exact same core codebase. Your quality improves.
    - It is an extremely economically efficient approach to app development. Roughly the same amount of effort goes into designing your core business logic, yet the very same app can be resold and repurposed by many different customers with similar use cases, time and time again.

In practice, end users can effectively have multiple instances of the exact same app installed on their phone, just with a different skin, data sources dependent upon the runtime instance. And if you've properly nailed white label design? They are none-the-wiser!

Now, I'd like to take a brief look at just how these kinds of applications have been achieved in the past. (And, if you're really unlucky, this is probably how you're still doing it.)

### The Pre-React Native Approach
  - Historically, White Label Applications work very simplistically.
    - On boot, your app queries style and configuration data using credentials which represent which customer context you're operating in.
    - On success, you're passed some JSON, which the app must manually parse and subsequently assign to the appropriate `View`s at runtime.
  - The app itself would possess very minimal style information, and attempt to treat the API as the style guide as much as possible.
    - So only critical configuration elements are included in the compiled build. This includes things like API keys or the application icon.

But what are the drawbacks?
  - Managing feature parity across different platforms can be complex.
    - Especially when system-dependent parsers or developers make "creative" decisions towards data handling and resolution.
  - Your application complexity scales proportionally with the depth of configuration.
    - Now, seriously specific styling information is necessary to ensure your customer's identity is not lost in translation in your White Label build. This is the only way you can achieve **meaningful customization**. But each individual style key necessitates additional parsing, validation, sanitization, propagation and a re-render before it can take effect, you're met with a very serious engineering challenge to maintain.
  - Lack of standardization. More configuration means lots of different keys and lots of opportunities for subjective naming conventions and nested object struture.
  - Worst of all, your frontend developer needs to negotiate with your database admin on the minutae of UI design. This is understandably a conversation that can only go badly.

### So why do I believe React Native has changed the game?

Well, it has provided a framework which helps resolve every one of these problems.
  
  - React Native, by virtue of being a cross platform technology, greatly diminishes the ambiguity of the presentation and handling of runtime content.
    - This ensures that maintaining cross-platform feature parity has become for the most part, a thing of the past; customizable React Native applications for both Android and iOS begin to respond very similarly with relatively little effort compared to traditional approaches.
    - In addition, primitive props are expressed using JSON; so your components very easily relate to the definition served by your backend.
      - And because we're styling using tried and tested web technology, you can very easily collaborate with third-parties. Pretty much everybody who asks for an app already has a web developer, except for those drunks you meet down the pub who have a million dollar app idea.
    - Similarly, the StyleSheet is extremely comprehensive, so the decisions on the format of returning styling information from your backend _have been made for you_, by smart people who had far longer to think about it. This leaves less subjective wiggle room between you and your database admin.
  - Finally, using `ThemeProvider`s, we have much more consistent rendering.
    - Back in Android or Obj-C, we manually managing re-renders (or forgetting to!), but React efficiently takes care of this for us.
    - This makes it trivial to open up this deep level of customization to any component in the tree.

### Useful Libraries

Now, if you think I'm talking a bit too much about styling, you'd be right. White Label Apps have traditionally always been about styling, because given the primitive collection of tools we had in the past, the kinds where you had to worry about what thread you were on when assigning a button handler, achieving levels of customization deeper than the color scheme posed as both significant technical challenges and implementation risks.

However, the extent to which React Native emancipates White Label App development goes further than the superficial.

To demonstrate this, I'm going to work through a couple of examples which emphasise how React Native can supercharge White Label Application.

#### react-native-uri-box

  - `react-native-uri-box` is a simple component which behaves like the `Image`. So as we expect, you provide it the `{source: {uri: ''}}`, and it will render the image source.
  - However, what makes this component special is that it can be extended to support arbitrary MIME types; meaning that if it detects a video, it'll render a video player. If it detects some JSON, you can render a Lottie Animation, if it's `.xml`, draw an SVG.
    - This way, instead of specifically writing `<Image/>` components (and essentially stealing that decision away from the client), a `UriBox` can be used as a drop-in replacement that permits the client to control the filetype of layout content absolutely anywhere in the app. It just needs to be served via a `uri`.
  - This is an extremely simple way to enable a very meaningful level of customization. In addition, it helps decouple your frontend from the assumption of specific content.

#### react-native-custom-fonts

  - Fonts are a particularly contentious issue in White Label App development. Since these are a compile-time dependency, and every customer normally requires a different custom font, suddenly your applications become a lot less flexible. I'm sure many of you listening are familiar with the difficulty of manging font assets in your projects.
  - Any time a new font needs to be issued, your developer needs to make a rebuild.
  - However, in React Native we can use `react-native-custom-fonts`. This permits you to define font resources via an external `uri`, which can then be cached into your app at runtime without requiring recompilation. This permits the client to arbitrarily change and add new fonts without stealing time from your sprint.

#### propeteer

  - Now after the successful implementation of `react-native-uri-box` and `react-native-custom-fonts`, I started to get a little curious to see how far we could really push React Native's ability to serve API-defined content.
  - So the obvious question is, exactly how much of our React app can we control just from frontend content?
    - Well as it turns out? **All of it.**
  - Propeteer allows us to define the React DOM in terms of pure JSON.

### Summary

### Closing Comments
Follow me on Twitter! [`@cawfree`](https://twitter.com/cawfree).
Follow me on GitHub! [`cawfree`](https://github.com/cawfree).

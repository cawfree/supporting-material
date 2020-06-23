## Sections

### Introduction

Hello, my name is Alex, but I go by `@cawfree` in most of the React Native circles. I'm very thankful to GeekyAnts for providing me with the opportunity to bore you all for the next fifteen minutes.

Now I've been developing applications in React Native for around three years, and I've been a native frontend developer for just over a decade now. So I feel a bit old. 

During that time, I've worked on around around three or four different production-level React applications from the ground up. I'm also an extremely overactive open source contributor, so hopefully some of you listening may have had the fortune of scrolling right past one or two of my published packages on `npm`.

Now, what I'm going to talk about today is one kind of app design that I always seems to keep coming back to. The _White Label App_. I've worked in detail on quite a few, and in that time I've seen just about as many instances of design decisions which turn out amazingly well as those which turn out overwhelmingly badly. So I hope to share some of the good stuff.

I have two main aims for this talk:
  - Firstly, I want to share some insight into the common conventions and challenges you'll come across when building White Label Apps.
  - Secondly, I want to emphasise just how well-suited React Native is as a framework for delivering White Label Apps, and how I've seen it hugely incresae our product quality.

So before we get into it, we probably need build up a little common understanding of a White Label App actually _is_.

### What is a White Label App?

  - The way I like to think of a White Label App is that it's your standard native application, just with as much of the styling and configuration information as humanly possible defined by your API.
  - The application is designed in a way that is modular, configurable, and contains as few compiled decisions in the presentation layer as possible, to maximize configurability.
  - The resulting product is a single app build that can be "dressed up" and reconfigured in a great many of different ways, many numbers of times, long after compilation has completed.

Some of you may wonder, what's the purpose of building an app in this way?

  - Well, White Label Apps are an excellent source of revenue.
    - They have great commercial appeal, since you can rapidly provide the client a _truly bespoke_ look and feel at for little effort, since this is all managed at the configuration level. And because it's off-the-shelf, clients often only need to pay just a fraction of the price they would pay for an equivalent project built from the ground-up.
    - From the implementation perspective, it is also an economically efficient approach to app delivery. Roughly the same amount of effort goes into designing your core business logic, and yet the very same app can be resold and repurposed by many different clients with similar use cases, time and time again.
    - And ss you deliver more solutions, you broaden your possible audience and active user sessions. This leads to far more comprehensive analytics for the exact same core codebase. Your quality improves.
    - Additionally, the operational differences and quirks between clients helps drive future requirements.

In practice, an end user may have multiple instances of what is effectively the exact same core app installed on their phone, just with a different icon. But when you've properly nailed white label configuration, they are none-the-wiser!

Now, I'd like to take a brief look at just how these kinds of applications have been achieved in the past. (And, if you're really unlucky, this is how you're still doing it.)

### Traditional Approach
  - White Label Applications work fairly simply.
    - On boot, your app queries style and configuration data using credentials which represent which client context you're operating in.
    - On success, you're usually passed some JSON, which the app must manually parse and subsequently assign to the appropriate `View`s at runtime. This is all masked behind a splash screen, one of the few compiled assets your app is shipped with.
  - The app itself possesses very minimal style and asset resources.
    - This places emphasis on a configurable API to decide the theme of the app as much as possible.
    - In this regard, like the splash screen, only critical elements are included in the compiled build. This includes things like service credentials, and the application icon.

But what are the drawbacks?
  - Managing feature parity across multiple platforms can be extremely complicated and hard to maintain.
    - This is especially obvious when system-dependent parsers or developers start making "creative" decisions towards data handling and resolution.
  - Your application complexity also scales proportionally with the depth of configuration.
    - Now, seriously specific styling information is necessary to ensure your customer's identity is not lost in translation in your White Label build. This is the only way you can achieve **meaningful customization**. But when each individual style key necessitates additional parsing, validation, sanitization, propagation and a re-render before it can take effect, you're met with a very serious engineering challenge to maintain.
  - As projects increase in complexity, there's increased risk of lack of standardization. More powerful configuration means lots of different style keys and lots of opportunities to make subjective naming conventions and nested object struture, which increases technical debt and reduces cohesion.
  - And most damning of all, your frontend developer needs to negotiate with your database admin about the minutae of UI design. This is understandably a conversation that can only go wrong.

### It's no secret that React Native has solved a lot of these issues.

It has provided a framework for expressing succinct solutions to all of these problems. It's one of the reasons I'm such an advocate of the technology, and so hyped to speak about it all of the time.
  
  - React Native, by virtue of being a cross platform technology, greatly diminishes the ambiguity of the presentation and handling of runtime content between different platforms.
    - This ensures that maintaining cross-platform feature parity has become for the most part, a thing of the past. Customizable React Native applications for both Android and iOS uniformly scale up with relatively little effort compared to traditional approaches. It's now easier than it ever has been to deliver properly consistent, native experiences that remain true to the runtime OS.
    - In addition, because primitive component props are expressed as JSON, your components very easily relate to the definitions served by your backend, since they speak the same language.
    - Further to this, the `StyleSheet` is extremely comprehensive.
      - We can expose a wild number of configurable attributes to the API to achieve very nuanced effects directly via backend-defined config.
      - And with a fully designed spec, there's far less subjective wiggle room between you and your database admin.
      - CSS-in-JS also greatly simplifies collaboration with third-parties. Pretty much everybody who asks for an app already has a web developer with a bunch of styling information ready to go.
  - Finally, by using the React Context as `ThemeProvider`s, we achieve much more consistent rendering experiences.
    - Back in Android or Obj-C, we're manually managing re-renders (or forgetting to!), but React efficiently takes care of all of this for us.
    - This makes it trivial to open up this deep level of server-defined customization to any component in the tree, no matter how deeply nested.

### But it goes deeper than that.

If you think I'm talking a bit too much about styling, well you're right. White Label Apps have traditionally always been about high-level styling, because given the comparably restrictive collection of tools we had to work with, the kinds where you had to worry about what thread you were on when assigning a button handler, achieving levels of customization deeper than the color scheme and basic `String`s content or boolean switches pose significant technical challenges to be reckoned with.

You see, traditional White Label App development is only skin deep. By contrast, the extent to which React Native empowers White Label App development goes far beyond the superficial. This is because the framework can also deliver functionally superior bespoke configuration.

To help demonstrate this, I want to work through a few utilities I've been involved with in creating some seriously customizable applications.

Firstly, there's `react-native-uri-box`.

#### react-native-uri-box

  - A simple way to increase the presentation power of your applications is to add support for rendering different types of content. For example, a customer may wish to render a jpeg or a gif. For this, we can use `react-native-uri-box`.
  - This is a very simple component whose interface is very similar to the `Image` export. So as you'd expect, you give it a `{source: {uri: ''}}`, and it will render your image source.
  - However, what makes this component different is that it can be extended to support arbitrary content by first efficiently querying the `Content-Type` of the supplied `uri` via a HTTP HEAD request, then referencing this against a supplied component `LookUpTable`. Meaning that if it detects a video at the other end of the `uri`, it'll render a video component if one exists in the `LookUpTable`. If it detects some JSON, you can opt to render a Lottie Animation. If it's `.xml`, draw an SVG. 
  - This way, instead of specifically embedding `<Image/>` components or `<Video/>` components in your layout (and essentially stealing that creative decision away from the clients, who as we all know are very vocal about their opinions), a `UriBox` can be used as a drop-in replacement that permits the client to control the filetype of layout content absolutely anywhere in the app. All it needs is the supporting `uri`.
  - This approach of using a graphical "black box" feels like a very natural extension of White Label App development. It helps decouple your frontend from the assumption of specific render content, which is precisely the kind of mindset that you need to embrace.
  - React Native makes this kind of solution possible because of the commonalities components share. They all have agreed-upon interface definitions, the props, and the assurance of predictable life cycle method behaviour; react-fibre. Conventional native development cannot guarantee that level of interoperability, since isolated components capable of self management share vastly different interface declarations to one-another. Simply speaking, it is much harder to swap one MVC for another in practice. Then there are far reaching technological obligations that arise past the initial invocation.

Next, we can pay some attention towards font configuration, which is unfortunately a very important element of any White Label build.

#### react-native-custom-fonts

  - You see, fonts are a particularly contentious issue in White Label App development. They are a compile-time dependency of the user interface. Your applications require recompilation whenever a font source needs to change. This kind of rigitidy is unacceptable for config-defined styling, since an API-defined font reference is **meaningless** without the supporting font file. Invalid references can risk a crash, and any time a new font needs to be issued, your developer needs to make a rebuild at an unavoidable time cost. This steals development time away from feature work, which is all developers should ideally need to focus on when everything is decided in config.
  - These kinds of scenarios are why `react-native-custom-fonts` was built. This library permits you to define font resources using an external CDN `uri`, which can then be cached into your app at runtime without requiring recompilation. This permits the client to arbitrarily change and add new fonts without stealing time from your sprint.

#### propeteer

  - JavaScript is insanely malleable. We can do all kinds of strange things with it.

lightweight frontend
use a solution like redux to wrap up the runtime aware context to generic components

the malleability of javascript

  - Now after the successful implementation of `react-native-uri-box` and `react-native-custom-fonts`, I started to get a little curious to see how far we could really push React Native's ability to serve API-defined content.
  - So the obvious question is, exactly how much of our React app can we control just from frontend content?
    - Well as it turns out? **All of it.**
  - Propeteer allows us to define the React DOM in terms of pure JSON.

### Summary


### Closing Comments
Follow me on Twitter! [`@cawfree`](https://twitter.com/cawfree).
Follow me on GitHub! [`cawfree`](https://github.com/cawfree).

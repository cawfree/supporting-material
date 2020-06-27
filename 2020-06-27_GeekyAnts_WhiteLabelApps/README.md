## Sections

### Introduction

> Next slide!

Hey everyone, my name is Alex and I'm a React Native developer from England. I'm very thankful to to GeekyAnts for two things; firstly, it's a privilege to be invited to you all speak today, and secondly an even bigger thanks for Native Base. It is a truly powerful UI kit that has saved me countless hours.


Now I've been developing applications in React Native for around three years, and I've been a native frontend developer for just over a decade now. So I feel a bit old. 

> Next slide!

Over that time, I've been an obsessively overactive open source contributor, so hopefully some of you listening may have had the fortune of scrolling right past one or two of my published packages on `npm`.

Now, what I'm going to talk about today is one kind of app design that I always seems to keep coming back to.

> Next slide!

The _White Label App_. 

I've worked on a number of these in the past, and in that time I've seen just about as many instances of design decisions which turn out amazingly well as those which turn out overwhelmingly badly. So I hope to share some of the good stuff.

> Next slide!

I have two main aims for this talk:
  - Firstly, I want to share some insight into the common conventions and challenges you'll come across when building White Label Apps.
  - Secondly, I want to emphasise just how well-suited React Native is as a framework for delivering White Label Apps, and how I've seen it hugely incresae our product quality and development pace enormously.

> Next slide!

So before we get into it, we probably need build up a little common understanding of a White Label App actually _is_.

### What is a White Label App?

> Next slide!

  - The way I like to think of a White Label App is that it's your standard native application, just with as much of the styling and configuration information as humanly possible defined by your API.

> Next slide!

  - The application is designed in a way that contains as few compiled, opinionated decisions in the presentation layer as possible.
  - The resulting product is a single app build that can be "dressed up" and reconfigured in a great many of different ways, many numbers of times, long after compilation has completed.

Some of you may wonder, what's the purpose of building an app in this way?

> Next slide!

  - Well, White Label Apps are an excellent source of revenue.

> Next slide!

    - They have great commercial appeal, since you can rapidly provide the client a _truly bespoke_ look and feel at for little effort, since this is all managed at the configuration level. And because it's off-the-shelf, clients often only need to pay just a fraction of the price they would pay for an equivalent project built from the ground-up.

    - From the implementation perspective, it is also an economically efficient approach to app delivery.

> Next slide!

Roughly the same amount of effort goes into designing your core business logic, and yet the very same app can be resold and repurposed by many different clients with similar use cases, time and time again.

> Next slide!

    - And as you deliver more solutions, you broaden your possible audience and active user sessions. This leads to far more comprehensive analytics for the exact same core codebase. Your quality improves.

Now, I'd like to take a brief look at just how these kinds of applications have been achieved in the past. (And, if you're really unlucky, this is how you're still doing it.)

### Traditional Approach

> Next slide!

  - White Label Applications work fairly simply.
    - On boot, your app queries style and configuration data using credentials which represent which client context you're operating in.
    - On success, you're usually passed some JSON, which the app must manually parse and subsequently assign to the appropriate `View`s at runtime. This is all masked behind a splash screen, one of the few compiled assets your app is shipped with.

> Next slide!

  - The app itself possesses very minimal style and asset resources.
    - In this regard, like the splash screen, only critical elements are included in the compiled build. This includes things like service credentials, and the application icon.

> Next slide!

    - This places emphasis on a configurable API to decide the theme of the app as much as possible.

> Next slide!

But what are the drawbacks?

> Next slide!

  - Managing feature parity across multiple platforms can be extremely complicated and hard to maintain.
    - This is especially obvious when system-dependent parsers or developers start making "creative" decisions towards data handling and resolution.

> Next slide!

  - Your application complexity also scales proportionally with the depth of configuration.
    - Now, seriously specific styling information is necessary to ensure your customer's identity is not lost in translation in your White Label build. This is the only way you can achieve **meaningful customization**.

> Next slide!

But when each individual style key necessitates additional parsing, validation, sanitization, propagation and a re-render before it can take effect, you're met with a very serious engineering challenge to maintain.
  - And most damning of all,

> Next slide!

  - your frontend developer needs to negotiate with your database admin about the minutae of UI design. This is understandably a conversation that can only turn out badly.

> Next slide!

### It's no secret that React Native has solved most of these issues.

> Next slide!
  - React Native, by virtue of being a cross platform technology, greatly diminishes the ambiguity of the presentation and handling of runtime content between different platforms.
    - This ensures that maintaining cross-platform feature parity has become for the most part, a thing of the past. Customizable React Native applications for both Android and iOS uniformly scale up with relatively little effort compared to traditional approaches. It's now easier than it ever has been to deliver properly consistent, native experiences that remain true to the runtime OS.
    - In addition, because primitive component props are expressed as JSON, your components very easily relate to the definitions served by the representations on your backend, since they speak the same language.

> Next slide!

    - Further to this, the `StyleSheet` is extremely comprehensive.
      - We can expose a wild number of configurable attributes to the API to achieve very nuanced effects directly via backend-defined config.
      - And with a fully designed spec, there's far less subjective wiggle room between you and your database admin.

> Next slide!

  - Finally, by using the React Context as `ThemeProvider`s, we achieve much more consistent rendering experiences.
    - Back in Android or Obj-C, we're manually managing re-renders, but React efficiently takes care of all of this for us.
    - This makes it trivial to open up this deep level of server-defined customization to any component in the tree, no matter how deeply nested.

> Next slide!

So at this point you're probably thinking, "I get it. It makes styling is easy. So what?"

And if you're thinking that, you're right.

> Next slide!

White Label Apps have traditionally always been about high-level styling, because given the comparably restrictive collection of tools we had to work with, the **kinds where you had to worry about what thread you were on when assigning a button handler**, achieving levels of customization deeper than the color scheme and basic `String`s content or boolean switches pose significant technical challenges to be reckoned with.

> Next slide!

You see, traditional White Label App development is only skin deep. By contrast, the extent to which React Native empowers White Label App development goes far beyond the superficial. This is because the framework can also deliver functionally superior bespoke configuration.

To help demonstrate this,

> Next slide!

I'm going to work through three key principles that I believe are essential to building the next generation of White Label Apps.

> Next slide!

- We often make decisions when it comes to layout content. For example, we assume the placement of an image, but that steals a creative decision from your client.

### Summary

### Closing Comments
Follow me on Twitter! [`@cawfree`](https://twitter.com/cawfree).
Follow me on GitHub! [`cawfree`](https://github.com/cawfree).

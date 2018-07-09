# altjs
High Altitude JavaScript: Because no framework is perfect, and sometimes, no framework is perfect.

## Big Problems
- We needed an iframe pointing at a distant domain with an app communicating via postMessage (ex. piracy prevention)
- Multiple tabs pointing to the same app must update in harmony (ex: two screens two tabs)

## Solutions at a Glance

1. [Container/Component/Repeater](https://github.com/fantasyui-com/application-container) pattern used for UI creation that can contain multiple frameworks and even iframes.
  - Compatible with XML based Application Initialization.
  - Compatible with a GUI Based Builder
  - Compatible with Informative Developer Tools

2. EventEmitter based [GraftTree](https://github.com/fantasyui-com/graft-tree) in multiple branch flavors including ACL.
  - Waterfall Branch that acts as a filter
  - ACL Branch that acts as a filter
  - Mount Branch that injects data

```JavaScript

Data binding example

  const applicationContainer = new ApplicationContainer ( domNode , data);


```

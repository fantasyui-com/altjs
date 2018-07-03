# altjs
Alternative JavaScript within Reason: A fluid lightweight framework for smoothest data patterns in the best of ways.

## How Alternative?

JavaScript treats data as something that does not change much, and if it does it won't have too much of consequence. In reality new data is constantly being pumped into the client from a pool of multiple users, the UI must update and potentially send out more updates, including local ones that will await a packet round trip.

where we have the naive ```cat.name = 'Mr. Fluffy'``` we need ```update(data).then.updateUI()``` the standard ```... = 'Mr. Fluffy'``` is useless, far too low level. Alternative patterns such as Proxy, EventEmitter, ObjectStream go a long way, but leave out HTML, and the way we must do HTML is via ```getElementById()``` it is just how HTML works.

## Why?

JSX like E4X (ECMAScript for XML) is a bad idea. Mixing Flux with GraphQL is a bad idea.
D3's approach to edit, but not create nodes by default is a bad idea, jQuery's .each is a bad idea.

## Structure

Above all, stay with JavaScript. Don't stick odd things into the language; but be mindful that data changes and DOM will stay slow. Let data be the API:

```JavaScript

  const node = document.getElementById('#my-app');
  const data = Emitter;
  const view = View;

  mount({ node, data, view });

```

## Data



## View

DOM Nodes are precious, rather than rendering 100 nodes, render 10 and use ScrollBar, Scrolling or Navigation to update content. In D3 the spec states reuse what is there and if there is more data ignore it, unless .enter() is in effect.

This is a good lesson to grasp. We just extend it to cap rendering at a screenful of nodes much like Ace/CodeMirror.
As the scrollbar scrolls we re-render variable areas of nodes that are tagged via UUID/v4. The lookup is fast, thrashing minimal.

Come Hither. In deed. The price to pay for rendering non-uniform screens is too high, said content is therefore irrelevant and not supported by this framework.

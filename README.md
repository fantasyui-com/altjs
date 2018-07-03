# altjs
Alternative JavaScript within Reason: A fluid lightweight framework for smoothest data patterns in the best of ways.

## Framework Origin

I created [data-command](https://github.com/fantasyui-com/data-command) briefly pondered [JSX](https://reactjs.org/docs/introducing-jsx.html)/[E4X](https://en.wikipedia.org/wiki/ECMAScript_for_XML) and [sweetjs](https://www.sweetjs.org) and decided that the three were not the correct paths forward. I found [h](https://www.npmjs.com/package/h) to be very promising and [d3](https://d3js.org/) to point toward the correct directions.

Data-command revealed that HTML ceases to be readable where we try to connect it with data. JSX/E4X revealed that bringing markup into code is like putting a fat pig on an expensive lipstick.

```HTML

<ul data-command="stream --source Applications/Todo/Today --template todo-item-template --reconciler plain | load " class="list-group list-group-flush"></ul>
<div class="d-none template" id="todo-item-template">
    <li class="list-group-item bg-info text-white">
      <input data-variable="text" type="text" class="form-control todo-text text-white" placeholder="Enter task text">
    </li>
</div>

```

HTML could work, if it was one in parts, like d3 explains .enter() should be done. But at this point we migt as well use our JS.

```JavaScript

const node = document.getElementById('#my-app');
const data = enbuffer(emitter, filter => tagged(packet.tags, ['flarp']));
const view = Reconciler;

mount({ node, data, view });

```

where view looks as follows

```JavaScript


  var source   = document.getElementById("entry-template").innerHTML;
  var template = altjs.compileTemplate(source);

  function render(node, data){
    const html = template(data);
    node.innerHTML = html;
  }

  function(node, data){
    data.on('change', data => render(node, data))
    render(node, data);
  }

```



## How Alternative?

JavaScript treats data as something that does not change much, and if it does it won't have too much of consequence. In reality new data is constantly being pumped into the client from a pool of multiple users, the UI must update and potentially send out more updates, including local ones that will await a packet round trip.

where we have the naive ```cat.name = 'Mr. Fluffy'``` we need ```update(data).then.updateUI()``` the standard ```... = 'Mr. Fluffy'``` is useless, far too low level. Alternative patterns such as Proxy, EventEmitter, ObjectStream go a long way, but leave out HTML, and the way we must do HTML is via ```getElementById()``` it is just how HTML works.

Furthermore, data needs to be bagged (versioned) and tagged (uuid'd) prior to shipment. There will be data conflicts, and these must have a reasonable automatic solution and reliable method for manual resolution.

None of this is "Standard JavaScript".

## Bad Ideas

- JSX like E4X (ECMAScript for XML) is a bad idea.
- Mixing Flux with GraphQL is a bad idea.
- D3's approach to edit, but not create nodes by default is a bad idea.
- jQuery's .each is a bad idea.

## Good Ideas

### Structure

Above all, stay with JavaScript. Don't stick odd things into the language; but be mindful that data changes and DOM will stay slow. Let data be the API:

```JavaScript

  const node = document.getElementById('#my-app');
  const data = Emitter;
  const view = Reconciler;

  mount({ node, data, view });

```

### Data

It is a Buffered Pipe. Server will be streaming objects from a pool of users. The buffer will help to eliminate old versions of data, duplicate data from triggering UI updates. The buffer is a list of objects. If you just need one object than it is a list of one object.

### View

DOM Nodes are precious, rather than rendering 100 nodes, render 10 and use ScrollBar, Scrolling or Navigation to update content. In D3 the spec states reuse what is there and if there is more data ignore it, unless .enter() is in effect.

This is a good lesson to grasp. We just extend it to cap rendering at a screenful of nodes much like Ace/CodeMirror.
As the scrollbar scrolls we re-render variable areas of nodes that are tagged via UUID/v4. The lookup is fast, thrashing minimal.

Come Hither. In deed. The price to pay for rendering non-uniform screens is too high, said content is therefore irrelevant and not supported by this framework.

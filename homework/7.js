let me ="name:mow age:16 height: 160"
undefined
let pilow=/~[030]+/
undefined
pilow
/~[030]+/
me
'name:mow age:16 height: 160'
me.match(pilow)
null
let p=/[0-9]+/g
undefined
me.match(p)
(2) ['16', '160']0: "16"1: "160"length: 2[[Prototype]]: Array(0)
let t=/[a-z]+/g
undefined
me.match(t)
(4) ['name', 'mow', 'age', 'height']
let s=/[0-9a-zA-Z]+/g
undefined
me.match(s)
(6) ['name', 'mow', 'age', '16', 'height', '160']
let r=/:([0-9a-zA-Z])+/
undefined
me.match(r)
(2) [':mow', 'w', index: 4, input: 'name:mow age:16 height: 160', groups: undefined]0: ":mow"1: "w"groups: undefinedindex: 4input: "name:mow age:16 height: 160"length: 2[[Prototype]]: Array(0)
let q =/:\w+/
undefined
me.match(q)
[':mow', index: 4, input: 'name:mow age:16 height: 160', groups: undefined]
let g = /:\d+/
undefined
let g = /:\d+/g
undefined
me.match(g)
[':16']
let me="hi ,mow ,are you ok? ,fine"
undefined
me
'hi ,mow ,are you ok? ,fine'
let p=/\w+@[\w\.]+/g
undefined
me.match(p)
null
me
'hi ,mow ,are you ok? ,fine'
let me ="hi ,mow ,@w@ ,fine"
undefined
me
'hi ,mow ,@w@ ,fine'
me.match(p)
null
let me="hi ,mow ,1020@gmail.com"
undefined
me
'hi ,mow ,1020@gmail.com'
me.match(p)
['1020@gmail.com']
let you=me+' abc 1020@g ...'
undefined
you
'hi ,mow ,1020@gmail.com abc 1020@g ...'
you.match(p)
(2) ['1020@gmail.com', '1020@g']
let p=/\w+@\w+\.[\w\.]+/g
undefined
you.match(p)
['1020@gmail.com']

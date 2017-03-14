const {EditorView} = require("prosemirror-view")
const {EditorState} = require("prosemirror-state")
const {DOMParser} = require("prosemirror-model")
const {baseKeymap} = require("prosemirror-commands")
const {keymap} = require("prosemirror-keymap")

const {schema} = require("./src/schema")
const {cellSelection} = require("./src/cellselection")

let doc = DOMParser.fromSchema(schema).parse(document.querySelector("#content"))
let state = EditorState.create({doc, plugins: [
  keymap(baseKeymap),
  cellSelection
]})

window.view = new EditorView(document.querySelector("#editor"), {state})

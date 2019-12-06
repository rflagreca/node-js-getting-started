import { define } from 'elm-element'
import { Elm } from './Main.elm'

const Main = define(Elm.Main.init)

customElements.define('my-main', Main)

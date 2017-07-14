import * as types from '../mutationTypes'
import demo from './demo'
import login from './login'
import editor from './editor'
import bigimg from './bigImg'
export default {
    ...demo,
    ...login,
    ...editor,
    ...bigimg
}
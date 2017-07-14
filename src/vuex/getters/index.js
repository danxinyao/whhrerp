export default {
    demoList: (state) => state.demo.demoList,
    authToken: (state) => state.login.authToken, // 授权token
    editorStatus: (state) => state.editor.status,
    showBigImg: (state) => state.bigimg.showImg
}
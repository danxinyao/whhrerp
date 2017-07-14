import ajax from '../fetch'

export default{
    /**
        查询评论数据
       @param  {string}  merchantAct [description]
     * @param  {Boolean} auth [description]
     * @return {[Promise]}
     */
    getMessageBoardsData(condition,page,pageSize,auth = true) {
        return ajax({
            url: '/MessageBoard/QueryMessageBoardsData',
            method: 'post',
            auth,
            body: {
                condition: condition,
                pageSize: pageSize,
                page: page
            }
        })
    },
    /**
        获取评论列表
     * @param  {Boolean} auth [description]
     * @return {[Promise]}
     */
    getMessageBoards(page,pageSize,auth = true) {
        return ajax({
            url: '/MessageBoard/QueryMessageBoards',
            method: 'post',
            auth,
            body: {
                pageSize: pageSize,
                page: page
            }
        })
    },
    /**
        审核/屏蔽留言
        @param  {string} messBorId [description]
     * @param  {Boolean} auth [description]
     * @return {[Promise]}
     */
    changeMesBoardFlag(messBorId,status,auth = true) {
        // ?messageBoardID='+messBorId+'&status='+100
        return ajax({
            url: '/MessageBoard/ChangeMessageBoardFlag',
            method: 'post',
            auth,
            body: {
                messageBoardID: messBorId,
                status: status
            }
        })
    }
}
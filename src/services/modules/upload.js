import 'whatwg-fetch'
import store from '../../vuex'
import { rootPath } from '../fetch/config'

export default{
    uploadFile(file) {
        let data = new FormData()
        data.append(file.name, file)
        return new Promise((resolve, reject) => {
            fetch(rootPath + '/Upload/UploadImg', {
                method: 'post',
                headers: {
                    Authorization: 'Bearer ' + store.getters.authToken
                },
                body: data
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.code === -1 || result.code === -2) {
                        throw new Error(result.ErrorMessage)
                    }
                    else if (result.code === 0) {
                        resolve(result.data)
                    }
                })
                .catch((error) => {
                })
        })
    }
}

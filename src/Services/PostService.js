import axios from "../axios";

class PostService{
    createPost = async (data) => {
        const promise = new Promise((resolve, reject)=> {
            axios.post("users", data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise
    }

    fetchPost = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get("users", data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise
    }

}
export default new PostService();
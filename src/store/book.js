import axios from "axios"
export default{
    namespaced:true,
    actions:{
        getbookServer(context){
            axios.get("http://localhost:5188/Book").then(
                response => {
					context.commit('GET_BOOK',response.data)
				},
				error => {
					alert(error.message)
				}
            )
        }
    },
    mutations:{
        GET_BOOK(state,value){
            state.bookTableData=value
            console.log(state)
        }
    
    },
    state:{
        bookTableData:[]
    }
}
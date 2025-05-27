
export default{
    namespaced:true,
    actions:{
    },
    mutations:{
        
        GET_USERINFO(state,value){
            state.userinfodetail=value
            console.log(state)
        }
    
    },
    state:{
         userinfodetail:{
            userName:"",
            userLevel:"",
            passWord:"",
            sex:"",
            age:"",
            birthday:"",
            phoneNo:"",
            address:"",
            borrowNum:"",
        }
    }
}
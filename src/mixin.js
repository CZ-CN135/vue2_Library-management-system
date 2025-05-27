import axios from 'axios';

export const getbook={
    data(){
        return{
            currentBook:{},
            tableData:[]
        }
    },
    methods: {
        flushed:function(){
            axios.get("http://localhost:5188/Book").then((res)=>{
              this.tableData=res.data;
              console.log(res)
              
            })
        },
    },
}

export const getuserInfo={
    data(){
        return{
            userNo:'',
            userName:'',
            passWord:'',
            age:'',
            sex:'',
            phoneNo:'',
            address:'',
            borrowNum:'',
            identity: '',
            birthdayDate:'',
        }
    },
    mounted(){
        console.log("调用")
        this.getBorrowNum()
        var userInfoDetail=JSON.parse(sessionStorage["userInfoDetail"]);
        this.userNo=sessionStorage["userNo"];
        this.userName=userInfoDetail.userName;
        if(userInfoDetail.userLevel==0)
        {
          this.identity="管理员";
        };
        if(userInfoDetail.userLevel==1)
        {
          this.identity="普通用户";
        };
        this.sex=userInfoDetail.sex;
        this.age=userInfoDetail.age;
        var date = new Date(userInfoDetail.birthday);
        var dateString = date.toISOString().split('T')[0];
        this.birthdayDate=dateString;
        this.phoneNo=userInfoDetail.phoneNo;
        this.address=userInfoDetail.address;
    },
    methods:{
        getBorrowNum:function(){
            axios.get(`http://localhost:8080/api/Login/user/${sessionStorage["userNo"]}`)
            .then((res)=>{
                console.log(res.data);
                this.borrowNum=res.data;
            })
        },
       
    }
}
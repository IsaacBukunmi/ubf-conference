import gbs1 from '../../assets/documents/GBS1.pdf'
import gbs2 from '../../assets/documents/GBS2.pdf'

const resources = [
    {
        id: 1,
        img: "https://cdn.pixabay.com/photo/2017/09/03/16/38/priest-2711054__340.jpg",
        text: "Message",
        file_download: [
           
        ]
    },
    {
        id: 2,
        img: "https://cdn.pixabay.com/photo/2016/02/22/17/10/bible-1216063__480.jpg",
        text: "Group Bible Study",
        file_download: [
            {   
                id:1,
                file_link: gbs1,
                file_title: "Group Bible Study 1 - The Suffering and Glory of God's Servant"
            },
            {   
                id:2,
                file_link:gbs2,
                file_title: "Group Bible Study 2 - The Gospel must first be preached to all Nations"
            }
        ]
    },
    {
        id: 3,
        img: "https://cdn.pixabay.com/photo/2016/09/17/21/47/audience-1677028__480.jpg",
        text: "Symposium",
        file_download: [
           
        ]
    },
    {
        id: 4,
        img: "https://images.unsplash.com/photo-1552587154-0291006dedbd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvaXIlMjBtaW5pc3RyYXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
        text: "Choir Ministration",
        file_download: [
           
        ]
    }
]

export default resources
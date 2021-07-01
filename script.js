const app = new Vue(
    {
        el: '#app',

        data:{

            contacts: [
                {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent',
                    active : false
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent',
                    active : false
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received',
                    active : false
                    }
                    ],
                },
            
                {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent',
                    active : false
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    active : false
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent',
                    active : false
                    }
                    ],
                }
            ],

            target : 0,
            text : "",
            search : "",
            now : dayjs()
        },
        
        methods: {
            openChat(contact,index){
                this.target = index;
            },
            newMessage(){
                
                if (this.text) {

                    this.contacts[this.target].messages.push({date: dayjs().format('DD/MM/YYYY HH:mm:ss'), text: this.text, status: 'sent', active : false});
                    
                    setTimeout(function(){
                        app.contacts[app.target].messages.push({date: dayjs().format('DD/MM/YYYY HH:mm:ss'), text:"Ok", status: 'received', active : false})
                    }, 1000);
                }

                this.text = ""
            },
            showOption(message){
                message.active = !message.active
            },
            deleteMsg(message, index){
                this.contacts[this.target].messages.splice(index,1);
                message.active = !message.active
            }
        },

        computed: {
            filteredList() {
                return this.contacts.filter(contact => {
                    return contact.name.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    }
)

console.log();
export const connections = [
    {
        bio: {
            username: 'Captain America',
            mobile_number: '3001',
            email: 'captanAmerica@example.com',
            profile_picture: 'https://picsum.photos/id/237/100/100',
            description: "",
            last_seen: 705679375652 ,          location: 'New York',
            status: 'Available',
        },
        messages: {
            messageList: [
                { id:'1', status: 'seen', from: "captanAmerica@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Hi, how are you?" },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'm good, thanks!" },
                { id:'3', status: 'seen', from: "captanAmerica@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text",message: "What have you been up to lately?" },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Just working on some projects." },
                { id:'5', status: 'seen', from: "captanAmerica@example.comn", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Sounds interesting. Anything exciting?" },
                { id:'6', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Not really, just the usual stuff." },
            ],
            isSeen: false,
            unSeenMsgCnt: 7
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    },
    {
        bio: {
            username: 'Iron Man',
            mobile_number: '3002',
            email: 'ironMan@example.com',
            profile_picture: 'https://picsum.photos/id/238/100/100',
            description: "",
            last_seen: 705679375652,
            location: 'Malibu',
            status: 'Away',
        },
        messages: {
            isSeen: true,
            unSeenMsgCnt: 0,
            messageList: [
                { id:'1', status: 'seen', from: "ironMan@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Hey there!" },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Hello! What's up?" },
                { id:'3', status: 'seen', from: "ironMan@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Just finished some experiments in the lab." },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "That sounds cool! Anything exciting?" },
                { id:'5', status: 'seen', from: "ironMan@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Not really, just the usual superhero stuff." },
                { id:'6', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Well, you are Iron Man after all!" },
            ]
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    },
    {
        bio: {
            username: 'Thor',
            mobile_number: '3003',
            email: 'thor@example.com',
            profile_picture: 'https://picsum.photos/id/239/100/100',
            description: "",
            last_seen: 705679375652,           location: 'Asgard',
            status: 'In a battle',
        },
        messages: {
            isSeen: false,
            unSeenMsgCnt: 5,
            messageList: [
                { id:'1', status: 'seen', from: "thor@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Thor, we need your help!" },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'm on my way! What's the situation?" },
                { id:'3', status: 'seen', from: "thor@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "It's a giant monster attacking the city!" },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'll handle it. Hold tight!" },
                { id:'5', status: 'seen', from: "thor@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Thanks, Thor! You're our hero!" },
            ]
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    },     
    {
        bio: {
            username: 'Thor',
            mobile_number: '3003',
            email: 'thor2@example.com',
            profile_picture: 'https://picsum.photos/id/239/100/100',
            description: "",
            last_seen: 705679375652,          location: 'Asgard',
            status: 'In a battle',
        },
        messages: {
            isSeen: false,
            unSeenMsgCnt: 5,
            messageList: [
                { id:'1', status: 'seen', from: "thor2@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Thor, we need your help!" },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'm on my way! What's the situation?" },
                { id:'3', status: 'seen', from: "thor2@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "It's a giant monster attacking the city!" },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'll handle it. Hold tight!" },
                { id:'5', status: 'seen', from: "thor2@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Thanks, Thor! You're our hero!" },
            ]
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    },
    {
        bio: {
            username: 'Hulk',
            mobile_number: '3004',
            email: 'hulk@example.com',
            profile_picture: 'https://picsum.photos/id/240/100/100',
            description: "",
            last_seen: 705679375652,
            location: 'Gamma Base',
            status: 'Smashing',
        },
        messages: {
            isSeen: false,
            unSeenMsgCnt: 3,
            messageList: [
                { id:'1', status: 'seen', from: "hulk@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Hulk, we need you for a mission!" },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Hulk is always ready! What's the mission?" },
                { id:'3', status: 'seen', from: "hulk@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "There's a group of villains causing chaos." },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Hulk will smash them! I'm on my way!" },
            ]
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    },   
    {
        bio: {
            username: 'Black Widow',
            mobile_number: '3005',
            email: 'blackWidow@example.com',
            profile_picture: 'https://picsum.photos/id/241/100/100',
            description: "",
            last_seen: 705679375652,
            location: 'Unknown',
            status: 'Undercover',
        },
        messages: {
            isSeen: true,
            unSeenMsgCnt: 0,
            messageList: [
                { id:'1', status: 'seen', from: "blackWidow@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Black Widow, we need information on the enemy." },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'm on a mission. I'll get the intel you need." },
                { id:'3', status: 'seen', from: "blackWidow@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Be careful, Natasha. We're counting on you." },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I always am." },
            ]
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    },
    {
        bio: {
            username: 'Hawkeye',
            mobile_number: '3006',
            email: 'hawkeye@example.com',
            profile_picture: 'https://picsum.photos/id/242/100/100',
            description: "",
            last_seen: 705679375652,
            location: 'S.H.I.E.L.D. Headquarters',
            status: 'On a mission',
        },
        messages: {
            isSeen: true,
            unSeenMsgCnt: 0,
            messageList: [
                { id:'1', status: 'seen', from: "hawkeye@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Hawkeye, we need your precision skills." },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'm always ready. What's the target?" },
                { id:'3', status: 'seen', from: "hawkeye@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "There's a threat at the border. We need your strategic mind." },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'll handle it. I've got a quiver full of arrows ready." },
            ]
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    },
    {
        bio: {
            username: 'Doctor Strange',
            mobile_number: '3007',
            email: 'drStrange@example.com',
            profile_picture: 'https://picsum.photos/id/243/100/100',
            description: "",
            last_seen: 705679375652,
            location: 'Sanctum Sanctorum',
            status: 'In meditation',
        },
        messages: {
            isSeen: false,
            unSeenMsgCnt: 6,
            messageList: [
                { id:'1', status: 'seen', from: "drStrange@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Doctor Strange, we need your mystical help." },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I sense a disturbance. I'll investigate." },
                { id:'3', status: 'seen', from: "drStrange@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Be cautious. The threat is magical in nature." },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'm prepared. I'll keep you updated." },
            ]
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    },
    {
        bio: {
            username: 'Black Panther',
            mobile_number: '3008',
            email: 'blackPanther@example.com',
            profile_picture: 'https://picsum.photos/id/244/100/100',
            description: "",
            last_seen: 705679375652,
            location: 'Wakanda',
            status: 'Protecting the kingdom',
        },
        messages: {
            isSeen: false,
            unSeenMsgCnt: 1,
            messageList: [
                { id:'1', status: 'seen', from: "blackPanther@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "T'Challa, we need your leadership." },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'm always ready to defend Wakanda. What's the issue?" },
                { id:'3', status: 'seen', from: "blackPanther@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "There's a threat at the border. We need your strategic mind." },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'll handle it. Wakanda forever!" },
            ]
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    },
    {
        bio: {
            username: 'Spider-Man',
            mobile_number: '3009',
            email: 'spiderMan@example.com',
            profile_picture: 'https://picsum.photos/id/225/100/100',
            description: "",
            last_seen: 705679375652,
            location: 'Queens',
            status: 'Swinging around',
        },
        messages: {
            isSeen: true,
            unSeenMsgCnt: 0,
            messageList: [
                { id:'1', status: 'seen', from: "spiderMan@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Hey, Spidey! We need your help." },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Sure thing! What's the situation?" },
                { id:'3', status: 'seen', from: "spiderMan@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "There's a villain causing chaos downtown." },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "I'll be there in a web-slinging minute!" },
            ]
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    },
    {
        bio: {
            username: 'Loki',
            mobile_number: '3010',
            email: 'loki@example.com',
            profile_picture: 'https://picsum.photos/id/146/100/100',
            description: "",
            last_seen: 705679375652,
            location: 'Asgard (allegedly)',
            status: 'Mischief mode',
        },
        messages: {
            isSeen: false,
            unSeenMsgCnt: 3,
            messageList: [
                { id:'1', status: 'seen', from: "loki@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Loki, what are you up to now?" },
                { id:'2', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Just a little mischief. Nothing to worry about." },
                { id:'3', status: 'seen', from: "loki@example.com", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "We've heard that before. What's your game, Loki?" },
                { id:'4', status: 'seen', from: "user", time: { seen: 705679375652, delivered: 705679375652, sent: 705679375652 }, type: "text", message: "Oh, you'll find out soon enough." },
            ]
        },
        settings: {
            isFavorite: true,
            isBlocked: false,
            isNotificationOn: true
        }
    }
]

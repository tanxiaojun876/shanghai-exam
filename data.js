// ================================
// 网站中的试卷数据
// 以后增加资料，主要修改这个文件
// ================================

const papers = [
    {
        id: 1,
        title: "2026届浦东新区高三数学一模",
        year: "2026",
        district: "浦东新区",
        grade: "高三",
        subject: "数学",
        type: "一模",
        paperUrl: "",
        answerUrl: ""
    },
    {
        id: 2,
        title: "2026届徐汇区高三英语一模",
        year: "2026",
        district: "徐汇区",
        grade: "高三",
        subject: "英语",
        type: "一模",
        paperUrl: "",
        answerUrl: ""
    },
    {
        id: 3,
        title: "2026届黄浦区高三数学二模",
        year: "2026",
        district: "黄浦区",
        grade: "高三",
        subject: "数学",
        type: "二模",
        paperUrl: "",
        answerUrl: ""
    },
    {
        id: 4,
        title: "2025届静安区高三数学二模",
        year: "2025",
        district: "静安区",
        grade: "高三",
        subject: "数学",
        type: "二模",
        paperUrl: "",
        answerUrl: ""
    },
    {
        id: 5,
        title: "2026届闵行区高二物理期末",
        year: "2026",
        district: "闵行区",
        grade: "高二",
        subject: "物理",
        type: "期末",
        paperUrl: "",
        answerUrl: ""
    }
];


// ================================
// 筛选框中的选项
// ================================

const years = [
    "2026",
    "2025",
    "2024"
];

const districts = [
    "黄浦区",
    "徐汇区",
    "长宁区",
    "静安区",
    "普陀区",
    "虹口区",
    "杨浦区",
    "浦东新区",
    "闵行区",
    "宝山区",
    "嘉定区",
    "金山区",
    "松江区",
    "青浦区",
    "奉贤区",
    "崇明区"
];

const grades = [
    "高一",
    "高二",
    "高三"
];

const subjects = [
    "语文",
    "数学",
    "英语",
    "物理",
    "化学",
    "生物",
    "政治",
    "历史",
    "地理"
];

const examTypes = [
    "一模",
    "二模",
    "期中",
    "期末"
];
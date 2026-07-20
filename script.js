// ================================
// 获取网页元素
// ================================

const keywordInput =
    document.getElementById("keywordInput");

const yearFilter =
    document.getElementById("yearFilter");

const districtFilter =
    document.getElementById("districtFilter");

const gradeFilter =
    document.getElementById("gradeFilter");

const subjectFilter =
    document.getElementById("subjectFilter");

const typeFilter =
    document.getElementById("typeFilter");

const resetFiltersButton =
    document.getElementById("resetFilters");

const paperList =
    document.getElementById("paperList");

const noResult =
    document.getElementById("noResult");

const resultCount =
    document.getElementById("resultCount");


// ================================
// 自动生成下拉框
// ================================

function fillSelect(
    selectElement,
    items,
    allOptionText,
    addYearSuffix = false
) {
    selectElement.innerHTML = "";

    const allOption =
        document.createElement("option");

    allOption.value = "all";
    allOption.textContent = allOptionText;

    selectElement.appendChild(allOption);

    items.forEach(function (item) {
        const option =
            document.createElement("option");

        option.value = item;

        if (addYearSuffix) {
            option.textContent = item + "届";
        } else {
            option.textContent = item;
        }

        selectElement.appendChild(option);
    });
}

fillSelect(
    yearFilter,
    years,
    "全部年份",
    true
);

fillSelect(
    districtFilter,
    districts,
    "全部地区"
);

fillSelect(
    gradeFilter,
    grades,
    "全部年级"
);

fillSelect(
    subjectFilter,
    subjects,
    "全部科目"
);

fillSelect(
    typeFilter,
    examTypes,
    "全部类型"
);


// ================================
// 生成试卷卡片
// ================================

function createPaperCard(paper) {
    return `
        <article class="paper-card">
            <h3>${paper.title}</h3>

            <p>年份：${paper.year}届</p>
            <p>地区：${paper.district}</p>
            <p>年级：${paper.grade}</p>
            <p>科目：${paper.subject}</p>
            <p>类型：${paper.type}</p>

            <div class="paper-actions">
                <button
                    class="file-btn"
                    data-paper-id="${paper.id}"
                    data-file-type="paper"
                >
                    查看试卷
                </button>

                <button
                    class="file-btn answer-btn"
                    data-paper-id="${paper.id}"
                    data-file-type="answer"
                >
                    查看答案
                </button>
            </div>
        </article>
    `;
}


// ================================
// 筛选并显示试卷
// ================================

function renderPapers() {
    const keyword =
        keywordInput.value
            .trim()
            .toLowerCase();

    const selectedYear = yearFilter.value;
    const selectedDistrict = districtFilter.value;
    const selectedGrade = gradeFilter.value;
    const selectedSubject = subjectFilter.value;
    const selectedType = typeFilter.value;

    const filteredPapers =
        papers.filter(function (paper) {
            const searchableText = `
                ${paper.title}
                ${paper.year}
                ${paper.district}
                ${paper.grade}
                ${paper.subject}
                ${paper.type}
            `.toLowerCase();

            const keywordMatches =
                keyword === "" ||
                searchableText.includes(keyword);

            const yearMatches =
                selectedYear === "all" ||
                selectedYear === paper.year;

            const districtMatches =
                selectedDistrict === "all" ||
                selectedDistrict === paper.district;

            const gradeMatches =
                selectedGrade === "all" ||
                selectedGrade === paper.grade;

            const subjectMatches =
                selectedSubject === "all" ||
                selectedSubject === paper.subject;

            const typeMatches =
                selectedType === "all" ||
                selectedType === paper.type;

            return (
                keywordMatches &&
                yearMatches &&
                districtMatches &&
                gradeMatches &&
                subjectMatches &&
                typeMatches
            );
        });

    paperList.innerHTML =
        filteredPapers
            .map(createPaperCard)
            .join("");

    resultCount.textContent =
        "共找到 " +
        filteredPapers.length +
        " 份资料";

    if (filteredPapers.length === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
}


// ================================
// 筛选事件
// ================================

keywordInput.addEventListener(
    "input",
    renderPapers
);

yearFilter.addEventListener(
    "change",
    renderPapers
);

districtFilter.addEventListener(
    "change",
    renderPapers
);

gradeFilter.addEventListener(
    "change",
    renderPapers
);

subjectFilter.addEventListener(
    "change",
    renderPapers
);

typeFilter.addEventListener(
    "change",
    renderPapers
);


// ================================
// 清空筛选
// ================================

resetFiltersButton.addEventListener(
    "click",
    function () {
        keywordInput.value = "";

        yearFilter.value = "all";
        districtFilter.value = "all";
        gradeFilter.value = "all";
        subjectFilter.value = "all";
        typeFilter.value = "all";

        renderPapers();
    }
);


// ================================
// 打开试卷或答案
// ================================

paperList.addEventListener(
    "click",
    function (event) {
        const button =
            event.target.closest(".file-btn");

        if (button === null) {
            return;
        }

        const paperId =
            Number(button.dataset.paperId);

        const fileType =
            button.dataset.fileType;

        const selectedPaper =
            papers.find(function (paper) {
                return paper.id === paperId;
            });

        if (!selectedPaper) {
            alert("没有找到这份资料。");
            return;
        }

        let fileUrl = "";
        let fileName = "";

        if (fileType === "paper") {
            fileUrl = selectedPaper.paperUrl;
            fileName = "试卷";
        } else {
            fileUrl = selectedPaper.answerUrl;
            fileName = "答案";
        }

        if (fileUrl === "") {
            alert(
                selectedPaper.title +
                "\n\n" +
                fileName +
                "暂未上传。"
            );
        } else {
            window.open(fileUrl, "_blank");
        }
    }
);


// 页面第一次打开时显示资料
renderPapers();